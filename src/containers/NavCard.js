import React, {Component} from 'react' ;


class NavCard extends Component {
  constructor() {
    super()

    this.state = {
      showCard: false,
    }
    this.showCard = this.showCard.bind(this);    
  }

  showCard(event) {
    event.preventDefault()

    this.setState({
      showCard: true 
    })
  }

  render() {
    return (
      <div>
          <button onClick = {this.showCard}>
            Services
          </button>
        
        { this.state.showCard ? (
          <div className="nav-card" >
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