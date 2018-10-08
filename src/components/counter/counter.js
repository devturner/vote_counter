import React from 'react';
import './counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this.state is an object with properties
        this.state = {
            counter: 0,
            polarity: 'neutral'
        }
        //custom methods with ctx bound to constructor. Every time you make your own method, need to bind them here inside the constructor
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleUp(){
        this.updateState(this.state.counter + 1);
    }

    handleDown(){
        this.updateState(this.state.counter - 1);
    }

    updateState(counter){
        let polarity = null;
        if (counter > 0) {polarity = "positive"};
        if (counter < 0) {polarity = "negative"};
        this.setState({ counter, polarity })
    }
    
    componentDidUpdate(){
        console.log('counter', this.state.counter);
    }
    
    render() {
        return (
            <main>
                <h2 className={this.state.polarity}>{this.state.counter}</h2>
                <span onClick={this.handleDown}>Subtract</span>
                <span onClick={this.handleUp}>Add</span>
            </main>
        )
    }
}
export default Counter;