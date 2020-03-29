export class RecipeFilterCheckbox extends React.Component {
  render() {
    return (
      <li key={`tag_checkbox_${this.props.tag}`} className="filter_list_item">
        <input type="checkbox" key={this.props.tag} name="filters" className="recipe_filters_input" value={this.props.tag} checked={this.props.isSelected} onChange={() => this.props.onCheckBoxChange()}></input>
        <span>{this.props.tag}</span>
    </li>
    );
  };
}

export default RecipeFilterCheckbox