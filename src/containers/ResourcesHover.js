import React, {Component} from 'react' ;
import ResourcesMenu from './ResourcesMenu'

class ResourcesHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavCard: false
    };
  }
  
  handleHover = () => {
    this.setState({ showResourcesMenu: true });
  };
  
  handleLeave = () => {
    this.setState({ showResourcesMenu: false });
  };
  
  render() {
    return (
      <div className="element2"  >
      
        
        
          <div
            
            onMouseLeave={this.handleLeave}
          >
          <button onMouseEnter={this.handleHover}>Resources</button>
          
          
           <div key={'resources'} >
            { this.state.showResourcesMenu && <ResourcesMenu/> }
            </div>

          </div>
         
        
     
      </div>
    )
  }
}

export default ResourcesHover;