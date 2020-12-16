import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  //STATE
  state = {
    pokemonArray: [],
    searchValue: ""
  }

  componentDidMount() {
    this.fetchAllPokemon()
  }

  //Event Handlers

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  submitHandler = (pokemonObj) => {
    let array = [...this.state.pokemonArray]
    let newPokemon = {
      name: pokemonObj.name,
      hp: pokemonObj.hp,
      sprites: {
        front: pokemonObj.front,
        back: pokemonObj.back
      }
    }
    this.setState({pokemonArray: [newPokemon, ...array]})
    this.postPokemonFetch(newPokemon)
  }

  //API REQUESTS

  fetchAllPokemon = async () => {
    const apiResponse = await fetch('http://localhost:4000/pokemon')
    const pokemonArray = await apiResponse.json()
    this.setState({ pokemonArray })
  }

  postPokemonFetch = async (newPokemon) => {
    await fetch('http://localhost:4000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
  }

  //Helper Functions

  filterPokemonArray = () => {
    return this.state.pokemonArray.filter(pokemon => pokemon.name.toLowerCase()
      .includes(this.state.searchValue.toLowerCase()))    
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue} />
        <br />
        <PokemonCollection pokemonArray={this.filterPokemonArray()} />
      </Container>
    )
  }
}

export default PokemonPage
