import AnimateHeight from 'react-animate-height';

class PhotographNavLink extends React.Component {
  
  render() {
    const onSelect = () => {
      this.props.onSelect(this.props.label);
    }
    const selected = this.props.selected ? "selected" : "";
    const classNames = "photography_nav_link " + selected;
    return(
      <a className={classNames} onClick={onSelect}>{this.props.label}</a>
    );
  }
}

class PhotographNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: localStorage.getItem('selectedPhotography') ? localStorage.getItem('selectedPhotography') : "Duke & Durham",
    collapsed: true
  }
  componentDidMount() {
    window.addEventListener('resize', () => {this.handleResize()});
  }
  componentWillUnmount() {
    window.removeEventListener('resize');
  }
  handleResize() {
    if (window.innerWidth > 600) {
      this.setState({collapsed: true});
    }
  }
  getProject(label) {
    switch (label) {
      case "Duke & Durham":
        return (
          <PhotographGrid
          imgFolder="./DukeDurham"
          imgNumber = {36}
          gridStyle = "large"/>
        );
      case "Penny Project":
        return (
          <PhotographGrid
          imgFolder="./PennyProject"
          imgNumber = {18}
          gridStyle = "medium"/>
        );
        case "Movie Poster":
          return (
            <PhotographSingle singleImage="./MoviePoster/LionKing.jpg" />
          );
        case "Photoshop Landscape":
          return (
            <PhotographSingle singleImage="./Photoshop/photoshopLandscape.jpg" />
          );
        case "3D Modeling":
          return (
            <PhotographGrid
          imgFolder="./3DModeling"
          imgNumber = {9}
          gridStyle = "small"/>
          );
        case "Videography & Animation":
          return (
            <div className="video_group">
              <Video video="https://www.youtube.com/embed/UDXnNJWfTL4?rel=0"/>
              <Video video="https://www.youtube.com/embed/4uAdLnhZSNo?rel=0"/>
              <Video video="https://www.youtube.com/embed/z75CGrrB5Qw?rel=0" />
              <Video video="https://www.youtube.com/embed/hhC1rz6o_u8?rel=0" />
              <Video video="https://www.youtube.com/embed/OQPz54E7SPc" />
              <Video video="https://www.youtube.com/embed/BbRPBVT_Sks?rel=0" />
              <Video video="https://www.youtube.com/embed/eC8sNxYZwA8?rel=0" />
              <Video video="https://www.youtube.com/embed/GeT86nVgtVQ?rel=0" />
              <Video video="https://www.youtube.com/embed/7snYeisYAbM?rel=0" />
            </div>
          );
      default:
        return "";
    }
  }
  render() {
    const onSelect = (label) => {
      this.setState({selected: label});
      localStorage.setItem( 'selectedPhotography', label );
      if (window.innerWidth < 600) {
        this.setState({collapsed: !this.state.collapsed});
      }
    }
    const collapsedClass = this.state.collapsed ? "collapsed" : "";
    const wrapperClassNames = "photography_nav_bar " + collapsedClass;
    return(
      <div>
        <AnimateHeight className="photography_nav_bar_animate_wrapper" duration={500} height={this.state.collapsed ? 40 : 210}>
        <div className={wrapperClassNames}>
          <PhotographNavLink label="Duke & Durham" selected={this.state.selected === 'Duke & Durham'} onSelect={onSelect}/>
          <PhotographNavLink label="Penny Project" selected={this.state.selected === 'Penny Project'} onSelect={onSelect}/>
          <PhotographNavLink label="Movie Poster" selected={this.state.selected === 'Movie Poster'} onSelect={onSelect}/>
          <PhotographNavLink label="Photoshop Landscape" selected={this.state.selected === 'Photoshop Landscape'} onSelect={onSelect}/>
          <PhotographNavLink label="3D Modeling" selected={this.state.selected === '3D Modeling'} onSelect={onSelect}/>
          <PhotographNavLink label="Videography & Animation" selected={this.state.selected === 'Videography & Animation'} onSelect={onSelect}/>
          </div>
        </AnimateHeight>
        {this.getProject(this.state.selected)}
      </div>
    );
  }
}

class PhotographSingle extends React.Component {
  
  render() {
    return(
      <div className="single_photography_image">
        <img src={this.props.singleImage}/>
      </div>
    );
  }
}

class Video extends React.Component {
  render() {
    return (
      <div className="video_wrapper">
        <div className="video_iframe_wrapper">
          <iframe className="video_iframe" src={this.props.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

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
      case "small":
        return "small";
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
      <PhotographNavBar/>,
      domContainer
    )
  });