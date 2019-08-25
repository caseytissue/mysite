import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'react-dom';

class JobHeader extends React.Component {
  render() {

    return(
      <div className="job_header_wrapper">
        <div className="job_header">
          <p className="job_company">{this.props.company}</p>
          <div className="job_position_date_wrapper">
            <p className="job_date">{this.props.date}</p>
            <p className="job_position">{this.props.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

class JobDescription extends React.Component {
  render() {
    var listItems = this.props.duties.map(function(item, i){
      return (
        <li className="job_description_item" key={i}>{item}</li>
      );
    });

    return(
      <ul className="job_description_list">{listItems}</ul>
    );
  }
}

class JobVideo extends React.Component {
  render() {
    return (
      <div className="job_image">
        <div className="job_iframe_wrapper">
          <iframe className="job_iframe" src={this.props.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

class JobWebsite extends React.Component {
  render() {
    return (
      <div className="job_image">
        <a href={this.props.site}>
          <img className="job_site_link" key={this.props.siteImage} src={this.props.siteImage}></img>
        </a>
      </div>
    );
  }
}

class JobImage extends React.Component {
  constructor(props) {
    super(props);

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }
  state = {
    currentImage: 0,
    direction: null
  }

  nextImage() {
    var nextImage = 0;
    if(this.state.currentImage < this.props.img.length - 1){
      nextImage = this.state.currentImage + 1;
    }
    this.setState({currentImage: nextImage});
    this.setState({direction: "next"});
  }

  prevImage() {
    var prevImage = this.props.img.length - 1;
    if(this.state.currentImage > 0){
     prevImage = this.state.currentImage - 1;
    }
    this.setState({currentImage: prevImage});
    this.setState({direction: "prev"});
  }
  
  render() {
    var image = this.props.img[this.state.currentImage];
    var transitionDirectionClassName = this.state.direction === "prev" ? "slidePrev" : "slideNext";
    // var img = (
    //   <CSSTransition
    //     key={image}
    //     classNames={transitionDirectionClassName}
    //     timeout={{enter:800, exit:800}}
    //     mountOnEnter={true}
    //     unmountOnExit>
    //     <img className="job_carousel_item" key={image} src={image}></img>
    //   </CSSTransition>
    // );
    //this goes where the img below is
    // <TransitionGroup component={null}>
    //   {img}
    // </TransitionGroup>
    return (
      <div className="job_image">
        <div className="job_img_carousel">
          <img className="job_carousel_item" key={image} src={image}></img>
          <div className="image_controls_background"></div>
          <div className="image_controls">
            <a className="image_controls_anchor" onClick={this.prevImage}><i className="chevron fas fa-chevron-left"></i></a>
            <a className="image_controls_anchor" onClick={this.nextImage}><i className="chevron fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  getVisualItem() {
    if(this.props.img){
      return <JobImage img={this.props.img}/>;
    }
    if(this.props.site){
      return <JobWebsite siteImage={this.props.siteImage} site={this.props.site}/>;
    }
    if(this.props.video){
      return <JobVideo video={this.props.video}/>
    }
    return undefined;
  }

  render() {

    var visualItem = this.getVisualItem();
    return (
      <div className="job_box">
        <JobHeader company={this.props.company} date={this.props.date} position={this.props.position}/>
        <div className="job_description_wrapper">
          <JobDescription duties={this.props.duties}/>
          {visualItem}
        </div>
      </div>
    );
  }
}

document.querySelectorAll('#jobs')
  .forEach(domContainer => {
    ReactDOM.render(
      <div>
        <Job
           company="Appian"
           date="June 2016 - Present"
           position="UX Engineer"
           duties={[
            'Designed and constructed the web and mobile UI components that serve as building blocks for powerful and usable applications built on Appian’s platform',
            'Prototyped new web and mobile UI components and component capabilities using HTML, CSS, and Javascript',
            'Implemented functional component enhancements using React and React Native',
            'Collaborated with Product Managers to understand customer use cases and translate those into UI capability requirements',
            'Researched and built innovative solutions to cross-browser styling, localization, responsiveness, and accessibility challenges'
           ]}
           video="https://www.youtube.com/embed/q9b94DXoj98?rel=0"/>
        <Job
           company="NASA Wallops Flight Facility"
           date="Summer 2015"
           position="Photo/Optics Intern"
           duties={[
            'Created an eleven minute video about range operations',
            'Shot video footage on site and conducted interviews using professional lighting and sound equipment',
            'Edited video script and storyboard, selected soundtracks, collected archived footage and photos',
            'Photographed 2 rocket launches and the take-off of Blue Angels fighter jets from runway'
           ]}
           video="https://www.youtube.com/embed/BzG2Xmye0g8"/>
        <Job
          company="Smithsonian National Air and Space Museum"
          date="Summer 2014"
          position="Web and New Media Intern"
          duties={[
          'Created a microsite with Dreamweaver to display images and text of a new exhibit Hawaii by Air, and added this site to the main museum website',
          'Designed 8 banner images in Photoshop for use on the microsite',
          'Researched users’ experiences with the museum’s website by conducting surveys about the site’s appearance, functionality, organization, and content'
          ]}
          siteImage="./jobImages/airAndSpace.PNG"
          site="https://airandspace.si.edu/exhibitions/hawaii-by-air/online/"/>
          <Job
            company="Duke Residence Life"
            date="Fall 2014 - Spring 2016"
            position="Resident Assistant"
            duties={[
            'Collaborated with 5 to 15 fellow RA’s to share administrative duties and program planning',
            'Consulted with students dealing with personal difficulties and directed them to appropriate resources',
            'Brainstormed, organized the logistics for, and advertised social and academic programs within a semester budget of $400 to build community among thirty residents',
            'Informed residents of policies and advertised events on campus by designing and posting bulletin boards, flyers, and handouts'
            ]}
            img={["./jobImages/IMG_5181.JPG", "./jobImages/IMG_5176.JPG", "./jobImages/IMG_5202.JPG", "./jobImages/IMG_5234.JPG", "./jobImages/IMG_20160111_070624.jpg", "./jobImages/IMG_2758.JPG", "./jobImages/IMG_5187.JPG", "./jobImages/IMG_5194.JPG", "./jobImages/IMG_5195.JPG", "./jobImages/20160111_233340.jpg", "./jobImages/20160111_233353.jpg" ]}/>
      </div>,
      domContainer
    );
  });