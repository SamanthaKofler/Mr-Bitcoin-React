import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signUp} from '../../actions/userActions';
import userService from '../../services/userService';
import './SignupPage.scss';

class _SignupPage extends Component {
    state = {
        username: ''
    }
    textInput = null;
    
    componentDidMount() {
        this.textInput.focus();
    }

    setTextInputRef = element => {
        this.textInput = element;
    }

    handleChange = ({target}) => {
        this.setState({username: target.value });
    }

    signUp = (ev) => {
        ev.preventDefault();
        this.props.signUp(this.state.username)
        .then(() => this.props.history.push('/'))
        this.props.history.push('/');
      }
    render() {
        return (
            <>
                <h3 className="tac">Please enter your name</h3>
                <form onSubmit={this.signUp} className="flex column justify-center align-center container">
                    <input ref={this.setTextInputRef} type="text" name="username" value={this.state.username} placeholder="Name" onChange={this.handleChange}/>
                    <button>Sign Up</button>
                </form>
            </>
        )
    }
}


function mapStateProps(state) {
    return {
        user: state.UserReducer.user
    }
}
const mapDispatchToProps = {
    signUp
}

export const SignupPage = connect(mapStateProps, mapDispatchToProps)(_SignupPage)