import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadContacts, setFilter} from '../../actions/contactActions';
import { Link } from 'react-router-dom';
import contactService from '../../services/contactService';
import { ContactList } from '../../cmps/ContactList/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter';
import './ContactApp.scss';

class _ContactApp extends Component {

    componentDidMount() {
        this.props.loadContacts();
    }

    onFilter = (filterBy) => {
        this.props.setFilter(filterBy)
        this.props.loadContacts();
    }

    render() {
        const { contacts } = this.props;
        if (!contacts) return <h4>Loading....</h4>
        return (
            <>
                <ContactFilter onFilter={this.onFilter} />
                {contacts && <ContactList contacts={contacts} />}
                <Link to="/contact/edit" className="add"><i className="fas fa-plus"></i></Link>
            </>
        )
    }
}

function mapStateProps(state) {
    return {
        contacts: state.ContactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
    setFilter
}

export const ContactApp = connect(mapStateProps, mapDispatchToProps)(_ContactApp)