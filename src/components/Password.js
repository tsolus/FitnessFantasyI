import React, { Component } from 'react';
import '../App.css';
import "./Button.css";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Password extends Component {

    state = {
        password: '',
        newpassword: '',
        verify: '',
    };

    handleAdd1 = async e => {
        await this.setState({
            password: e.target.value
        })
    }

    handleAdd2 = async e => {
        await this.setState({
            newpassword: e.target.value
        })
    }

    handleAdd3 = async e => {
        await this.setState({
            verify: e.target.value
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
                    <div className="heading_login">Reset password</div>
                    <div className="username-container">
                        <label>Old password</label>

                        <br />

                        <input
                            onChange={this.handleAdd1}
                            className="form-control"
                            value={this.state.password}
                            type="oldpassword"
                            name="oldpassword"
                            placeholder="Old password" />
                    </div>

                    <div className="password-container">
                        <label>New password</label>

                        <br />

                        <input
                            onChange={this.handleAdd2}
                            className="form-control"
                            value={this.state.newpassword}
                            type="newpassword"
                            name="newpassword"
                            placeholder="New password" />
                    </div>

                    <br />

                    <div className="password-container">
                        <label>Confirmm new password</label>

                        <br />

                        <input
                            onChange={this.handleAdd3}
                            className="form-control"
                            value={this.state.verify}
                            type="verifypassword"
                            name="verifypassword"
                            placeholder="Confirm new password" />
                    </div>

                    <br/>

                    <Link to='/home'>
                        <button
                            onClick={this.handleSubmit}
                            className='main__btn_login'
                            id='submit'><a>
                                Submit</a>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Password;