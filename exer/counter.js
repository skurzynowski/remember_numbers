import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counts: this.props.initialCounts
        }
    }

    add = () => {
        if (!(this.state.counts + 1 > 5)) {
            this.setState({counts: this.state.counts + 1});
        }
    };

    substract = () => {
        if (!(this.state.counts - 1 < 0)) {
            this.setState({counts: this.state.counts - 1});
        }
    }

    render() {
        return (
            <div>
                <h1>Counts:{this.state.counts}</h1>
                <div>
                    <button onClick={this.add}>Add</button>
                </div>
                <div>
                    <button onClick={this.substract}>Substract</button>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {initialCounts: 0};

ReactDOM.render(<Counter/>, document.getElementById('root'));

