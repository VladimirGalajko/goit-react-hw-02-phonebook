import { GlobalStyle } from 'GlobalStyle';
import ContactList from 'components/ContactList';
import { Container } from 'components/Container/Container.styled';
import FormAddContact from 'components/FormAddContact';
import { nanoid } from 'nanoid';
import defaultContacts from './contacts.json';

import { Component } from 'react';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  addContact = e => {
    const name = e.name;
    const number = e.number;
    if (this.state.contacts.some((contact) => contact.name === name)) {
      alert(name + 'is alredy in contacts')
      return; 
    }
    const newContact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  contactsToShow = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  delContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  changeFilter = e => {
    console.log(e.target.value)
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <h1>Phonebook 📱</h1>
        <FormAddContact onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state}
          onChange={this.changeFilter}/>
        <div>
          <ContactList
            contacts={this.contactsToShow()}
            onDelete={this.delContacts}
          />
        </div>
        <GlobalStyle />
      </Container>
    );
  }
}
