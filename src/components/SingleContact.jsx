import React from 'react';
import Favorite from './Favorite';

const SingleContact = (props) => {
    const selectedContact = props.selectedContact;
    const selectContact = props.selectContact;

    return (
        <div id="single-contact">
            <div id="contact-info">
                <p><b>Name:</b> {selectedContact.name}</p>
                <p><b>Email:</b>{selectedContact.email}</p>
                <p><b>Phone:</b>{selectedContact.phone} </p>
                <div>
                    {/* <b>Address:</b> */}
                    <p>
                        <b>Username:</b> {selectedContact.username}
                        <br />
                        <b>Website:</b> {selectedContact.website}
                    </p>
                </div>
                <p><b>Company:</b>{selectedContact.company.name} </p>
                <Favorite selectedContact = {selectedContact} selectContact = {selectContact}/>
            </div>
        </div>
    )
}

export default SingleContact