import React, { useState } from 'react';
import Select from 'react-select';
import "../App.css";


export default () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [time, setTime] = useState(0);

    return (
        <div className="outerBox">


            <form>
                <label>
                    <h1 className="text">How hard was the exercise ? </h1>
                    <select>
                        <option selected value="choose">Choose the intensity</option>
                        <option value={selectedOption}>Very hard</option>
                        <option value={selectedOption}>Hard</option>
                        <option value={selectedOption}>Medium</option>
                        <option value={selectedOption}>Easy</option>
                        <option value={selectedOption}>Very Easy</option>
                    </select>
                    <h1 className="test">How much time ?</h1>
                    <input type="text" value={time} onChange={event => setTime(event.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
