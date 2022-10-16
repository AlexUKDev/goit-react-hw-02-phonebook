import { Component } from 'react';
import { Form } from './phonebookForm/phonebookForm';
import { nanoid } from 'nanoid';
import { PhonebookContactsList } from './phonebookContactsList/phonebookContactsList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  getFormState = data => {
    const { name, number } = data;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: { name },
          number: { number },
        },
      ],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Form sendSubmitData={this.getFormState} />
        <PhonebookContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
