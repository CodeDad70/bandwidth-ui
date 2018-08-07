import React, {Component} from 'react' ;
import Messaging from '../components/Messaging'
import Voice from '../components/Voice'
import EmerAccess from '../components/EmerAccess'
import PhoneNumbers from '../components/PhoneNumbers'

class ServicesCard extends Component {
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
          <a onClick = {this.showCard}>
            Services
          </a>
        
        { this.state.showCard ? (
          <div 
            className="nav-card" 
            ref={(element)=> {
              this.navCardMenu = element;
            }}
          >
            <Voice/>  
            <Messaging/>
            <EmerAccess/>
            <PhoneNumbers/>

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

export default ServicesCard;
