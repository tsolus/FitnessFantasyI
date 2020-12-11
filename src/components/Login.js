import React, { Component } from 'react';
import '../App.css';
import "./Button.css";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
        email: '',
    };

    handleAdd1 = async e => {
        await this.setState({
            username: e.target.value
        })
    }

    handleAdd2 = async e => {
        await this.setState({
            password: e.target.value
        })
    }

    handleAdd3 = async e => {
        await this.setState({
            email: e.target.value
        })
    }

    /*handleSubmit = e => {
        e.preventDefault();
        let form = new FormData();
        form.append("username", this.state.username);
        form.append("password", this.state.password);
        const url = "http://172.30.1.45/"
        axios.post(url, form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }*/



    render() {
        return (
            <div className="background_login">
                <div className="container_login">
                    <div className="heading_login">Log-in</div>
                    <div className="username-container">
                        <label>Username</label>

                        <br />

                        <input
                            onChange={this.handleAdd1}
                            className="form-control"
                            value={this.state.username}
                            type="username"
                            name="username"
                            placeholder="Username" />
                    </div>

                    <div className="password-container">
                        <label>Password</label>

                        <br />

                        <input
                            onChange={this.handleAdd2}
                            className="form-control"
                            value={this.state.password}
                            type="password"
                            name="password"
                            placeholder="Password" />
                    </div>

                    <br />

                    <Link to='/home'>
                        <button
                            onClick={this.handleSubmit}
                            className='main__btn_login'
                            id='submit'><a>
                            Log-in</a>
                        </button>
                    </Link>

                </div>





                <div className="container_login">
                    <div className="heading_login">Sign-up now!</div>
                    <div className="username-container">
                        <label>Username</label>

                        <br />

                        <input
                            onChange={this.handleAdd1}
                            className="form-control"
                            value={this.state.username}
                            type="username"
                            name="username"
                            placeholder="Username" />
                    </div>

                    <div className="password-container">
                        <label>Password</label>

                        <br />

                        <input
                            onChange={this.handleAdd2}
                            className="form-control"
                            value={this.state.password}
                            type="password"
                            name="password"
                            placeholder="Password" />
                    </div>

                    <div className="email-container">
                        <label>Email</label>

                        <br />

                        <input
                            onChange={this.handleAdd3}
                            className="form-control"
                            value={this.state.email}
                            type="email"
                            name="email"
                            placeholder="Email" />
                    </div>

                    <br />

                    <Link to='/information'>
                        <button
                            onClick={this.handleSubmit}
                            className='main__btn_login'
                            id='submit'><a>
                            Sign-up</a>
                        </button>
                    </Link>
                </div>
            </div>       
        );
    }
}

export default Login;