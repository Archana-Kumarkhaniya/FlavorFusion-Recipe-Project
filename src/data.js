const recipes = [
{
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Italian",
    image: "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g parmesan cheese",
      "2 cloves garlic",
      "1 tbsp olive oil",
      "Salt to taste",
      "Black pepper to taste"
    ],
    type: "non-veg",
    timing: "25 mins",
    Starreview: "4.6",
    toppings: [
      "Extra parmesan",
      "Crushed black pepper",
      "Fresh parsley"
    ],
    instructions: "Step 1: Bring a pot of salted water to a boil and cook spaghetti until al dente. Step 2: In a pan, heat olive oil and fry pancetta with minced garlic until golden. Step 3: In a bowl, whisk eggs and grated parmesan until creamy. Step 4: Drain spaghetti, reserve some pasta water. Step 5: Remove pan from heat, mix pasta with pancetta, then stir in egg-cheese mixture quickly. Step 6: Add reserved water if needed for creaminess. Step 7: Season with pepper, garnish with parsley, and serve hot immediately.",
    reviews: 152
  },
  {
    id: 2,
    title: "Margherita Pizza",
    category: "Italian",
    image: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg",
    ingredients: [
      "250g pizza dough",
      "100g mozzarella cheese",
      "4 tbsp tomato sauce",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "Pinch of salt"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: "4.1",
    toppings: [
      "Extra cheese",
      "Olive oil drizzle",
      "Chili flakes"
    ],
    instructions: "Step 1: Preheat oven to 220°C (428°F). Step 2: Roll out pizza dough on a floured surface. Step 3: Spread tomato sauce evenly on the base. Step 4: Tear mozzarella into chunks and scatter over sauce. Step 5: Add fresh basil leaves and a drizzle of olive oil. Step 6: Bake for 12–15 minutes until crust is golden and cheese is bubbling. Step 7: Remove from oven, slice, and serve hot.",
    reviews: 210
  },
  {
    id: 3,
    title: "Mushroom Risotto",
    category: "Italian",
    image: "https://www.eatingwell.com/thmb/cjGMOCaxz6Vw1FQPA83AMF1vn-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mushroom-risotto-beauty-8025316-4000x4000-203a642728ca49c895b487d6df0dc6e3.jpg",
    ingredients: [
      "200g arborio rice",
      "150g mushrooms (sliced)",
      "1 onion (finely chopped)",
      "2 cloves garlic (minced)",
      "750ml chicken or vegetable stock",
      "50g parmesan cheese",
      "2 tbsp butter",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "veg",
    timing: "40 mins",
    Starreview: "4.4",
    toppings: [
      "Fresh parsley",
      "Extra parmesan"
    ],
    instructions: "Step 1: Heat olive oil and butter in a pan, sauté onions and garlic until soft. Step 2: Add mushrooms and cook until golden. Step 3: Add rice and stir until coated. Step 4: Pour in stock, one ladle at a time, stirring continuously until absorbed. Step 5: Continue for 20 minutes until rice is creamy but firm. Step 6: Stir in parmesan, adjust seasoning. Step 7: Garnish with parsley and serve warm in bowls.",
    reviews: 134
  },

{
    id: 4,
    title: "Lasagna",
    category: "Italian",
    image: "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-Easy-Homemade-Lasagna-SpendWithPennies.jpg",
    ingredients: [
      "9 lasagna sheets",
      "300g minced beef",
      "1 onion (chopped)",
      "2 cloves garlic",
      "400g tomato puree",
      "250g ricotta cheese",
      "200g mozzarella",
      "50g parmesan",
      "2 tbsp olive oil",
      "Salt and pepper"
    ],
    type: "non-veg",
    timing: "50 mins",
    Starreview: "4.7",
    toppings: [
      "Extra mozzarella",
      "Fresh basil"
    ],
    instructions: "Step 1: Preheat oven to 190°C (374°F). Step 2: Heat olive oil, sauté onion and garlic. Add beef and cook until browned. Step 3: Stir in tomato puree, season, and simmer. Step 4: In a dish, layer pasta sheets, meat sauce, ricotta, and mozzarella. Step 5: Repeat layers, finishing with cheese on top. Step 6: Bake for 30–40 minutes until bubbling and golden. Step 7: Let rest 10 minutes before slicing and serving.",
    reviews: 189
  },
  {
    id: 5,
    title: "Bruschetta",
    category: "Italian",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2025/05/bruschetta.jpg",
    ingredients: [
      "1 baguette (sliced)",
      "3 tomatoes (diced)",
      "2 cloves garlic",
      "3 tbsp olive oil",
      "Fresh basil",
      "Salt and pepper"
    ],
    type: "veg",
    timing: "15 mins",
    Starreview: "4.2",
    toppings: [
      "Balsamic glaze",
      "Extra basil"
    ],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Toast baguette slices lightly. Step 3: Mix tomatoes, garlic, olive oil, basil, salt, and pepper in a bowl. Step 4: Spoon tomato mixture onto bread. Step 5: Drizzle with balsamic glaze. Step 6: Serve immediately as appetizer.",
    reviews: 92
  },
  {
    id: 6,
    title: "Chicken Curry",
    category: "Indian",
    image: "https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg",
    ingredients: [
      "500g chicken (cut into pieces)",
      "2 medium onions (finely sliced)",
      "2 tomatoes (chopped)",
      "3 tbsp curry powder",
      "1 cup coconut milk",
      "2 tbsp ginger-garlic paste",
      "2 tbsp cooking oil",
      "1 tsp turmeric powder",
      "1 tsp chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "Fresh coriander leaves"
    ],
    type: "non-veg",
    timing: "45 mins",
    Starreview: "4.3",
    toppings: [
      "Fresh coriander",
      "Green chilies",
      "Lime wedges"
    ],
    instructions: "Step 1: Heat oil in a deep pan, add sliced onions and sauté until golden brown. Step 2: Add ginger-garlic paste and cook until aromatic. Step 3: Stir in tomatoes, turmeric, chili powder, curry powder, and salt; cook until oil separates. Step 4: Add chicken pieces, mix well, and cook for 10 minutes. Step 5: Pour in coconut milk and simmer for 20–25 minutes until chicken is tender. Step 6: Add garam masala, stir gently, and adjust seasoning. Step 7: Garnish with coriander and serve hot with steamed rice or naan.",
    reviews: 176
  },
  {
    id: 7,
    title: "Vegetable Biryani",
    category: "Indian",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg",
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables (carrots, beans, peas, cauliflower)",
      "2 onions (sliced)",
      "2 tomatoes (chopped)",
      "1 cup yogurt",
      "3 tbsp biryani masala",
      "2 tbsp ghee or oil",
      "1 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp chili powder",
      "Whole spices (2 cloves, 1 cinnamon stick, 2 cardamoms, 1 bay leaf)",
      "Salt to taste",
      "Fresh mint and coriander leaves"
    ],
    type: "veg",
    timing: "50 mins",
    Starreview: "4.6",
    toppings: [
      "Fried onions",
      "Cashew nuts",
      "Mint leaves"
    ],
    instructions: "Step 1: Wash and soak basmati rice for 30 minutes. Cook until 70% done and keep aside. Step 2: In a large pot, heat ghee and add whole spices. Fry until aromatic. Step 3: Add onions and cook until golden brown. Step 4: Stir in ginger-garlic paste, tomatoes, turmeric, chili powder, and biryani masala. Cook until oil separates. Step 5: Add mixed vegetables and yogurt, cook for 10 minutes. Step 6: Layer cooked rice over the vegetable masala. Top with fried onions, cashews, mint, and coriander. Step 7: Cover with a tight lid and cook on low heat for 15–20 minutes (dum cooking). Step 8: Serve hot with raita or salad.",
    reviews: 215
  },
  {
    id: 8,
    title: "Paneer Butter Masala",
    category: "Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2GVSX6yMjCLHtHBaQwyqjUw1rkC1sF9H8g&s",
    ingredients: [
      "250g paneer (cubed)",
      "3 tomatoes (pureed)",
      "1 onion (chopped)",
      "2 tbsp butter",
      "2 tbsp cream",
      "1 tbsp ginger-garlic paste",
      "2 tbsp cashew paste",
      "1 tsp chili powder",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "1 tbsp oil",
      "Salt to taste"
    ],
    type: "veg",
    timing: "35 mins",
    Starreview: "4.5",
    toppings: [
      "Fresh cream",
      "Coriander leaves",
      "Butter drizzle"
    ],
    instructions: "Step 1: Heat oil and butter in a pan, sauté onions until golden. Step 2: Add ginger-garlic paste and cook until fragrant. Step 3: Stir in tomato puree, turmeric, chili powder, and cook until thickened. Step 4: Add cashew paste and simmer for 5 minutes. Step 5: Add paneer cubes and salt, mix gently. Step 6: Stir in cream and garam masala, cook for another 5 minutes. Step 7: Garnish with cream, coriander, and a butter drizzle. Step 8: Serve hot with naan, roti, or rice.",
    reviews: 198
  },

{
    id: 9,
    title: "Pancakes",
    category: "Breakfast",
    image: "https://www.pillsbury.in/wp-content/uploads/2021/09/Chocolate-Pancake.jpg",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1 tsp salt",
      "1 tbsp sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tbsp melted butter"
    ],
    type: "veg",
    timing: "20 mins",
    Starreview: "4.4",
    toppings: [
      "Maple syrup",
      "Fresh berries",
      "Whipped cream"
    ],
    instructions: "Step 1: In a bowl, mix flour, baking powder, salt, and sugar. Step 2: Make a well in the center and pour in milk, egg, and melted butter; mix until smooth. Step 3: Heat a lightly oiled griddle or frying pan over medium-high heat. Step 4: Pour or scoop batter onto the griddle, using approx. 1/4 cup for each pancake. Step 5: Brown on both sides and serve hot with toppings of choice.",
    reviews: 142
  },
  {
    id: 10,
    title: "Omelette",
    category: "Breakfast",
    image: "https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg",
    ingredients: [
      "3 eggs",
      "1 tbsp milk",
      "1/4 cup diced onion",
      "1/4 cup diced tomatoes",
      "1/4 cup chopped bell peppers",
      "Salt and pepper to taste",
      "1 tbsp butter"
    ],
    type: "non-veg",
    timing: "10 mins",
    Starreview: "4.1",
    toppings: [
      "Chopped herbs",
      "Cheese"
    ],
    instructions: "Step 1: Beat eggs with milk, salt, and pepper. Step 2: Heat butter in a skillet over medium heat. Step 3: Add onions, tomatoes, and bell peppers; sauté for 2 minutes. Step 4: Pour in the egg mixture. Step 5: Cook until edges are set, then fold the omelette. Step 6: Cook for another minute, sprinkle with herbs or cheese, and serve hot.",
    reviews: 87
  },
  {
    id: 11,
    title: "Caesar Salad",
    category: "Healthy",
    image: "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg",
    ingredients: [
      "1 head romaine lettuce",
      "1/2 cup croutons",
      "1/4 cup grated parmesan",
      "2 tbsp Caesar dressing",
      "1 chicken breast (grilled, optional)",
      "Salt and pepper to taste"
    ],
    type: "veg",
    timing: "15 mins",
    Starreview: "4.0",
    toppings: [
      "Extra parmesan",
      "Lemon wedges"
    ],
    instructions: "Step 1: Wash and chop lettuce. Step 2: Toss lettuce with Caesar dressing. Step 3: Add croutons, parmesan, and sliced grilled chicken if using. Step 4: Season with salt and pepper. Step 5: Serve immediately with lemon wedges on the side.",
    reviews: 101
  },
  {
    id: 12,
    title: "Chocolate Cake",
    category: "Desserts",
    image: "https://assets.winni.in/product/primary/2024/3/94564.jpeg?dpr=2&w=220",
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 tsp baking powder",
      "1 1/2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 tsp vanilla extract",
      "1 cup boiling water"
    ],
    type: "veg",
    timing: "45 mins",
    Starreview: "4.8",
    toppings: [
      "Chocolate frosting",
      "Berries",
      "Powdered sugar"
    ],
    instructions: "Step 1: Preheat oven to 175°C (350°F). Step 2: In a large bowl, mix flour, sugar, cocoa, baking powder, baking soda, and salt. Step 3: Add eggs, milk, oil, and vanilla; beat for 2 minutes. Step 4: Stir in boiling water (batter will be thin). Step 5: Pour into greased pans. Step 6: Bake 30–35 minutes until a toothpick comes out clean. Step 7: Cool, frost, and decorate as desired.",
    reviews: 228
  },
  {
    id: 13,
    title: "Fruit Salad",
    category: "Healthy",
    image: "https://www.modernhoney.com/wp-content/uploads/2023/05/Fruit-Salad-10.jpg",
    ingredients: [
      "1 cup diced apples",
      "1 cup diced bananas",
      "1 cup diced oranges",
      "1/2 cup grapes",
      "2 tbsp honey",
      "1 tbsp lemon juice",
      "Fresh mint leaves"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: "4.3",
    toppings: [
      "Chopped nuts",
      "Mint leaves"
    ],
    instructions: "Step 1: Combine all diced fruits in a large bowl. Step 2: Drizzle honey and lemon juice over the fruits. Step 3: Toss gently to mix. Step 4: Garnish with fresh mint leaves and serve chilled.",
    reviews: 134
  },
{
    id: 14,
    title: "Grilled Chicken",
    category: "Dinner",
    image: "https://spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20-500x400.jpg",
    ingredients: [
      "2 chicken breasts",
      "2 tbsp olive oil",
      "1 tsp paprika",
      "1 tsp garlic powder",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "30 mins",
    Starreview: "4.5",
    toppings: [
      "Lemon wedges",
      "Chopped parsley"
    ],
    instructions: "Step 1: Preheat grill to medium-high heat. Step 2: Brush chicken with olive oil and season with paprika, garlic powder, salt, and pepper. Step 3: Grill chicken 6–8 minutes per side until cooked through. Step 4: Serve hot with lemon wedges and parsley.",
    reviews: 156
  },
  {
    id: 15,
    title: "Veg Sandwich",
    category: "Lunch",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/FN_FNK-Veggie-Lovers-Club-Sandwich_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614457375.webp",
    ingredients: [
      "2 slices bread",
      "1/4 cup sliced cucumber",
      "1/4 cup sliced tomato",
      "1/4 cup lettuce",
      "2 tsp mayonnaise",
      "Salt and pepper"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: "4.2",
    toppings: [
      "Cheese slice",
      "Chutney"
    ],
    instructions: "Step 1: Spread mayonnaise on bread slices. Step 2: Layer cucumber, tomato, lettuce, and cheese. Step 3: Sprinkle salt and pepper. Step 4: Cover with second slice, cut diagonally, and serve.",
    reviews: 98
  },
  {
    id: 16,
    title: "Masala Dosa",
    category: "Breakfast",
    image: "https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg",
    ingredients: [
      "1 cup rice",
      "1/4 cup urad dal",
      "1/2 tsp fenugreek seeds",
      "Salt to taste",
      "Potato filling",
      "Oil for cooking"
    ],
    type: "veg",
    timing: "45 mins",
    Starreview: "4.6",
    toppings: [
      "Coconut chutney",
      "Sambar"
    ],
    instructions: "Step 1: Soak rice and dal with fenugreek seeds for 4–6 hours. Step 2: Grind into a smooth batter and ferment overnight. Step 3: Prepare potato filling with spices. Step 4: Heat griddle, pour batter to form dosa, cook until golden. Step 5: Add potato filling, fold, and serve with chutney and sambar.",
    reviews: 174
  },
  {
    id: 17,
    title: "Chocolate Brownie",
    category: "Desserts",
    image: "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder-1200x821.jpg",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1/3 cup cocoa powder",
      "1/2 cup flour",
      "1/4 tsp salt",
      "1/4 tsp baking powder"
    ],
    type: "veg",
    timing: "35 mins",
    Starreview: "4.7",
    toppings: [
      "Chocolate chips",
      "Nuts"
    ],
    instructions: "Step 1: Preheat oven to 175°C (350°F). Step 2: Melt butter, stir in sugar, eggs, and vanilla. Step 3: Add cocoa, flour, salt, and baking powder; mix well. Step 4: Pour into greased pan. Step 5: Bake 25–30 minutes, cool, cut into squares, and serve.",
    reviews: 210
  },
  {
    id: 18,
    title: "Paneer Tikka",
    category: "Dinner",
    image: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
    ingredients: [
      "250g paneer",
      "2 tbsp yogurt",
      "1 tsp ginger-garlic paste",
      "1 tsp chili powder",
      "1 tsp turmeric",
      "1 tsp garam masala",
      "Salt to taste",
      "Oil for grilling"
    ],
    type: "veg",
    timing: "25 mins",
    Starreview: "4.4",
    toppings: [
      "Lemon wedges",
      "Onion rings"
    ],
    instructions: "Step 1: Cut paneer into cubes. Step 2: Mix yogurt and spices, coat paneer. Step 3: Marinate 30 minutes. Step 4: Grill or bake until golden brown. Step 5: Serve hot with lemon and onion.",
    reviews: 132
  },

{
    id: 19,
    title: "Gulab Jamun",
    category: "Desserts",
    image: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp",
    ingredients: [
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "1/4 tsp baking soda",
      "2 tbsp ghee",
      "1/4 cup milk (warm)",
      "2 cups sugar",
      "2 cups water",
      "4 cardamom pods",
      "Oil or ghee (for frying)"
    ],
    type: "veg",
    timing: "1 hr",
    Starreview: "4.8",
    toppings: [
      "Chopped pistachios",
      "Saffron strands"
    ],
    instructions: "Step 1: Prepare sugar syrup by boiling sugar, water, and cardamom pods until sticky. Keep warm. Step 2: In a bowl, mix milk powder, flour, baking soda, and ghee. Step 3: Add warm milk little by little to make a soft dough. Step 4: Divide into small smooth balls without cracks. Step 5: Heat oil or ghee on medium heat and fry balls until golden brown. Step 6: Immediately transfer into warm sugar syrup. Step 7: Let them soak for at least 2 hours. Step 8: Serve warm or at room temperature garnished with pistachios and saffron.",
    reviews: 312
  },
  {
    id: 20,
    title: "Apple Pie",
    category: "Desserts",
    image: "https://www.allrecipes.com/thmb/WB11yvUmfhbZv6aV88SYI3XvTFU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/762929-sundays-apple-pie-SMClanton-4x3-1-373c2bca34b44d04a8f32f1d6ace4932.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "200g cold butter (cubed)",
      "1/2 tsp salt",
      "4 tbsp ice water",
      "5 large apples (peeled, sliced)",
      "100g sugar",
      "1 tsp cinnamon powder",
      "1 tbsp lemon juice",
      "1 tbsp cornflour"
    ],
    type: "veg",
    timing: "1 hr 20 mins",
    Starreview: "4.4",
    toppings: [
      "Vanilla ice cream",
      "Caramel sauce"
    ],
    instructions: "Step 1: Make pastry dough by combining flour, salt, and butter. Add ice water and form a dough. Chill for 30 minutes. Step 2: Roll out dough and line a pie dish. Step 3: Mix sliced apples with sugar, cinnamon, lemon juice, and cornflour. Step 4: Fill pie crust with apple mixture. Step 5: Cover with top crust and seal edges. Cut small slits on top. Step 6: Bake at 180°C (350°F) for 45–50 minutes until golden brown. Step 7: Let it cool slightly before serving. Step 8: Serve warm with vanilla ice cream and caramel drizzle.",
    reviews: 187
  },
  {
    id: 21,
    title: "Fluffy Pancakes",
    category: "Breakfast",
    image: "https://lemonsandzest.com/wp-content/uploads/2021/01/Fluffy-Pancakes-2.12.jpg",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1/2 tsp salt",
      "1 tbsp sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tbsp melted butter"
    ],
    type: "veg",
    timing: "25 mins",
    Starreview: "4.6",
    toppings: [
      "Maple syrup",
      "Fresh berries",
      "Powdered sugar"
    ],
    instructions: "Step 1: In a large bowl, whisk together flour, baking powder, salt, and sugar. Step 2: Make a well in the center and pour in milk, egg, and melted butter. Whisk until smooth. Step 3: Heat a nonstick pan over medium heat and lightly grease. Step 4: Pour 1/4 cup batter for each pancake. Cook until bubbles form, then flip and cook the other side until golden. Step 5: Stack pancakes on a plate. Step 6: Serve warm with maple syrup, berries, and powdered sugar on top.",
    reviews: 245
  },
  {
    id: 22,
    title: "Masala Omelette",
    category: "Breakfast",
    image: "https://lh6.googleusercontent.com/proxy/V0J5KjP3-KO9AwhjogFkVi7x-9X2ZDSLIkD1dVJawitwh8ZRYgp8uBcdOq62VnGaJ-c24cgoZglpqey-5Ls6xBPeqmHisXbF4-oINTLeiNIzQ7-7w9lEusWifi81cI3Ze8vjKTL_VyjRp5EB",
    ingredients: [
      "3 eggs",
      "1/2 onion (finely chopped)",
      "1 green chili (finely chopped)",
      "2 tbsp tomato (chopped)",
      "2 tbsp coriander leaves (chopped)",
      "1/4 tsp turmeric powder",
      "Salt to taste",
      "1 tbsp oil or butter"
    ],
    type: "non-veg",
    timing: "15 mins",
    Starreview: "4.2",
    toppings: [
      "Coriander leaves",
      "Chili flakes"
    ],
    instructions: "Step 1: Crack eggs into a bowl and whisk with salt and turmeric. Step 2: Add chopped onions, chilies, tomatoes, and coriander. Mix well. Step 3: Heat oil or butter in a pan. Step 4: Pour in the egg mixture and spread evenly. Step 5: Cook on medium heat until the bottom sets, then flip gently. Step 6: Cook until golden on both sides. Step 7: Serve hot with toast or paratha, garnished with coriander leaves and chili flakes.",
    reviews: 198
  },
  {
    id: 23,
    title: "Avocado Toast with Poached Egg",
    category: "Breakfast",
    image: "https://www.aberdeenskitchen.com/wp-content/uploads/2019/05/Avocado-Egg-Breakfast-Toast-FI-Thumbnail-1200X1200.jpg",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tsp lemon juice",
      "Salt and pepper to taste",
      "1 tbsp olive oil"
    ],
    type: "non-veg",
    timing: "20 mins",
    Starreview: "4.5",
    toppings: [
      "Chili flakes",
      "Fresh parsley",
      "Feta cheese"
    ],
    instructions: "Step 1: Toast the sourdough bread slices until golden. Step 2: Mash avocado with lemon juice, salt, and pepper. Step 3: Spread avocado mixture over toast. Step 4: Bring water to a simmer in a saucepan, swirl gently, and poach eggs for 3 minutes until whites are set. Step 5: Place poached eggs on top of avocado toast. Step 6: Drizzle with olive oil and sprinkle chili flakes, parsley, and crumbled feta cheese. Step 7: Serve immediately while warm.",
    reviews: 172
  },

