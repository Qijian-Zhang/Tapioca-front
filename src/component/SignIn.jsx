import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Authentication logic here (e.g., API requests, validation)

        // For this example, we'll set isAuthenticated to true when the form is submitted.
        this.setState({
            isAuthenticated: true,
        });
    };

    render() {
        const { email, password, isAuthenticated } = this.state;

        if (isAuthenticated) {
            return <div className="sign-in-success">Welcome to Tapioca Cafe.</div>;
        }

        return (
            <div className="sign-in-container">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}

export default SignIn;