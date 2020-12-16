import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: 0,
    front: "",
    back: ""
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ name: "", hp: 0, front: "", back: "" })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.inputChangeHandler} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.inputChangeHandler} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.inputChangeHandler} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.inputChangeHandler} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
