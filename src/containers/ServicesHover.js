import React, {Component} from 'react' ;
import Messaging from '../components/Messaging'
import Voice from '../components/Voice'
import EmerAccess from '../components/EmerAccess'
import PhoneNumbers from '../components/PhoneNumbers'
import ServicesMenu from './ServicesMenu'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




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
      <div className= "element1">
        
          <div
           
            onMouseLeave={this.handleLeave}
          >
      <a onMouseEnter={this.handleHover}>Services</a> 

      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

            <div key={'test'}>
              { this.state.showServicesMenu && 
              <ServicesMenu/>
              }
             </div> 
            </ReactCSSTransitionGroup>

          </div>
         
        
      </div>
    )
  
  }
}


export default ServicesHover;