{
    id: 24,
    title: "Grilled Chicken Salad",
    category: "Lunch",
    image: "https://www.maebells.com/wp-content/uploads/2024/06/Grilled-Chicken-Caesar-Salad-14.jpg",
    ingredients: [
      "200g chicken breast",
      "2 cups mixed greens",
      "1/2 cucumber (sliced)",
      "1/2 red bell pepper (sliced)",
      "1 tbsp olive oil",
      "1 tsp lemon juice",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "25 mins",
    Starreview: "4.7",
    toppings: [
      "Parmesan cheese",
      "Croutons"
    ],
    instructions: "Step 1: Season chicken with salt, pepper, and olive oil. Step 2: Grill chicken until fully cooked, then slice. Step 3: In a bowl, mix greens, cucumber, and red bell pepper. Step 4: Add grilled chicken on top. Step 5: Drizzle with lemon juice and olive oil. Step 6: Sprinkle parmesan cheese and croutons. Step 7: Serve immediately.",
    reviews: 134
  },
  {
    id: 25,
    title: "Pasta Primavera",
    category: "Dinner",
    image: "https://familystylefood.com/wp-content/uploads/2023/05/Pasta-Primavera-bowl.jpg",
    ingredients: [
      "200g pasta",
      "1 zucchini (sliced)",
      "1 red bell pepper (sliced)",
      "1 carrot (sliced)",
      "1/2 cup peas",
      "2 tbsp olive oil",
      "2 cloves garlic (minced)",
      "Salt and pepper to taste",
      "Grated parmesan cheese"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: "4.6",
    toppings: [
      "Basil leaves",
      "Extra parmesan"
    ],
    instructions: "Step 1: Cook pasta according to package instructions. Step 2: In a pan, heat olive oil and sauté garlic. Step 3: Add zucchini, bell pepper, carrot, and peas. Cook until tender. Step 4: Toss cooked pasta with vegetables. Step 5: Season with salt and pepper. Step 6: Serve hot, garnished with basil leaves and grated parmesan cheese.",
    reviews: 159
  },
  // ========== INDIAN ==========
  {
    id: 26,
    title: "Chana Masala",
    category: "Indian",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chana-masala-fb809bc.jpg?quality=90&resize=440,400",
    ingredients: [
      "1 cup chickpeas (soaked overnight)",
      "2 onions (chopped)",
      "2 tomatoes (chopped)",
      "2 green chilies",
      "1 tbsp ginger-garlic paste",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "2 tsp coriander powder",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "45 mins",
    Starreview: "4.7",
    toppings: [
      "Fresh coriander leaves",
      "Lemon wedges"
    ],
    instructions: "Step 1: Boil chickpeas until soft. Step 2: Heat oil, add cumin seeds, onions, and sauté. Step 3: Add ginger-garlic paste, tomatoes, chilies, and spices. Step 4: Cook until oil separates. Step 5: Add chickpeas and simmer for 10 minutes. Step 6: Garnish with coriander and serve hot with rice or roti.",
    reviews: 220
  },
  {
    id: 27,
    title: "Aloo Gobi",
    category: "Indian",
    image: "https://ministryofcurry.com/wp-content/uploads/2017/04/Aloo-Gobi-5.jpg",
    ingredients: [
      "2 potatoes (diced)",
      "1 small cauliflower (florets)",
      "1 onion (chopped)",
      "2 tomatoes (chopped)",
      "2 tbsp oil",
      "1 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: "4.5",
    toppings: [
      "Coriander leaves",
      "Green chili slices"
    ],
    instructions: "Step 1: Heat oil, add cumin seeds and onions. Step 2: Add tomatoes and spices. Step 3: Add potatoes and cauliflower, mix well. Step 4: Cover and cook until soft. Step 5: Garnish with coriander and serve.",
    reviews: 180
  },
  {
    id: 28,
    title: "Baingan Bharta",
    category: "Indian",
    image: "https://sinfullyspicy.com/wp-content/uploads/2024/07/1200-by-1200-images-3.jpg",
    ingredients: [
      "1 large eggplant",
      "2 onions (chopped)",
      "2 tomatoes (chopped)",
      "2 tbsp oil",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp chili powder",
      "1 tsp turmeric powder",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "40 mins",
    Starreview: "4.6",
    toppings: [
      "Coriander leaves",
      "Onion rings"
    ],
    instructions: "Step 1: Roast eggplant until skin blackens. Peel and mash. Step 2: Heat oil, add cumin seeds, onions, and ginger-garlic paste. Step 3: Add tomatoes and spices. Step 4: Add mashed eggplant, cook for 10 mins. Step 5: Garnish with coriander and serve with roti.",
    reviews: 145
  },

  // ========== ITALIAN ==========
  {
    id: 29,
    title: "Vegan Margherita Pizza",
    category: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISvWd4SQL1QNTIi1ht38nP9UwYSRzjvF80Q&s",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Vegan mozzarella",
      "Fresh basil leaves",
      "Olive oil"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: "4.8",
    toppings: [
      "Extra basil",
      "Olive oil drizzle"
    ],
    instructions: "Step 1: Preheat oven to 220°C. Step 2: Spread tomato sauce on dough. Step 3: Add vegan mozzarella and basil leaves. Step 4: Bake for 12-15 minutes until crust is golden. Step 5: Drizzle with olive oil and serve hot.",
    reviews: 210
  },
  {
    id: 30,
    title: "Vegan Lasagna",
    category: "Italian",
    image: "https://www.noracooks.com/wp-content/uploads/2023/06/vegan-lasagna-1-3.jpg",
    ingredients: [
      "Lasagna sheets",
      "Tomato sauce",
      "Vegan ricotta",
      "Spinach",
      "Mushrooms",
      "Olive oil"
    ],
    type: "vegan",
    timing: "1 hour",
    Starreview: "4.7",
    toppings: [
      "Fresh basil",
      "Cashew parmesan"
    ],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Layer lasagna sheets with tomato sauce, vegan ricotta, spinach, and mushrooms. Step 3: Repeat layers. Step 4: Bake for 40 minutes. Step 5: Garnish with basil and serve.",
    reviews: 175
  },
  {
    id: 31,
    title: "Vegan Pesto Pasta",
    category: "Italian",
    image: "https://tastythriftytimely.com/wp-content/uploads/2024/08/Vegan-Pesto-Pasta-with-Smoked-Tofu-FEATURED.jpg",
    ingredients: [
      "200g pasta",
      "1 cup fresh basil",
      "1/4 cup pine nuts",
      "2 cloves garlic",
      "1/4 cup olive oil",
      "2 tbsp nutritional yeast",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: "4.6",
    toppings: [
      "Toasted pine nuts",
      "Extra basil leaves"
    ],
    instructions: "Step 1: Cook pasta according to package instructions. Step 2: Blend basil, pine nuts, garlic, olive oil, nutritional yeast, and salt into pesto. Step 3: Toss pasta with pesto and serve hot.",
    reviews: 160
  },

  // ========== BREAKFAST ==========
  {
    id: 32,
    title: "Vegan Pancakes",
    category: "Breakfast",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan_pancakes-4595444.jpg",
    ingredients: [
      "1 cup flour",
      "1 cup almond milk",
      "2 tbsp maple syrup",
      "1 tsp baking powder",
      "1 tbsp coconut oil"
    ],
    type: "vegan",
    timing: "20 mins",
    Starreview: "4.7",
    toppings: [
      "Fresh berries",
      "Maple syrup"
    ],
    instructions: "Step 1: Mix flour, almond milk, baking powder, and maple syrup into a batter. Step 2: Heat a pan with coconut oil. Step 3: Cook pancakes until golden on both sides. Step 4: Serve with berries and syrup.",
    reviews: 190
  },
  {
    id: 33,
    title: "Tofu Scramble",
    category: "Breakfast",
    image: "https://plantbasedonabudget.com/wp-content/uploads/2023/01/87-Tofu-Scramble-Plant-Based-on-a-Budget-1-2.jpg",
    ingredients: [
      "200g firm tofu",
      "1 tbsp nutritional yeast",
      "1/2 tsp turmeric",
      "1/2 onion (chopped)",
      "1/2 bell pepper (chopped)",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: "4.5",
    toppings: [
      "Chopped parsley",
      "Hot sauce"
    ],
    instructions: "Step 1: Heat oil in pan. Step 2: Crumble tofu and add with onions and peppers. Step 3: Add turmeric, salt, and pepper. Step 4: Cook for 5-7 minutes. Step 5: Garnish with parsley and serve.",
    reviews: 145
  },
  {
    id: 34,
    title: "Vegan Smoothie Bowl",
    category: "Breakfast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS421pOd0pwrmzupDGgJwvMAjQ7AgagfQVMCg&s",
    ingredients: [
      "1 banana",
      "1/2 cup frozen berries",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "1 tbsp granola"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: "4.8",
    toppings: [
      "Granola",
      "Coconut flakes"
    ],
    instructions: "Step 1: Blend banana, berries, and almond milk. Step 2: Pour into a bowl. Step 3: Top with chia seeds, granola, and coconut flakes. Step 4: Serve immediately.",
    reviews: 165
  },

  // ========== DESSERTS ==========
  {
    id: 35,
    title: "Vegan Chocolate Cake",
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniGckZ1t0EeQ-vOqk0CyOTw6RLs9fpJWBdg&s",
    ingredients: [
      "1 1/2 cups flour",
      "1 cup almond milk",
      "1/2 cup cocoa powder",
      "1/2 cup sugar",
      "1/4 cup coconut oil",
      "1 tsp baking soda",
      "1 tsp vanilla extract"
    ],
    type: "vegan",
    timing: "45 mins",
    Starreview: "4.9",
    toppings: [
      "Chocolate glaze",
      "Chopped nuts"
    ],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix flour, cocoa, sugar, baking soda, and almond milk. Step 3: Add oil and vanilla extract. Step 4: Bake for 30 mins. Step 5: Cool and top with glaze.",
    reviews: 250
  },
  {
    id: 36,
    title: "Vegan Brownies",
    category: "Desserts",
    image: "https://eatwithclarity.com/wp-content/uploads/2024/01/vegan-brownies-4.jpg",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1/2 cup sugar",
      "1/2 cup applesauce",
      "1/4 cup coconut oil",
      "1 tsp baking powder"
    ],
    type: "vegan",
    timing: "40 mins",
    Starreview: "4.8",
    toppings: [
      "Walnuts",
      "Coconut flakes"
    ],
    instructions: "Step 1: Mix flour, cocoa, sugar, and baking powder. Step 2: Add applesauce and coconut oil. Step 3: Bake at 180°C for 25 minutes. Step 4: Cool and cut into squares.",
    reviews: 200
  },
  {
    id: 37,
    title: "Vegan Mango Mousse",
    category: "Desserts",
    image: "https://www.tashasartisanfoods.com/blog/wp-content/uploads/2023/05/The-Best-Mango-Mousse-Recipe-3-Ingredients-FEATURE-9.jpeg",
    ingredients: [
      "2 ripe mangoes",
      "1/2 cup coconut cream",
      "2 tbsp maple syrup",
      "1 tbsp chia seeds"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: "4.7",
    toppings: [
      "Mint leaves",
      "Coconut flakes"
    ],
    instructions: "Step 1: Blend mangoes, coconut cream, and maple syrup. Step 2: Pour into bowls. Step 3: Chill for 30 minutes. Step 4: Top with chia seeds and mint.",
    reviews: 140
  },

  // ========== HEALTHY ==========
  {
    id: 38,
    title: "Quinoa Salad",
    category: "Healthy",
    image: "https://www.recipetineats.com/tachyon/2021/03/My-Favourite-Quinoa-Salad-5-SQ.jpg",
    ingredients: [
      "1 cup quinoa (cooked)",
      "1 cucumber (diced)",
      "1 tomato (diced)",
      "1/2 cup chickpeas",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper to taste"
    ],
    type: "vegan",
    timing: "20 mins",
    Starreview: "4.6",
    toppings: [
      "Fresh parsley",
      "Pumpkin seeds"
    ],
    instructions: "Step 1: Cook quinoa and let cool. Step 2: Toss with cucumber, tomato, chickpeas, olive oil, and lemon juice. Step 3: Garnish with parsley and seeds.",
    reviews: 180
  },
  {
    id: 39,
    title: "Vegan Buddha Bowl",
    category: "Healthy",
    image: "https://www.crazyvegankitchen.com/wp-content/uploads/2023/11/buddha-bowl-recipe.jpg",
    ingredients: [
      "1 cup brown rice",
      "1/2 cup roasted sweet potato",
      "1/2 cup broccoli",
      "1/2 cup chickpeas",
      "2 tbsp tahini",
      "1 tbsp lemon juice"
    ],
    type: "vegan",
    timing: "30 mins",
    Starreview: "4.8",
    toppings: [
      "Sesame seeds",
      "Fresh coriander"
    ],
    instructions: "Step 1: Cook rice. Step 2: Roast sweet potato and steam broccoli. Step 3: Assemble rice, veggies, and chickpeas in a bowl. Step 4: Drizzle with tahini dressing.",
    reviews: 210
  },
  {
    id: 40,
    title: "Vegan Lentil Soup",
    category: "Healthy",
    image: "https://www.secondrecipe.com/wp-content/uploads/2022/02/lentil-soup.jpg",
    ingredients: [
      "1 cup red lentils",
      "1 onion (chopped)",
      "2 carrots (diced)",
      "2 celery stalks (diced)",
      "4 cups vegetable broth",
      "1 tsp cumin powder",
      "Salt and pepper to taste"
    ],
    type: "vegan",
    timing: "40 mins",
    Starreview: "4.7",
    toppings: [
      "Fresh parsley",
      "Lemon wedge"
    ],
    instructions: "Step 1: Sauté onion, carrots, and celery. Step 2: Add lentils, broth, and spices. Step 3: Simmer until lentils are soft. Step 4: Garnish with parsley and lemon.",
    reviews: 195
  },

  // -------------------- Under 15 mins (Veg) --------------------
  {
    id: 41,
    title: "Masala Chai",
    category: "Breakfast",
    image: "https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai-Featured.jpg",
    ingredients: [
      "2 cups water",
      "1 cup milk",
      "2 tsp tea leaves",
      "2 cardamom pods",
      "1 small cinnamon stick",
      "2 tsp sugar"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: "4.7",
    toppings: ["Cinnamon powder"],
    instructions:
      "Step 1: Boil water with cardamom and cinnamon. Step 2: Add tea leaves and simmer for 2 mins. Step 3: Add milk and sugar, stir well. Step 4: Strain and serve hot in cups.",
    reviews: 152
  },
  {
    id: 42,
    title: "Poha",
    category: "Breakfast",
    image: "https://www.ohmyveg.co.uk/wp-content/uploads/2023/09/Poha-4-copy-3-e1722868478363-1200x1200.jpg",
    ingredients: [
      "2 cups flattened rice (poha)",
      "1 onion (chopped)",
      "1 green chili (chopped)",
      "1/2 tsp mustard seeds",
      "1/4 tsp turmeric",
      "1 tbsp oil",
      "Salt to taste"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: "4.6",
    toppings: ["Coriander leaves", "Lemon juice"],
    instructions:
      "Step 1: Rinse poha lightly and drain water. Step 2: Heat oil, add mustard seeds, onion, chili. Step 3: Add turmeric and poha, stir well. Step 4: Garnish with coriander and lemon juice before serving.",
    reviews: 198
  },
  {
    id: 43,
    title: "Vegetable Upma",
    category: "Breakfast",
    image: "https://cookingfromheart.com/wp-content/uploads/2018/02/Vegetable-Oats-Upma-4.jpg",
    ingredients: [
      "1 cup semolina (rava)",
      "2 cups water",
      "1 carrot (chopped)",
      "1 onion (chopped)",
      "1 green chili",
      "1 tbsp ghee",
      "Salt to taste"
    ],
    type: "veg",
    timing: "14 mins",
    Starreview: "4.5",
    toppings: ["Coriander leaves"],
    instructions:
      "Step 1: Roast semolina in a pan until golden brown. Step 2: Heat ghee, sauté onion, carrot, chili. Step 3: Add water and salt, bring to a boil. Step 4: Slowly add roasted semolina, stir continuously until soft and fluffy.",
    reviews: 176
  },
  {
    id: 44,
    title: "Paneer Bhurji",
    category: "Indian",
    image: "https://www.jcookingodyssey.com/wp-content/uploads/2024/06/amritsari-dhaba-style-paneer-ki-bhurji.jpg",
    ingredients: [
      "200g paneer (crumbled)",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 green chili",
      "1/2 tsp turmeric",
      "1/2 tsp garam masala",
      "1 tbsp oil"
    ],
    type: "veg",
    timing: "13 mins",
    Starreview: "4.8",
    toppings: ["Fresh coriander"],
    instructions:
      "Step 1: Heat oil in a pan, sauté onion, tomato, and chili. Step 2: Add turmeric and garam masala, mix well. Step 3: Add crumbled paneer and cook for 2–3 minutes. Step 4: Garnish with coriander and serve hot with roti or bread.",
    reviews: 220
  },
  {
    id: 45,
    title: "Aloo Chaat",
    category: "Snacks",
    image: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Aloo-chaat-WS-500x500.jpg",
    ingredients: [
      "2 boiled potatoes (cubed)",
      "1 tsp chaat masala",
      "1/2 tsp red chili powder",
      "1 tbsp tamarind chutney",
      "1 tbsp mint chutney",
      "Salt to taste"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: "4.6",
    toppings: ["Sev", "Coriander leaves"],
    instructions:
      "Step 1: Mix cubed boiled potatoes with chaat masala, chili powder, and salt. Step 2: Add tamarind and mint chutneys, mix well. Step 3: Top with sev and coriander leaves. Step 4: Serve immediately for best taste.",
    reviews: 143
  },

  // -------------------- Under 30 mins (Veg & Non-Veg) --------------------
  {
    id: 46,
    title: "Vegetable Pulao",
    category: "Lunch",
    image: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Veg-Pulao-1-3.jpg",
    ingredients: [
      "1 cup basmati rice",
      "1 carrot (chopped)",
      "1/2 cup peas",
      "1 onion (sliced)",
      "1 cinnamon stick",
      "2 cloves",
      "1 tbsp ghee",
      "Salt to taste"
    ],
    type: "veg",
    timing: "25 mins",
    Starreview: "4.7",
    toppings: ["Fried onions"],
    instructions:
      "Step 1: Wash and soak rice for 10 mins. Step 2: Heat ghee, sauté onion, cinnamon, and cloves. Step 3: Add vegetables, stir fry, then add rice and water. Step 4: Cook until rice is fluffy and aromatic.",
    reviews: 187
  },
  {
    id: 47,
    title: "Chicken Curry",
    category: "Dinner",
    image: "https://veenaazmanov.com/wp-content/uploads/2012/12/Easy-Chicken-Curry-Recipe-with-6-ingredients1.jpg",
    ingredients: [
      "300g chicken pieces",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "2 tbsp oil"
    ],
    type: "non-veg",
    timing: "28 mins",
    Starreview: "4.8",
    toppings: ["Fresh coriander"],
    instructions:
      "Step 1: Heat oil, sauté onion until golden. Step 2: Add ginger-garlic paste and tomato, cook till soft. Step 3: Add spices and chicken pieces. Step 4: Add water, simmer until chicken is cooked through. Step 5: Garnish with coriander and serve with rice or roti.",
    reviews: 245
  },
  {
    id: 48,
    title: "Egg Bhurji",
    category: "Breakfast",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Egg-Bhurji-2-3.jpg",
    ingredients: [
      "3 eggs",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 green chili",
      "1/4 tsp turmeric",
      "1/2 tsp garam masala",
      "1 tbsp oil"
    ],
    type: "non-veg",
    timing: "18 mins",
    Starreview: "4.5",
    toppings: ["Fresh coriander"],
    instructions:
      "Step 1: Heat oil, sauté onion, tomato, and chili. Step 2: Add turmeric and garam masala. Step 3: Beat eggs and add to the pan. Step 4: Stir until scrambled and cooked. Step 5: Garnish with coriander and serve hot with bread or roti.",
    reviews: 165
  },
  {
    id: 49,
    title: "Paneer Butter Masala",
    category: "Dinner",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
    ingredients: [
      "200g paneer cubes",
      "2 tomatoes (pureed)",
      "1 onion (chopped)",
      "1 tsp ginger-garlic paste",
      "2 tbsp butter",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "1 tsp garam masala",
      "2 tbsp cream"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: "4.9",
    toppings: ["Fresh cream", "Coriander"],
    instructions:
      "Step 1: Heat butter, sauté onion and ginger-garlic paste. Step 2: Add tomato puree and spices, cook until thick. Step 3: Add paneer cubes, simmer for 5 mins. Step 4: Add cream, stir gently. Step 5: Garnish with coriander and serve with naan or rice.",
    reviews: 312
  },
  {
    id: 50,
    title: "Fish Fry",
    category: "Snacks",
    image: "https://www.themealdb.com/images/media/meals/1529444830.jpghttps://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
    ingredients: [
      "3 fish fillets",
      "1 tbsp lemon juice",
      "1/2 tsp turmeric",
      "1 tsp red chili powder",
      "2 tbsp rice flour",
      "Salt to taste",
      "2 tbsp oil"
    ],
    type: "non-veg",
    timing: "22 mins",
    Starreview: "4.6",
    toppings: ["Onion rings", "Lemon wedges"],
    instructions:
      "Step 1: Marinate fish fillets with lemon juice, turmeric, chili powder, and salt. Step 2: Coat with rice flour. Step 3: Heat oil in a pan, shallow fry fish until golden on both sides. Step 4: Serve with onion rings and lemon wedges.",
    reviews: 189
  },
{
  id: 51,
  title: "Paneer Bhurji",
  category: "Indian",
  image: "https://profusioncurry.com/wp-content/uploads/2025/02/Paneer_bhurji_spiced_cottage_cheese_scramble_high_protein_recipe_feature.jpg",
  ingredients: [
    "200g paneer (crumbled)",
    "1 large onion (finely chopped)",
    "2 medium tomatoes (chopped)",
    "1 green chili (chopped)",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1/2 tsp garam masala",
    "1/2 tsp cumin seeds",
    "1 tbsp oil or ghee",
    "Fresh coriander leaves (chopped)",
    "Salt to taste"
  ],
  type: "veg",
  timing: "20 mins",
  Starreview: "4.7",
  toppings: ["Fresh coriander", "Lemon wedge"],
  instructions: "Step 1: Heat oil in a pan and add cumin seeds. Step 2: Once they crackle, add chopped onions and sauté until golden. Step 3: Add green chili and chopped tomatoes, cook until soft. Step 4: Mix in turmeric, red chili powder, and salt. Step 5: Stir well until the spices release oil. Step 6: Add crumbled paneer and mix gently. Step 7: Cook for 3–4 minutes on medium heat. Step 8: Sprinkle garam masala and stir. Step 9: Garnish with fresh coriander leaves. Step 10: Serve hot with paratha or bread.",
  reviews: 201
},
{
  id: 52,
  title: "Aloo Poha",
  category: "Indian",
  image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/06/gujarati-poha-recipe.jpg?w=1200&ssl=1g",
  ingredients: [
    "2 cups poha (flattened rice)",
    "1 medium potato (diced)",
    "1 onion (sliced)",
    "2 green chilies (slit)",
    "1/2 tsp mustard seeds",
    "1/2 tsp turmeric powder",
    "10-12 curry leaves",
    "1 tbsp peanuts",
    "1 tbsp oil",
    "Salt to taste",
    "Fresh coriander",
    "Lemon wedge"
  ],
  type: "veg",
  timing: "15 mins",
  Starreview: "4.5",
  toppings: ["Sev", "Fresh coriander"],
  instructions: "Step 1: Rinse poha in water and set aside to soften. Step 2: Heat oil in a pan, add mustard seeds, let them splutter. Step 3: Add peanuts, fry until golden. Step 4: Add curry leaves, green chilies, and onions, sauté until soft. Step 5: Mix in diced potatoes, turmeric, and salt. Step 6: Cook until potatoes are tender. Step 7: Add soaked poha, toss gently. Step 8: Cook for 2–3 minutes. Step 9: Garnish with coriander and squeeze lemon juice. Step 10: Serve hot with tea.",
  reviews: 150
},
{
  id: 53,
  title: "Masala Omelette (Veg Version with Besan)",
  category: "Indian",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKIyu9tlOGwqmItHJh2A2yspi0UGveoZ54w&s",
  ingredients: [
    "1 cup besan (gram flour)",
    "1/2 onion (chopped)",
    "1 tomato (chopped)",
    "1 green chili (chopped)",
    "2 tbsp coriander leaves",
    "1/4 tsp turmeric powder",
    "1/2 tsp red chili powder",
    "1/2 tsp ajwain (carom seeds)",
    "Salt to taste",
    "1/2 cup water",
    "1 tsp oil for cooking"
  ],
  type: "veg",
  timing: "15 mins",
  Starreview: "4.3",
  toppings: ["Mint chutney"],
  instructions: "Step 1: In a bowl, mix besan, turmeric, red chili powder, ajwain, and salt. Step 2: Add water to make a smooth batter. Step 3: Add onions, tomato, chili, and coriander. Step 4: Heat a pan and grease with oil. Step 5: Pour a ladle of batter like a pancake. Step 6: Cook until edges lift, then flip. Step 7: Cook both sides until golden. Step 8: Serve hot with chutney or ketchup.",
  reviews: 89
},
{
  id: 54,
  title: "Vegetable Upma",
  category: "Indian",
  image: "https://blogexplore.com/wp-content/uploads/2014/01/blogexplore.com-dalia-vegetable-upma.jpg",
  ingredients: [
    "1 cup semolina (rava/sooji)",
    "1 onion (chopped)",
    "1 carrot (diced)",
    "1/4 cup green peas",
    "2 green chilies (slit)",
    "1/2 tsp mustard seeds",
    "1/2 tsp urad dal",
    "8 curry leaves",
    "1 tbsp ghee or oil",
    "2 cups water",
    "Salt to taste",
    "Coriander for garnish"
  ],
  type: "veg",
  timing: "20 mins",
  Starreview: "4.4",
  toppings: ["Coconut chutney", "Coriander"],
  instructions: "Step 1: Dry roast semolina until aromatic and keep aside. Step 2: Heat ghee in a pan, add mustard seeds, urad dal, curry leaves. Step 3: Add onions, chilies, and sauté. Step 4: Add carrot and peas, cook until half done. Step 5: Pour in water, add salt, bring to boil. Step 6: Slowly add semolina while stirring continuously. Step 7: Cook until thick and fluffy. Step 8: Garnish with coriander. Step 9: Serve hot with chutney or pickle.",
  reviews: 132
},
{
  id: 55,
  title: "Chole Masala",
  category: "Indian",
  image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-amritsari-chole.jpg",
  ingredients: [
    "1 cup boiled chickpeas",
    "1 large onion (chopped)",
    "2 tomatoes (pureed)",
    "1 tsp ginger-garlic paste",
    "1 tsp cumin seeds",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "1/2 tsp garam masala",
    "2 tbsp oil",
    "Salt to taste",
    "Fresh coriander"
  ],
  type: "veg",
  timing: "30 mins",
  Starreview: "4.8",
  toppings: ["Onion slices", "Coriander"],
  instructions: "Step 1: Heat oil in a pan and add cumin seeds. Step 2: Add onions, sauté until golden. Step 3: Add ginger-garlic paste, sauté until raw smell goes. Step 4: Add tomato puree, cook until oil separates. Step 5: Add turmeric, chili, coriander powder, and salt. Step 6: Stir well and cook for 2 minutes. Step 7: Add boiled chickpeas and 1/2 cup water. Step 8: Simmer for 10 minutes. Step 9: Sprinkle garam masala and stir. Step 10: Garnish with coriander. Step 11: Serve with bhature or rice.",
  reviews: 300
},
{
  id: 56,
  title: "Vegetable Pulao",
  category: "Indian",
  image: "https://mygoodfoodworld.com/wp-content/uploads/2022/09/rice-and-vegetables-pilaf.jpg",
  ingredients: [
    "1 cup basmati rice (washed)",
    "1 onion (sliced)",
    "1 carrot (diced)",
    "1/4 cup peas",
    "1/4 cup beans (chopped)",
    "2 cloves",
    "1 bay leaf",
    "1 cinnamon stick",
    "2 green chilies",
    "1 tbsp ghee",
    "2 cups water",
    "Salt to taste"
  ],
  type: "veg",
  timing: "25 mins",
  Starreview: "4.6",
  toppings: ["Fried onions", "Mint leaves"],
  instructions: "Step 1: Wash rice and soak for 15 minutes. Step 2: Heat ghee, add bay leaf, cloves, cinnamon, and sauté. Step 3: Add onions, chilies, and sauté until golden. Step 4: Add carrot, peas, beans, cook 2 minutes. Step 5: Add soaked rice and stir. Step 6: Pour in water and salt. Step 7: Cover and cook until rice is fluffy. Step 8: Garnish with fried onions and mint. Step 9: Serve with raita or curry.",
  reviews: 210
},
{
  id: 57,
  title: "Palak Paneer",
  category: "Indian",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKG8ez9lc708sXaUjfbIo5tdpSygcl7PO9w&s",
  ingredients: [
    "200g paneer (cubed)",
    "2 cups spinach (blanched & pureed)",
    "1 onion (chopped)",
    "2 tomatoes (pureed)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp cumin seeds",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1/2 tsp garam masala",
    "2 tbsp cream",
    "2 tbsp oil",
    "Salt to taste"
  ],
  type: "veg",
  timing: "30 mins",
  Starreview: "4.9",
  toppings: ["Cream swirl", "Butter"],
  instructions: "Step 1: Heat oil, add cumin seeds, let crackle. Step 2: Add onions, sauté till golden. Step 3: Add ginger-garlic paste and cook until raw smell disappears. Step 4: Add tomato puree and cook till oil separates. Step 5: Add turmeric, chili, and salt. Step 6: Mix well, then add spinach puree. Step 7: Simmer for 5 minutes. Step 8: Add paneer cubes, cook for 5 more minutes. Step 9: Sprinkle garam masala, stir well. Step 10: Add cream before serving. Step 11: Serve hot with naan or rice.",
  reviews: 250
},
{
  id: 58,
  title: "Vegetable Raita",
  category: "Indian",
  image: "https://enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-MIX-VEG-RAITA.jpg",
  ingredients: [
    "1 cup yogurt (beaten)",
    "1 cucumber (chopped)",
    "1 tomato (chopped)",
    "1 onion (chopped)",
    "1/4 tsp roasted cumin powder",
    "Salt to taste",
    "Fresh coriander",
    "Mint leaves"
  ],
  type: "veg",
  timing: "10 mins",
  Starreview: "4.2",
  toppings: ["Mint leaves", "Coriander"],
  instructions: "Step 1: Whisk yogurt until smooth. Step 2: Add cucumber, tomato, and onion. Step 3: Mix well with cumin powder and salt. Step 4: Garnish with coriander and mint. Step 5: Chill before serving. Step 6: Serve as side dish with biryani or pulao.",
  reviews: 80
},
// Under 15-min Non-Veg Recipes
{
  id: 59,
  title: "Spicy Egg Toast",
  category: "Indian",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/egg-toast-recipe.webp",
  ingredients: [
    "2 eggs",
    "2 slices bread",
    "1 green chili (chopped)",
    "1/4 tsp turmeric",
    "1/2 tsp red chili powder",
    "Salt to taste",
    "1 tsp butter"
  ],
  type: "non-veg",
  timing: "10 mins",
  Starreview: 4.5,
  toppings: ["Coriander leaves", "Tomato ketchup"],
  instructions: "Step 1: Beat eggs with spices. Step 2: Heat butter, pour eggs and cook like omelette. Step 3: Toast bread slices and place omelette on top. Step 4: Garnish with coriander and serve hot.",
  reviews: 120
},
{
  id: 60,
  title: "Masala Egg Bhurji",
  category: "Indian",
  image: "https://i.ytimg.com/vi/LDmhAlb0wS0/maxresdefault.jpg",
  ingredients: [
    "3 eggs",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1 green chili",
    "1/4 tsp turmeric",
    "1/2 tsp chili powder",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "12 mins",
  Starreview: 4.6,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onion and chili. Step 2: Add tomato and cook. Step 3: Beat eggs with spices, pour into pan and scramble. Step 4: Garnish with coriander and serve hot.",
  reviews: 140
},
{
  id: 61,
  title: "Egg and Tomato Sandwich",
  category: "Indian",
  image: "https://goodcheapeats.com/wp-content/uploads/2019/03/egg-salad-BLT-hero-2-500x375.jpg",
  ingredients: [
    "2 slices bread",
    "2 eggs",
    "1 tomato (sliced)",
    "1 tsp butter",
    "Salt and pepper to taste"
  ],
  type: "non-veg",
  timing: "10 mins",
  Starreview: 4.3,
  toppings: ["Lettuce", "Cheese slice"],
  instructions: "Step 1: Boil eggs and slice them. Step 2: Toast bread and butter it. Step 3: Layer eggs and tomato on bread. Step 4: Add salt, pepper, and toppings. Serve immediately.",
  reviews: 110
},
{
  id: 62,
  title: "Egg Curry Quick",
  category: "Indian",
  image: "https://www.kitchensanctuary.com/wp-content/uploads/2025/02/Egg-Curry-Square-FS.jpg",
  ingredients: [
    "4 boiled eggs",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1/2 tsp chili powder",
    "1/2 tsp garam masala",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "15 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomato, turmeric, chili powder, and cook. Step 3: Add boiled eggs and garam masala. Step 4: Simmer 5 minutes and garnish with coriander.",
  reviews: 160
},
{
  id: 63,
  title: "Egg Masala Wrap",
  category: "Indian",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMk7z1F0A9mN45B-x8zATDLn-89E7vDCS2w&s",
  ingredients: [
    "2 eggs",
    "1 tortilla wrap",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1/4 tsp turmeric",
    "1/2 tsp chili powder",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "12 mins",
  Starreview: 4.4,
  toppings: ["Lettuce", "Cheese slice"],
  instructions: "Step 1: Heat oil, sauté onion and tomato. Step 2: Beat eggs with spices, pour into pan, cook and scramble. Step 3: Place mixture in tortilla wrap, roll, and serve hot.",
  reviews: 130
},
{
  id: 64,
  title: "Quick Egg Fried Rice",
  category: "Indian",
  image: "https://i.ytimg.com/vi/8kFT7b5qTK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaie7vFa1O-gk-TrlNrrIn1kJSeQ",
  ingredients: [
    "1 cup cooked rice",
    "2 eggs",
    "1/4 cup peas",
    "1/4 cup carrots (diced)",
    "1 tsp soy sauce",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "15 mins",
  Starreview: 4.6,
  toppings: ["Spring onions"],
  instructions: "Step 1: Heat oil, scramble eggs and keep aside. Step 2: Sauté peas and carrots. Step 3: Add cooked rice, soy sauce, and eggs. Step 4: Stir-fry 3 minutes, garnish with spring onions, and serve.",
  reviews: 150
},
{
  id: 65,
  title: "Egg Bhurji Pav",
  category: "Indian",
  image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/egg_bhurji_pav.webp",
  ingredients: [
    "3 eggs",
    "2 pav buns",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1/2 tsp turmeric",
    "1/2 tsp chili powder",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "12 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and tomatoes. Step 2: Beat eggs with spices, pour into pan and scramble. Step 3: Serve with toasted pav buns and garnish with coriander.",
  reviews: 140
},
{
  id: 66,
  title: "Egg Salad Indian Style",
  category: "Indian",
  image: "https://eggs.ca/wp-content/uploads/2024/06/Masala-Egg-Kachumber-Salad-CMS.jpg",
  ingredients: [
    "2 boiled eggs",
    "1 cucumber (chopped)",
    "1 tomato (chopped)",
    "1/4 tsp turmeric",
    "1/2 tsp chili powder",
    "Salt to taste",
    "1 tsp lemon juice"
  ],
  type: "non-veg",
  timing: "10 mins",
  Starreview: 4.3,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Chop boiled eggs, cucumber, and tomato. Step 2: Mix with spices and lemon juice. Step 3: Garnish with coriander and serve chilled.",
  reviews: 100
},
{
  id: 67,
  title: "Egg Frankie Quick",
  category: "Indian",
  image: "https://i.ytimg.com/vi/bVHjOwxoV1s/maxresdefault.jpg",
  ingredients: [
    "2 eggs",
    "1 tortilla",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1/4 tsp turmeric",
    "1/2 tsp chili powder",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "15 mins",
  Starreview: 4.5,
  toppings: ["Mint chutney"],
  instructions: "Step 1: Heat oil, sauté onion and tomato. Step 2: Beat eggs with spices, cook and scramble. Step 3: Place in tortilla with chutney, roll, and serve.",
  reviews: 120
},
{
  id: 68,
  title: "Indian Egg Wrap",
  category: "Indian",
  image: "https://shahzadidevje.com/wp-content/uploads/2023/12/30-Minute-Roti-Egg-Wrap-Breakfast.jpg",
  ingredients: [
    "2 eggs",
    "1 chapati",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1/4 tsp turmeric",
    "1/2 tsp chili powder",
    "1 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "12 mins",
  Starreview: 4.4,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onion and tomato. Step 2: Beat eggs with spices, cook and scramble. Step 3: Place mixture on chapati, roll, and serve hot.",
  reviews: 110
},

// 30-min Non-Veg Recipes
{
  id: 69,
  title: "Chicken Curry Classic",
  category: "Indian",
  image: "https://burmawalakitchen.com/wp-content/uploads/2024/10/Classic-Chicken-Curry-5.jpg",
  ingredients: [
    "500g chicken (cut pieces)",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomatoes, turmeric, chili powder, and cook. Step 3: Add chicken, cover, and cook 20 minutes. Step 4: Sprinkle garam masala, garnish, and serve.",
  reviews: 200
},
{
  id: 70,
  title: "Butter Chicken Quick",
  category: "Indian",
  image: "https://images.squarespace-cdn.com/content/v1/652ad68582e0757415a4dc4f/1699470466496-MXZSK5PP7OFUPFCYUEIJ/Butter%2BChicken.jpg",
  ingredients: [
    "500g chicken (boneless)",
    "1 onion (chopped)",
    "2 tomatoes (pureed)",
    "2 tsp butter",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "Salt to taste",
    "1/4 cup cream"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Cream swirl", "Coriander"],
  instructions: "Step 1: Heat butter, sauté onions and ginger-garlic paste. Step 2: Add tomato puree and spices, cook. Step 3: Add chicken, cook 20 minutes. Step 4: Add cream, stir, garnish, and serve.",
  reviews: 250
},
{
  id: 71,
  title: "Egg Curry Traditional",
  category: "Indian",
  image: "https://glebekitchen.com/wp-content/uploads/2019/06/eggcurryclosecrop-above.jpg",
  ingredients: [
    "6 boiled eggs",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomatoes, turmeric, chili powder, and cook. Step 3: Add boiled eggs, simmer 10 mins. Step 4: Sprinkle garam masala, garnish, and serve.",
  reviews: 180
},
{
  id: 72,
  title: "Chicken Tikka Masala",
  category: "Indian",
  image: "https://littleferrarokitchen.com/wp-content/uploads/2023/02/creamy-chicken-tikka-masala-recipe-500x500.jpg",
  ingredients: [
    "500g chicken (cubed)",
    "1 onion (chopped)",
    "2 tomatoes (pureed)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste",
    "1/4 cup cream"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomato puree and spices. Step 3: Add chicken, cook 20 mins. Step 4: Add cream, stir, garnish, and serve.",
  reviews: 220
},
{
  id: 73,
  title: "Chicken Fry Spicy",
  category: "Indian",
  image: "https://cdn.apartmenttherapy.info/image/upload/v1723482243/k/Photo/Recipes/2024-08-korean-fried-chicken/190-korean-fried-chicken-175.jpg",
  ingredients: [
    "500g chicken pieces",
    "2 tsp chili powder",
    "1/2 tsp turmeric",
    "1 tsp ginger-garlic paste",
    "1 tsp lemon juice",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.6,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Marinate chicken with spices and lemon juice 10 mins. Step 2: Heat oil, fry chicken until golden and cooked. Step 3: Garnish with coriander and serve hot.",
  reviews: 200
},
{
  id: 74,
  title: "Prawn Masala",
  category: "Indian",
  image: "https://i.ytimg.com/vi/SxUKfbLcSsk/maxresdefault.jpg",
  ingredients: [
    "300g prawns",
    "1 onion (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomatoes and spices, cook 5 mins. Step 3: Add prawns, cook 10 mins. Step 4: Garnish and serve.",
  reviews: 180
},
{
  id: 75,
  title: "Chicken Saagwala",
  category: "Indian",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJPk6gHGPa4raZE57v4c6DpTYHzmqdyXBdw&s",
  ingredients: [
    "500g chicken (cubed)",
    "2 cups spinach puree",
    "1 onion (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add chicken and spices, cook 20 mins. Step 3: Add spinach puree, simmer 10 mins. Step 4: Garnish and serve.",
  reviews: 210
},
{
  id: 76,
  title: "Chicken Vindaloo Quick",
  category: "Indian",
  image: "https://www.chilipeppermadness.com/wp-content/uploads/2023/04/Chicken-Vindaloo-Recipe1.jpg",
  ingredients: [
    "500g chicken (cubed)",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomatoes and spices, cook 5 mins. Step 3: Add chicken, simmer 20 mins. Step 4: Garnish and serve hot.",
  reviews: 190
},
{
  id: 77,
  title: "Mutton Curry Easy",
  category: "Indian",
  image: "https://i0.wp.com/www.foodfashionparty.com/wp-content/uploads/2020/12/mutton-3-scaled.jpg",
  ingredients: [
    "500g mutton pieces",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add tomatoes and spices, cook 5 mins. Step 3: Add mutton, cook covered 20 mins. Step 4: Garnish and serve.",
  reviews: 220
},
{
  id: 78,
  title: "Chicken Korma Quick",
  category: "Indian",
  image: "https://thislittlehome.com/wp-content/uploads/korma_curry_coconut_milk-14-500x500.jpg",
  ingredients: [
    "500g chicken (cubed)",
    "1 onion (chopped)",
    "2 tsp yogurt",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste",
    "2 tbsp cream"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Coriander leaves", "Cream swirl"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add chicken and spices, cook 20 mins. Step 3: Add yogurt and cream, simmer 5 mins. Step 4: Garnish and serve.",
  reviews: 200
},
{
  id: 79,
  title: "Egg Curry South Style",
  category: "Indian",
  image: "https://kitchenofdebjani.com/wp-content/uploads/2024/09/Easy-Egg-Curry-aka-Aanda-Curry-recipe-debjanir-rannaghar.jpg",
  ingredients: [
    "6 boiled eggs",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste",
    "Curry leaves"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions, ginger-garlic paste, and curry leaves. Step 2: Add tomatoes and spices, cook 5 mins. Step 3: Add boiled eggs, simmer 20 mins. Step 4: Garnish and serve.",
  reviews: 180
},
{
  id: 80,
  title: "Chicken Do Pyaza Quick",
  category: "Indian",
  image: "https://sinfullyspicy.com/wp-content/uploads/2023/05/1200-by-1200-images-1-500x500.jpg",
  ingredients: [
    "500g chicken (cubed)",
    "2 onions (sliced)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1/2 tsp turmeric",
    "1 tsp chili powder",
    "1/2 tsp garam masala",
    "2 tsp oil",
    "Salt to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and ginger-garlic paste. Step 2: Add chicken and tomatoes with spices, cook 25 mins. Step 3: Garnish and serve hot.",
  reviews: 220
},
{
  id: 81,
  title: "Caprese Salad Toast",
  category: "Italian",
  image: "https://www.pumpkinnspice.com/wp-content/uploads/2015/05/toasted-caprese-garlic-bread-4.jpg",
  ingredients: [
    "2 slices ciabatta bread",
    "1 tomato (sliced)",
    "100g fresh mozzarella (sliced)",
    "Fresh basil leaves",
    "1 tsp olive oil",
    "Salt and black pepper to taste",
    "Balsamic glaze (optional)"
  ],
  type: "veg",
  timing: "10 mins",
  Starreview: 4.6,
  toppings: ["Basil leaves", "Balsamic drizzle"],
  instructions: "Step 1: Toast the ciabatta slices until golden. Step 2: Layer tomato and mozzarella slices on the toasted bread. Step 3: Sprinkle salt, pepper, and add fresh basil leaves. Step 4: Drizzle olive oil and optional balsamic glaze. Step 5: Serve immediately as a fresh Italian snack or appetizer.",
  reviews: 85
},

{
  id: 82,
  title: "Pasta Aglio e Olio",
  category: "Italian",
  image: "https://images.services.kitchenstories.io/UY89c4f471NaK1C-BQ07FGZ_qVA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R131-final-photo-3-sg.jpg",
  ingredients: [
    "200g spaghetti",
    "4 cloves garlic (sliced)",
    "1/4 cup olive oil",
    "1/2 tsp red chili flakes",
    "Salt to taste",
    "Fresh parsley (chopped)",
    "Grated parmesan cheese (optional)"
  ],
  type: "veg",
  timing: "20 mins",
  Starreview: 4.8,
  toppings: ["Chopped parsley", "Grated parmesan"],
  instructions: "Step 1: Cook spaghetti according to package instructions. Step 2: Heat olive oil in a pan, add garlic and chili flakes, sauté until garlic is golden. Step 3: Add cooked pasta and toss to coat with oil and garlic. Step 4: Season with salt, sprinkle parsley and parmesan. Step 5: Serve hot.",
  reviews: 250
},
{
  id: 83,
  title: "Chicken Piccata",
  category: "Italian",
  image: "https://www.kitchensanctuary.com/wp-content/uploads/2024/02/Lemon-Chicken-Piccata-square-FS.jpg",
  ingredients: [
    "2 chicken breasts (sliced thin)",
    "1/2 cup flour",
    "2 tbsp olive oil",
    "1/4 cup white wine",
    "2 tbsp lemon juice",
    "2 tbsp capers",
    "Salt and pepper to taste",
    "Fresh parsley (chopped)"
  ],
  type: "non-veg",
  timing: "25 mins",
  Starreview: 4.7,
  toppings: ["Parsley"],
  instructions: "Step 1: Dredge chicken in flour seasoned with salt and pepper. Step 2: Heat oil in a pan, cook chicken until golden on both sides. Step 3: Remove chicken, add wine, lemon juice, and capers to deglaze the pan. Step 4: Return chicken to pan and simmer 5 minutes. Step 5: Garnish with parsley and serve.",
  reviews: 180
},
{
  id: 84,
  title: "Risotto Funghi",
  category: "Italian",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q5aDEDvQ3cS93SfhMS6AFSoGPNa2FXr_-Q&s",
  ingredients: [
    "1 cup arborio rice",
    "200g mushrooms (sliced)",
    "1 small onion (chopped)",
    "2 tbsp butter",
    "3 cups vegetable stock (warm)",
    "1/4 cup white wine",
    "Salt and pepper to taste",
    "Parmesan cheese (grated)"
  ],
  type: "veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Parmesan cheese", "Chopped parsley"],
  instructions: "Step 1: Heat butter in a pan, sauté onions and mushrooms until soft. Step 2: Add rice, stir to coat. Step 3: Pour wine, cook until absorbed. Step 4: Gradually add warm stock, stirring constantly, until rice is creamy and cooked. Step 5: Season with salt and pepper, top with parmesan and parsley. Serve hot.",
  reviews: 210
},
{
  id: 86,
  title: "Penne alla Vodka",
  category: "Italian",
  image: "https://deeslittlekitchn.com/wp-content/uploads/2023/09/chickenpennevodkafeatured.jpg",
  ingredients: [
    "200g penne pasta",
    "1/2 cup tomato puree",
    "1/4 cup heavy cream",
    "2 tbsp vodka",
    "2 cloves garlic (minced)",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "Parmesan cheese (grated)",
    "Fresh basil for garnish"
  ],
  type: "veg",
  timing: "25 mins",
  Starreview: 4.6,
  toppings: ["Parmesan", "Basil"],
  instructions: "Step 1: Cook penne according to package instructions. Step 2: Heat olive oil, sauté garlic until fragrant. Step 3: Add tomato puree and vodka, cook 5 minutes. Step 4: Stir in cream, season with salt and pepper. Step 5: Toss cooked penne in sauce. Garnish with parmesan and basil. Serve warm.",
  reviews: 160
},
{
  id: 87,
  title: "Chicken Marsala",
  category: "Italian",
  image: "https://seasonandthyme.com/wp-content/uploads/2025/01/olive-garden-stuffed-chicken-marsala-featured.jpg",
  ingredients: [
    "2 chicken breasts (pounded thin)",
    "1/2 cup flour",
    "2 tbsp olive oil",
    "200g mushrooms (sliced)",
    "1/2 cup Marsala wine",
    "1/2 cup chicken stock",
    "Salt and pepper to taste",
    "Fresh parsley (chopped)"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Parsley"],
  instructions: "Step 1: Dredge chicken in flour, season with salt and pepper. Step 2: Heat oil, cook chicken until golden and remove. Step 3: Sauté mushrooms in same pan. Step 4: Add Marsala wine and stock, simmer 5 minutes. Step 5: Return chicken to pan, coat with sauce, simmer 5 more minutes. Garnish with parsley. Serve hot.",
  reviews: 200
},
{
  id: 88,
  title: "Bruschetta al Pomodoro",
  category: "Italian",
  image: "https://italianeasyrecipes.com/wp-content/uploads/2025/05/bruschetta-al-pomodoro-recipe-500x375.jpg",
  ingredients: [
    "4 slices baguette",
    "2 medium tomatoes (diced)",
    "2 cloves garlic (minced)",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "Fresh basil leaves"
  ],
  type: "veg",
  timing: "15 mins",
  Starreview: 4.5,
  toppings: ["Basil leaves", "Drizzle of olive oil"],
  instructions: "Step 1: Toast baguette slices until golden. Step 2: Mix tomatoes, garlic, olive oil, salt, and pepper. Step 3: Spoon mixture onto toasted bread. Step 4: Garnish with fresh basil and serve as appetizer.",
  reviews: 140
},
{
  id: 89,
  title: "Shrimp Scampi",
  category: "Italian",
  image: "https://littlespoonfarm.com/wp-content/uploads/2024/07/Shrimp-Scampi-Recipe-photo-1.jpg",
  ingredients: [
    "200g shrimp (peeled and deveined)",
    "200g linguine",
    "3 cloves garlic (minced)",
    "2 tbsp butter",
    "2 tbsp olive oil",
    "1/4 cup white wine",
    "Juice of 1 lemon",
    "Salt and pepper to taste",
    "Chopped parsley for garnish"
  ],
  type: "non-veg",
  timing: "20 mins",
  Starreview: 4.9,
  toppings: ["Parsley", "Lemon wedge"],
  instructions: "Step 1: Cook linguine according to package instructions. Step 2: Heat butter and olive oil, sauté garlic until fragrant. Step 3: Add shrimp, cook until pink. Step 4: Pour wine and lemon juice, simmer 2 minutes. Step 5: Toss in cooked linguine, season with salt and pepper. Garnish with parsley and lemon wedge. Serve hot.",
  reviews: 190
},
{
  id: 90,
  title: "Chicken Alfredo Pasta",
  category: "Italian",
  image: "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg",
  ingredients: [
    "200g fettuccine",
    "2 chicken breasts (sliced)",
    "1/2 cup heavy cream",
    "2 tbsp butter",
    "2 cloves garlic (minced)",
    "1/4 cup grated parmesan",
    "Salt and pepper to taste",
    "Chopped parsley for garnish"
  ],
  type: "non-veg",
  timing: "25 mins",
  Starreview: 4.8,
  toppings: ["Parmesan", "Parsley"],
  instructions: "Step 1: Cook fettuccine according to package instructions. Step 2: Heat butter, sauté garlic, add chicken slices and cook until golden. Step 3: Stir in cream and parmesan, simmer until thickened. Step 4: Toss in cooked fettuccine, season with salt and pepper. Step 5: Garnish with parsley and serve hot.",
  reviews: 210
},
{
  id: 91,
  title: "Italian Sausage & Peppers",
  category: "Italian",
  image: "https://www.seriouseats.com/thmb/dezST9abkxqkvi2aOHzpgsA5CAM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-ItalianSausagesandPeppers-VictorProtasio-01-2a18561eca914f849f9f9bbe57880c2b.jpg",
  ingredients: [
    "4 Italian sausages",
    "1 red bell pepper (sliced)",
    "1 yellow bell pepper (sliced)",
    "1 onion (sliced)",
    "2 tbsp olive oil",
    "1 tsp dried oregano",
    "Salt and pepper to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.7,
  toppings: ["Fresh basil"],
  instructions: "Step 1: Heat olive oil in a pan, cook sausages until browned and cooked through. Step 2: Remove sausages, sauté onions and peppers until soft. Step 3: Return sausages to pan, sprinkle oregano, salt, and pepper. Step 4: Cook 5 more minutes, garnish with fresh basil. Serve hot.",
  reviews: 180
},
{
  id: 92,
  title: "Shrimp Fra Diavolo",
  category: "Italian",
  image: "https://i2.wp.com/pressurecookingtoday.com/wp-content/uploads/2020/01/Shrimp-Diavolo-over-Ziti-Pressure-Cooking-Today.jpg",
  ingredients: [
    "200g shrimp (peeled and deveined)",
    "200g spaghetti",
    "2 cloves garlic (minced)",
    "1/2 tsp red chili flakes",
    "1 cup tomato sauce",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "Chopped parsley for garnish"
  ],
  type: "non-veg",
  timing: "25 mins",
  Starreview: 4.9,
  toppings: ["Parsley"],
  instructions: "Step 1: Cook spaghetti as per instructions. Step 2: Heat olive oil, sauté garlic and chili flakes. Step 3: Add shrimp, cook until pink. Step 4: Stir in tomato sauce, simmer 5 minutes. Step 5: Toss in spaghetti, season with salt and pepper. Garnish with parsley and serve hot.",
  reviews: 200
},
{
  id: 93,
  title: "Chicken Cacciatore",
  category: "Italian",
  image: "https://www.savingdessert.com/wp-content/uploads/2012/01/Chicken-Cacciatore-6-500x375.jpg",
  ingredients: [
    "2 chicken thighs",
    "1/2 cup tomato sauce",
    "1/2 cup chicken stock",
    "1 onion (sliced)",
    "1 bell pepper (sliced)",
    "2 cloves garlic (minced)",
    "2 tbsp olive oil",
    "1 tsp dried oregano",
    "Salt and pepper to taste"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Fresh parsley"],
  instructions: "Step 1: Heat olive oil, brown chicken thighs on both sides. Step 2: Remove chicken, sauté onions, peppers, and garlic. Step 3: Return chicken to pan, add tomato sauce, stock, oregano, salt, and pepper. Step 4: Simmer 15 minutes until chicken is cooked and sauce thickens. Garnish with parsley and serve.",
  reviews: 220
},
{
  id: 94,
  title: "Tuscan Garlic Chicken",
  category: "Italian",
  image: "https://sunkissedkitchen.com/wp-content/uploads/2019/07/creamy-tuscan-garlic-chicken-500x453.jpg",
  ingredients: [
    "2 chicken breasts",
    "2 cloves garlic (minced)",
    "1/4 cup chicken stock",
    "1/4 cup heavy cream",
    "2 tbsp olive oil",
    "1 tsp dried Italian herbs",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  type: "non-veg",
  timing: "25 mins",
  Starreview: 4.7,
  toppings: ["Parsley"],
  instructions: "Step 1: Season chicken with salt, pepper, and Italian herbs. Step 2: Heat olive oil, cook chicken until golden and remove. Step 3: Sauté garlic, add stock and cream, simmer 5 minutes. Step 4: Return chicken to sauce, cook 5 more minutes. Garnish with parsley and serve hot.",
  reviews: 190
},
{
  id: 95,
  title: "Prawn Risotto",
  category: "Italian",
  image: "https://www.theglutenfreeblogger.com/wp-content/uploads/2022/03/prawn-and-chorizo-risotto-recipe-gluten-free-5-scaled.jpg",
  ingredients: [
    "1 cup arborio rice",
    "200g prawns (peeled)",
    "1 small onion (chopped)",
    "2 cloves garlic (minced)",
    "3 cups seafood stock (warm)",
    "2 tbsp butter",
    "Salt and pepper to taste",
    "Parmesan cheese (optional)"
  ],
  type: "non-veg",
  timing: "30 mins",
  Starreview: 4.9,
  toppings: ["Parmesan", "Parsley"],
  instructions: "Step 1: Melt butter in pan, sauté onion and garlic until soft. Step 2: Add rice, stir to coat. Step 3: Gradually add warm stock, stirring constantly until rice is creamy. Step 4: Add prawns, cook until pink. Step 5: Season with salt and pepper, sprinkle parmesan and parsley before serving.",
  reviews: 210
},
{
  id: 96,
  title: "Chicken Pesto Pasta",
  category: "Italian",
  image: "https://www.lastingredient.com/wp-content/uploads/2014/04/pea-pesto1.jpg",
  ingredients: [
    "200g penne pasta",
    "2 chicken breasts (sliced)",
    "1/4 cup basil pesto",
    "2 tbsp olive oil",
    "2 cloves garlic (minced)",
    "Salt and pepper to taste",
    "Grated parmesan for garnish"
  ],
  type: "non-veg",
  timing: "20 mins",
  Starreview: 4.8,
  toppings: ["Parmesan", "Basil leaves"],
  instructions: "Step 1: Cook penne as per package instructions. Step 2: Heat olive oil, sauté garlic, add chicken and cook until done. Step 3: Toss cooked pasta with chicken and pesto. Step 4: Season with salt and pepper, garnish with parmesan and basil leaves. Serve hot.",
  reviews: 200
},
{
  id: 97,
  title: "Garlic Butter Shrimp",
  category: "Italian",
  image: "https://thecozycook.com/wp-content/uploads/2023/07/Garlic-Butter-Shrimp-f.jpg",
  ingredients: [
    "200g shrimp (peeled and deveined)",
    "2 cloves garlic (minced)",
    "2 tbsp butter",
    "1/2 tsp red chili flakes",
    "Salt and pepper to taste",
    "Chopped parsley for garnish",
    "Lemon wedge"
  ],
  type: "non-veg",
  timing: "10 mins",
  Starreview: 4.9,
  toppings: ["Parsley", "Lemon"],
  instructions: "Step 1: Heat butter in a pan, sauté garlic until fragrant. Step 2: Add shrimp, season with chili flakes, salt, and pepper. Step 3: Cook shrimp 3–4 minutes until pink and cooked through. Step 4: Garnish with parsley and serve with a lemon wedge.",
  reviews: 150
},
{
  id: 98,
  title: "Caprese Chicken Skillet",
  category: "Italian",
  image: "https://www.paleorunningmomma.com/wp-content/uploads/2020/07/chicken-caprese_-2.jpg",
  ingredients: [
    "2 chicken breasts",
    "4 cherry tomatoes (halved)",
    "4 slices mozzarella",
    "2 tbsp olive oil",
    "1 tsp dried Italian herbs",
    "Salt and pepper to taste",
    "Fresh basil leaves for garnish"
  ],
  type: "non-veg",
  timing: "15 mins",
  Starreview: 4.8,
  toppings: ["Basil", "Olive oil drizzle"],
  instructions: "Step 1: Season chicken with salt, pepper, and Italian herbs. Step 2: Heat olive oil in a skillet, cook chicken 4–5 minutes per side until golden. Step 3: Top with cherry tomatoes and mozzarella, cover to melt cheese. Step 4: Garnish with basil leaves and drizzle olive oil. Serve hot.",
  reviews: 140
},

{
  id: 99,
  title: "Avocado Toast with Poached Egg",
  category: "Breakfast",
  image: "https://cookingwithawallflower.com/wp-content/uploads/2018/01/Everything-Spice-Poached-Egg-Avocado-Toast-1.jpg",
  ingredients: [
    "2 slices whole grain bread",
    "1 ripe avocado",
    "1 egg",
    "Salt and pepper to taste",
    "Chili flakes (optional)",
    "Lemon juice"
  ],
  type: "non-veg",
  timing: "10 mins",
  Starreview: 4.8,
  toppings: ["Chili flakes", "Lemon wedge"],
  instructions: "Step 1: Toast bread slices. Step 2: Mash avocado with salt, pepper, and lemon juice. Step 3: Poach egg until yolk is slightly runny. Step 4: Spread avocado on toast and place poached egg on top. Step 5: Sprinkle chili flakes and serve immediately.",
  reviews: 120
},
{
  id: 100,
  title: "Banana Peanut Butter Smoothie",
  category: "Breakfast",
  image: "https://www.wellplated.com/wp-content/uploads/2020/12/Peanut-Butter-Banana-Smoothie-recipe.jpg",
  ingredients: [
    "1 banana",
    "2 tbsp peanut butter",
    "1 cup almond milk",
    "1 tsp maple syrup",
    "Ice cubes"
  ],
  type: "vegan",
  timing: "5 mins",
  Starreview: 4.6,
  toppings: ["Chia seeds", "Sliced banana"],
  instructions: "Step 1: Place banana, peanut butter, almond milk, maple syrup, and ice cubes into a blender. Step 2: Blend until smooth and creamy. Step 3: Pour into a glass and top with chia seeds and banana slices. Step 4: Serve chilled.",
  reviews: 85
},
{
  id: 102,
  title: "Veggie Omelette",
  category: "Breakfast",
  image: "https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Featured-1.jpg",
  ingredients: [
    "2 eggs",
    "1/4 cup diced onion",
    "1/4 cup diced tomato",
    "1/4 cup chopped bell peppers",
    "1 tsp butter",
    "Salt and pepper to taste",
    "Fresh coriander for garnish"
  ],
  type: "veg",
  timing: "12 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Beat eggs with salt and pepper. Step 2: Heat butter in a non-stick pan and sauté onion, tomato, and bell peppers until soft. Step 3: Pour eggs over veggies, cook until set. Step 4: Fold omelette and cook another minute. Step 5: Garnish with coriander and serve hot.",
  reviews: 90
},
{
  id: 103,
  title: "Vegan Chia Pudding",
  category: "Breakfast",
  image: "https://www.twospoons.ca/wp-content/uploads/2018/04/matcha-chia-pudding-recipe-easy-vegan-gluten-free-twospoons-9-scaled.jpg",
  ingredients: [
    "3 tbsp chia seeds",
    "1 cup almond milk",
    "1 tsp maple syrup",
    "1/2 tsp vanilla extract",
    "Fresh berries for topping"
  ],
  type: "vegan",
  timing: "10 mins (plus overnight soaking)",
  Starreview: 4.5,
  toppings: ["Blueberries", "Strawberries"],
  instructions: "Step 1: Mix chia seeds, almond milk, maple syrup, and vanilla extract in a bowl. Step 2: Stir well and refrigerate overnight. Step 3: In the morning, stir pudding and top with fresh berries. Step 4: Serve chilled.",
  reviews: 70
},
{
  id: 104,
  title: "Egg Bhurji (Indian Scrambled Eggs)",
  category: "Breakfast",
  image: "https://spicecravings.com/wp-content/uploads/2020/04/Egg-Bhurji-2b.jpg",
  ingredients: [
    "3 eggs",
    "1 small onion (chopped)",
    "1 tomato (chopped)",
    "1 green chili (chopped)",
    "1/4 tsp turmeric powder",
    "1 tsp oil",
    "Salt to taste",
    "Fresh coriander leaves"
  ],
  type: "non-veg",
  timing: "15 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil in a pan and sauté onions and green chili until golden. Step 2: Add tomatoes and cook for 2 minutes. Step 3: Beat eggs with turmeric and salt. Step 4: Pour eggs into pan and scramble until cooked. Step 5: Garnish with coriander and serve with toast or paratha.",
  reviews: 110
},
{
  id: 105,
  title: "Vegetable Poha",
  category: "Breakfast",
  image: "https://palatesdesire.com/wp-content/uploads/2022/07/Vegetable-diet-poha-recipe@palates-desire.jpg",
  ingredients: [
    "1 cup poha (flattened rice)",
    "1 medium potato (diced)",
    "1 small onion (chopped)",
    "2 green chilies (slit)",
    "10 curry leaves",
    "1/4 tsp turmeric powder",
    "1 tbsp peanuts",
    "1 tbsp oil",
    "Salt to taste",
    "Fresh coriander"
  ],
  type: "veg",
  timing: "15 mins",
  Starreview: 4.5,
  toppings: ["Sev", "Lemon wedge"],
  instructions: "Step 1: Rinse poha and drain. Step 2: Heat oil, fry peanuts until golden. Step 3: Add curry leaves, green chilies, onion, sauté until soft. Step 4: Add potato, turmeric, salt, cook until tender. Step 5: Add poha, toss gently. Step 6: Garnish with coriander and sev, serve with lemon wedge.",
  reviews: 95
},
{
  id: 106,
  title: "Vegan Tofu Scramble",
  category: "Breakfast",
  image: "https://www.thespruceeats.com/thmb/6yU_jyIljfAujI2WwsYZabUgyos=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/curried-tofu-scramble-with-spinach-3376540-hero-01-5c82e8b346e0fb00013364d3.jpg",
  ingredients: [
    "200g firm tofu",
    "1/4 cup chopped onions",
    "1/4 cup chopped bell peppers",
    "1/2 tsp turmeric powder",
    "1 tsp olive oil",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  type: "vegan",
  timing: "12 mins",
  Starreview: 4.6,
  toppings: ["Parsley"],
  instructions: "Step 1: Crumble tofu. Step 2: Heat oil, sauté onions and bell peppers until soft. Step 3: Add crumbled tofu, turmeric, salt, and pepper. Step 4: Cook for 5–6 minutes, stirring occasionally. Step 5: Garnish with parsley and serve hot.",
  reviews: 60
},
{
  id: 107,
  title: "Masala Dosa",
  category: "Breakfast",
  image: "https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png",
  ingredients: [
    "1 cup rice",
    "1/4 cup urad dal",
    "1/2 tsp fenugreek seeds",
    "Salt to taste",
    "2 medium potatoes (boiled and mashed)",
    "1 onion (chopped)",
    "1 green chili (chopped)",
    "1/2 tsp turmeric powder",
    "2 tsp oil",
    "Fresh coriander"
  ],
  type: "veg",
  timing: "30 mins",
  Starreview: 4.8,
  toppings: ["Coconut chutney", "Sambar"],
  instructions: "Step 1: Soak rice and dal overnight, grind to a smooth batter, ferment for 8 hours. Step 2: Heat oil in a pan, sauté onions and green chili, add turmeric and mashed potatoes. Step 3: Mix and cook for 2–3 minutes. Step 4: Heat dosa pan, pour batter, cook until crisp. Step 5: Place potato filling, fold dosa. Step 6: Serve with chutney and sambar.",
  reviews: 140
},
{
  id: 108,
  title: "Egg Paratha Roll",
  category: "Breakfast",
  image: "https://i.ytimg.com/vi/c4JbpNyx9Wk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqTSa-4Tpc5p7SMKnVfB3sB9LTLA",
  ingredients: [
    "2 parathas",
    "2 eggs",
    "1 small onion (chopped)",
    "1 green chili (chopped)",
    "Salt and pepper to taste",
    "1 tsp oil"
  ],
  type: "non-veg",
  timing: "20 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil in a pan, sauté onion and green chili. Step 2: Beat eggs, pour over sautéed veggies, cook while stirring to scramble. Step 3: Spread cooked egg mixture on paratha, roll tightly. Step 4: Serve hot with ketchup or chutney.",
  reviews: 100
},
{
  id: 109,
  title: "Vegan Overnight Oats",
  category: "Breakfast",
  image: "https://www.emilieeats.com/wp-content/uploads/2016/01/Neapolitan_overnight_oats_1_edit.jpg",
  ingredients: [
    "1/2 cup rolled oats",
    "1 cup almond milk",
    "1 tsp chia seeds",
    "1 tsp maple syrup",
    "Fresh fruits for topping"
  ],
  type: "vegan",
  timing: "10 mins (plus overnight)",
  Starreview: 4.5,
  toppings: ["Banana slices", "Blueberries"],
  instructions: "Step 1: Mix oats, almond milk, chia seeds, and maple syrup in a jar. Step 2: Cover and refrigerate overnight. Step 3: In the morning, stir and top with fresh fruits. Step 4: Serve chilled.",
  reviews: 75
},
{
  id: 110,
  title: "Paneer Bhurji Wrap",
  category: "Breakfast",
  image: "https://www.nutralite.com/wp-content/uploads/2024/02/Paneer-Egg-Bhurji-Wrap.png",
  ingredients: [
    "200g paneer (crumbled)",
    "1 onion (chopped)",
    "1 tomato (chopped)",
    "1 green chili (chopped)",
    "1/2 tsp turmeric powder",
    "1/2 tsp garam masala",
    "1 tbsp oil",
    "Salt to taste",
    "2 whole wheat wraps",
    "Fresh coriander"
  ],
  type: "veg",
  timing: "15 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves", "Lemon wedge"],
  instructions: "Step 1: Heat oil, sauté onions and green chili. Step 2: Add tomato, cook 2 minutes. Step 3: Add crumbled paneer, turmeric, garam masala, salt, cook 3–4 minutes. Step 4: Place mixture in wrap, fold. Step 5: Garnish with coriander, serve hot.",
  reviews: 110
},
{
  id: 111,
  title: "Vegan Sweet Potato Hash",
  category: "Breakfast",
  image: "https://twokooksinthekitchen.com/wp-content/uploads/2019/02/IMG_8861-2.jpg",
  ingredients: [
    "1 cup diced sweet potato",
    "1/2 cup diced bell peppers",
    "1/2 cup diced onion",
    "1 tsp olive oil",
    "Salt and pepper to taste",
    "Fresh parsley"
  ],
  type: "vegan",
  timing: "25 mins",
  Starreview: 4.6,
  toppings: ["Parsley"],
  instructions: "Step 1: Heat oil in a pan, sauté onion and bell peppers until soft. Step 2: Add sweet potato, salt, and pepper, cook covered for 15–20 minutes until tender. Step 3: Garnish with parsley and serve.",
  reviews: 65
},
{
  id: 112,
  title: "Chicken Sausage Omelette",
  category: "Breakfast",
  image: "https://images.heb.com/is/image/HEBGrocery/Test/chopped-sausage-omelet-recipe.jpg",
  ingredients: [
    "2 eggs",
    "2 chicken sausages (sliced)",
    "1/4 cup diced onion",
    "1/4 cup bell peppers",
    "1 tsp oil",
    "Salt and pepper to taste"
  ],
  type: "non-veg",
  timing: "20 mins",
  Starreview: 4.8,
  toppings: ["Coriander leaves"],
  instructions: "Step 1: Heat oil, sauté onions and bell peppers. Step 2: Add sliced sausages, cook 2–3 minutes. Step 3: Beat eggs, pour over veggies and sausages. Step 4: Cook omelette until set, fold and serve hot.",
  reviews: 95
},
{
  id: 113,
  title: "Vegan Quinoa Porridge",
  category: "Breakfast",
  image: "https://www.twospoons.ca/wp-content/uploads/2018/03/20-minute-creamy-quinoa-porridge-vegan-recipe-twospoons-12-703x1054.jpg",
  ingredients: [
    "1/2 cup quinoa",
    "1 cup almond milk",
    "1 tsp maple syrup",
    "1/2 tsp cinnamon powder",
    "Fresh fruits for topping"
  ],
  type: "vegan",
  timing: "30 mins",
  Starreview: 4.7,
  toppings: ["Apple slices", "Blueberries"],
  instructions: "Step 1: Rinse quinoa and cook in almond milk for 20 minutes. Step 2: Add maple syrup and cinnamon, stir well. Step 3: Serve in bowls, top with fresh fruits.",
  reviews: 80
},
{
  id: 114,
  title: "Vegetable Frittata",
  category: "Breakfast",
  image: "https://img.taste.com.au/dWsya2i2/taste/2016/11/vegetable-frittata-4412-1.jpeg",
  ingredients: [
    "3 eggs",
    "1/4 cup diced onion",
    "1/4 cup bell peppers",
    "1/4 cup zucchini (sliced)",
    "1 tsp olive oil",
    "Salt and pepper to taste",
    "Fresh basil leaves"
  ],
  type: "veg",
  timing: "35 mins",
  Starreview: 4.8,
  toppings: ["Basil leaves"],
  instructions: "Step 1: Preheat oven to 180°C. Step 2: Heat oil, sauté onions, bell peppers, and zucchini for 5 minutes. Step 3: Beat eggs, add salt and pepper, pour over vegetables. Step 4: Bake for 25 minutes until set. Step 5: Garnish with basil and serve.",
  reviews: 120
},
{
  id: 115,
  title: "Baked Chicken Breakfast Casserole",
  category: "Breakfast",
  image: "https://www.lovebakesgoodcakes.com/wp-content/uploads/2023/12/Overnight-Christmas-Breakfast-Casserole-square.jpg",
  ingredients: [
    "4 eggs",
    "200g cooked chicken (shredded)",
    "1/2 cup diced bell peppers",
    "1/2 cup chopped spinach",
    "1/4 cup milk",
    "1/4 cup shredded cheese",
    "1 tsp olive oil",
    "Salt and pepper to taste"
  ],
  type: "non-veg",
  timing: "40 mins",
  Starreview: 4.8,
  toppings: ["Chopped parsley", "Shredded cheese"],
  instructions: "Step 1: Preheat oven to 180°C. Step 2: Heat olive oil, sauté bell peppers and spinach for 2–3 minutes. Step 3: In a bowl, beat eggs with milk, salt, and pepper. Step 4: Mix in chicken and sautéed veggies. Step 5: Pour mixture into greased baking dish, sprinkle cheese on top. Step 6: Bake for 30–35 minutes until set and golden. Step 7: Garnish with parsley and serve hot.",
  reviews: 90
},
{
  id: 116,
  title: "Vegan Breakfast Burrito Bowl",
  category: "Breakfast",
  image: "https://damntastyvegan.com/wp-content/uploads/2023/02/High-protein-vegan-breakfast-burrito-bowl-recipe.jpg",
  ingredients: [
    "1 cup cooked quinoa",
    "1/2 cup black beans",
    "1/2 cup diced bell peppers",
    "1/4 cup corn kernels",
    "1/4 avocado (sliced)",
    "1 tsp olive oil",
    "1/2 tsp cumin powder",
    "Salt and pepper to taste",
    "Fresh coriander leaves"
  ],
  type: "vegan",
  timing: "35 mins",
  Starreview: 4.7,
  toppings: ["Avocado slices", "Coriander leaves"],
  instructions: "Step 1: Heat olive oil in a pan, sauté bell peppers and corn for 5 minutes. Step 2: Add black beans, cumin powder, salt, and pepper, cook 5 more minutes. Step 3: In a bowl, layer cooked quinoa, sautéed veggies, and beans. Step 4: Top with avocado slices and coriander leaves. Step 5: Serve warm.",
  reviews: 80
},
{
  id: 117,
  title: "Non-Veg Shakshuka with Chicken",
  category: "Breakfast",
  image: "https://www.eatthriveglow.com/wp-content/uploads/2025/06/One-Pan-Chicken-Shakshuka-Recipe-Easy-Flavor-Packed.png",
  ingredients: [
    "3 eggs",
    "150g cooked chicken (diced)",
    "1 cup tomato puree",
    "1/2 onion (chopped)",
    "1 green chili (chopped)",
    "1/2 tsp paprika",
    "1 tsp olive oil",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  type: "non-veg",
  timing: "35 mins",
  Starreview: 4.8,
  toppings: ["Parsley", "Feta cheese (optional)"],
  instructions: "Step 1: Heat olive oil in a skillet, sauté onions and green chili until soft. Step 2: Add tomato puree, paprika, salt, and pepper, simmer for 10 minutes. Step 3: Stir in diced chicken and cook 10 minutes. Step 4: Make 3 small wells in the sauce, crack eggs into them. Step 5: Cover and cook until eggs are set (5–10 minutes). Step 6: Garnish with parsley and serve hot with bread.",
  reviews: 95
},
{
  id: 118,
  title: "Vegan Lentil Breakfast Stew",
  category: "Breakfast",
  image: "https://www.budgetbytes.com/wp-content/uploads/2018/10/Vegan-WInter-Lentil-Stew-dip-bread-1200.jpg",
  ingredients: [
    "1 cup red lentils",
    "1/2 cup diced carrots",
    "1/2 cup diced celery",
    "1/2 cup diced onion",
    "1 tsp olive oil",
    "2 cups vegetable broth",
    "1/2 tsp cumin powder",
    "1/2 tsp turmeric powder",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  type: "vegan",
  timing: "40 mins",
  Starreview: 4.7,
  toppings: ["Parsley", "Lemon wedge"],
  instructions: "Step 1: Heat olive oil in a pot, sauté onions, carrots, and celery until soft. Step 2: Add lentils, cumin, turmeric, salt, and pepper, stir well. Step 3: Pour in vegetable broth, bring to boil. Step 4: Reduce heat, simmer for 25–30 minutes until lentils are tender. Step 5: Garnish with parsley and serve hot with lemon wedge.",
  reviews: 75
},
{
  id: 119,
  title: "Non-Veg Breakfast Meatballs with Tomato Sauce",
  category: "Breakfast",
  image: "https://www.fromachefskitchen.com/wp-content/uploads/2018/11/Spiced-Meatballs-with-Tomato-Sauce-8.jpg",
  ingredients: [
    "200g ground chicken",
    "1/4 cup breadcrumbs",
    "1 egg",
    "1/4 cup onion (finely chopped)",
    "1/2 tsp garlic powder",
    "1/2 tsp paprika",
    "1 cup tomato puree",
    "1 tsp olive oil",
    "Salt and pepper to taste",
    "Fresh basil leaves"
  ],
  type: "non-veg",
  timing: "40 mins",
  Starreview: 4.8,
  toppings: ["Basil leaves", "Grated cheese (optional)"],
  instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix ground chicken, breadcrumbs, egg, onion, garlic powder, paprika, salt, and pepper. Step 3: Shape into small meatballs, place on greased baking tray. Step 4: Bake for 20 minutes until cooked through. Step 5: Heat olive oil, add tomato puree, simmer 5 minutes. Step 6: Pour sauce over meatballs, garnish with basil, and serve hot.",
  reviews: 85
},
{
  id: 120,
  title: "Vegan Savory Breakfast Muffins",
  category: "Breakfast",
  image: "https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-savoury-muffins-1..jpg",
  ingredients: [
    "1 cup whole wheat flour",
    "1/2 cup grated zucchini",
    "1/4 cup chopped bell peppers",
    "1/4 cup unsweetened almond milk",
    "2 tbsp olive oil",
    "1 tsp baking powder",
    "1/2 tsp salt",
    "1/4 tsp black pepper"
  ],
  type: "vegan",
  timing: "35 mins",
  Starreview: 4.6,
  toppings: ["Fresh herbs"],
  instructions: "Step 1: Preheat oven to 180°C. Step 2: In a bowl, mix flour, baking powder, salt, and pepper. Step 3: Add zucchini, bell peppers, almond milk, and olive oil, stir until combined. Step 4: Pour batter into greased muffin tray. Step 5: Bake for 25–30 minutes until muffins are firm and golden. Step 6: Garnish with fresh herbs and serve warm.",
  reviews: 70
},
{
  id: 121,
  title: "Vegan Masala Poha",
  category: "Indian",
  image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/32599/images/8ecf84c-6f4a-0100-71fd-477eca78f8e_img_267_raw-masala-poha-oil-free-no-cooking-involved-recipe_1551763630.jpg",
  ingredients: [
    "2 cups flattened rice (poha)",
    "1 medium onion (chopped)",
    "1 small potato (diced)",
    "2 green chilies (slit)",
    "10 curry leaves",
    "1/4 tsp turmeric powder",
    "1 tbsp peanuts",
    "1 tbsp oil",
    "Salt to taste",
    "Fresh coriander",
    "Lemon wedge"
  ],
  type: "vegan",
  timing: "15 mins",
  Starreview: 4.5,
  toppings: ["Fresh coriander", "Lemon wedge", "Sev (optional)"],
  instructions: "Step 1: Rinse poha in water, drain and set aside. Step 2: Heat oil in a pan, add peanuts, fry until golden. Step 3: Add curry leaves, green chilies, and onions, sauté until soft. Step 4: Add diced potato, turmeric, and salt, cook until potatoes are tender. Step 5: Add poha, toss gently to mix. Step 6: Cook for 2–3 minutes. Step 7: Garnish with fresh coriander and lemon juice. Step 8: Serve hot.",
  reviews: 150
},
{
  id: 122,
  title: "Vegan Chana Masala",
  category: "Indian",
  image: "https://lovingitvegan.com/wp-content/uploads/2021/10/Vegan-Chana-Masala-Square.jpg",
  ingredients: [
    "1 cup boiled chickpeas",
    "1 medium onion (chopped)",
    "2 tomatoes (pureed)",
    "1 tsp ginger-garlic paste",
    "1 tsp cumin seeds",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "1/2 tsp garam masala",
    "2 tbsp oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  type: "vegan",
  timing: "30 mins",
  Starreview: 4.7,
  toppings: ["Coriander leaves", "Lemon wedge"],
  instructions: "Step 1: Heat oil in a pan, add cumin seeds and let them splutter. Step 2: Add onions and sauté until golden. Step 3: Add ginger-garlic paste, sauté until raw smell disappears. Step 4: Add tomato puree, turmeric, red chili, coriander powder, and salt, cook until oil separates. Step 5: Add boiled chickpeas, mix well, simmer for 10–12 minutes. Step 6: Sprinkle garam masala, stir. Step 7: Garnish with coriander leaves and serve hot with rice or roti.",
  reviews: 200
},
  // --- Under 15 mins ---
  {
    id: 123,
    title: "Vegan Vegetable Sandwich",
    category: "Indian",
    image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2015/09/vegan-sandwich-lunch-1000x866.jpg",
    ingredients: [
      "2 slices whole grain bread",
      "1 small cucumber (sliced)",
      "1 small tomato (sliced)",
      "1/4 cup grated carrot",
      "1 tsp mustard sauce",
      "1 tsp vegan mayonnaise",
      "Salt and pepper to taste",
      "Lettuce leaves"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.4,
    toppings: ["Lettuce", "Sprouts"],
    instructions: "Step 1: Spread mustard and vegan mayo on bread slices. Step 2: Layer cucumber, tomato, carrot, and lettuce. Step 3: Sprinkle salt and pepper. Step 4: Close sandwich, cut diagonally, serve immediately.",
    reviews: 120
  },
  {
    id: 124,
    title: "Vegan Moong Sprout Salad",
    category: "Indian",
    image: "https://www.funfoodfrolic.com/wp-content/uploads/2022/03/Sprout-Salad-1.jpg",
    ingredients: [
      "1 cup moong sprouts",
      "1 small tomato (chopped)",
      "1 small cucumber (chopped)",
      "1/2 onion (chopped)",
      "1 green chili (finely chopped)",
      "1 tsp lemon juice",
      "Salt to taste",
      "Fresh coriander"
    ],
    type: "vegan",
    timing: "12 mins",
    Starreview: 4.5,
    toppings: ["Lemon wedge", "Coriander leaves"],
    instructions: "Step 1: Boil moong sprouts for 5 minutes and drain. Step 2: In a bowl, combine sprouts, tomato, cucumber, onion, and chili. Step 3: Add lemon juice and salt, mix well. Step 4: Garnish with coriander leaves and serve fresh.",
    reviews: 110
  },
  {
    id: 125,
    title: "Vegan Upma",
    category: "Indian",
    image: "https://browngirlveganeats.com/wp-content/uploads/2024/01/photo1705402399-2.jpeg",
    ingredients: [
      "1 cup semolina (rava)",
      "1/2 cup diced vegetables (carrot, peas, beans)",
      "1 onion (chopped)",
      "2 green chilies (slit)",
      "8 curry leaves",
      "2 tbsp oil",
      "2 cups water",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: 4.3,
    toppings: ["Coriander leaves", "Grated coconut (optional)"],
    instructions: "Step 1: Dry roast semolina for 2-3 minutes and keep aside. Step 2: Heat oil, add curry leaves, green chilies, and onions. Step 3: Add vegetables, sauté 2 minutes. Step 4: Add water and salt, bring to boil. Step 5: Slowly add semolina while stirring continuously. Step 6: Cook until fluffy, garnish with coriander, serve hot.",
    reviews: 130
  },

  // --- Under 30 mins ---
  {
    id: 126,
    title: "Vegan Vegetable Pulao",
    category: "Indian",
    image: "https://mamanagis.ie/wp-content/uploads/2021/11/Vegetable-Rice-Bowls.jpg",
    ingredients: [
      "1 cup basmati rice",
      "1/2 cup peas, carrots, beans",
      "1 onion (sliced)",
      "2 cloves, 1 bay leaf, 1 cinnamon stick",
      "2 green chilies",
      "1 tbsp oil",
      "2 cups water",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.6,
    toppings: ["Fried onions", "Mint leaves"],
    instructions: "Step 1: Wash rice and soak for 15 minutes. Step 2: Heat oil, add whole spices, sauté 1-2 minutes. Step 3: Add onions, sauté until golden. Step 4: Add vegetables, cook 2 minutes. Step 5: Add rice and water, bring to boil. Step 6: Cover and simmer until rice is cooked. Step 7: Garnish with fried onions and mint, serve hot.",
    reviews: 140
  },
  {
    id: 127,
    title: "Vegan Chickpea Curry",
    category: "Indian",
    image: "https://www.hauteandhealthyliving.com/wp-content/uploads/2020/01/Vegan-Chickpea-Coconut-Curry-11.jpg",
    ingredients: [
      "1 cup boiled chickpeas",
      "1 onion (chopped)",
      "2 tomatoes (pureed)",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp coriander powder",
      "1/2 tsp garam masala",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    type: "vegan",
    timing: "30 mins",
    Starreview: 4.7,
    toppings: ["Coriander leaves", "Lemon wedge"],
    instructions: "Step 1: Heat oil in a pan, add cumin seeds and let them splutter. Step 2: Add onions and sauté until golden. Step 3: Add ginger-garlic paste, sauté until raw smell disappears. Step 4: Add tomato puree, turmeric, red chili, coriander powder, and salt, cook until oil separates. Step 5: Add boiled chickpeas, mix well, simmer 10-12 minutes. Step 6: Sprinkle garam masala, stir. Step 7: Garnish with coriander and serve with roti or rice.",
    reviews: 160
  },
  {
    id: 128,
    title: "Vegan Lentil Soup (Dal Soup)",
    category: "Indian",
    image: "https://www.eatingwell.com/thmb/Z0BEeziNOHha8XZVXMdIHdi1Y8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7873236-vegan-lentil-soup-beauty-square-8ef4353751bf43718bc31c8b75ac1f37.jpg",
    ingredients: [
      "1 cup red lentils (masoor dal)",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "2 cloves garlic (chopped)",
      "1/2 tsp turmeric powder",
      "1/2 tsp cumin seeds",
      "1/2 tsp red chili powder",
      "2 tbsp oil",
      "4 cups water",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    type: "vegan",
    timing: "30 mins",
    Starreview: 4.8,
    toppings: ["Coriander leaves", "Lemon wedge"],
    instructions: "Step 1: Heat oil, add cumin seeds until they splutter. Step 2: Add onions and garlic, sauté until golden. Step 3: Add chopped tomato, turmeric, red chili powder, cook 3-4 minutes. Step 4: Add washed lentils and water, bring to boil. Step 5: Simmer until lentils are cooked (15-20 mins). Step 6: Adjust salt, garnish with coriander and lemon, serve hot.",
    reviews: 180
  },
  // --- Under 15 mins ---
  {
    id: 129,
    title: "Grilled Chicken Salad",
    category: "Healthy",
    image: "https://static.toiimg.com/thumb/61831141.cms?imgsize=664042&width=800&height=800",
    ingredients: [
      "150g chicken breast",
      "1 cup mixed greens",
      "1/2 cucumber (sliced)",
      "1/2 tomato (sliced)",
      "1 tsp olive oil",
      "Salt and pepper to taste",
      "1 tsp lemon juice"
    ],
    type: "non-veg",
    timing: "12 mins",
    Starreview: 4.7,
    toppings: ["Lemon wedge", "Parsley"],
    instructions: "Step 1: Grill chicken with salt, pepper, and olive oil for 8 mins. Step 2: Toss mixed greens, cucumber, and tomato in a bowl. Step 3: Slice chicken and place on salad. Step 4: Drizzle lemon juice, garnish with parsley, serve immediately.",
    reviews: 100
  },
  {
    id: 130,
    title: "Avocado Toast",
    category: "Healthy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9AIvAc6dkD5GTVhVASi91F4Jc4n7AbOFhw&s",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1/4 tsp red chili flakes",
      "Salt to taste",
      "1 tsp lemon juice",
      "Sprouts (optional)"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.6,
    toppings: ["Sprouts", "Chili flakes"],
    instructions: "Step 1: Toast the bread slices. Step 2: Mash avocado, add lemon juice, salt, and chili flakes. Step 3: Spread avocado on toast, top with sprouts. Step 4: Serve immediately.",
    reviews: 90
  },
  {
    id: 131,
    title: "Spinach & Egg White Omelette",
    category: "Healthy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjG2BmWlO1R-jxO59iHwLFOPJ1H9ddgzN4w&s",
    ingredients: [
      "3 egg whites",
      "1 cup spinach (chopped)",
      "1/4 onion (chopped)",
      "Salt and pepper to taste",
      "1 tsp olive oil"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: 4.5,
    toppings: ["Chives", "Tomato slices"],
    instructions: "Step 1: Heat olive oil in pan. Step 2: Sauté onions and spinach for 2-3 mins. Step 3: Pour egg whites, cook until set. Step 4: Fold omelette, garnish with chives and tomato slices, serve hot.",
    reviews: 85
  },

  // --- Under 30 mins ---
  {
    id: 132,
    title: "Quinoa Veggie Bowl",
    category: "Healthy",
    image: "https://turniptheoven.com/wp-content/uploads/2015/11/Roasted-Vegetable-Quinoa-Bowls-.jpg",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas",
      "1/2 cup bell peppers (chopped)",
      "1/4 cup cucumber (chopped)",
      "1 tsp olive oil",
      "Salt and pepper to taste",
      "1 tsp lemon juice"
    ],
    type: "vegan",
    timing: "20 mins",
    Starreview: 4.6,
    toppings: ["Coriander leaves", "Lemon wedge"],
    instructions: "Step 1: Cook quinoa as per instructions. Step 2: Sauté chickpeas and bell peppers lightly with olive oil, salt, and pepper. Step 3: Combine quinoa, sautéed veggies, and cucumber in a bowl. Step 4: Drizzle lemon juice, garnish, serve warm or cold.",
    reviews: 95
  },
  {
    id: 133,
    title: "Grilled Salmon with Veggies",
    category: "Healthy",
    image: "https://goodthymekitchen.com/wp-content/uploads/2025/04/Blog-Post-featured-2025-04-30T010917.332.png",
    ingredients: [
      "150g salmon fillet",
      "1 cup broccoli florets",
      "1/2 cup carrot slices",
      "1 tsp olive oil",
      "Salt, pepper, lemon juice"
    ],
    type: "non-veg",
    timing: "25 mins",
    Starreview: 4.8,
    toppings: ["Lemon wedges", "Parsley"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Place salmon on baking tray, drizzle olive oil, salt, and pepper. Step 3: Add broccoli and carrot, roast for 20 mins. Step 4: Garnish with lemon juice and parsley, serve hot.",
    reviews: 120
  },
  {
    id: 134,
    title: "Chickpea & Spinach Curry",
    category: "Healthy",
    image: "https://veggiechick.com/wp-content/uploads/2021/10/Spinach-and-Chickpea-Curry2.jpg",
    ingredients: [
      "1 cup boiled chickpeas",
      "1 cup spinach (chopped)",
      "1 onion (chopped)",
      "1 tomato (chopped)",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp olive oil",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "30 mins",
    Starreview: 4.7,
    toppings: ["Coriander leaves"],
    instructions: "Step 1: Heat oil, add cumin seeds, then onions and sauté. Step 2: Add ginger-garlic paste, cook 2 mins. Step 3: Add tomato, turmeric, and salt, cook until soft. Step 4: Add chickpeas and spinach, simmer 10-12 mins. Step 5: Garnish with coriander, serve with rice or roti.",
    reviews: 110
  },

  // --- 30+ mins ---
  {
    id: 135,
    title: "Baked Herb Chicken",
    category: "Healthy",
    image: "https://www.budgetbytes.com/wp-content/uploads/2016/12/Herb-Roasted-Chicken-Breast-add-juices.jpg",
    ingredients: [
      "200g chicken breast",
      "1 tsp rosemary",
      "1 tsp thyme",
      "1 tsp olive oil",
      "Salt and pepper",
      "1 lemon"
    ],
    type: "non-veg",
    timing: "40 mins",
    Starreview: 4.9,
    toppings: ["Lemon wedges", "Fresh herbs"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Rub chicken with olive oil, rosemary, thyme, salt, and pepper. Step 3: Bake for 35 mins until cooked. Step 4: Garnish with lemon and fresh herbs, serve hot.",
    reviews: 130
  },
  {
    id: 136,
    title: "Vegetable Stir-Fry with Tofu",
    category: "Healthy",
    image: "https://www.simplyrecipes.com/thmb/w4_QB4AOJ6a58M6g8FL7oJp3h7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spicy-Tofu-Stirfry-METHOD-10-50c90297cbc840ba9927452d47c7e775.jpg",
    ingredients: [
      "200g firm tofu (cubed)",
      "1 cup broccoli",
      "1 cup bell peppers",
      "1/2 cup carrots",
      "2 tsp soy sauce",
      "1 tsp olive oil",
      "1 tsp sesame seeds"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: 4.8,
    toppings: ["Sesame seeds", "Spring onions"],
    instructions: "Step 1: Heat olive oil in a pan, sauté tofu until golden. Step 2: Add vegetables, stir-fry for 10-12 mins. Step 3: Add soy sauce, cook 5 mins. Step 4: Garnish with sesame seeds and spring onions, serve hot.",
    reviews: 120
  },
  {
    id: 137,
    title: "Spinach & Lentil Stew",
    category: "Healthy",
    image: "https://pinchofyum.com/wp-content/uploads/Smoky-Red-Lentil-Stew-2.jpg",
    ingredients: [
      "1 cup lentils",
      "2 cups spinach (chopped)",
      "1 onion (chopped)",
      "2 cloves garlic",
      "1 tsp cumin powder",
      "1 tsp olive oil",
      "4 cups water",
      "Salt to taste"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: 4.7,
    toppings: ["Coriander leaves"],
    instructions: "Step 1: Heat oil, sauté onion and garlic. Step 2: Add lentils, cumin, and water, bring to boil. Step 3: Simmer 25 mins until lentils are tender. Step 4: Add spinach, cook 5 more mins. Step 5: Garnish with coriander, serve hot.",
    reviews: 105
  },

  {
    id: 138,
    title: "Grilled Fish with Lemon & Herbs",
    category: "Healthy",
    image: "https://coleycooks.com/wp-content/uploads/2025/04/easy-baked-fish-5.jpg",
    ingredients: [
      "200g fish fillet",
      "1 tsp rosemary",
      "1 tsp thyme",
      "1 tsp olive oil",
      "Salt and pepper",
      "1 lemon"
    ],
    type: "non-veg",
    timing: "40 mins",
    Starreview: 4.9,
    toppings: ["Lemon wedges", "Fresh herbs"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Rub fish with olive oil, rosemary, thyme, salt, and pepper. Step 3: Bake for 35 mins until cooked. Step 4: Garnish with lemon wedges and herbs, serve hot.",
    reviews: 125
  },

  // Continue adding remaining recipes to reach total 20
  {
    id: 139,
    title: "Vegan Protein Smoothie",
    category: "Healthy",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/kale-smoothie-d06d559.jpg?quality=90&resize=400,363",
    ingredients: [
      "1 banana",
      "1 cup almond milk",
      "1 tbsp peanut butter",
      "1 tsp chia seeds"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.6,
    toppings: ["Chia seeds", "Almond flakes"],
    instructions: "Step 1: Blend banana, almond milk, and peanut butter until smooth. Step 2: Pour into a glass, sprinkle chia seeds and almond flakes, serve chilled.",
    reviews: 95
  },
  {
    id: 140,
    title: "Chicken & Quinoa Bowl",
    category: "Healthy",
    image: "https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/chicken-quinoa-bowl.jpg",
    ingredients: [
      "150g grilled chicken",
      "1 cup cooked quinoa",
      "1/2 cup steamed broccoli",
      "1/2 cup carrots",
      "1 tsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "25 mins",
    Starreview: 4.7,
    toppings: ["Parsley", "Lemon wedge"],
    instructions: "Step 1: Grill chicken with salt and pepper. Step 2: Combine quinoa, broccoli, and carrots in a bowl. Step 3: Slice chicken, place on top, drizzle olive oil, garnish with parsley and lemon, serve warm.",
    reviews: 110
  },
  {
    id: 141,
    title: "Vegan Buddha Bowl",
    category: "Healthy",
    image: "https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
    ingredients: [
      "1/2 cup cooked quinoa",
      "1/2 cup roasted chickpeas",
      "1/2 cup steamed broccoli",
      "1/4 avocado (sliced)",
      "1 tsp olive oil",
      "1 tsp lemon juice",
      "Salt and pepper to taste"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.7,
    toppings: ["Lemon wedge", "Coriander leaves"],
    instructions: "Step 1: Roast chickpeas with olive oil, salt, and pepper for 15 mins. Step 2: Steam broccoli. Step 3: Combine quinoa, chickpeas, broccoli, and avocado in a bowl. Step 4: Drizzle lemon juice, garnish with coriander, serve warm.",
    reviews: 100
  },
  {
    id: 142,
    title: "Egg & Spinach Breakfast Muffins",
    category: "Healthy",
    image: "https://onecleverchef-wp.s3.amazonaws.com/wp-content/uploads/2016/04/03012014/Healthy-Breakfast-Egg-Muffins-with-Spinach-Avocado-7.jpg",
    ingredients: [
      "3 eggs",
      "1 cup spinach (chopped)",
      "1/4 onion (chopped)",
      "Salt and pepper to taste",
      "1 tsp olive oil"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: 4.6,
    toppings: ["Chives", "Tomato slices"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Sauté onions and spinach in olive oil. Step 3: Whisk eggs, add sautéed vegetables, salt, and pepper. Step 4: Pour into muffin tin, bake for 20-25 mins until set. Step 5: Serve warm with herbs on top.",
    reviews: 85
  },
  {
    id: 143,
    title: "Grilled Tandoori Chicken",
    category: "Healthy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_RNYVnlOdNvL1-fQKiTWCI8mKT6cxK-ujg&s",
    ingredients: [
      "200g chicken breast",
      "1 tsp tandoori masala",
      "1 tsp yogurt",
      "1 tsp lemon juice",
      "1 tsp olive oil",
      "Salt to taste"
    ],
    type: "non-veg",
    timing: "35 mins",
    Starreview: 4.9,
    toppings: ["Lemon wedges", "Fresh coriander"],
    instructions: "Step 1: Marinate chicken with tandoori masala, yogurt, lemon juice, olive oil, and salt for 15 mins. Step 2: Preheat grill, cook chicken 15-20 mins until done. Step 3: Serve hot garnished with lemon wedges and coriander.",
    reviews: 120
  },

  {
    id: 145,
    title: "Vegetable Zucchini Noodles",
    category: "Healthy",
    image: "https://www.eatingwell.com/thmb/QDkFVOz1fqSu53Gvip_A83r4LXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/55443131-3e3f0c8c06074a3fa428677aaeb59f47.jpg",
    ingredients: [
      "2 medium zucchinis (spiralized)",
      "1/2 cup cherry tomatoes (halved)",
      "1/4 cup bell peppers (sliced)",
      "1 tsp olive oil",
      "Salt and pepper",
      "1 tsp basil leaves"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: 4.5,
    toppings: ["Basil leaves", "Cherry tomatoes"],
    instructions: "Step 1: Heat olive oil in pan, sauté bell peppers and tomatoes 3-4 mins. Step 2: Add zucchini noodles, cook 2-3 mins until slightly soft. Step 3: Season with salt, pepper, garnish with basil leaves, serve immediately.",
    reviews: 95
  },
  {
    id: 146,
    title: "Greek Yogurt Parfait",
    category: "Healthy",
    image: "https://spicecravings.com/wp-content/uploads/2023/09/Greek-Yogurt-Parfait-Featured.jpg",
    ingredients: [
      "1 cup Greek yogurt",
      "1/4 cup granola",
      "1/2 cup mixed berries",
      "1 tsp honey (optional)"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: 4.6,
    toppings: ["Mixed berries", "Mint leaves"],
    instructions: "Step 1: Layer yogurt, granola, and berries in a glass. Step 2: Drizzle honey if desired. Step 3: Garnish with mint leaves, serve chilled.",
    reviews: 90
  },
  {
    id: 147,
    title: "Baked Lemon Herb Cod",
    category: "Healthy",
    image: "https://www.eatingwell.com/thmb/WLFWiu_ikHie4XPv_fIB4bvKrgw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lemon-garlic-baked-cod-12fc4c8c867543a2bd248f960b976d34.jpg",
    ingredients: [
      "200g cod fillet",
      "1 tsp olive oil",
      "1 tsp thyme",
      "1 tsp rosemary",
      "Salt and pepper",
      "1 lemon"
    ],
    type: "non-veg",
    timing: "40 mins",
    Starreview: 4.9,
    toppings: ["Lemon wedges", "Fresh herbs"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Rub cod with olive oil, thyme, rosemary, salt, and pepper. Step 3: Bake for 30-35 mins until fish is cooked. Step 4: Garnish with lemon wedges, serve hot.",
    reviews: 110
  },
  {
    id: 148,
    title: "Vegan Sweet Potato Curry",
    category: "Healthy",
    image: "https://lovingitvegan.com/wp-content/uploads/2018/07/Vegan-Sweet-Potato-Curry-Square-2.jpg",
    ingredients: [
      "2 medium sweet potatoes (cubed)",
      "1 onion (chopped)",
      "1/2 cup coconut milk",
      "1 tsp curry powder",
      "1 tsp olive oil",
      "Salt to taste",
      "Coriander leaves for garnish"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: 4.7,
    toppings: ["Coriander leaves"],
    instructions: "Step 1: Heat olive oil, sauté onion 2-3 mins. Step 2: Add sweet potatoes, curry powder, and salt, cook 5 mins. Step 3: Add coconut milk, simmer 20-25 mins until sweet potatoes are tender. Step 4: Garnish with coriander, serve hot.",
    reviews: 105
  },
  // UNDER 15 MINUTES
  {
    id: 149,
    title: "Vegan Caprese Salad",
    category: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPir7H95FTkvl4mc-D4ks5y2Feyi9t5KT4A&s",
    ingredients: [
      "2 large tomatoes (sliced)",
      "1 block vegan mozzarella (sliced)",
      "Fresh basil leaves",
      "1 tsp olive oil",
      "Salt and pepper to taste",
      "1 tsp balsamic glaze"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.7,
    toppings: ["Basil leaves", "Balsamic drizzle"],
    instructions: "Step 1: Arrange tomato and vegan mozzarella slices alternately on a plate. Step 2: Tuck basil leaves between slices. Step 3: Drizzle olive oil and balsamic glaze. Step 4: Sprinkle salt and pepper. Step 5: Serve immediately.",
    reviews: 120
  },
  {
    id: 150,
    title: "Vegetarian Bruschetta",
    category: "Italian",
    image: "https://www.crowdedkitchen.com/wp-content/uploads/2020/08/persimmon-crostini.jpg",
    ingredients: [
      "4 slices baguette",
      "2 tomatoes (diced)",
      "1 garlic clove (minced)",
      "1 tsp olive oil",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: 4.6,
    toppings: ["Basil leaves", "Olive oil drizzle"],
    instructions: "Step 1: Toast baguette slices until golden. Step 2: Mix tomatoes, garlic, olive oil, salt, and pepper. Step 3: Spoon tomato mixture on toasted bread. Step 4: Garnish with basil leaves. Step 5: Serve immediately.",
    reviews: 95
  },
  {
    id: 151,
    title: "Chicken Pesto Panini",
    category: "Italian",
    image: "https://assets.wsimgs.com/wsimgs/ab/images/dp/recipe/202545/0008/img193l.jpg",
    ingredients: [
      "2 slices ciabatta bread",
      "100g grilled chicken breast (sliced)",
      "2 tsp pesto sauce",
      "1 slice mozzarella cheese",
      "1 tsp olive oil"
    ],
    type: "non-veg",
    timing: "14 mins",
    Starreview: 4.8,
    toppings: ["Fresh basil", "Olive oil drizzle"],
    instructions: "Step 1: Spread pesto on ciabatta slices. Step 2: Layer chicken and mozzarella on bread. Step 3: Grill sandwich in a pan with olive oil until golden. Step 4: Slice and serve hot.",
    reviews: 110
  },

  // UNDER 30 MINUTES
  {
    id: 152,
    title: "Vegan Mushroom Risotto",
    category: "Italian",
    image: "https://exploringvegan.com/wp-content/uploads/2022/05/Easy-Vegan-Mushroom-Risotto-_Hero-Image.png",
    ingredients: [
      "1 cup arborio rice",
      "1 cup mushrooms (sliced)",
      "1 small onion (chopped)",
      "2 cups vegetable broth",
      "1 tsp olive oil",
      "1/4 tsp salt",
      "1/4 tsp black pepper",
      "1 tsp nutritional yeast"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.7,
    toppings: ["Fresh parsley", "Mushroom slices"],
    instructions: "Step 1: Heat olive oil, sauté onion and mushrooms until soft. Step 2: Add rice and stir for 2 mins. Step 3: Gradually add vegetable broth, stirring constantly until rice is creamy. Step 4: Season with salt, pepper, and nutritional yeast. Step 5: Garnish with parsley, serve hot.",
    reviews: 105
  },
  {
    id: 153,
    title: "Vegetarian Lasagna",
    category: "Italian",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2023/04/vegetarian-lasagna-recipe-19.jpg",
    ingredients: [
      "6 lasagna sheets (pre-cooked)",
      "1 cup ricotta cheese",
      "1 cup spinach (chopped)",
      "1/2 cup marinara sauce",
      "1/2 cup mozzarella cheese",
      "Salt and pepper to taste"
    ],
    type: "veg",
    timing: "28 mins",
    Starreview: 4.8,
    toppings: ["Basil leaves", "Parmesan"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Layer lasagna sheets, ricotta, spinach, and marinara sauce in baking dish. Step 3: Repeat layers, top with mozzarella. Step 4: Bake 20 mins until cheese melts. Step 5: Garnish with basil and serve.",
    reviews: 120
  },
  {
    id: 154,
    title: "Chicken Alfredo Pasta",
    category: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2lVOSw-hIdykIExo7isymesryDAppSlgEw&s",
    ingredients: [
      "150g fettuccine pasta",
      "100g grilled chicken (sliced)",
      "1/2 cup heavy cream",
      "1/4 cup parmesan cheese",
      "1 tsp butter",
      "1/2 tsp garlic (minced)",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "30 mins",
    Starreview: 4.9,
    toppings: ["Parsley", "Parmesan shavings"],
    instructions: "Step 1: Cook pasta according to package instructions. Step 2: Melt butter in pan, sauté garlic 1 min. Step 3: Add cream, parmesan, salt, and pepper. Step 4: Stir in chicken and pasta until coated. Step 5: Garnish with parsley, serve hot.",
    reviews: 130
  },

  // ABOVE 30 MINUTES
  {
    id: 155,
    title: "Vegan Eggplant Parmesan",
    category: "Italian",
    image: "https://cdn.nutritionstudies.org/wp-content/uploads/2020/12/vegan-eggplant-parmesan-image-1.jpg",
    ingredients: [
      "1 large eggplant (sliced)",
      "1 cup breadcrumbs",
      "1/2 cup marinara sauce",
      "1/4 cup vegan cheese",
      "1 tsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "vegan",
    timing: "45 mins",
    Starreview: 4.8,
    toppings: ["Basil leaves", "Vegan cheese shavings"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Brush eggplant slices with olive oil, season with salt and pepper. Step 3: Coat slices in breadcrumbs. Step 4: Layer eggplant in baking dish with marinara and vegan cheese. Step 5: Bake 35-40 mins until golden. Step 6: Garnish with basil, serve hot.",
    reviews: 110
  },
  {
    id: 156,
    title: "Vegetarian Stuffed Shells",
    category: "Italian",
    image: "https://www.frysfood.com/content/v2/binary/image/recipe/images/veggie-stuffed-shells-133859--268_veggie-stuffed-shells_fall-reshoot_p_21-tkc-0183_a.jpg",
    ingredients: [
      "8 jumbo pasta shells",
      "1 cup ricotta cheese",
      "1/2 cup spinach (chopped)",
      "1/2 cup marinara sauce",
      "1/2 cup mozzarella cheese",
      "Salt and pepper"
    ],
    type: "veg",
    timing: "40 mins",
    Starreview: 4.7,
    toppings: ["Parmesan", "Basil leaves"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Cook pasta shells, drain. Step 3: Mix ricotta, spinach, salt, and pepper. Step 4: Stuff shells with mixture, place in baking dish. Step 5: Pour marinara on top, sprinkle mozzarella. Step 6: Bake 25 mins, serve garnished with basil and parmesan.",
    reviews: 115
  },
  {
    id: 157,
    title: "Chicken Cacciatore",
    category: "Italian",
    image: "https://www.sipandfeast.com/wp-content/uploads/2025/05/chicken-cacciatore-recipe-snippet.jpg",
    ingredients: [
      "200g chicken thighs",
      "1/2 cup bell peppers (sliced)",
      "1/2 cup onion (chopped)",
      "1/2 cup canned tomatoes",
      "1 tsp garlic (minced)",
      "1 tsp olive oil",
      "1 tsp Italian herbs",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "50 mins",
    Starreview: 4.9,
    toppings: ["Parsley", "Grated Parmesan"],
    instructions: "Step 1: Heat olive oil, brown chicken on all sides. Step 2: Sauté onions, garlic, and bell peppers. Step 3: Add canned tomatoes and herbs, simmer 35 mins. Step 4: Season with salt and pepper. Step 5: Serve hot garnished with parsley and parmesan.",
    reviews: 125
  },
  // UNDER 15 MINUTES
  {
    id: 158,
    title: "Vegan Zucchini Noodles with Pesto",
    category: "Italian",
    image: "https://thishealthykitchen.com/wp-content/uploads/2018/06/Pesto-Zuchini-Pasta-Feat-Image-Square.jpg",
    ingredients: [
      "2 medium zucchinis (spiralized)",
      "2 tbsp vegan pesto",
      "1 tsp olive oil",
      "Salt and pepper to taste",
      "Cherry tomatoes (halved) for garnish"
    ],
    type: "vegan",
    timing: "12 mins",
    Starreview: 4.6,
    toppings: ["Cherry tomatoes", "Basil leaves"],
    instructions: "Step 1: Heat olive oil in a pan, sauté zucchini noodles 2-3 mins. Step 2: Add vegan pesto, toss gently. Step 3: Season with salt and pepper. Step 4: Garnish with cherry tomatoes and basil. Step 5: Serve immediately.",
    reviews: 98
  },
  {
    id: 159,
    title: "Vegetarian Spinach & Ricotta Wrap",
    category: "Italian",
    image: "https://www.trialandeater.com/wp-content/uploads/2018/01/Spinach-Ricotta-Crescent-Wrap-Recipe-Trial-and-Eater-10.jpg",
    ingredients: [
      "1 large tortilla wrap",
      "2 tbsp ricotta cheese",
      "1 cup fresh spinach",
      "1/4 tsp black pepper",
      "1 tsp olive oil"
    ],
    type: "veg",
    timing: "10 mins",
    Starreview: 4.5,
    toppings: ["Chili flakes", "Basil leaves"],
    instructions: "Step 1: Spread ricotta on tortilla. Step 2: Layer spinach and season with black pepper. Step 3: Roll wrap tightly. Step 4: Heat olive oil in pan, toast wrap 2 mins each side. Step 5: Slice and serve.",
    reviews: 87
  },
  {
    id: 160,
    title: "Chicken Bruschetta Bites",
    category: "Italian",
    image: "https://easyfamilyrecipes.com/wp-content/uploads/2017/09/Baked-Bruchetta-Chicken-Recipe.jpg",
    ingredients: [
      "100g grilled chicken (diced)",
      "4 slices baguette",
      "1 tomato (diced)",
      "1 tsp olive oil",
      "Basil leaves",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "15 mins",
    Starreview: 4.7,
    toppings: ["Basil", "Olive oil drizzle"],
    instructions: "Step 1: Toast baguette slices. Step 2: Mix tomato, olive oil, salt, and pepper. Step 3: Top each slice with diced chicken and tomato mixture. Step 4: Garnish with basil and serve.",
    reviews: 102
  },

  // UNDER 30 MINUTES
  {
    id: 161,
    title: "Vegan Tomato Basil Soup",
    category: "Italian",
    image: "https://cookingforpeanuts.com/wp-content/uploads/2023/01/easy-creamy-vegan-tomato-basil-soup-featured.jpg",
    ingredients: [
      "4 large tomatoes (chopped)",
      "1 small onion (chopped)",
      "2 garlic cloves (minced)",
      "2 cups vegetable broth",
      "1 tsp olive oil",
      "Salt and pepper to taste",
      "Fresh basil leaves"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.8,
    toppings: ["Basil leaves", "Croutons"],
    instructions: "Step 1: Heat olive oil, sauté onion and garlic until translucent. Step 2: Add tomatoes and cook 5 mins. Step 3: Pour vegetable broth, simmer 15 mins. Step 4: Blend until smooth, season with salt and pepper. Step 5: Serve hot with basil and croutons.",
    reviews: 110
  },
  {
    id: 162,
    title: "Vegetarian Penne Arrabbiata",
    category: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS019-HD-FpnU5U9q83LDIIVUyy2H25ptkU9w&s",
    ingredients: [
      "150g penne pasta",
      "1/2 cup tomato sauce",
      "1 tsp chili flakes",
      "1 garlic clove (minced)",
      "1 tsp olive oil",
      "Salt to taste",
      "Fresh parsley for garnish"
    ],
    type: "veg",
    timing: "20 mins",
    Starreview: 4.7,
    toppings: ["Parsley", "Chili flakes"],
    instructions: "Step 1: Cook penne pasta according to package instructions. Step 2: Heat olive oil, sauté garlic, add chili flakes. Step 3: Pour in tomato sauce, simmer 5 mins. Step 4: Toss cooked pasta in sauce. Step 5: Garnish with parsley and serve hot.",
    reviews: 115
  },
  {
    id: 163,
    title: "Chicken Piccata",
    category: "Italian",
    image: "https://www.tasteofhome.com/wp-content/uploads/2024/11/Cheesecake-Factory-s-Chicken-Piccata_EXPS_TOHcom24_64071_DR_10_30_19b.jpg",
    ingredients: [
      "200g chicken breast",
      "1/2 lemon (juice)",
      "1/4 cup chicken broth",
      "1 tsp capers",
      "1 tsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "28 mins",
    Starreview: 4.9,
    toppings: ["Parsley", "Lemon wedges"],
    instructions: "Step 1: Heat olive oil, cook chicken until golden. Step 2: Remove chicken, deglaze pan with chicken broth and lemon juice. Step 3: Add capers, return chicken to pan, simmer 5 mins. Step 4: Serve garnished with parsley and lemon wedges.",
    reviews: 120
  },

  // ABOVE 30 MINUTES
  {
    id: 164,
    title: "Vegan Spinach & Artichoke Lasagna",
    category: "Italian",
    image: "https://gfreefoodie.com/wp-content/uploads/2018/04/IMG_9947-1.jpg",
    ingredients: [
      "6 lasagna sheets",
      "1 cup spinach (chopped)",
      "1/2 cup artichoke hearts (chopped)",
      "1/2 cup vegan ricotta",
      "1/2 cup vegan mozzarella",
      "Salt and pepper"
    ],
    type: "vegan",
    timing: "50 mins",
    Starreview: 4.8,
    toppings: ["Basil", "Vegan cheese"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Layer lasagna sheets, vegan ricotta, spinach, and artichokes. Step 3: Repeat layers, top with vegan mozzarella. Step 4: Bake 35-40 mins until golden. Step 5: Garnish with basil and serve hot.",
    reviews: 108
  },
  {
    id: 165,
    title: "Vegetarian Eggplant Rollatini",
    category: "Italian",
    image: "https://veganhuggs.com/wp-content/uploads/2019/08/vegan-eggplant-rollatini-2.jpg",
    ingredients: [
      "2 large eggplants (sliced lengthwise)",
      "1 cup ricotta cheese",
      "1/2 cup marinara sauce",
      "1/2 cup mozzarella cheese",
      "1 tsp olive oil",
      "Salt and pepper"
    ],
    type: "veg",
    timing: "45 mins",
    Starreview: 4.7,
    toppings: ["Basil", "Parmesan"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Brush eggplant slices with olive oil, season. Step 3: Spread ricotta, roll slices, place in baking dish. Step 4: Pour marinara on top, sprinkle mozzarella. Step 5: Bake 30 mins, garnish with basil and parmesan, serve hot.",
    reviews: 112
  },
  {
    id: 166,
    title: "Chicken Marsala",
    category: "Italian",
    image: "https://www.allrecipes.com/thmb/yOfmSNwNQm0z7yqjQBWqvJCdk5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24010-easy-chicken-marsala-VAT-Beauty-4x3-3a1ee655a93844b687a0f4d1f6fadd87.jpg",
    ingredients: [
      "200g chicken breast",
      "1/2 cup mushrooms (sliced)",
      "1/4 cup Marsala wine",
      "1/4 cup chicken broth",
      "1 tsp olive oil",
      "Salt and pepper to taste"
    ],
    type: "non-veg",
    timing: "55 mins",
    Starreview: 4.9,
    toppings: ["Parsley", "Mushroom slices"],
    instructions: "Step 1: Heat olive oil, sear chicken until golden. Step 2: Remove chicken, sauté mushrooms. Step 3: Deglaze pan with Marsala wine, add chicken broth, simmer 20 mins. Step 4: Return chicken, cook 10 mins. Step 5: Garnish with parsley and mushrooms, serve hot.",
    reviews: 125
  },

  // UNDER 15 MINUTES
  {
    id: 167,
    title: "Vegan Chocolate Banana Pudding",
    category: "Desserts",
    image: "https://www.allrecipes.com/thmb/fNOr1pBnM6AIOtgLOvXyB1bdvmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9093772-41f0e827abed4c958883674c6e3ad69e.jpg",
    ingredients: [
      "2 ripe bananas",
      "2 tbsp cocoa powder",
      "1 cup almond milk",
      "1 tsp maple syrup",
      "1 tsp vanilla extract"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.7,
    toppings: ["Cacao nibs", "Sliced banana"],
    instructions: "Step 1: Mash bananas in a bowl. Step 2: Whisk in cocoa powder, almond milk, maple syrup, and vanilla extract. Step 3: Pour into serving cups. Step 4: Chill 5-10 mins. Step 5: Top with cacao nibs and banana slices. Serve cold.",
    reviews: 98
  },
  {
    id: 168,
    title: "Vegetarian Berry Yogurt Parfait",
    category: "Desserts",
    image: "https://www.julieslifestyle.com/src/Frontend/Files/blog/images/source/berry-breakfast-parfait-with-vegan-vanilla-cashew-yoghurt-4-560x560.jpg",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup mixed berries",
      "2 tsp honey",
      "2 tbsp granola"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: 4.6,
    toppings: ["Mint leaves", "Berries"],
    instructions: "Step 1: Layer yogurt in serving glass. Step 2: Add berries and drizzle honey. Step 3: Sprinkle granola on top. Step 4: Repeat layers if desired. Step 5: Garnish with mint. Serve immediately.",
    reviews: 87
  },
  {
    id: 169,
    title: "Vegan Coconut Mango Chia Pudding",
    category: "Desserts",
    image: "https://christieathome.com/wp-content/uploads/2020/07/mango-coconut-chia-pudding1-scaled.jpg",
    ingredients: [
      "3 tbsp chia seeds",
      "1 cup coconut milk",
      "1/2 cup mango puree",
      "1 tsp agave syrup"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: 4.8,
    toppings: ["Mango cubes", "Coconut flakes"],
    instructions: "Step 1: Mix chia seeds with coconut milk and agave syrup, let sit 10 mins to thicken. Step 2: Layer with mango puree in serving glasses. Step 3: Garnish with mango cubes and coconut flakes. Serve chilled.",
    reviews: 102
  },
  {
    id: 170,
    title: "Vegetarian Strawberry Shortcake Cups",
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvPTuONkl92Y6RB62wSOJus8VBR1Xzsic8w&s",
    ingredients: [
      "4 mini sponge cakes",
      "1/2 cup whipped cream",
      "1/2 cup sliced strawberries",
      "1 tsp sugar"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: 4.7,
    toppings: ["Strawberries", "Mint leaves"],
    instructions: "Step 1: Slice sponge cakes horizontally. Step 2: Layer with whipped cream and strawberries. Step 3: Sprinkle sugar on top. Step 4: Garnish with mint. Serve immediately.",
    reviews: 90
  },
  {
    id: 171,
    title: "Vegan Almond Date Energy Bites",
    category: "Desserts",
    image: "https://thepaleodiet.com/wp-content/uploads/2023/08/plated-kids-energy-balls-1560x1170.jpeg",
    ingredients: [
      "1 cup almonds",
      "1 cup pitted dates",
      "1/4 cup shredded coconut",
      "1 tsp vanilla extract"
    ],
    type: "vegan",
    timing: "15 mins",
    Starreview: 4.9,
    toppings: ["Coconut flakes", "Chopped almonds"],
    instructions: "Step 1: Blend almonds and dates in a food processor. Step 2: Add vanilla extract, mix well. Step 3: Form small balls. Step 4: Roll in shredded coconut. Step 5: Serve immediately or refrigerate.",
    reviews: 105
  },

  // UNDER 30 MINUTES
  {
    id: 172,
    title: "Vegetarian Chocolate Lava Mug Cake",
    category: "Desserts",
    image: "https://www.eatingwell.com/thmb/z_q1041bK_SreIuArJmOX48ov9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-vegan-mug-cake-2f709d0e734542fcb82fcf9b36c0588f.jpg",
    ingredients: [
      "4 tbsp flour",
      "2 tbsp cocoa powder",
      "2 tbsp sugar",
      "3 tbsp milk",
      "2 tbsp butter",
      "1 tsp vanilla extract",
      "1 piece dark chocolate"
    ],
    type: "veg",
    timing: "20 mins",
    Starreview: 4.8,
    toppings: ["Powdered sugar", "Chocolate shavings"],
    instructions: "Step 1: Mix flour, cocoa, sugar in mug. Step 2: Add milk, melted butter, vanilla. Step 3: Place chocolate piece in center. Step 4: Microwave 90 seconds. Step 5: Top with powdered sugar and chocolate shavings. Serve hot.",
    reviews: 112
  },
  {
    id: 173,
    title: "Vegan Blueberry Almond Tart",
    category: "Desserts",
    image: "https://crumbsandcaramel.com/wp-content/uploads/2022/10/Close-Up-Sliced-Blueberry-Almond-Tart-683x1024.jpg",
    ingredients: [
      "1 cup almond flour",
      "2 tbsp coconut oil",
      "2 tbsp maple syrup",
      "1/2 cup blueberries"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.7,
    toppings: ["Blueberries", "Almond flakes"],
    instructions: "Step 1: Mix almond flour, coconut oil, maple syrup to form dough. Step 2: Press into tart pan. Step 3: Bake 15 mins at 180°C. Step 4: Top with blueberries and almond flakes. Serve warm or chilled.",
    reviews: 98
  },
  {
    id: 174,
    title: "Vegetarian Carrot Cake Bites",
    category: "Desserts",
    image: "https://www.nothangryanymore.com/wp-content/uploads/2021/04/carrot-cake-bites-from-above.jpg",
    ingredients: [
      "1 cup grated carrot",
      "1/2 cup flour",
      "1/4 cup sugar",
      "1/4 cup butter",
      "1 tsp cinnamon",
      "1 tsp baking powder"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: 4.6,
    toppings: ["Cream cheese frosting", "Walnuts"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix carrot, flour, sugar, butter, cinnamon, baking powder. Step 3: Spoon into mini molds. Step 4: Bake 20 mins. Step 5: Top with cream cheese frosting and walnuts. Serve.",
    reviews: 105
  },
  {
    id: 175,
    title: "Vegan Matcha Coconut Pudding",
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10bTTdrrS2M2EdB07rKBVxHHXosSyGSd93Q&s",
    ingredients: [
      "2 tbsp matcha powder",
      "1 cup coconut milk",
      "2 tbsp chia seeds",
      "1 tbsp agave syrup"
    ],
    type: "vegan",
    timing: "28 mins",
    Starreview: 4.8,
    toppings: ["Coconut flakes", "Matcha dust"],
    instructions: "Step 1: Mix matcha powder, coconut milk, chia seeds, agave syrup. Step 2: Chill 20 mins until thickened. Step 3: Serve topped with coconut flakes and matcha powder.",
    reviews: 99
  },

  // 30 MINUTES +
  {
    id: 176,
    title: "Vegetarian Classic Tiramisu",
    category: "Desserts",
    image: "https://i.ytimg.com/vi/S5i6l4sbVM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_jWM5vQtjH56qAhS5uuylgGNBkw",
    ingredients: [
      "200g mascarpone cheese",
      "1 cup strong coffee (cooled)",
      "12 ladyfinger biscuits",
      "2 tbsp cocoa powder",
      "1/4 cup sugar",
      "1 tsp vanilla extract"
    ],
    type: "veg",
    timing: "35 mins",
    Starreview: 4.9,
    toppings: ["Cocoa powder", "Chocolate shavings"],
    instructions: "Step 1: Whisk mascarpone with sugar and vanilla. Step 2: Dip ladyfingers into coffee quickly. Step 3: Layer dipped biscuits in a dish. Step 4: Spread mascarpone mix. Step 5: Repeat layers. Step 6: Chill 30 mins. Step 7: Dust cocoa powder and garnish with chocolate shavings. Serve chilled.",
    reviews: 145
  },
  {
    id: 177,
    title: "Vegan Chocolate Avocado Mousse",
    category: "Desserts",
    image: "https://ooohdelish.com/wp-content/uploads/2025/07/ridamine_01407_vegan_chocolate_avocado_mousse_recipe__Amateur_533708f2-57ad-4e4f-82bd-597888cd225c_0-500x375.png",
    ingredients: [
      "2 ripe avocados",
      "1/4 cup cocoa powder",
      "3 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Pinch of salt"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: 4.8,
    toppings: ["Cacao nibs", "Strawberries"],
    instructions: "Step 1: Blend avocados, cocoa powder, maple syrup, vanilla, and salt until smooth. Step 2: Chill 30 mins. Step 3: Serve topped with cacao nibs and sliced strawberries.",
    reviews: 130
  },
  {
    id: 178,
    title: "Non-Veg Egg Custard Tart",
    category: "Desserts",
    image: "https://edmondscooking.co.nz/assets/recipes/58945d5b6a/Custard-Tart__FillWzYwMCw2MDBd.jpg",
    ingredients: [
      "1 pre-made tart shell",
      "3 eggs",
      "1/2 cup milk",
      "1/4 cup sugar",
      "1 tsp vanilla extract"
    ],
    type: "non-veg",
    timing: "40 mins",
    Starreview: 4.7,
    toppings: ["Nutmeg powder", "Caramel drizzle"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Whisk eggs, milk, sugar, and vanilla. Step 3: Pour into tart shell. Step 4: Bake 30-35 mins until set. Step 5: Sprinkle nutmeg and drizzle caramel. Serve warm or chilled.",
    reviews: 115
  },
  {
    id: 179,
    title: "Vegetarian Lemon Cheesecake",
    category: "Desserts",
    image: "https://i0.wp.com/nourishingamy.com/wp-content/uploads/2024/06/Golden-Lemon-Cheesecake-Bars-7.jpg?resize=720%2C540&ssl=1",
    ingredients: [
      "200g cream cheese",
      "1/2 cup sugar",
      "1/2 cup digestive biscuit crumbs",
      "3 tbsp butter",
      "1 tsp lemon zest",
      "1 tsp vanilla extract"
    ],
    type: "veg",
    timing: "45 mins",
    Starreview: 4.9,
    toppings: ["Lemon zest", "Berries"],
    instructions: "Step 1: Mix biscuit crumbs and melted butter. Step 2: Press into a pan to form base. Step 3: Whisk cream cheese, sugar, lemon zest, vanilla. Step 4: Pour over base. Step 5: Bake 25-30 mins at 180°C. Step 6: Chill 30 mins. Serve garnished with berries and extra lemon zest.",
    reviews: 120
  },
  {
    id: 180,
    title: "Vegan Coconut Rice Pudding",
    category: "Desserts",
    image: "https://aveganvisit.com/wp-content/uploads/2024/12/Vegan-Coconut-Rice-Pudding-4-ws-UD-DEC-24-819x1024.jpg",
    ingredients: [
      "1 cup cooked rice",
      "1 cup coconut milk",
      "1/4 cup sugar",
      "1 tsp vanilla extract",
      "1/4 tsp cardamom powder"
    ],
    type: "vegan",
    timing: "40 mins",
    Starreview: 4.7,
    toppings: ["Shredded coconut", "Almond slivers"],
    instructions: "Step 1: In a pan, combine cooked rice, coconut milk, sugar, cardamom. Step 2: Simmer 20-25 mins until creamy. Step 3: Stir in vanilla. Step 4: Chill or serve warm, topped with coconut and almonds.",
    reviews: 110
  },
  {
    id: 181,
    title: "Vegetarian Pecan Pie",
    category: "Desserts",
    image: "https://thebananadiaries.com/wp-content/uploads/2022/11/vegan-pecan-pie-recipe_3753.jpg",
    ingredients: [
      "1 pie crust",
      "1 cup pecans",
      "1/2 cup brown sugar",
      "1/4 cup butter",
      "2 eggs",
      "1 tsp vanilla extract"
    ],
    type: "veg",
    timing: "50 mins",
    Starreview: 4.8,
    toppings: ["Whipped cream", "Pecans"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Whisk eggs, sugar, butter, and vanilla. Step 3: Pour into pie crust. Step 4: Sprinkle pecans on top. Step 5: Bake 35-40 mins. Step 6: Serve with whipped cream.",
    reviews: 118
  },
  {
    id: 182,
    title: "Vegan Baked Apple with Cinnamon",
    category: "Desserts",
    image: "https://hips.hearstapps.com/hmg-prod/images/cinnamon-baked-apples-horizontal-jpg-1529364174.jpg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*",
    ingredients: [
      "2 apples",
      "2 tsp maple syrup",
      "1 tsp cinnamon powder",
      "1/4 cup chopped nuts"
    ],
    type: "vegan",
    timing: "35 mins",
    Starreview: 4.6,
    toppings: ["Chopped nuts", "Cinnamon"],
    instructions: "Step 1: Core apples. Step 2: Mix maple syrup, cinnamon, nuts. Step 3: Stuff apples with mixture. Step 4: Bake 25-30 mins at 180°C. Step 5: Serve warm.",
    reviews: 105
  },
  {
    id: 183,
    title: "Vegetarian Chocolate Fondant",
    category: "Desserts",
    image: "https://schoolnightvegan.com/wp-content/uploads/2022/02/Vegan-Chocolate-Lava-Cakes18019-819x1024.jpg",
    ingredients: [
      "100g dark chocolate",
      "50g butter",
      "2 eggs",
      "2 tbsp flour",
      "2 tbsp sugar"
    ],
    type: "veg",
    timing: "30 mins",
    Starreview: 4.9,
    toppings: ["Powdered sugar", "Berries"],
    instructions: "Step 1: Melt chocolate and butter together. Step 2: Whisk eggs and sugar. Step 3: Combine with chocolate mixture and fold in flour. Step 4: Pour into greased molds. Step 5: Bake 12-15 mins at 200°C. Step 6: Serve immediately with berries and powdered sugar.",
    reviews: 125
  },
  {
    id: 184,
    title: "Vegan Pumpkin Pie",
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkzCImSiL_BSv5ZyVuL9BRGcIh6luspCgew&s",
    ingredients: [
      "1 vegan pie crust",
      "1 cup pumpkin puree",
      "1/2 cup coconut milk",
      "1/4 cup brown sugar",
      "1 tsp cinnamon",
      "1/2 tsp nutmeg"
    ],
    type: "vegan",
    timing: "45 mins",
    Starreview: 4.8,
    toppings: ["Coconut whipped cream", "Pumpkin seeds"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix pumpkin puree, coconut milk, sugar, cinnamon, nutmeg. Step 3: Pour into pie crust. Step 4: Bake 35-40 mins. Step 5: Cool and serve with coconut whipped cream and pumpkin seeds.",
    reviews: 115
  },
  {
    id: 185,
    title: "Non-Veg Honey Egg Pudding",
    category: "Desserts",
    image: "https://d1c8xu194km6ge.cloudfront.net/assets/240944/CremeCaramelS5_HD1280.jpg",
    ingredients: [
      "3 eggs",
      "1/2 cup milk",
      "2 tbsp honey",
      "1 tsp vanilla extract",
      "Pinch of salt"
    ],
    type: "non-veg",
    timing: "40 mins",
    Starreview: 4.7,
    toppings: ["Honey drizzle", "Cinnamon powder"],
    instructions: "Step 1: Whisk eggs, milk, honey, vanilla, and salt. Step 2: Pour into greased ramekins. Step 3: Bake 30-35 mins at 180°C in a water bath. Step 4: Chill slightly and drizzle honey and cinnamon before serving.",
    reviews: 100
  },
  // UNDER 15 MINUTES
  {
    id: 186,
    title: "Vegan Banana Smoothie",
    category: "Desserts",
    image: "https://theveganatlas.com/wp-content/uploads/2023/05/Banana-Smoothie-with-maca.jpg",
    ingredients: [
      "1 ripe banana",
      "1 cup almond milk",
      "1 tbsp maple syrup",
      "1/2 tsp cinnamon"
    ],
    type: "vegan",
    timing: "10 mins",
    Starreview: 4.6,
    toppings: ["Chia seeds", "Banana slices"],
    instructions: "Step 1: Blend banana, almond milk, maple syrup, and cinnamon until smooth. Step 2: Pour into glass and top with chia seeds and banana slices. Serve immediately.",
    reviews: 90
  },
  {
    id: 187,
    title: "Vegetarian Berry Parfait",
    category: "Desserts",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Vegan-parfait-and-granola-36190b4.jpg?quality=90&resize=708,643",
    ingredients: [
      "1 cup yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries",
      "1 tbsp honey"
    ],
    type: "veg",
    timing: "12 mins",
    Starreview: 4.7,
    toppings: ["Berries", "Honey drizzle"],
    instructions: "Step 1: In a glass, layer yogurt, granola, and berries. Step 2: Repeat layers. Step 3: Drizzle honey on top. Serve immediately.",
    reviews: 95
  },
  {
    id: 188,
    title: "Non-Veg Quick Egg Custard",
    category: "Desserts",
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/egg_custard.webp",
    ingredients: [
      "2 eggs",
      "1/2 cup milk",
      "1 tbsp sugar",
      "1/2 tsp vanilla extract"
    ],
    type: "non-veg",
    timing: "12 mins",
    Starreview: 4.5,
    toppings: ["Nutmeg powder"],
    instructions: "Step 1: Whisk eggs, milk, sugar, and vanilla. Step 2: Pour into microwave-safe cups. Step 3: Microwave 2-3 mins until set. Step 4: Sprinkle nutmeg before serving.",
    reviews: 85
  },
  // UNDER 30 MINUTES
  {
    id: 189,
    title: "Vegan Chocolate Oat Cookies",
    category: "Desserts",
    image: "https://peanutbutterpluschocolate.com/wp-content/uploads/2021/05/vegan-peanut-butter-oatmeal-cookies-5-500x500.jpg",
    ingredients: [
      "1 cup oats",
      "1/4 cup cocoa powder",
      "1/4 cup coconut oil",
      "1/4 cup maple syrup",
      "1/2 tsp vanilla extract"
    ],
    type: "vegan",
    timing: "25 mins",
    Starreview: 4.8,
    toppings: ["Chocolate chips"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix all ingredients until combined. Step 3: Scoop onto baking tray. Step 4: Bake 12-15 mins. Step 5: Cool and serve with chocolate chips on top.",
    reviews: 110
  },
  {
    id: 190,
    title: "Vegetarian Mango Pudding",
    category: "Desserts",
    image: "https://www.cookingwithsiddhi.com/wp-content/uploads/2019/06/mango-pudding-750x421.jpg",
    ingredients: [
      "1 cup mango puree",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tsp gelatin"
    ],
    type: "veg",
    timing: "20 mins",
    Starreview: 4.9,
    toppings: ["Mango slices", "Mint leaves"],
    instructions: "Step 1: Dissolve gelatin in milk. Step 2: Mix with mango puree and sugar. Step 3: Pour into molds. Step 4: Chill 1 hour. Step 5: Garnish with mango slices and mint leaves before serving.",
    reviews: 120
  },
  {
    id: 191,
    title: "Non-Veg Chocolate Egg Muffins",
    category: "Desserts",
    image: "https://flavorquotient.com/wp-content/uploads/2025/06/Eggless-Chocolate-Muffins-FQ-6-1.webp",
    ingredients: [
      "2 eggs",
      "2 tbsp cocoa powder",
      "1/4 cup sugar",
      "1/4 cup flour",
      "1 tsp baking powder",
      "1 tbsp milk"
    ],
    type: "non-veg",
    timing: "25 mins",
    Starreview: 4.6,
    toppings: ["Chocolate chips"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Beat eggs and sugar. Step 3: Add cocoa, flour, baking powder, and milk. Step 4: Pour into muffin cups. Step 5: Bake 15-18 mins. Step 6: Cool and top with chocolate chips.",
    reviews: 105
  },
  // 30 MINUTES +
  {
    id: 192,
    title: "Vegan Almond Cake",
    category: "Desserts",
    image: "https://www.veggiejam.com/english/wp-content/uploads/sites/2/2018/05/Veganer-Kirsch-Mandelkuchen_2234.jpg",
    ingredients: [
      "1 cup almond flour",
      "1/4 cup coconut sugar",
      "1/4 cup almond milk",
      "1/4 cup coconut oil",
      "1 tsp baking powder",
      "1 tsp vanilla extract"
    ],
    type: "vegan",
    timing: "40 mins",
    Starreview: 4.8,
    toppings: ["Almond slivers", "Coconut flakes"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Mix all ingredients. Step 3: Pour into greased pan. Step 4: Bake 30 mins. Step 5: Cool and garnish with almonds and coconut.",
    reviews: 115
  },
  {
    id: 193,
    title: "Vegetarian Strawberry Shortcake",
    category: "Desserts",
    image: "https://thevegan8.com/wp-content/uploads/2020/05/vegan-strawberry-shortcake-oil-free.jpeg",
    ingredients: [
      "1 cup flour",
      "1/4 cup sugar",
      "1/4 cup butter",
      "1/2 cup milk",
      "1 cup strawberries",
      "1/2 cup whipped cream"
    ],
    type: "veg",
    timing: "45 mins",
    Starreview: 4.9,
    toppings: ["Strawberries", "Whipped cream"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Make shortcake dough with flour, sugar, butter, and milk. Step 3: Bake 15-20 mins. Step 4: Slice strawberries. Step 5: Layer cake, strawberries, and whipped cream. Serve chilled.",
    reviews: 120
  },
  {
    id: 194,
    title: "Non-Veg Caramel Flan",
    category: "Desserts",
    image: "https://i.ytimg.com/vi/__8pND8qk0k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjofiPBASNG5LoPQLvYayC7M0FQg",
    ingredients: [
      "3 eggs",
      "1/2 cup milk",
      "1/4 cup sugar",
      "1 tsp vanilla extract",
      "2 tbsp caramel syrup"
    ],
    type: "non-veg",
    timing: "50 mins",
    Starreview: 4.7,
    toppings: ["Caramel drizzle", "Whipped cream"],
    instructions: "Step 1: Preheat oven to 180°C. Step 2: Beat eggs, milk, sugar, vanilla. Step 3: Pour caramel syrup into ramekins. Step 4: Add egg mixture. Step 5: Bake in water bath 35-40 mins. Step 6: Cool and invert. Serve with whipped cream.",
    reviews: 110
  },



]

export default recipes;