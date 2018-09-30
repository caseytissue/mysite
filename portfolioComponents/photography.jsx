class PhotographGrid extends React.Component {

  // getImages() {
  //   var fileNames=[];
  //   var images;
  //   var url = this.props.imgFolder;
  //   var req = new XMLHttpRequest();
  //   req.open("GET",url,true);
  //   req.onreadystatechange=function(){
  //       if(req.readyState === 4)
  //       {
  //           var hiddenDiv = document.getElementById("hiddenDiv");
  //           hiddenDiv.innerHTML = req.responseText;
  //           for (var i = 0; i < hiddenDiv.children[2].childElementCount; i++) {
  //             if (i!== 0){
  //               fileNames.push(hiddenDiv.children[2].children[i].children[0].getAttribute("href"));
  //             }
  //           };
  //           images = fileNames.map(function(item, i){
  //             return (
  //               <div className="photography_image" key={i}><img src={item}/></div>
  //             );
  //           });
  //       }
  //   };
  //   req.send();
  //   return images; /* make return wait for request to be sent */
  // }

  getGridStyle(style) {
    switch (style) {
      case "large":
        return "large";
      case "medium":
        return "medium";
      default:
        return "";
    }
  }

  render() {

    //var images = this.getImages();

    var fileNames = [];

    for (var i = 1; i < this.props.imgNumber+1; i++) {
      fileNames.push(this.props.imgFolder+"/"+i+".jpg");
    }

    var images = fileNames.map(function(item, i){
      return (
        <div className="photography_image" key={i}><img src={item}/></div>
      );
    });

    var wrapperClassNames = "photography_wrapper " + this.getGridStyle(this.props.gridStyle);

    return(
      <div className={wrapperClassNames}>{images}</div>
    );
  }
}

document.querySelectorAll('#photography')
  .forEach(domContainer => {
    ReactDOM.render(
      <div>
        <PhotographGrid
          imgFolder="./portfolioComponents/photography/DukeDurham"
          imgNumber = {36}
          gridStyle = "large"/>
        <PhotographGrid
          imgFolder="./portfolioComponents/photography/PennyProject"
          imgNumber = {18}
          gridStyle = "medium"/>
      </div>,
      domContainer
    )
  });