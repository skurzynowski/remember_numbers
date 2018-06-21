import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";


class Counter extends React.Component {
    render() {
        return (<Button bsStyle="primary" disabled>Remebmerd:{this.props.counts}</Button>);
    }
}

class Time extends React.Component {
    render() {
        return (<Button bsStyle="primary" disabled>Time:{this.props.time}</Button>);
    }
}

class Stats_Panel extends React.Component {
    render() {
        return (<ButtonGroup className="stats_panel">
            <Counter counts="0"/>
            <Time time="0:00"/>
        </ButtonGroup>);
    }
}


class Presentation_Panel extends React.Component {
    render() {
        return (
            <div className="subject"></div>
        );
    }
}

class Next_Subject extends React.Component {
    render() {
        return (<Button bsStyle="primary">Next</Button>);
    }
}

class Check extends React.Component {
    render() {
        return (<Button bsStyle="primary">Check</Button>);
    }
}

class Control_Panel extends React.Component {
    render() {

        return (
            <div className="control_panel">
                <ButtonGroup>
                    <Next_Subject/>
                    <Check/>
                </ButtonGroup>
            </div>);
    }
}

class Game extends React.Component {
    render() {
        return (<div className="game">
            <Stats_Panel/>
            <Presentation_Panel/>
            <Control_Panel/>
        </div>);
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));
