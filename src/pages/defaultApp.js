import React from 'react';
import {
    Link
} from 'react-router-dom';


import logo from '../assets/logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Zoltan's awesome react playground
                </p>
<hr/>
                <p>try the following pages:</p>
                <ul style={{ width: "400px" }}>
                    <li><Link to={"/slider"}>Slider</Link></li>
                    <li><Link to={"/bs"}>Bootstrap comp.s</Link></li>
                    <li><Link to={"/para"}>Parralax example</Link></li>
                </ul>

            </header>


        </div>
    );
}

export default App;
