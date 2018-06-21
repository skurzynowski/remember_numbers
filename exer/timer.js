import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            value: 0
        };

        this.text = React.createRef();
    }

    componentDidMount(){
        this.text.current.focus();
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    };

    startCounter = (e) => {
        this.setState({counter: this.state.value});
        this.interval = setInterval(this.startInterval, 1000);
        e.preventDefault();
    };

    startInterval = () => {
        this.setState({counter: this.state.counter - 1});
        if (this.state.counter === 0) {
            this.stopCounter();
        }
    };

    stopCounter = () => {
        clearInterval(this.interval);
        this.text.current.focus();
    };

    render() {
        return (<div>
            <form onSubmit={this.startCounter}>
                <input ref={this.text} onChange={this.onChange} value={this.state.value}/>
                <button>Set timer</button>
            </form>
            <div className="counter">{this.state.counter}</div>
        </div>);
    }
}

ReactDOM.render(<Timer/>, document.getElementById('root'));
