import React from 'react';
import Guess from './guess';
import './app.css';
import trooper from './imgs/trooper.jpg';

const App = () => (
    <div className="main-compartment">
        <div className="trooperPic">
            <img src={trooper} className="trooper"/>
        </div>
        <div className="game-title">
            <h1 className="game_title">Guessing Game!</h1>
        </div>
        <div className="game-subtitle">
            <h4 className="game_subtitle">Guess a number 1-10!</h4>
        </div>
        <Guess />
    </div>
);

export default App;
