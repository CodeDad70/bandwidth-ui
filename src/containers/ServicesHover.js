import React, {Component} from 'react' ;
import Messaging from '../components/Messaging'
import Voice from '../components/Voice'
import EmerAccess from '../components/EmerAccess'
import PhoneNumbers from '../components/PhoneNumbers'

class ServicesHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavCard: false
    };
  }
  
  handleHover = () => {
    this.setState({ showServicesMenu: true });
  };
  
  handleLeave = () => {
    this.setState({ showServicesMenu: false });
  };
  
  render() {
    return (
      <nav className="nav">
        
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <button onMouseEnter={this.handleHover}>Services</button>
              { this.state.showServicesMenu && 
              (<Messaging/>,
              <Voice/>,
              <EmerAccess/>,
              <PhoneNumbers/>
              )
              }
          </div>
         
        
      </nav>
    )
  }
}

export default ServicesHover;