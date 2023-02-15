import React from 'react'

const SingleContact = (props) => {
    const selectedContact = props.selectedContact;

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
            </div>
        </div>
    )
}

export default SingleContact