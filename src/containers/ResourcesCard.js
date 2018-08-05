import React, {Component} from 'react' ;
import LearnMore from '../components/LearnMore'

class ResourcesCard extends Component {
  constructor() {
    super()

    this.state = {
      showCard: false,
    }
    this.showCard = this.showCard.bind(this); 
    this.closeCard = this.closeCard.bind(this);   
  }

  showCard(event) {
    event.preventDefault()

    this.setState({
      showCard: true}, () => {
        document.addEventListener('click', this.closeCard )      
    });
  }

  closeCard(event) {
    if (!this.navCardMenu.contains(event.target))
    {
      this.setState({showCard:false}, ()=> {
        document.removeEventListener('click', this.closeCard)
      })
    }
  }

  render() {
    return (
      <div>
          <button onClick = {this.showCard}>
            Resources
          </button>
        
        { this.state.showCard ? (
          <div 
            className="nav-card" 
            ref={(element)=> {
              this.navCardMenu = element;
            }}
          >
           <LearnMore/>

          </div>

          
          ) 
          : (
            null
          )
        }
      </div>
    );
  }
}

export default ResourcesCard;
