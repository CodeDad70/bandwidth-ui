import React, {Component} from 'react' ;
import LearnMore from '../components/LearnMore'

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
      <nav className="nav">
        
          
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <button onMouseEnter={this.handleHover}>Resources</button>
            { this.state.showResourcesMenu && <LearnMore/> }
          </div>
         
        
      </nav>
    )
  }
}

export default ResourcesHover;