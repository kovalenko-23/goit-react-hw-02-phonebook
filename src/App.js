import { Component } from "react";
import shortid from "shortid";
import styled from "@emotion/styled";
import ContactsForm from "./Components/ContactsForm/ContactsForm";
import ContactsList from "./Components/ContactList/ContactsList";
import { ContactsFilter } from "./Components/ContactsFilter/ContactsFilter";

const Wrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  handleOnSubmitForm = ({ name, number }) => {
    const contactsName = this.state.contacts.map((contact) => contact.name);

    if (contactsName.includes(name)) {
      alert(`You already have ${name} in your contacts!`);
    } else {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  hendleFinder = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.handleOnSubmitForm} />
        <h2>Contacts</h2>
        <ContactsFilter value={this.filter} onChange={this.hendleFinder} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteButton={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
