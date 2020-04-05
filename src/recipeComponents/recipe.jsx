export class Recipe extends React.Component {
  render() {

    var ingredients = this.props.ingredients.map((ing, i) => {
      return (
        <li className="recipe_ingredient_item" key={`ingredient_${i}`}>{ing}</li>
      );
    });

    var instructionSteps = this.props.instructions.map(function(instruction, i){
      return (
        <li className="recipe_instruction_step" key={`instruction_${i}`}>{instruction}</li>
      );
    });

    var tags = this.props.tags.map((tag, i) => {
      console.log(this.props.tagColors);
      const backgroundColor = this.props.tagColors[i];
      return (
        <span className="recipe_tag" key={`tag_${i}`} style={{backgroundColor: `${backgroundColor}`}}>{tag}</span>
      );
    });

    return this.props.visible ? (
      <div className="recipe_box">
        <div className="recipe_heading" style={{backgroundColor: `${this.props.headerColor}`}}>
          <img className="recipe_image" src={this.props.image}/>
          <h2 className="recipe_title">{this.props.title}</h2>
        </div>
        <div className="recipe_text">
          <h3 className="recipe_ingredients_label">Ingredients</h3>
          <ol className="recipe_ingredients">
            {ingredients}
          </ol>
          <h3 className="recipe_instructions_label">Instructions</h3>
          <ol className="recipe_instructions">
            {instructionSteps}
          </ol>
        </div>
        <div className="recipe_tag_group">
          {tags}
        </div>
      </div>
    ) : null;
  }
}

export default Recipe;