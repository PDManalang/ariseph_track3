import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/authActions'

import './Auth.css'

export class SignUp extends Component {
    state ={
        email:'',
        password: '',
        firstName:'',
        lastName:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            
            <div className="wrapper bg">
            <div className="form">
                <form onSubmit= {this.handleSubmit} className="white">
                    <div className="title">Sign Up</div>
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
                    {/* First Name Field */}
                    <div className="input_wrap">
                        <div className="input_field">
                            <label htmlFor="firstName">First Name</label>
                            <input class="input" type="text" id="firstName" onChange={this.handleChange} />
                        </div>
                    </div>
                    {/* Last Name Field */}
                    <div className="input_wrap">
                    <div className="input_field">
                        <label htmlFor="lastName">Last Name</label>
                        <input class="input" type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    </div>
                    {/* SignUp Button */}
                    <div className="input_wrap">
                    <div className="input_field">
                        <button className="btn">Sign Up</button>
                        <div className="error_msg">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
