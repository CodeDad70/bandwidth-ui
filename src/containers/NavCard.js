import React, {Component} from 'react' ;


class NavCard extends Component {
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
            Services
          </button>
        
        { this.state.showCard ? (
          <div 
            className="nav-card" 
            ref={(element)=> {
              this.navCardMenu = element;
            }}
          >
            <h3> Voice </h3>
            <button>Inbound/Outbound</button>
            <button>Toll-Free Voice</button>
            <button>Voice API</button>
            <button>SIP Trunking</button>
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

export default NavCard;