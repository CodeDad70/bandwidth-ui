import React, {Component} from 'react' ;
import Messaging from '../components/Messaging'
import Voice from '../components/Voice'
import EmerAccess from '../components/EmerAccess'
import PhoneNumbers from '../components/PhoneNumbers'
import ServicesMenu from './ServicesMenu'
import ResourcesMenu from './ResourcesMenu'


class NavHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showServicesCard: false,
      showResourcesCard: false
    };
  }
  
  handleServicesHover = () => {
    this.setState({ showServicesMenu: true });
  };
  
  handleServicesLeave = () => {
    this.setState({ showServicesMenu: false });
  };

  handleResourcesHover = () => {
    this.setState({ showResourcesMenu: true });
  };
  
  handleResourcesLeave = () => {
    this.setState({ showResourcesMenu: false });
  };
  
  render() {
    return (
      
      <div className="navbar" >
        
          <span onMouseLeave={this.handleServicesLeave}>
            <a className="services" onMouseEnter={this.handleServicesHover}>Services</a> 
            </span>

          <a className="nav-element" href="#">Test</a>
          
          <span onMouseLeave={this.handleResourcesLeave}>
          
            <a className="resources" onMouseEnter={this.handleResourcesHover}>Resources</a>
            
          </span>
            
          <span key={'test'}>
          
            { this.state.showServicesMenu && 
            <ServicesMenu/>
            }
           
          </span> 
          
          <span key={'resources'} >
            { this.state.showResourcesMenu && <ResourcesMenu/> }
          </span>
        
      </div>
    )
  
  }
}


export default NavHover;