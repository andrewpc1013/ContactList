import React from 'react'
import ContactRow from './ContactRow';


const ContactList = (props) => {
    const contacts=props.contacts;
    const setContacts=props.setContacts;
    const selectContact = props.selectContact;
    return(
    <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {
            contacts.map(contact => {
              return <ContactRow contact={contact} key={contact.id} selectContact={selectContact}/>
            })
          }
        </tbody>
      </table>
)}

export default ContactList