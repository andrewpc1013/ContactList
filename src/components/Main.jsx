import React, { useEffect, useState } from 'react';
// import dummyContacts from '../dummyData';
import { ContactList } from './';
import { SingleContact } from './';

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  async function getContacts() {
    try {
      const data = await fetch(`http://jsonplace-univclone.herokuapp.com/users`);

      const result = await data.json();

      setContacts(result);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  async function selectContact(contactID) {
    try {
      const data = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactID}`);
      const contact = await data.json();

      setSelectedContact(contact);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {
          selectedContact.id ? 
          <SingleContact selectedContact={selectedContact}/> :
          <ContactList contacts={contacts} setContacts={setContacts} selectContact={selectContact}/>
        }
      </div>
    </div>
  );
};

export default Main;
