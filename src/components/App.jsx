import React from 'react';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { checkEqual, parseJson } from 'utils';

const LOCAL_STORAGE_KEY = 'phonebookContacts';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
      this.setState({ contacts: parseJson(storageData) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(this.state.contacts)
    );
  }

  addContact = profile => {
    const { contacts } = this.state;
    const isAlreadyHave = contacts.reduce(
      (acc, { name, number }) =>
        acc === ''
          ? (acc = checkEqual(name, profile.name)) ||
            (acc = checkEqual(number, profile.number))
          : acc,
      ''
    );

    if (isAlreadyHave) {
      return alert(isAlreadyHave + ' is already in contacts.');
    }

    this.setState(pervState => ({
      contacts: [...pervState.contacts, profile],
    }));
  };

  deleteContact = event => {
    const contactId = event.currentTarget.id;
    this.setState(pervState => ({
      contacts: pervState.contacts.filter(element => element.id !== contactId),
    }));
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const query = filter.trim().toLowerCase();

    if (!query) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(query) || number.includes(query)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleChange} />
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
