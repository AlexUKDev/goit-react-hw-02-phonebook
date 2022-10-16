import { Component } from 'react';
import {
  PhonebookForm,
  PhonebookLable,
  PhonebookSubBtn,
  PhonebookInput,
} from './phonebookForm.Styled';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendSubmitData(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <PhonebookLable>
          Name
          <PhonebookInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </PhonebookLable>
        <PhonebookLable>
          Number
          <PhonebookInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </PhonebookLable>
        <PhonebookSubBtn type="submit">Add contact</PhonebookSubBtn>
      </PhonebookForm>
    );
  }
}
