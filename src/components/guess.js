import React, {Component} from 'react';


class Guess extends Component {
    constructor(props){
        super(props);

        this.state = {
            randomNumber: Math.floor(Math.random() * 10) + 1,
            userGuess: '',
            outcome: '',
            history: []
        }
    }

    handleChange(event){
        this.setState({ userGuess: event.target.value });
    }

    submitGuess(event){
        event.preventDefault();
        let { randomNumber, userGuess } = this.state;
        userGuess = parseInt(userGuess);
        let newOutcome = '';

        if (userGuess > randomNumber){
            newOutcome = "Too High";
        } else if(userGuess < randomNumber){
            newOutcome = "Too Low";
        } else if(userGuess === randomNumber){
            newOutcome = "You Got It";
        } else {
            newOutcome = "No Guess Given";
        }

        const newHistory = `You Guessed: ${userGuess}. Outcome: ${newOutcome}`;

        this.setState({
            outcome: newOutcome,
            history: [ ...this.state.history, newHistory ]
        });
    }

    render(){
        const { outcome, history } = this.state;

        const historyOutput = history.map((item, index) => {
           return <h5 key={index}>{item}</h5>;

        });

        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={(event) => this.submitGuess(event)}>
                            <div className="input-group">
                                <input onChange={(event) => this.handleChange(event)} type="number" className="form-control" value={this.state.userGuess} />
                                <span className="input-group-btn">
                                    <button className="btn btn-outline-danger">Make Guess</button>
                                </span>
                            </div>
                        </form>
                        <h3 className={( (outcome === "Too Low") ? 'text-primary' : (outcome === "Too High") ? 'text-danger' : 'text-success' )}>{this.state.outcome}</h3>
                    </div>
                    <div className="col-sm-6">
                        {historyOutput}
                    </div>
                </div>
            </div>
        )
    }
}

export default Guess;