import React from 'react';
import Guess from './guess';
import './app.css';

const App = () => (
    <div className="main-compartment">
        <div className="game-title">
            <h1 className="game_title">Guessing Game!</h1>
        </div>
        <div className="game-subtitle">
            <h2 className="game_subtitle">Guess a number: 1-10</h2>
        </div>
        <Guess />
    </div>
);

export default App;
