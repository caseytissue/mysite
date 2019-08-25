class Contact extends React.Component {
  render() {

    return(
      <div className="contact_wrapper">
        <div className="contact_img"><img src={this.props.img}/></div>
        <div className="contact_text_wrapper">
          <div className="contact_name">{this.props.name}</div>
          <div className="contact_details_wrapper">
            <p className="contact_email">{this.props.email}</p>
            <p className="contact_phone">{this.props.phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

document.querySelectorAll('#contact')
  .forEach(domContainer => {
    ReactDOM.render(
      <Contact
          img="./contactImage/APN18462.jpg"
          name="Cassidy Tissue"
          email="cassidytissue@gmail.com"
          phone="717-713-7590"/>,
      domContainer
    )
  });