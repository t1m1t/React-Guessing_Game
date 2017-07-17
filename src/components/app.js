import React from 'react';
import Guess from './guess';
import './app.css';


const App = () => (
    <div className="container">
        <h1>Guessing Game</h1>
        <h4>Guess a number 1-10</h4>
        <Guess />
    </div>
);

export default App;
