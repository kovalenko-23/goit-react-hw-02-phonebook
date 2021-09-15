import ContactsItem from "../ContactsItem/ContactsItem";
import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteButton={onDeleteButton}
        />
      ))}
    </List>
  );
};

export default ContactsList;
