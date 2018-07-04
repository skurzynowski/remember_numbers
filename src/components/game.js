import React from 'react';
import StatsPanel from "./stats-panel";
import PresentationPanel from "./presentation-panel";
import ControlPanel from "./control-panel";
import {connect} from 'react-redux'
import {
    setTime,
    setTimer,
} from '../redux/appState/actions'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
        };
    }

    componentDidMount = () => {
        // const timer = setInterval(
        //     () => this.thick(),
        //     1000);
        // this.props.onSetTimer( timer);
    };

    thick = () => {
        // var time = this.props.time;
        // time++;
        // this.props.onSetTime(time);
    };

    render() {
        return (
            <div className="game">
                <StatsPanel/>
                <PresentationPanel/>
                <ControlPanel/>
            </div>);
    }
}

const mapStateToProps = state => ({
    time: state.appState.time,
    checkMode: state.appState.checkMode,
    object: state.appState.object,
    saved_numbers: state.appState.savedNumbers,
    rememberd: state.appState.rememberd,
    checkMessage: state.appState.checkMessage,
    indexToCheck: state.appState.indexToCheck,
    checkingValue: state.appState.checkingValue,
    placeholder: state.appState.placeholder,
});

const mapDispatchToProps = dispatch => ({
    onSetTime: time => dispatch(setTime(time)),
    onSetTimer: timer => dispatch(setTimer(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game)
