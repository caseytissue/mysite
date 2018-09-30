class NavLink extends React.Component {
  constructor(props) {
    super(props);

    // this.selected = this.selected.bind(this);
  }
  state = {
    selected: false
  }

  render() {
    const onClick = () => {
      this.setState({selected: true});
    }
    const selected = this.state.selected ? "selected" : "";
    const linkClassName = "nav_link " + selected;
    const iconClassName = "nav_link_icon fas " + this.props.icon;
    return(
      <a className={linkClassName} onClick={onClick} href={this.props.link}>
        <i className={iconClassName}></i>
        <p className="nav_link_label">{this.props.label}</p>
      </a>
    );
  }
}

class NavBar extends React.Component {
  render() {

    return(
      <div className="nav_bar">
        <NavLink icon={"fa-home"} link={"./index.html"} label="Home" selected={false}/>
        <NavLink icon={"fa-graduation-cap"} link={"./resume.html"} label="Resume" selected={false}/>
        <NavLink icon={"fa-briefcase"} link={"./portfolio.html"} label="Portfolio" selected={false}/>
        <NavLink icon={"fa-paint-brush"} link={"./index.html"} label="Hobbies" selected={false}/>
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