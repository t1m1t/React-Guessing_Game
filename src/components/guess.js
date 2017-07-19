import React, {Component} from 'react';
import './app.css';

class Guess extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randomNumber: Math.floor(Math.random() * 10) + 1,
            userGuess: '',
            outcome: '',
            history: []
        }
    }

    handleChange(event) {
        this.setState({userGuess: event.target.value});
    }

    submitGuess(event) {
        event.preventDefault();
        let {randomNumber, userGuess} = this.state;
        userGuess = parseInt(userGuess);
        let newOutcome = '';

        if (userGuess > randomNumber) {
            newOutcome = "Too High";
        } else if (userGuess < randomNumber) {
            newOutcome = "Too Low";
        } else if (userGuess === randomNumber) {
            alert
            newOutcome = "Got It!";
        } else {
            newOutcome = "Error!";
        }

        const newHistory = `You Guessed: ${userGuess}. Outcome: ${newOutcome}`;

        this.setState({
            outcome: newOutcome,
            history: [...this.state.history, newHistory]
        });
    }

    resetGuess(event){
        event.preventDefault();
        this.setState({
            randomNumber: Math.floor(Math.random() * 50) + 1,
            userGuess: '',
            outcome: '',
            history: []
        });
    }

    render() {
        const {outcome, history} = this.state;

        const historyOutput = history.map((item, index) => {
            return <h5 key={index}>{item}</h5>;
        });

        return (
            <div className="total-area">
                <div className="game-area">
                    <div className="text-box">
                        <div className="guess-box">
                            <form onSubmit={(event) => this.submitGuess(event)}>
                                <div className="input-group">
                                    <input onChange={(event) => this.handleChange(event)} type="number"
                                       className="form-control" value={this.state.userGuess}/>
                                    <span className="input-group-btn">
                                        <button className="guess_button btn btn-primary">Make Guess</button>
                                        <button onClick={(event) => this.resetGuess(event)} className="reset_button btn btn-danger">Reset</button>
                                    </span>
                                </div>
                            </form>
                            <h3 className={( (outcome === "Too Low") ? 'text-primary' : (outcome === "Too High") ? 'text-danger' : 'text-success' )}>{this.state.outcome}</h3>
                        </div>
                    </div>
                </div>

                <div className="history pre-scrollable col-sm-6">
                    <h4 className="innerbox-history">Already Played #'s</h4>{historyOutput}
                </div>
            </div>


        )
    }
}

export default Guess;