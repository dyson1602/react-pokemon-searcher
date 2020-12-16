import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = { beenClicked: false }

  clickHandler = () => {
    this.setState({beenClicked: !this.state.beenClicked})
  }

  render() {
    let pokemon = this.props.pokemonObj
    return (
      <Card>
        <div onClick={this.clickHandler}>
          <div className="image">
            {!this.state.beenClicked ? 
            <img alt="oh no!" src={pokemon.sprites.front}/> :
            <img alt="oh no!" src={pokemon.sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
