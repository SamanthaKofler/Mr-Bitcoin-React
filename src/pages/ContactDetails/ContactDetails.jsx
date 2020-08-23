import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contactService from '../../services/contactService';
import userService from '../../services/userService';
import { TransferFund } from '../../cmps/TransferFund/TransferFund';
import './ContactDetails.scss';
import { MovesList } from '../../cmps/MovesList/MovesList';
import ContentLoader from '../../cmps/ContentLoader/ContentLoader';

export class ContactDetails extends Component {
    state = {
        contact: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = await contactService.getContactById(id);
        this.setState({ contact });
    }
    get contactMoves() {
        const user = userService.getUser();
        return user.moves.filter(move => move.toId === this.state.contact._id);
      }

    render() {
        const { contact } = this.state;
        if (!contact) return <ContentLoader />
        return (
            <>
                <div className="details-header flex space-between align-center container">
                    <Link to="/contact">Back</Link>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                </div>
                <div className="contact-details flex column justify-center align-center">
                    <img src={`https://robohash.org/${contact._id}/?set=set5`} alt="profile" />
                    <h4 className="name">{contact.name}</h4>
                    <p className="phone">{contact.phone}</p>
                    <p className="email">{contact.email}</p>
                </div>
                <TransferFund contact={contact}></TransferFund>
                <div className="container">
                    <p className="your-moves"><i className="fas fa-history"></i>Moves History</p>
                </div>
                <MovesList moves={this.contactMoves} showTo={false}></MovesList>
            </>
        )
    }
}
