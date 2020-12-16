import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  //STATE
  state = { pokemonArray: [] }

  componentDidMount() {
    this.fetchAllPokemon()
  }

  //API REQUESTS

  fetchAllPokemon = async () => {
    const apiResponse = await fetch('http://localhost:4000/pokemon')
    const pokemonArray = await apiResponse.json()
    this.setState({ pokemonArray })
  }

  render() {
    console.log(this.state.pokemonArray)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemonArray={this.state.pokemonArray}/>
      </Container>
    )
  }
}

export default PokemonPage
