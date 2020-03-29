import Recipe from "./recipe.jsx"
import RecipeFilterCheckbox from "./recipe_filter.jsx"
import { listOfRecipes } from "./recipe_list.js"

let listOfAllTags = {};
const tagColorList = [
  "#067093",
  "#A1D7D3",
  "#69C0B9",
  "#044a62",
  "#033242"
];

class RecipesAndFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: []
    };
  }

  createListOfTags(){
    const listOfTags = {};
    for (var r in listOfRecipes) {
      const recipe = listOfRecipes[r];
      for (var j in recipe.tags) {
        const tag = recipe.tags[j];
        if(!listOfTags[tag]) {
          listOfTags[tag] = tagColorList[j%5];
        }
      };
    };
    listOfAllTags = listOfTags;
  }

  onCheckBoxChange(tag) {
    let updatedTags;
    if(this.state.selectedTags.includes(tag)) {
      updatedTags = this.state.selectedTags.filter(t => {
        return (t !== tag);
      });
    } else {
      updatedTags = this.state.selectedTags;
      updatedTags.push(tag);
    }
    this.setState({
      selectedTags: updatedTags
    });
  };

  renderCheckBox(tag, i) {
    const isSelected = this.state.selectedTags.includes(tag);
    return (
      <RecipeFilterCheckbox tag={tag} key={i} isSelected={isSelected} onCheckBoxChange={() => this.onCheckBoxChange(tag)}/>
    );
  }

  renderFilters() {
    this.createListOfTags();
    const listOfTagsAsArray = Object.entries(listOfAllTags);
    const tagCheckboxes = listOfTagsAsArray.map((tag, i) => {
      return (
        this.renderCheckBox(tag[0], i)
      );
    });
    return (
      <div>
        <ol className="filter_group">
        {tagCheckboxes}
        </ol>
      </div>
    );
  };

  shouldShowRecipe(recipe) {
    if(this.state.selectedTags.length < 1) {
      return true;
    } else {
      let isSelected = false;
      for (var j in recipe.tags) {
        const tag = recipe.tags[j];
        if(this.state.selectedTags.includes(tag)) {
          isSelected = true;
        }
      }
      return isSelected;
    }
  }

  renderRecipes() {
    const recipes = listOfRecipes.map((recipe, i) => {
      const atLeastOneTagIsSelected = this.shouldShowRecipe(recipe);
      const tagColors = recipe.tags.map((tag) => {
        return listOfAllTags[tag];
      });
      console.log(tagColors);
      return (
        <Recipe
          key={i}
          image={recipe.image}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          nutrition={recipe.nutrition}
          tags={recipe.tags}
          tagColors={tagColors}
          visible={atLeastOneTagIsSelected}
        />
      );
    });
    return (
      <div className="recipe_group_wrapper">
        {recipes}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
        {this.renderRecipes()}
      </div>
    );
  }
}

document.querySelectorAll('#recipes_and_filters')
  .forEach(domContainer => {
    ReactDOM.render(
      <RecipesAndFilters/>,
      domContainer
    )
  });