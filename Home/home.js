// ---------- Detailed Recipes Data ----------
const RECIPES = [
  {
    title: "Chocolate Truffle Cake",
    image: "Images/chocolate truffle cake.jpg",
    ingredients: [
      "2 cups All-purpose flour",
      "1 cup Cocoa powder",
      "1 ½ tsp Baking powder",
      "½ tsp Baking soda",
      "1 ½ cup Sugar",
      "3 Eggs (or yogurt for eggless)",
      "1 cup Milk",
      "½ cup Butter",
      "200g Dark Chocolate",
      "½ cup Fresh Cream"
    ],
    steps: [
      "Preheat oven to 180°C and grease tin.",
      "Mix flour, cocoa, baking powder, and baking soda in a bowl.",
      "Beat sugar, eggs (or yogurt), milk, and butter separately until creamy.",
      "Combine wet and dry ingredients gently to avoid lumps.",
      "Pour batter into prepared tin and bake 30-35 minutes.",
      "Melt dark chocolate with fresh cream to make frosting.",
      "Cool the cake and cover with chocolate frosting."
    ]
  },
  {
    title: "Samosa",
    image: "Images/samosa.webp",
    ingredients: [
      "2 cups All-purpose flour",
      "2 tbsp Oil",
      "½ tsp Carom seeds",
      "Salt",
      "3 Boiled potatoes",
      "½ cup Green peas",
      "1 tsp Ginger-garlic paste",
      "1 tsp Garam masala",
      "1 tsp Red chili powder",
      "Oil for frying"
    ],
    steps: [
      "Prepare dough using flour, oil, ajwain, and water; rest 15 min.",
      "Prepare filling: cook boiled potatoes, peas, ginger-garlic, and spices.",
      "Divide dough into balls; roll and shape into cones.",
      "Stuff cones with filling and seal edges.",
      "Deep fry in hot oil till golden brown.",
      "Serve with mint chutney or tamarind sauce."
    ]
  },
  {
    title: "Red Sauce Pasta",
    image: "Images/red sauce pasta.webp",
    ingredients: [
      "2 cups Penne Pasta",
      "2 Tomatoes (pureed)",
      "1 Onion chopped",
      "1 tbsp Garlic chopped",
      "2 tbsp Olive oil",
      "1 tbsp Tomato ketchup",
      "1 tsp Chili flakes",
      "1 tsp Oregano",
      "Grated Cheese",
      "Salt"
    ],
    steps: [
      "Boil pasta al dente, drain and set aside.",
      "Sauté onion and garlic in olive oil until golden.",
      "Add tomato puree, ketchup, chili flakes, oregano, and salt; simmer 5 min.",
      "Mix cooked pasta into sauce evenly.",
      "Garnish with grated cheese and serve hot."
    ]
  },
  {
    title: "Gulab Jamun",
    image: "Images/Gulab-Jamun.jpg",
    ingredients: [
      "1 cup Khoya (mawa)",
      "3 tbsp Maida",
      "1/4 tsp Baking powder",
      "Oil for frying",
      "1 cup Sugar",
      "1 cup Water",
      "2-3 Cardamom pods"
    ],
    steps: [
      "Mix khoya, maida, and baking powder into smooth dough.",
      "Shape into small round balls without cracks.",
      "Fry on low flame till golden brown.",
      "Boil sugar with water and cardamom to make syrup.",
      "Dip fried balls in warm syrup and soak 2 hours.",
      "Serve garnished with nuts if desired."
    ]
  },
  {
    title: "Masala Dosa",
    image: "Images/Dosa.jpg",
    ingredients: [
      "2 cups Dosa batter",
      "2 Boiled potatoes",
      "1 Onion sliced",
      "1 Green chili chopped",
      "1 tsp Mustard seeds",
      "Curry leaves",
      "Salt",
      "Oil"
    ],
    steps: [
      "Heat oil, crackle mustard seeds and curry leaves.",
      "Add onions and sauté until translucent.",
      "Mash boiled potatoes with salt and mix with onions.",
      "Spread dosa batter on hot tawa thinly.",
      "Place filling, fold dosa, and roast until crisp.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    title: "Cheesy Pizza",
    image: "Images/Pizza.jpg",
    ingredients: [
      "1 Pizza base",
      "½ cup Pizza sauce",
      "1 cup Mozzarella cheese",
      "Capsicum, Onion, Corn (toppings)",
      "1 tsp Oregano",
      "1 tsp Chili flakes"
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Spread pizza sauce over base.",
      "Add toppings and cheese evenly.",
      "Bake for 12-15 minutes until cheese melts and crust turns golden.",
      "Sprinkle oregano & chili flakes before serving.",
      "Slice and serve hot."
    ]
  },
  {
    title: "Pancake",
    image: "Images/Pancake.jpg",
    ingredients: [
      "1 cup All-purpose flour",
      "2 tbsp Sugar",
      "1 tsp Baking powder",
      "½ tsp Baking soda",
      "1 cup Milk",
      "1 Egg (or banana for eggless)",
      "2 tbsp Butter (melted)",
      "Maple syrup / Honey"
    ],
    steps: [
      "Mix flour, sugar, baking powder, and baking soda in a bowl.",
      "Whisk milk, egg, and melted butter in another bowl.",
      "Combine wet and dry ingredients until smooth batter forms.",
      "Heat a lightly greased pan over medium heat.",
      "Pour batter and cook until bubbles form; flip and cook 1-2 minutes.",
      "Serve hot with maple syrup or honey."
    ]
  },
  {
    title: "Pastry",
    image: "Images/Pastry.jpg",
    ingredients: [
      "1 Puff pastry sheet",
      "1 Egg wash (or milk)",
      "1 cup Whipped cream",
      "1 cup Fresh fruits / chocolate"
    ],
    steps: [
      "Roll puff pastry sheet and cut into squares or desired shapes.",
      "Brush with egg wash and bake at 200°C till golden brown.",
      "Cool completely, then layer with whipped cream and fruits/chocolate.",
      "Chill for 30 minutes before serving."
    ]
  },
  {
    title: "Chole Bhature",
    image: "Images/chole bhature.jpeg",
    ingredients: [
      "2 cups All-purpose flour (maida)",
      "1/2 cup Yogurt",
      "1 tsp Baking powder",
      "1/2 tsp Baking soda",
      "Salt",
      "Oil (for frying)",
      "2 cups Chickpeas (chole), soaked overnight",
      "2 Onions, chopped",
      "2 Tomatoes, pureed",
      "2 tsp Ginger-garlic paste",
      "2-3 Green chilies",
      "2 tsp Chole masala",
      "1 tsp Cumin seeds",
      "1 tsp Red chili powder",
      "1/2 tsp Turmeric powder",
      "1 tsp Garam masala",
      "Fresh coriander"
    ],
    steps: [
      "For Bhature: Mix flour, baking powder, baking soda, salt, and yogurt. Knead into a soft dough, cover, and rest for 2 hours.",
      "Divide dough, roll into discs, and deep fry in hot oil until puffed and golden.",
      "For Chole: Pressure cook soaked chickpeas until soft.",
      "Heat oil, add cumin seeds, then onions. Sauté till golden.",
      "Add ginger-garlic paste, green chilies, and cook for a minute.",
      "Add tomato puree, chole masala, red chili, turmeric, and salt. Cook till oil separates.",
      "Add boiled chickpeas, some water, and simmer for 15-20 minutes.",
      "Finish with garam masala and fresh coriander.",
      "Serve hot chole with bhature, sliced onions, and lemon."
    ]
  }
];

// ---------- Create Modal ----------
const modal = document.createElement("div");
modal.id = "recipeModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.6)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";
modal.style.overflowY = "auto";

modal.innerHTML = `
  <div style="
      background:linear-gradient(135deg, #fffbe7 0%, #ffe5d9 60%, #fff 100%);
      padding:28px 20px 20px 20px; 
      border-radius:18px; 
      width:50%; 
      max-width:480px; 
      max-height:80vh; 
      margin:50px auto; 
      position:relative; 
      box-shadow:0 10px 32px rgba(230,126,34,0.18), 0 2px 8px rgba(0,0,0,0.13); 
      overflow-y:auto;
      border: 2.5px solid #ffe5d9;
  ">
    <span id="closeModal" style="
      position:absolute; 
      top:14px; 
      right:22px; 
      font-size:2rem; 
      cursor:pointer;
      color:#e67e22;
      font-weight:bold;
      transition: color 0.2s;
      z-index:2;
    ">&times;</span>
    <h2 id="modalTitle" style="
      font-size:2.2rem;
      font-family:'Montserrat',sans-serif;
      font-weight:900;
      background: linear-gradient(90deg, #ffb347 0%, #e67e22 60%, #ff6f61 100%);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      text-align: center;
      letter-spacing: 2.5px;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 12px rgba(230,126,34,0.13);
      position: relative;
      padding-bottom: 0.5rem;
      line-height: 1.1;
    "></h2>
    <div style="
      width:60px;
      height:5px;
      border-radius:3px;
      background:linear-gradient(90deg, #e67e22 0%, #ffb347 100%);
      opacity:0.92;
      margin:0 auto 16px auto;
      box-shadow:0 2px 8px #ffe5d9;
    "></div>
    <img id="modalImage" src="" style="
      width:100%; 
      border-radius:12px; 
      margin-bottom:14px;
      box-shadow:0 4px 18px rgba(230,126,34,0.10);
      object-fit:cover;
      max-height:180px;
      background:#fafafa;
      display:block;
    ">
    <h3 style="
      margin-top:10px;
      color:#e67e22;
      font-size:1.18rem;
      font-weight:700;
      letter-spacing:1px;
      text-align:left;
      margin-bottom:0.5rem;
    ">Ingredients</h3>
    <ul id="modalIngredients" style="
      padding-left:20px; 
      line-height:1.7;
      color:#444;
      font-size:1.04rem;
      margin-bottom:1.2rem;
    "></ul>
    <h3 style="
      margin-top:10px;
      color:#e67e22;
      font-size:1.18rem;
      font-weight:700;
      letter-spacing:1px;
      text-align:left;
      margin-bottom:0.5rem;
    ">Recipe Steps</h3>
    <ol id="modalSteps" style="
      padding-left:20px; 
      line-height:1.7;
      color:#444;
      font-size:1.04rem;
      margin-bottom:0.5rem;
    "></ol>
  </div>
`;

document.body.appendChild(modal);

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const closeModal = document.getElementById("closeModal");

function openRecipe(recipe) {
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
  modal.style.display = "flex";
  modal.scrollTop = 0; // start from top
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

// ---------- Hero Section ----------
const heroImg = document.getElementById("hero-img");
let heroDishes = [
  RECIPES[RECIPES.length - 1], // Chole Bhature (last added)
  ...RECIPES.slice(3, RECIPES.length - 1) // rest as before, skipping Chole Bhature if already present
];
let heroIndex = 0;

heroImg.addEventListener("click", () => openRecipe(heroDishes[heroIndex]));

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroDishes.length;
  heroImg.src = heroDishes[heroIndex].image;
}, 3000);

// ---------- Chef's Picks ----------
// Ensure each .card has the correct data-index attribute in your HTML
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.cursor = "pointer";
  card.tabIndex = 0;
  card.addEventListener("click", () => {
    const idx = card.getAttribute("data-index");
    if (idx !== null) {
      openRecipe(RECIPES[parseInt(idx)]);
    }
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const idx = card.getAttribute("data-index");
      if (idx !== null) {
        openRecipe(RECIPES[parseInt(idx)]);
      }
    }
  });

  // Make ingredients and recipe steps clickable inside each card
  card.querySelectorAll('li, ol, ul').forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent double event
      const idx = card.getAttribute("data-index");
      if (idx !== null) {
        openRecipe(RECIPES[parseInt(idx)]);
      }
    });
  });
});
