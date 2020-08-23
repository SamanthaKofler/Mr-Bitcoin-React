import React, { Component } from 'react';
import './ContactFilter.scss';

export class ContactFilter extends Component {
    state = {
        term: ''
    }
    handleChange = ({ target }) => {
        const field = target.name;
        this.setState({ [field]: target.value }, () => {
            this.props.onFilter({ ...this.state });
        })
    }
    render() {
        return (
            <form className="contact-filter">
                <input name="term" type="text" placeholder="Search" value={this.state.term} onChange={this.handleChange} />
            </form>
        )
    }
}
