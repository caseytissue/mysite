class NavLink extends React.Component {
  render() {
    const onSelect = () => {
      this.props.onSelect(this.props.label);
    }
    const selected = this.props.selected ? "selected" : "";
    const linkClassName = "nav_link " + selected;
    const iconClassName = "nav_link_icon fas " + this.props.icon;
    return(
      <a className={linkClassName} onClick={onSelect} href={this.props.link}>
        <i className={iconClassName}></i>
        <p className="nav_link_label">{this.props.label}</p>
      </a>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    /* This logic either gets the link selected by the user, or initializes the selected link to be the link that the url is pointing to */
    selected: localStorage.getItem('selectedNavLink') ? localStorage.getItem('selectedNavLink') : window.location.href.split("/")[window.location.href.split("/").length-1].split(".")[0].charAt(0).toUpperCase() + window.location.href.split("/")[window.location.href.split("/").length-1].split(".")[0].slice(1)
  }
  render() {
    const onSelect = (label) => {
      this.setState({selected: label});
      localStorage.setItem( 'selectedNavLink', label );
    }

    return(
      <div className="nav_bar">
        {/* <NavLink icon={"fa-home"} link={"./index.html"} label="Home" selected={false}/> */}
        <NavLink icon={"fa-graduation-cap"} link={"./resume.html"} label="Resume" selected={this.state.selected === 'Resume'} onSelect={onSelect}/>
        <NavLink icon={"fa-briefcase"} link={"./portfolio.html"} label="Portfolio" selected={this.state.selected === 'Portfolio'} onSelect={onSelect}/>
        <NavLink icon={"fa-utensils"} link={"./recipes.html"} label="Recipes" selected={this.state.selected === 'Recipes'} onSelect={onSelect}/>
        {/* <NavLink icon={"fa-paint-brush"} link={"./index.html"} label="Hobbies" selected={false}/> */}
      </div>
    );
  }
}

document.querySelectorAll('#navBar')
  .forEach(domContainer => {
    ReactDOM.render(
      <NavBar/>,
      domContainer
    )
  });