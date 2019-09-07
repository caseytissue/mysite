export class Recipe extends React.Component {
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
          <h2 className="recipe_title">{this.props.title}</h2>
        </div>
        <div className="recipe_text">
          <h3 className="recipe_ingredients_label">Ingredients</h3>
          <ol className="recipe_ingredients">
            {ingredients}
          </ol>
          <h4 className="recipe_instructions_label">Instructions</h4>
          <ol className="recipe_instructions">
            {instructionSteps}
          </ol>
        </div>
      </div>
    );
  }
}

export default Recipe;