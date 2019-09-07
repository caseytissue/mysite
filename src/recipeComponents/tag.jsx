export class Tag extends React.Component {
  render() {

    var tagItems = this.props.tags.map(function(text, i){
      return (
        <div className="tag" key={i}>{text}</div>
      );
    });

    return(
      <div className="tagGroup">{tagItems}</div>
    );
  }
}

export default Tag;