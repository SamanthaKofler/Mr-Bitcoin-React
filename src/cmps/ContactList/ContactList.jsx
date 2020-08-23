import React from 'react';
import { Link } from 'react-router-dom';
import './ContactList.scss';
import { ContactPreview } from '../ContactPreview/ContactPreview';


export function ContactList(props) {
    return (
        <ul className="contact-list container">
            {props.contacts.map(contact => 
                    // {/* <a > */}
                    <ContactPreview contact={contact} key={contact._id}/>
                    // {/* </a> */}
                    )}
            <Link to="/contact/edit" className="add-in-list flex-center"><i className="fas fa-plus"></i></Link>
        </ul>
    )
}