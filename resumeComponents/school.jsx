class School extends React.Component {
  render() {

    var degrees = this.props.degrees.map(function(deg, i){
      return (
        <p className="degree" key={i}>{deg}</p>
      );
    });

    return(
      <div className="school_wrapper">
        <div className="school_header">
            <h1 className="school_name">{this.props.schoolName}</h1>
            <p className="school_location">{this.props.schoolCity}</p>
        </div>
        {degrees} 
        <p className="gpa">{this.props.gpa}</p>
      </div>
    );
  }
}

document.querySelectorAll('#education')
  .forEach(domContainer => {
    ReactDOM.render(
      <School
          schoolName="Duke University"
          schoolCity="Durham, NC"
          degrees={["Bachelor of Science in Computer Science, May 2016", "Bachelor of Arts in Visual & Media Studies, May 2016"]}
          gpa="GPA: 3.8"/>,
      domContainer
    )
  });