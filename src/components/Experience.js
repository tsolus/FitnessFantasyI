import React, { useState } from 'react';
import './Experience.css';
import EditProfile from "./EditProfile";

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
        return <input value={firstName} onChange={event => setFirstName(event.target.value)} />,
            <input value={lastName} onChange={event => setLastName(event.target.value)} />,
            <button onClick={onSubmit(firstName, lastname)}>Submit</button>
    }

    const changeToFalse = () => {
        setEditMode(false);
    }

    return (
        <div className="outerBox">
            <div>
                <div style={{ display: "flow", marginBottom: 10 }}>
                    <div style={{ marginLeft: 0, fontSize: 40 }}>PROFILE</div>
                </div>
                <div style={{ borderTop: "2px solid lightgray" }}>
                    <div style={{ color: "black", fontFamily: "fantasy", marginTop: 20, textAlign: "left", fontSize: 25 }}>
                        Basic information
                <ul style={{
                            cursor: "pointer",
                            color: "blue",
                            fontFamily: "sans-serif",
                            padding: "0px 0px 0px",
                            fontSize: 13,
                        }} >Modify
                </ul>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}> First Name : {firstname} </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}> Last Name: {lastname}</div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}> Date of birth : 23/12/2000 </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}> Member since : 26/11/2020 </div>


                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                    <div style={{ color: "black", fontFamily: "fantasy", marginTop: 20, textAlign: "left", fontSize: 25 }}>
                        Email Adress
                <ul style={{
                            cursor: "pointer",
                            color: "blue",
                            fontFamily: "sans-serif",
                            padding: "0px 0px 0px",
                            fontSize: 13,
                        }} >Modify
                </ul>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>
                        charles.delemazure@gmail.com
            </div>


                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                    <div style={{ color: "black", fontFamily: "fantasy", marginTop: 20, textAlign: "left", fontSize: 25 }}>
                        Phone Number
                <ul style={{
                            cursor: "pointer",
                            color: "blue",
                            fontFamily: "sans-serif",
                            padding: "0px 0px 0px",
                            fontSize: 13,
                        }} >Modify
                </ul>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>
                        +33632703191
            </div>


                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                    <div style={{ color: "black", fontFamily: "fantasy", marginTop: 20, textAlign: "left", fontSize: 25 }}>
                        Password
                <ul style={{
                            cursor: "pointer",
                            color: "blue",
                            fontFamily: "sans-serif",
                            padding: "0px 0px 0px",
                            fontSize: 13,
                        }}
                            onClick={() => setEditMode(true)}>Modify
                </ul>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>
                        *************
            </div>


                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                    <div style={{ color: "black", fontFamily: "fantasy", marginTop: 20, textAlign: "left", fontSize: 25 }}>
                        About me
                <ul style={{
                            cursor: "pointer",
                            color: "blue",
                            fontFamily: "sans-serif",
                            padding: "0px 0px 0px",
                            fontSize: 13,
                        }}
                            onClick={() => setEditMode(true)}>Modify
                </ul>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>Sex Male </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>Height 176 </div>
                    <div style={{ textAlign: "left", fontSize: 15, marginTop: 8 }}>Weight 62</div>
                </div>
            </div>
        </div>
    )
}