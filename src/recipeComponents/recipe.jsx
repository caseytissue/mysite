export class Recipe extends React.Component {

  //color functions from: https://awik.io/determine-color-bright-dark-using-javascript/

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  colorIsLight(r,g,b) {
    const hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
      );
    if (hsp>150) {

      return true;
    } 
    return false;
  }

  getTextColor(backgroundColor) {
    const {r, g, b} = this.hexToRgb(backgroundColor);
    const backgroundColorIsLight = this.colorIsLight(r, g, b);
    return backgroundColorIsLight ? '#222' : '#fff';
  }
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
        <span className="recipe_tag" key={`tag_${i}`} style={{backgroundColor: `${backgroundColor}`, color: this.getTextColor(backgroundColor)}}>{tag}</span>
      );
    });

    return this.props.visible ? (
      <div className="recipe_box">
        <div className="recipe_heading" style={{backgroundColor: `${this.props.headerColor}`, color: this.getTextColor(this.props.headerColor)}}>
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