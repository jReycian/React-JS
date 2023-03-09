import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })

        //Usage:: onClick={() => this.increment()}
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })

        //Usage:: onClick={() => this.decrement()}
    }
    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;