import React, { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./Header";
import AddForm from "./AddFrom";
import ContactList from "./ContactList";

const linkToData =
  "https://my-json-server.typicode.com/ghsamm/fake-react-app-data/contacts";

function App() {
  const [searchString, setSearchString] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const addContact = (contact) => {
    setContacts([{ ...contact, id: Math.random() }].concat(contacts));
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };
  const showAddForm = () => {
    setIsAddFormVisible(true);
  };
  const hideAddForm = () => {
    setIsAddFormVisible(false);
  };

  useEffect(() => {
    Axios.get(linkToData).then(function (response) {
      setContacts(response.data);
    });
  });

  return (
    <div className="contact-list-app">
      <Header
        onShowAddForm={showAddForm}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {isAddFormVisible && (
        <AddForm
          onCancel={hideAddForm}
          onAdd={function (newContact) {
            addContact(newContact);
            hideAddForm();
          }}
        />
      )}
      <ContactList
        searchString={searchString}
        contacts={contacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
export default App;
