document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".recipe-filter-form");
    const searchBar = document.getElementById("search-bar");
    const resultsSection = document.getElementById("recipe-results");
    const popupContainer = document.getElementById("recipe-popup");
    const popupDetails = document.getElementById("popup-details");
    const closePopupBtn = document.getElementById("close-popup");

    // Show recipe popup
    const displayRecipePopup = (meal) => {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredientsList.push(`<li>${measure} ${ingredient}</li>`);
            }
        }

        popupDetails.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>Ingredients</h3>
            <ul>${ingredientsList.join("")}</ul>
            <h3>Instructions</h3>
            <p>${meal.strInstructions || "No detailed instructions available."}</p>
        `;

        popupContainer.style.display = "flex";
    };

    // Show error inside popup
    const displayError = (message) => {
        popupDetails.innerHTML = `<p style="color: #d32f2f; font-weight: bold;">${message}</p>`;
        popupContainer.style.display = "flex";
    };

    // Close popup
    closePopupBtn.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    // Handle search
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const mealId = searchBar.value;
        if (mealId) {
            fetchRecipeById(mealId);
        } else {
            displayError("Please select a dish from the dropdown.");
        }
    });

    // Fetch recipe by ID
    async function fetchRecipeById(mealId) {
        resultsSection.innerHTML = "<p>Loading recipe...</p>";

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();

            if (!data.meals) {
                resultsSection.innerHTML = `<p>No recipe found.</p>`;
                return;
            }

            resultsSection.innerHTML = "";
            const meal = data.meals[0];

            // remove old button if exists
            let existingBtn = document.querySelector(".view-recipe-btn");
            if (existingBtn) existingBtn.remove();

            // create new button
            const viewBtn = document.createElement("button");
            viewBtn.type = "button";
            viewBtn.classList.add("view-recipe-btn", "search-btn");
            viewBtn.textContent = "View Recipe";

            // insert after search button
            const searchBtn = document.querySelector(".search-btn");
            searchBtn.insertAdjacentElement("afterend", viewBtn);

            // attach event
            viewBtn.addEventListener("click", () => {
                displayRecipePopup(meal);
            });

        } catch (error) {
            resultsSection.innerHTML = "<p>Error fetching recipe. Please try again.</p>";
            console.error(error);
        }
    }

    // Populate dropdown with dishes A–Z
    async function populateDropdown() {
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");
        for (const letter of letters) {
            try {
               const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
                const data = await response.json();
                if (data.meals) {
                    data.meals.forEach(meal => {
                        const option = document.createElement("option");
                        option.value = meal.idMeal;
                        option.textContent = meal.strMeal;
                        searchBar.appendChild(option);
                    });
                }
            } catch (err) {
                console.error("Error fetching meals:", err);
            }
        }
    }

    populateDropdown();
});
