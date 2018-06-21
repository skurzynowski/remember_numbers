import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";


class Counter extends React.Component {
    render() {
        return (<Button bsStyle="primary" disabled>Remebmerd: {this.props.counts}</Button>);
    }
}

class Time extends React.Component {
    changeTimeFormat = () => {
        var minutes = Math.floor((this.props.time / 60));
        var seconds = Math.floor((this.props.time % 60));
        //prevent 1: 6
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    };

    render() {
        return (<Button bsStyle="primary" disabled>Training time: {this.changeTimeFormat()}</Button>);
    }
}

class StatsPanel extends React.Component {
    render() {
        return (<ButtonGroup className="stats_panel">
            <Counter counts={this.props.rememberd}/>
            <Time time={this.props.time}/>
        </ButtonGroup>);
    }
}


class PresentationPanel extends React.Component {
    render() {
        return (
            <div className="subject">
                {this.props.subject}
            </div>
        );
    }
}

class NextSubject extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={(e) => this.props.click(e)}>Next</Button>);
    }
}

class Check extends React.Component {
    render() {
        return (<Button bsStyle="primary">Check</Button>);
    }
}

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control_panel">
                <ButtonGroup>
                    <NextSubject click={this.props.click_next}/>
                    <Check/>
                </ButtonGroup>
            </div>);
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rememberd: 0,
            saved_numbers: [],
            object: 0,
            time: 0
        };
    }

    componentDidMount = () => {
        var timer = setInterval(
            () => this.thick(),
            1000);
    };

    thick = () => {
        this.setState({time: this.state.time + 1});
    };

    click_next_subject = (e) => {
        this.setState({
            saved_numbers: this.state.saved_numbers.concat([this.state.object]),
            object: Math.floor((Math.random() * 10)),
            rememberd: this.state.saved_numbers.length + 1
        });
    };

    render() {
        return (<div className="game">
            <StatsPanel rememberd={this.state.rememberd} time={this.state.time}/>
            <PresentationPanel subject={this.state.object}/>
            <ControlPanel click_next={this.click_next_subject}/>
        </div>);
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));
