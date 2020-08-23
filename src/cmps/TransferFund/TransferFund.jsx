import React, { Component } from 'react';
import userService from '../../services/userService';
import './TransferFund.scss';

export class TransferFund extends Component {
    state = {
        amount: ''
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState({ [field]: value });
    }
    transfer = () => {
        console.log(this.state.amount)
        const move = { toId: this.props.contact._id, to: this.props.contact.name, at: Date.now(), amount: this.state.amount }
        userService.addMove(move);
        this.setState({ amount: '' });
    }

    render() {
        return (
            <form onSubmit={this.transfer} className="flex-center">
                <input type="text" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
                <button>Transfer</button>
            </form>

        )
    }
}
