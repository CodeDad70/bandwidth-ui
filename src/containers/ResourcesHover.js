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
        <ul className="nav__menu">
          
          <li
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <button onMouseEnter={this.handleHover}>Resources</button>
            { this.state.showResourcesMenu && <LearnMore/> }
          </li>
         
        </ul>
      </nav>
    )
  }
}

export default ResourcesHover;