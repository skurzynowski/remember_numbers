import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'
import {
    setTime,
    setTimer,
} from '../redux/appState/actions'

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time: 0};
    };

    componentDidMount = () => {
        const timer = setInterval(
            () => this.tick(),
            1000);
        this.props.onSetTimer(timer);
        this.props.onSetTime(Math.floor((+new Date) / 1000));
    };

    tick = () => {
        let currentTimestamt = Math.floor((+new Date) / 1000);
        let time = currentTimestamt - this.props.time;
        this.setState({time: time});
    };

    changeTimeFormat = () => {
        var minutes = Math.floor((this.state.time / 60));
        var seconds = Math.floor((this.state.time % 60));
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

const mapStateToProps = state => ({
    time: state.appState.time,
});
const mapDispatchToProps = dispatch => ({
    onSetTime: time => dispatch(setTime(time)),
    onSetTimer: timer => dispatch(setTimer(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Time)
