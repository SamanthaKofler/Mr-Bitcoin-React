import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.scss';

export function ContactPreview(props) {
    const { contact } = props;
    return (
        <Link to={`/contact/${contact._id}`}>
            <li className="preview flex space-evenly">
                <img src={`https://robohash.org/${contact._id}/?set=set5`} alt="contact" />
                <div className="flex column">
                    <span className="name">{contact.name}</span>
                    <span>{contact.phone}</span>
                </div>
            </li>
        </Link>
    )
}

