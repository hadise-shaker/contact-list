import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ searchString, contacts, onDeleteContact }) {
  return (
    <div className="contact-list">
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(searchString.toLowerCase())
        )
        .map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </div>
  );
}

export default ContactList;
