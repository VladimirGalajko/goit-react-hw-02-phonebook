import { Component } from 'react';

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };
 
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    // console.log(this.state)
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          id="inputName"
          name="name"
          placeholder="text"
          value={name}
          onChange={this.handleChange}
          required
        />
        <br></br>
        <label>Number</label>
        <br></br>
        <input
          type="tel"
          id="inputNumber"
          name="number"
          placeholder="number"
          required
          value={number}
          onChange={this.handleChange}
        />
        <br></br>
        <button type="submit">add contact 👆</button>
      </form>
    );
  }
}

export default FormAddContact;
