import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeContact} from '../../actions/contactActions';
import contactService from '../../services/contactService';
import './ContactEdit.scss';
import ContentLoader from '../../cmps/ContentLoader/ContentLoader';

class _ContactEdit extends Component {
    state = {
        contact: null
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const contact = (id) ? await contactService.getContactById(id) : await contactService.getEmptyContact();
        this.setState({ contact });
    }
    get title() {
        return (this.state.contact._id) ? 'Edit Contact' : 'Add Contact';
    }
    get imgSrc() {
        return (this.state.contact._id) ? `https://robohash.org/${this.state.contact._id}/?set=set5` : 'https://robohash.org/new/?set=set5';
    }

    handleChange = ({target}) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }));
    }
    onSaveContact = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact(this.state.contact);
        this.props.history.push('/contact');
    }
    onDeleteContact = async () => {
        await this.props.removeContact(this.state.contact._id)
        this.props.history.push('/contact');
    }
    close = () => {
        this.props.history.goBack();
    }

    render() {
        const { contact } = this.state;
        if (!contact) return <ContentLoader />
        return (
            <>
                <div className="edit-header flex space-between align-center container">
                    <button className="back-btn" onClick={this.close}>Back</button>
                    <button className="delete-btn" onClick={this.onDeleteContact}>Delete</button>
                </div>
                <div className="contact-edit">
                    <div className="flex column justify-center align-center">
                        <h3>{this.title}</h3>
                        <img src={this.imgSrc} alt="profile"/>
                    </div>
                    <form className="flex column justify-center align-center" onSubmit={this.onSaveContact}>
                        <input type="text" placeholder="Name" name="name" value={contact.name} onChange={this.handleChange} />
                        <input type="text" placeholder="Phone" name="phone" value={contact.phone} onChange={this.handleChange} />
                        <input type="email" placeholder="Email" name="email" value={contact.email} onChange={this.handleChange} />
                        <button className="save-btn" >Save</button>
                    </form>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = {
    removeContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)