import React, { useState } from 'react';
import dummyContacts from '../dummyData';
import { ContactList } from './';

const Main = () => {
  const [contacts, setContacts] = useState([]);
  
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
      <ContactList contacts={contacts} setContacts={setContacts}/>
      </div>
    </div>
  );
};

export default Main;
