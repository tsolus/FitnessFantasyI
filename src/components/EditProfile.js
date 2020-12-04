import React, {useState } from 'react';


export default ({ changeToFalse }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")

    const onSubmit = () => {
        setFirstName(firstName);
        setLastName(lastName);
    }

    return (
        <div>
            <div style={{ cursor: "pointer" }} onClick={() => changeToFalse()}>Go Back</div>
            <input value={firstName} onChange={event => setFirstName(event.target.value)} />
            <input value={lastName} onChange={event => setLastName(event.target.value)} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}