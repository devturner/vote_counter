import React from 'react';
import './counter.css';

class VoteTracker extends React.Component {
    constructor(props) {
        super(props);
        // this.state is an object with properties
        this.state = {
            up_vote_count: 0,
            down_vote_count: 0,
            vote_limit: 10,
            vote_status: 'true',
        }
        //custom methods with ctx bound to constructor. Every time you make your own method, need to bind them here inside the constructor
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleUp(){
        this.updateState(this.state.vote_limit - 1, this.state.up_vote_count + 1, this.state.down_vote_count );
    }

    handleDown(){
        this.updateState(this.state.vote_limit - 1, this.state.up_vote_count, this.state.down_vote_count + 1);
    }

    updateState(vote_limit, up_vote_count, down_vote_count){
        let vote_status = 'true'
        if (vote_limit <= 0){
            vote_status = 'false'
        }
        this.setState({ vote_limit, up_vote_count, down_vote_count, vote_status })
    }
    
    // componentDidUpdate(){
    //     console.log('up_vote_count', this.state.up_vote_count);
    //     console.log('down', this.state.down_vote_count);

    // }
    
    render() {
        return (
            <main>
                <h2>Up Votes: {this.state.up_vote_count}</h2>
                <h2>Down Votes: {this.state.down_vote_count}</h2>
                <span className={this.state.vote_status} onClick={this.handleDown}>Down Vote</span>
                <span className={this.state.vote_status} onClick={this.handleUp}>Up Vote</span>
                <h2>Votes Remaining: {this.state.vote_limit}</h2>
            </main>
        )
    }
}
export default VoteTracker;