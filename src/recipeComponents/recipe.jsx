class Recipe extends React.Component {
  render() {

    var ingredients = this.props.ingredients.map(function(ing, i){
      return (
        <li className="recipe_ingredient_item" key={i}>{ing}</li>
      );
    });

    var instructionSteps = this.props.instructions.map(function(instruction, i){
      return (
        <li className="recipe_instruction_step" key={i}>{instruction}</li>
      );
    });

    return(
      <div className="recipe_box">
        <div className="recipe_heading">
          <img className="recipe_image" src={this.props.image}/>
          <h1 className="recipe_title">{this.props.title}</h1>
        </div>
        <div className="recipe_text">
          <h2 className="recipe_ingredients_label">Ingredients</h2>
          <ol className="recipe_ingredients">
            {ingredients}
          </ol>
          <h2 className="recipe_instructions_label">Instructions</h2>
          <ol className="recipe_instructions">
            {instructionSteps}
          </ol>
        </div>
      </div>
    );
  }
}

document.querySelectorAll('#recipes')
  .forEach(domContainer => {
    ReactDOM.render(
      <div class="recipe_group_wrapper">
        <Recipe
          image=""
          title="Protein Powder Pancakes"
          ingredients={["4 egg whites", "1 scoop protein powder", "1/4 tsp baking powder"]}
          instructions={["Whip egg whites in a bowl until foamy", "Mix in the protein powder and baking powder until mixture is smooth", "Pour a small amount into a heated skillet", "When top side starts to look dry, pancake is ready to flip"]}
          nutrition=""/>
        <Recipe
          image=""
          title="Banana Bread"
          ingredients={["2 ripe bananas", "1 egg", "1/4 cup greek yogurt", "1/2 tsp vanilla", "1 cup flour", "1/4 tsp baking powder", "1/2 tsp baking soda", "1/2 tsp cinnamon", "1/8 tsp salt"]}
          instructions={["Preheat oven to 350 degrees Fahrenheit and grease a loaf pan", "Mix all wet ingredients together", "Mix all dry ingredients in a separate bowl", "Pour dry mix into wet mix, and fold without overmixing", "Add extra mix-ins: blueberries, nuts, chocolate chips, etc", "Pour into loaf pan", "Bake for 40 minutes or until a knife inserted comes out clean"]}
          nutrition=""/>
          <Recipe
          image=""
          title="Chicken Nuggets"
          ingredients={["2 lb boneless skinless chicken thighs cut into bite sized pieces", "1 1/2 tbsp canola oil", "1 tsp salt", "1/2 tsp pepper", "1 tsp Italian seasoning", "1/2 tsp oregano", "1/3 cup bread crumbs", "1/3 cup parmesean cheese"]}
          instructions={["Preheat oven to 450 degrees Fahrenheit and grease a baking sheet", "In a bowl, massage chicken with oil, salt, pepper, Italian seasoning, and oregano", "Add the chicken, breadcrumbs, and parmesean cheese to a large ziploc bag", "Squeeze and shake the bag to coat the chicken with breadcrumb mixture", "Lay each chicken nugget on the baking sheet in a single layer", "Cook for 8 minutes on each side"]}
          nutrition=""/>
          <Recipe
            image=""
            title="Banana Pancakes"
            ingredients={["1 banana", "2 eggs", "1/2 tsp vanilla", "1/2 tsp cinnamon", "Optional: 1/4 cup pumpkin and an extra egg for pumpkin flavor"]}
            instructions={["Mix all ingredients in a bowl until consistency is smooth", "Pour batter into heated skillet and cook for about 30 seconds on each side - they brown very quickly"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Grandma's Pumpkin Bread"
            ingredients={["3 cups sugar", "1 tsp nutmeg", "1 tsp cinnamon", "1 tsp salt", "1 cup oil", "4 eggs", "1 cup pumpkin", "2/3 cup water", "3 cups flour"]}
            instructions={["Preheat overn to 350 degrees Fahrenheit, and grease loaf pans", "Mix all intredients in a bowl until consistency is smooth", "Pour batter into loaf pans", "Bak for 35 to 45 minutes or until a knife inserted comes out clean"]}
            nutrition=""/>
          <Recipe
            image=""
            title=""
            ingredients={[]}
            instructions={[]}
            nutrition=""/>
        </div>,
      domContainer
    )
  });