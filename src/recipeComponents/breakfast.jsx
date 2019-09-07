import Recipe from "./recipe.jsx"

document.querySelectorAll('#breakfast')
  .forEach(domContainer => {
    ReactDOM.render(
      <div>
        <h1 class="recipe_group_title">Breakfast</h1>
        <div class="recipe_group_wrapper">
          <Recipe
            image=""
            title="Protein Powder Pancakes"
            ingredients={["4 egg whites", "1 scoop protein powder", "1/4 tsp baking powder"]}
            instructions={["Whip egg whites in a bowl until foamy", "Mix in the protein powder and baking powder until mixture is smooth", "Pour a small amount into a heated skillet", "When top side starts to look dry, pancake is ready to flip"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Banana Pancakes"
            ingredients={["1 banana", "2 eggs", "1/2 tsp vanilla", "1/2 tsp cinnamon", "Optional: 1/4 cup pumpkin and an extra egg for pumpkin flavor"]}
            instructions={["Mix all ingredients in a bowl until consistency is smooth", "Pour batter into heated skillet and cook for about 30 seconds on each side - they brown very quickly", "Optional: Swap out half a banana for 1/2 cup of pumpkin"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin Pancakes"
            ingredients={["1/2 cup canned pumpkin", "1/2 cup greek yogurt", "1/4 cup flour", "1 egg yolk", "4 egg whites", "1/4 tsp baking soda", "1/4 tsp salt", "1 1/2 tbsp pumpkin spice", "1/2 tbsp cinnamon"]}
            instructions={["Mix pumpkin, yogurt, flour, and egg yolk together", "Add the egg whites, salt, and other spices", "Cook on medium heat"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Protein Waffle"
            ingredients={["1 scoop of protein powder", "1 egg", "1 tsp baking powder", "Sprinkle of cinnamon", "Almond milk to thin out the batter", "Flour to offset protein powder"]}
            instructions={["Mix ingredients together", "Cook on medium heat"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Crustless Cheeseburger Quiche"
            ingredients={["3 slices bacon, cooked until crisp", "1 tsp oil", "1/2 lb lean ground beef", "3 tbsp ketchup", "1 tbsp worcestershire sauce", "6 eggs", "1/2 cup milk", "1/2 tsp salt", "1/2 tsp black pepper", "1 cup shredded cheddar cheese", "Tomateoes, avocado, lettuce, or other burger toppings"]}
            instructions={["Preheat oven tp 400 degrees F, and grease a 9 inch pie dish", "Heat oil in skillet, and add the ground beef, salt, and pepper. Cook beef until fully cooked, breaking it up as it cooks", "Remove from heat and stir in sauces", "Transfer the meat mixture to the perpared pie plate and top with bacon and cheese", "Whisk together eggs, milk, salt, and pepper, and pour over the meat and cheese in the pie plate", "Bake for 30-35 minutes or until egg is cooked through"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pizza Muffins"
            ingredients={[""]}
            instructions={[""]}
            nutrition=""/>
          </div>
        </div>,
      domContainer
    )
  });