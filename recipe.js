document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".recipe-filter-form");
    const searchBar = document.getElementById("search-bar");
    const resultsSection = document.getElementById("recipe-results");
    const vegBtn = document.querySelector(".veg-btn");
    const nonVegBtn = document.querySelector(".nonveg-btn");
    const mealTypeSelect = document.getElementById("meal-type");

    const popupContainer = document.getElementById("recipe-popup");
    const popupDetails = document.getElementById("popup-details");
    const closePopupBtn = document.getElementById("close-popup");

    // Array of non-vegetarian keywords to check against
    const nonVegKeywords = ["chicken", "mutton", "lamb", "beef", "pork", "fish", "shrimp", "prawn", "crab", "meat", "egg"];

    // Function to handle the button glow
    const handleButtonClick = (clickedBtn, otherBtn) => {
        const isActive = clickedBtn.classList.toggle("active");
        otherBtn.classList.remove("active");
        clickedBtn.setAttribute("aria-pressed", isActive ? "true" : "false");
        otherBtn.setAttribute("aria-pressed", "false");
    };

    // New validation function
    const validateSearch = (query) => {
        if (vegBtn.classList.contains("active")) {
            const lowerCaseQuery = query.toLowerCase();
            const containsNonVeg = nonVegKeywords.some(keyword => lowerCaseQuery.includes(keyword));
            if (containsNonVeg) {
                displayError("Looks like you're searching for a non-vegetarian dish while the 'Veg' filter is on. Please turn off the filter or try a different dish!");
                return false;
            }
        }
        return true;
    };

    const fetchRecipes = async (query, isVeg = null, isNonVeg = null, mealType = "") => {
        resultsSection.innerHTML = "<p>Loading recipes...</p>";

        try {
            let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

            if (isVeg) {
                apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`;
            } else if (isNonVeg) {
                apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`;
            } else if (mealType) {
                apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`;
            }

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (!data.meals || data.meals.length === 0) {
                if (query) {
                    displayError(`No recipes found for "${query}". Try another dish.`);
                } else {
                    resultsSection.innerHTML = `<p>No recipes found. Try another filter.</p>`;
                }
                return;
            }

            // Clear previous results
            resultsSection.innerHTML = "";

            const detailPromises = data.meals.map(meal => 
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            );
            
            const detailResponses = await Promise.all(detailPromises);
            const detailData = await Promise.all(detailResponses.map(res => res.json()));

            // Display results in a pop-up if a search query was used
            if (query) {
                let popupContent = "";
                detailData.forEach(item => {
                    const meal = item.meals[0];
                    const ingredientsList = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = meal[`strIngredient${i}`];
                        const measure = meal[`strMeasure${i}`];
                        if (ingredient && ingredient.trim() !== "") {
                            ingredientsList.push(`<li>${measure} ${ingredient}</li>`);
                        }
                    }
                    const ingredients = ingredientsList.join("");
                    
                    popupContent += `
                        <div class="recipe-popup-card">
                            <h2>${meal.strMeal}</h2>
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h3>Ingredients</h3>
                            <ul>${ingredients}</ul>
                            <h3>Instructions</h3>
                            <p>${meal.strInstructions || "No detailed instructions available."}</p>
                        </div>
                    `;
                });
                popupDetails.innerHTML = popupContent;
                popupContainer.style.display = "flex";

            // Otherwise, display results in the main section
            } else {
                detailData.forEach(item => {
                    const meal = item.meals[0];
                    const recipeCard = document.createElement("div");
                    recipeCard.classList.add("recipe-card");
                    recipeCard.innerHTML = `
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="recipe-card-content">
                            <h2>${meal.strMeal}</h2>
                            <button class="view-recipe-btn" data-id="${meal.idMeal}">View Recipe</button>
                        </div>
                    `;
                    resultsSection.appendChild(recipeCard);
                    
                    recipeCard.querySelector(".view-recipe-btn").addEventListener("click", () => {
                        displayRecipePopup(meal);
                    });
                });
            }

        } catch (error) {
            resultsSection.innerHTML = "<p>Error fetching recipes. Please try again.</p>";
            console.error(error);
        }
    };

    const displayRecipePopup = (meal) => {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredientsList.push(`<li>${measure} ${ingredient}</li>`);
            }
        }
        const ingredients = ingredientsList.join("");

        popupDetails.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>Ingredients</h3>
            <ul>${ingredients}</ul>
            <h3>Instructions</h3>
            <p>${meal.strInstructions || "No detailed instructions available."}</p>
        `;
        popupContainer.style.display = "flex";
    };

    const displayError = (message) => {
        popupDetails.innerHTML = `<p style="color: #d32f2f; font-weight: bold;">${message}</p>`;
        popupContainer.style.display = "flex";
    };

    closePopupBtn.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const dish = searchBar.value.trim();
        if (dish) {
            if (validateSearch(dish)) {
                fetchRecipes(dish);
            }
        } else {
            displayError("Please enter a dish name.");
        }
    });

    vegBtn.addEventListener("click", () => {
        handleButtonClick(vegBtn, nonVegBtn);
        fetchRecipes("", vegBtn.classList.contains("active"), false, "");
    });

    nonVegBtn.addEventListener("click", () => {
        handleButtonClick(nonVegBtn, vegBtn);
        fetchRecipes("", false, nonVegBtn.classList.contains("active"), "");
    });
});