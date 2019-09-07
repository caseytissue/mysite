import Recipe from "./recipe.jsx"

document.querySelectorAll('#chicken')
  .forEach(domContainer => {
    ReactDOM.render(
      <div>
        <h1 class="recipe_group_title">Chicken</h1>
        <div class="recipe_group_wrapper">
          <Recipe
          image=""
          title="Chicken Nuggets"
          ingredients={["2 lb boneless skinless chicken thighs cut into bite sized pieces", "1 1/2 tbsp canola oil", "1 tsp salt", "1/2 tsp pepper", "1 tsp Italian seasoning", "1/2 tsp oregano", "1/3 cup bread crumbs", "1/3 cup parmesean cheese"]}
          instructions={["Preheat oven to 450 degrees F and grease a baking sheet", "In a bowl, massage chicken with oil, salt, pepper, Italian seasoning, and oregano", "Add the chicken, breadcrumbs, and parmesean cheese to a large ziploc bag", "Squeeze and shake the bag to coat the chicken with breadcrumb mixture", "Lay each chicken nugget on the baking sheet in a single layer", "Cook for 8 minutes on each side"]}
          nutrition=""/>
          <Recipe
          image=""
          title="Chicken Celery Boats"
          ingredients={["Rotisserie chicken", "Celery Sticks", "Favorite Sauce (hot sauce, ranch, etc)"]}
          instructions={["Mix chicken and sauce", "Cut celery sticks into 'boats'", "Place chicken mixture into celery boats"]}
          nutrition=""/>
        </div>
      </div>,
      domContainer
    )
  });