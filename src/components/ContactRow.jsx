import React from 'react';

const ContactRow = (props) => {
const contact = props.contact;
return(
<tr>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>

)}

export default ContactRow;