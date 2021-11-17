import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import './Auth.css'

export class SignIn extends Component {

    state ={
        email:'',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            
            <div className="auth-wrapper bg">
                <div className="form">
                <div class="title">
                            Sign In
                        </div>
                    <form onSubmit= {this.handleSubmit} className="white">
                        {/* Email Field */}
                        <div className="input_wrap">
                            <div className="input_field">
                                <label htmlFor="email">Email</label>
                                <input class="input" type="email" id="email" onChange={this.handleChange} />
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="input_wrap">
                            <div className="input_field">
                                <label htmlFor="password">Password</label>
                                <input class="input" type="password" id="password" onChange={this.handleChange} />
                            </div>
                        </div>
                        {/* Login Button */}
                        <div className="input_wrap">
                            <button className="btn">Login</button>
                            <div className="error_msg">
                                { authError ? <p>{authError}</p> : null }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
