import React, { Component } from 'react';
import '../App.css';
import "./Button.css";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Data extends Component {

    state = {
        height: '',
        weight: '',
        pushup: '',
        crunch: '',
        squat: '',
    };

    handleAdd1 = async e => {
        await this.setState({
            height: e.target.value
        })
    }

    handleAdd2 = async e => {
        await this.setState({
            weight: e.target.value
        })
    }

    handleAdd3 = async e => {
        await this.setState({
            pushup: e.target.value
        })
    }

    handleAdd4 = async e => {
        await this.setState({
            crunch: e.target.value
        })
    }

    handleAdd5 = async e => {
        await this.setState({
            squat: e.target.value
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
                    <div className='data-container'>
                        <div className='height-container'>
                            <label>Height</label>
                            <br />
                            <input
                                onChange={this.handleAdd1}
                                className="form-control"
                                value={this.state.height}
                                type="height"
                                name="height"
                                placeholder="Height in centimeters" />
                        </div>
                        <div className='weight-container'>
                            <label>Weight</label>
                            <br />
                            <input
                                onChange={this.handleAdd2}
                                className="form-control"
                                value={this.state.weight}
                                type="weight"
                                name="weight"
                                placeholder="Weight in kilograms" />
                        </div>
                        <div className='pushup-container'>
                            <label>Push-ups</label>
                            <br />
                            <input
                                onChange={this.handleAdd3}
                                className="form-control"
                                value={this.state.pushup}
                                type="pushup"
                                name="pushup"
                                placeholder="Maximal repetitions" />
                        </div>
                        <div className='crunch-container'>
                            <label>Crunchs</label>
                            <br />
                            <input
                                onChange={this.handleAdd4}
                                className="form-control"
                                value={this.state.crunch}
                                type="crunch"
                                name="crunch"
                                placeholder="Maximal repetitions" />
                        </div>
                        <div className='squat-container'>
                            <label>Squats</label>
                            <br />
                            <input
                                onChange={this.handleAdd5}
                                className="form-control"
                                value={this.state.squat}
                                type="squat"
                                name="squat"
                                placeholder="Maximal repetitions" />
                        </div>
                    </div>
                    <br />
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

export default Data;