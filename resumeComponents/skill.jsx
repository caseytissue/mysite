class Skill extends React.Component {
  render() {

    var percentStyle = {
      width: this.props.percent
    };

    var tooltip = this.props.tooltip ? <i className="skill_tooltip fas fa-question-circle" title={this.props.tooltip}></i> : undefined;

    return(
      <div className="skill">
        <div className="skill_label">{this.props.skillName}</div>
        {tooltip}
        <div className="skill_bar_background">
          <div className="skill_bar_percent" style={percentStyle}></div>
        </div>
      </div>
    );
  }
}

document.querySelectorAll('#skills')
  .forEach(domContainer => {
    ReactDOM.render(
      <div className="skills_wrapper">
        <h2 className="skills_header">Technical Skills</h2>
        <Skill
          skillName="HTML"
          percent="80%"/>
          <Skill
          skillName="CSS/LESS"
          percent="75%"/>
          <Skill
          skillName="JavaScript (React)"
          percent="60%"/>
          <Skill
          skillName="SVG - Scalable Vector Graphics"
          percent="70%"
          tooltip="Animation, manipulation, styling, and use of svg's as HTML elements in web pages, etc."/>
          <Skill
          skillName="Adobe Illustrator, Gravit, Inkscape"
          percent="70%"
          tooltip="Design and creation of SVG images"/>
          <Skill
          skillName="Appian SAIL"
          percent="65%"
          tooltip="Appian's proprietary programming language used for generating dynamic interactive UI's"/>
          <Skill
          skillName="Java"
          percent="35%"/>
          <Skill
          skillName="Adobe Lightroom, Photoshop"
          percent="40%"/>
      </div>,
      domContainer
    )
  });