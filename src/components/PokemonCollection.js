import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {}

  displayPokemon = () => {
    return this.props.pokemonArray.map(pokemonObj => 
    <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        { this.displayPokemon() }
      </Card.Group>
    )
  }
}

export default PokemonCollection
