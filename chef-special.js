// chef-special.js — Detailed recipes for all 16 dishes

const RECIPES = [
  {
    title: "Rice Kheer",
    image: "Images/Kheer.jpeg",
    ingredients: [
      "Basmati rice – 1/2 cup (soaked 30 min)",
      "Full-cream milk – 1 litre",
      "Sugar – 1/2 cup (adjust to taste)",
      "Cardamom powder – 1/4 tsp",
      "Saffron – a pinch, soaked in 1 tbsp warm milk (optional)",
      "Chopped nuts (almonds, cashews, pistachios) – 2–3 tbsp",
      "Raisins – 1 tbsp",
      "Ghee – 1 tsp (optional for aroma)"
    ],
    steps: [
      "Rinse rice until water runs clear; soak 30 minutes and drain.",
      "Bring milk to a gentle boil in a heavy pot. Reduce to medium-low and simmer 8–10 minutes, stirring to avoid scorching.",
      "Add drained rice. Cook on low, stirring and scraping milk solids from the sides every 3–4 minutes until rice is soft and the milk reduces by ~30% (18–22 minutes).",
      "Stir in sugar; cook 4–5 minutes until dissolved and slightly thickened.",
      "Add cardamom, saffron milk (if using), and ghee. Mix in half the nuts and raisins; simmer 2 minutes.",
      "Kheer thickens further as it cools—adjust consistency with warm milk if needed. Serve warm or chilled; garnish with remaining nuts."
    ]
  },
  {
    title: "Paneer Butter Masala",
    image: "Images/Paneer butter.jpg",
    ingredients: [
      "Paneer – 250 g, 1-inch cubes",
      "Butter – 2 tbsp + 1 tsp",
      "Oil – 1 tsp",
      "Onions – 2 medium, sliced",
      "Tomatoes – 4 medium, roughly chopped",
      "Ginger-garlic paste – 1 tbsp",
      "Cashews – 12–15, soaked 10 minutes",
      "Kashmiri red chilli powder – 1.5 tsp (colour, mild heat)",
      "Turmeric – 1/4 tsp",
      "Garam masala – 1/2 tsp",
      "Kasuri methi (crushed) – 1 tsp",
      "Fresh cream – 1/3 cup",
      "Sugar – 1 tsp (balances acidity)",
      "Salt – to taste"
    ],
    steps: [
      "In 1 tsp oil + 1 tsp butter, sauté onions until translucent. Add ginger-garlic paste; cook 1 minute.",
      "Add tomatoes and cashews; cook until tomatoes soften and release oil (8–10 mins). Cool slightly; blend to a very smooth puree (strain for silkier texture).",
      "In a pan, melt 1 tbsp butter. Add puree, chilli powder, turmeric, salt, and 1/2 cup water. Simmer 6–8 mins on low, covered; stir occasionally.",
      "Stir in sugar, garam masala, and kasuri methi. Add cream; simmer 1–2 mins (do not boil hard).",
      "Add paneer; simmer gently 3–4 mins so cubes absorb flavour. Finish with 1 tsp butter. Rest 5 mins before serving."
    ]
  },
  {
    title: "Chocolate Brownie",
    image: "Images/Chocolate brownie.jpg",
    ingredients: [
      "Dark chocolate – 170 g (55–70% cocoa)",
      "Unsalted butter – 115 g",
      "Granulated sugar – 150 g",
      "Brown sugar – 50 g",
      "Eggs – 2 large (room temp)",
      "Vanilla extract – 1 tsp",
      "All-purpose flour – 100 g (3/4 cup, leveled)",
      "Cocoa powder – 25 g (1/4 cup)",
      "Salt – 1/4 tsp",
      "Choc chips or walnuts – 1/2 cup (optional)"
    ],
    steps: [
      "Preheat oven to 180°C. Line an 8-inch square tin with parchment.",
      "Melt chocolate and butter together over a double boiler (or microwave in bursts). Cool 3–4 minutes.",
      "Whisk in both sugars until glossy. Add eggs one at a time, whisking 30–40 sec each for a shiny top. Add vanilla.",
      "Fold in flour, cocoa, and salt just until combined. Stir through chips/nuts if using—do not overmix.",
      "Spread in tin; bake 20–25 minutes until the center is just set (toothpick with moist crumbs). Cool fully before slicing for clean edges."
    ]
  },
  {
    title: "Vegetable Biryani",
    image: "Images/Vegetable biryani.jpg",
    ingredients: [
      "Basmati rice – 2 cups (soaked 30 min)",
      "Mixed vegetables (carrot, beans, peas, cauliflower) – 2 cups",
      "Onions – 3 large, thinly sliced (for birista/fried onions)",
      "Tomato – 1 medium, chopped",
      "Yogurt – 1/2 cup (whisked)",
      "Ginger-garlic paste – 1.5 tbsp",
      "Green chillies – 2 slit",
      "Whole spices: bay leaf 2, cinnamon 1-inch, cloves 4, cardamom 4, star anise 1",
      "Biryani masala – 2 tsp",
      "Turmeric – 1/4 tsp, Red chilli powder – 1/2 tsp",
      "Mint leaves – 1/3 cup, Coriander – 1/3 cup",
      "Ghee – 2 tbsp + oil for frying onions",
      "Saffron – few strands in 2 tbsp warm milk (optional)",
      "Salt – to taste"
    ],
    steps: [
      "Fried onions: Fry sliced onions in hot oil until golden and crisp; drain. (Reserve 1–2 tbsp oil for aroma.)",
      "Parboil rice in salted water with half the whole spices until 70% cooked; drain.",
      "Masala: Heat 2 tbsp ghee + reserved onion oil. Add remaining whole spices; sizzle. Add ginger-garlic paste and chillies; sauté 1 minute.",
      "Add mixed veggies and tomato; cook 3–4 mins. Stir in yogurt, biryani masala, turmeric, chilli powder, half the mint & coriander; cook 3–5 mins until thick.",
      "Layering: In a heavy pot, layer rice and masala in 2–3 layers. Top with fried onions, remaining herbs, saffron milk (if using).",
      "Dum: Seal pot (tight lid or foil). Cook 10 minutes on low flame, then rest 10 minutes off heat. Fluff gently before serving."
    ]
  },
  {
    title: "Gulab Jamun",
    image: "Images/Gulab-Jamun.jpg",
    ingredients: [
      "Khoya (mawa) – 1 cup (crumbled, room temp)",
      "Maida – 2 tbsp",
      "Baking soda – 1/8 tsp",
      "Milk – 1–2 tbsp (to bind)",
      "Ghee or oil – for deep-frying",
      "Sugar – 1.5 cups",
      "Water – 1.5 cups",
      "Cardamom – 4 pods, lightly crushed",
      "Rose water – 1 tsp (optional)",
      "Saffron – few strands (optional)"
    ],
    steps: [
      "Syrup: Boil sugar, water, cardamom for 5–6 minutes to a light sticky syrup (no thread). Add rose water/saffron; keep warm (not boiling).",
      "Dough: Mix khoya, maida, and baking soda gently; add milk little by little to form a smooth, soft dough—do not knead hard.",
      "Shape 20–24 crack-free small balls. Rest 5 minutes, covered.",
      "Fry at medium-low heat (150–160°C). Stir gently for even colour. Aim for deep golden brown in 6–8 minutes.",
      "Soak immediately in warm syrup for at least 1 hour. Serve warm."
    ]
  },
  {
    title: "Rasmalai",
    image: "Images/Rasmalai.jpeg",
    ingredients: [
      "Rasgullas – 12 (store-bought or homemade)",
      "Full-cream milk – 1.2 litres",
      "Sugar – 1/3 cup (to taste)",
      "Cardamom powder – 1/2 tsp",
      "Saffron – pinch, soaked in 1 tbsp warm milk",
      "Chopped pistachios & almonds – 2–3 tbsp"
    ],
    steps: [
      "Rabri: Simmer milk on low, stirring and scraping sides, until reduced by ~35–40% (25–30 mins).",
      "Add sugar, cardamom, and saffron milk; simmer 3 minutes.",
      "Gently squeeze syrup from rasgullas (do not break). Add to rabri; simmer 2 minutes on low.",
      "Chill at least 2 hours. Garnish with nuts before serving."
    ]
  },
  {
    title: "Falooda",
    image: "Images/Falooda.jpeg",
    ingredients: [
      "Falooda sev – 1/2 cup (cooked & cooled)",
      "Basil seeds (sabja) – 1 tbsp (soaked 20–30 min)",
      "Cold milk – 1 cup (sweetened or add 1–2 tsp sugar)",
      "Rose syrup – 2–3 tbsp",
      "Vanilla or kulfi ice cream – 2 scoops",
      "Chopped nuts & tutti frutti – 2 tbsp (optional)",
      "Jelly cubes – 1/2 cup (optional)"
    ],
    steps: [
      "Soak sabja until swollen; drain.",
      "Boil falooda sev per pack; rinse and chill.",
      "In a tall glass: 1 tbsp rose syrup → sev → sabja → milk → remaining syrup on sides.",
      "Top with ice cream, nuts, and jelly. Serve immediately with a long spoon."
    ]
  },
  {
    title: "Dhokla",
    image: "Images/Dhokla.jpeg",
    ingredients: [
      "Besan (gram flour) – 1 cup",
      "Rava (semolina) – 1 tbsp",
      "Yogurt – 1/2 cup",
      "Water – ~1/2 cup (to make pouring batter)",
      "Sugar – 1 tsp, Salt – to taste",
      "Turmeric – 1/4 tsp, Green chilli-ginger paste – 1 tsp",
      "ENO fruit salt – 1 tsp (add last)",
      "Tempering: oil 1 tbsp, mustard seeds 1 tsp, sesame 1 tsp, curry leaves 10–12, slit green chillies 2",
      "Topping: 1/2 cup water + 1 tsp sugar + 1 tsp lemon juice + pinch salt, Coriander & grated coconut"
    ],
    steps: [
      "Batter: Whisk besan, rava, yogurt, water, sugar, salt, turmeric, chilli-ginger paste to a smooth batter. Rest 10 minutes.",
      "Prepare steamer and grease a 7–8 inch tin.",
      "Just before steaming, mix in ENO; whisk 10–12 seconds only. Pour immediately into tin.",
      "Steam 15–18 minutes until a toothpick comes out clean. Cool 5 minutes; slice squares.",
      "Tempering: Heat oil; crackle mustard & sesame, add curry leaves & chillies. Add sweet-salty lemon water; bring to boil and pour over dhokla.",
      "Garnish with coriander and coconut."
    ]
  },
  {
    title: "Malai Kofta",
    image: "Images/malai kofta.jpg",
    ingredients: [
      "Kofta: Paneer 150 g (grated), boiled potato 2 medium (mashed), cornflour 2 tbsp, chopped nuts & raisins 2 tbsp, salt & pepper",
      "Gravy: onions 2 (sliced), tomatoes 3 (chopped), ginger-garlic paste 1 tbsp, cashews 12 (soaked), chilli powder 1 tsp, turmeric 1/4 tsp, coriander powder 1 tsp, garam masala 1/2 tsp, kasuri methi 1 tsp, cream 1/3 cup, sugar 1 tsp, salt",
      "Oil & ghee – as needed"
    ],
    steps: [
      "Kofta: Mix paneer, potato, cornflour, nuts/raisins, seasoning. Shape small balls; chill 10 min. Fry until golden. Keep aside.",
      "Gravy base: Sauté onions in 1 tbsp oil until light brown. Add ginger-garlic; cook 1 min. Add tomatoes & cashews; cook till soft. Cool & blend smooth (strain optional).",
      "Cook gravy: In 1 tbsp ghee, add puree, chilli powder, turmeric, coriander powder, salt; simmer 6–8 min. Add garam masala, kasuri methi, sugar, and 1/2–3/4 cup water to reach a medium-thick consistency.",
      "Finish: Stir in cream; simmer 1–2 min. Add koftas just before serving to keep them soft."
    ]
  },
  {
    title: "Pav Bhaji",
    image: "Images/pav bhaji.jpeg",
    ingredients: [
      "Pav – 8, Butter – 3–4 tbsp (for bhaji & toasting)",
      "Potatoes – 3 medium (boiled & mashed)",
      "Cauliflower – 1 cup florets (boiled & mashed)",
      "Peas – 1/2 cup (boiled)",
      "Capsicum – 1/2 cup, Onion – 2 medium (finely chopped)",
      "Tomatoes – 3 large (finely chopped/pureed)",
      "Ginger-garlic paste – 1 tbsp",
      "Pav bhaji masala – 2–3 tsp, Kashmiri chilli powder – 1 tsp, Turmeric – 1/4 tsp",
      "Salt, Lemon wedges, Chopped coriander"
    ],
    steps: [
      "On a large tawa/pan, melt 2 tbsp butter. Sauté onions until translucent; add ginger-garlic paste and capsicum; cook 2–3 mins.",
      "Add tomatoes; cook down until mushy and glossy. Add spices and salt; sauté 1 minute.",
      "Add mashed potatoes, cauliflower, and peas. Mash on the tawa while cooking; add hot water as needed for a loose, buttery consistency.",
      "Simmer 8–10 minutes, stirring and mashing. Finish with 1 tbsp butter and coriander.",
      "Toast pav with butter on the same tawa. Serve bhaji with buttered pav, onions, and lemon."
    ]
  },
  {
    title: "Rajma Chawal",
    image: "Images/rajma chawal.webp",
    ingredients: [
      "Kashmiri rajma – 1 cup (soaked overnight)",
      "Onions – 2 medium (finely chopped)",
      "Tomatoes – 3 medium (pureed)",
      "Ginger-garlic paste – 1 tbsp",
      "Whole spices: bay leaf 1, cinnamon 1/2 inch, cloves 3",
      "Chilli powder – 1 tsp, Turmeric – 1/4 tsp, Coriander powder – 1.5 tsp, Garam masala – 1/2 tsp",
      "Ghee or oil – 2 tbsp, Salt – to taste",
      "Cooked basmati rice – to serve"
    ],
    steps: [
      "Pressure cook soaked rajma with salt and 3 cups water until tender (20–25 mins after first whistle on medium). Keep the cooking liquid.",
      "In ghee, sauté whole spices, then onions to golden. Add ginger-garlic; cook 1 min.",
      "Add tomato puree and powdered spices; cook until oil separates (8–10 mins).",
      "Add cooked rajma with some cooking liquid. Simmer 15–20 mins on low to thicken and meld flavours.",
      "Finish with garam masala and a knob of butter (optional). Rest 5 minutes. Serve with steamed rice."
    ]
  },
  {
    title: "Idli Sambar",
    image: "Images/idli sambhar.jpg",
    ingredients: [
      "Ready idli batter – 2 cups",
      "Toor dal – 3/4 cup",
      "Mixed veggies (drumstick, carrot, pumpkin) – 1.5 cups",
      "Onion – 1, Tomato – 1 (chopped)",
      "Tamarind pulp – 1 tbsp",
      "Sambar powder – 1.5–2 tsp",
      "Tempering: oil 1.5 tbsp, mustard 1 tsp, cumin 1/2 tsp, methi seeds 1/4 tsp, curry leaves 10, dried red chilles 2, asafoetida pinch",
      "Coriander leaves, Salt"
    ],
    steps: [
      "Steam idlis 10–12 minutes; rest 2 minutes before unmoulding.",
      "Cook toor dal in a pressure cooker until soft; whisk smooth.",
      "In a pot, boil veggies with onion and tomato until tender. Add dal, tamarind, sambar powder, salt, and enough water for desired thickness. Simmer 8–10 minutes.",
      "Tempering: Heat oil; crackle mustard, cumin, methi; add red chillies, curry leaves, asafoetida. Pour over sambar. Garnish with coriander and serve with idli."
    ]
  },
  {
    title: "Chole Bhature",
    image: "Images/chole bhature.jpeg",
    ingredients: [
      "Chickpeas – 1.5 cups (soaked overnight)",
      "Onions – 2 (finely chopped), Tomatoes – 3 (pureed)",
      "Ginger-garlic paste – 1 tbsp",
      "Whole spices: bay leaf 1, black cardamom 1, cloves 3",
      "Chole masala – 2 tsp, Anardana or amchur – 1 tsp, Chilli powder – 1 tsp, Turmeric – 1/4 tsp",
      "Tea bag – 1 (optional for colour)",
      "Oil – 3 tbsp, Salt",
      "Bhature: maida 2 cups, rava 2 tbsp, yogurt 1/2 cup, sugar 1 tsp, salt 3/4 tsp, baking powder 1/2 tsp, water as needed, oil to fry"
    ],
    steps: [
      "Pressure cook soaked chickpeas with salt, tea bag, and enough water until soft; discard tea bag.",
      "Masala: Heat oil; sauté whole spices, then onions to golden. Add ginger-garlic; cook 1 min. Add tomato puree and powdered spices; cook until oil releases.",
      "Add chickpeas with some cooking liquid. Simmer 15–20 mins to thicken. Adjust sourness with anardana/amchur.",
      "Bhature dough: Mix dry ingredients, add yogurt and water to form a soft dough. Rest 1–2 hours.",
      "Roll medium discs; deep-fry in hot oil, lightly pressing to puff. Serve hot with chole, onion, and pickle."
    ]
  },
  {
    title: "Aloo Paratha",
    image: "Images/Aloo paratha.cms",
    ingredients: [
      "Dough: whole wheat flour 2 cups, salt 1/2 tsp, oil 1 tsp, water as needed",
      "Filling: boiled potatoes 3 medium (grated), green chilli 1–2 (finely chopped), ginger 1/2 tsp (grated), coriander 2 tbsp, amchur 1/2 tsp, garam masala 1/2 tsp, chilli powder 1/2 tsp, salt",
      "Ghee or oil – for roasting",
      "Butter & curd – to serve"
    ],
    steps: [
      "Dough: Mix flour, salt, oil; add water to make a soft, smooth dough. Rest 20 minutes.",
      "Filling: Combine all filling ingredients; taste and adjust salt/sourness.",
      "Divide dough and filling into equal balls. Roll dough to ~4 inches, place filling, pleat and seal.",
      "Gently roll to 7–8 inches using light flour dusting.",
      "Roast on a hot tawa with ghee on both sides until golden spots appear. Serve with butter and curd."
    ]
  },
  {
    title: "Matar Paneer",
    image: "Images/matar paneer.webp",
    ingredients: [
      "Paneer – 250 g (cubes)",
      "Green peas – 1 cup (fresh/frozen)",
      "Onions – 2 (finely chopped)",
      "Tomatoes – 3 (pureed)",
      "Ginger-garlic paste – 1 tbsp",
      "Chilli powder – 1 tsp, Turmeric – 1/4 tsp, Coriander powder – 1.5 tsp",
      "Garam masala – 1/2 tsp, Kasuri methi – 1 tsp (crushed)",
      "Cream or milk – 1/4 cup",
      "Oil/ghee – 2 tbsp, Salt"
    ],
    steps: [
      "Heat oil; sauté onions to light golden. Add ginger-garlic; cook 1 minute.",
      "Add tomato puree and spices (except garam masala/kasuri methi). Cook until thick and oil separates.",
      "Add peas with 1/2–3/4 cup hot water; simmer until tender (6–8 mins).",
      "Add paneer, cream, garam masala, and kasuri methi. Simmer 2–3 mins; adjust salt and consistency."
    ]
  },
  {
    title: "Kofta Curry",
    image: "Images/Kofta curry.jpg",
    ingredients: [
      "Kofta: boiled potatoes 2, grated paneer 100 g, grated carrot 1/4 cup, green chilli 1, cornflour 2–3 tbsp, salt & pepper",
      "Gravy: onion 2 (sliced), tomato 3 (pureed), ginger-garlic 1 tbsp, yoghurt 1/4 cup (whisked), chilli powder 1 tsp, turmeric 1/4 tsp, coriander powder 1 tsp, cumin powder 1/2 tsp, garam masala 1/2 tsp, kasuri methi 1 tsp",
      "Oil & ghee – as needed, Salt"
    ],
    steps: [
      "Kofta: Mix ingredients; form balls; chill 10 minutes. Deep-fry/air-fry until golden; keep aside.",
      "Gravy: Sauté onions in 1 tbsp oil to golden. Add ginger-garlic; cook 1 min. Add tomato puree and spices (except garam masala/kasuri methi); cook until oil releases.",
      "Reduce heat; whisk in yogurt gradually to avoid splitting. Add 1 cup hot water; simmer 5–7 mins.",
      "Add garam masala and kasuri methi. Add koftas just before serving; simmer 2 minutes to absorb flavours."
    ]
  }
];

// ---------- Modal Wiring for Chef Special Page ----------
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalRecipe = document.getElementById("modalRecipe");

const recipeCards = document.querySelectorAll(".chef-card");

recipeCards.forEach(card => {
  card.addEventListener("click", () => {
    const recipeId = card.getAttribute("data-id");
    const recipe = RECIPES[recipeId];

    if (recipe) {
      modalTitle.textContent = recipe.title;
      modalImage.src = recipe.image;
      modalImage.alt = recipe.title;

      modalIngredients.innerHTML = "";
      recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalIngredients.appendChild(li);
      });

      modalRecipe.innerHTML = "";
      recipe.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        modalRecipe.appendChild(li);
      });

      // Show the modal
      modal.style.display = "block";
    }
  });
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});