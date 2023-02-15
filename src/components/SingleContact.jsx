import React from 'react'

const SingleContact = (props) => {
    const contact = props.contact;

    return (
        <div id="single-contact">
            <div id="contact-info">
                <p><b>Name:</b> </p>
                <p><b>Email:</b> </p>
                <p><b>Phone:</b> </p>
                <div>
                    <b>Address:</b>
                    <p>
                        <b>Street:</b> 
                        <br />
                        <b>City/State:</b> 
                    </p>
                </div>
                <p><b>Company:</b> </p>
            </div>
        </div>
    )
}

export default SingleContact