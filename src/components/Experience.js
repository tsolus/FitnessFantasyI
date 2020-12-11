import React, { useState } from 'react';
import './Experience.css';
import EditProfile from "./EditProfile";
import { Link } from 'react-router-dom';


export default () => {

    const [editMode, setEditMode] = useState(false)
    const [firstname, setfirstname] = useState("Charles")
    const [lastname, setlastname] = useState("Delemazure")

    const onSubmit = (x, y) => {
        setfirstname(x);
        setlastname(y);
    }

    function Edit() {
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        return <input value={firstName} onChange={event => setFirstName(event.target.value)} /> ,
            <input value={lastName} onChange={event => setLastName(event.target.value)} /> ,
            <button onClick={onSubmit(firstName, lastname)}>Submit</button>
    }

    const changeToFalse = () => {
        setEditMode(false);
    }

    return (
        <div className="background">
            <div className="container">
                <div>
                    <div style={{ display: "flow", marginBottom: 10 }}>
                        <div className="heading">PROFILE</div>
                    </div>
                    <div style={{ borderTop: "2px solid lightgray" }}>
                        <div className="title">
                            Basic information
                        </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8,marginLeft:20 }}> First Name : {firstname} </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}> Last Name: {lastname}</div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}> Date of birth : 23/12/2000 </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}> Member since : 26/11/2020 </div>


                        <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                        <div className="title">
                            Email Adress
                        </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>
                            charles.delemazure@gmail.com
                        </div>


                        <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                        <div className="title">
                            Phone Number
          
                        </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>
                            +33632703191
                        </div>


                        <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                        <div className="title">
                            Password                   
                            <Link to='/modify' className="modify_password">
                                (Modify)
                            </Link>
                        </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>
                            *************
                        </div>


                        <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                        <div className="title">
                            About me
             
                        </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>Sex Male </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>Height 176 </div>
                        <div style={{ textAlign: "left", fontSize: 15, marginTop: 8, marginLeft: 20 }}>Weight 62</div>
                    </div>
                </div>
            </div>
        </div>
    )
}