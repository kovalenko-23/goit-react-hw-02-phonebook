import { Contact, ContactItem, DeleteContactBtn } from "./ContactsItem.styled";

const ContactsItem = ({ id, name, number, onDeleteButton }) => {
  return (
    <Contact id={id}>
      <ContactItem>{name}:</ContactItem>
      <ContactItem>{number}</ContactItem>
      <DeleteContactBtn type="button" onClick={() => onDeleteButton(id)}>
        Delete
      </DeleteContactBtn>
    </Contact>
  );
};

export default ContactsItem;
