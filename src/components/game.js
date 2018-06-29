import React from 'react';
import StatsPanel from "./stats-panel";
import PresentationPanel from "./presentation-panel";
import ControlPanel from "./control-panel";
import {connect} from 'react-redux'
import {
    addCountNumbers,
    setTime,
    setTimer,
    SetCheckMessage,
    setDefaultSavedNumbers,
    setCheckMode,
    setNewObject,
    addSavedNumber,
    SetCheckValue,
    SetIndexToCheck
} from '../redux/appState/actions'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
        };
    }

    componentDidMount = () => {
        const timer = setInterval(
            () => this.thick(),
            1000);
        this.props.onSetTimer( timer);
    };

    thick = () => {
        var time = this.props.time;
        time++;
        this.props.onSetTime(time);
    };

    handleInputCheck = (e) => {
        this.props.onSetCheckingValue(e.target.value);
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
    saved_numbers: state.appState.saved_numbers,
    rememberd: state.appState.rememberd,
    checkMessage: state.appState.checkMessage,
    indexToCheck: state.appState.indexToCheck,
    checkingValue: state.appState.checkingValue,
    placeholder: state.appState.placeholder,
});

const mapDispatchToProps = dispatch => ({
    onSetTime: time => dispatch(setTime(time)),
    onSetTimer: timer => dispatch(setTimer(timer)),
    setDefaultSavedNumbers: () => dispatch(setDefaultSavedNumbers()),
    onSetCheckMode: bool => dispatch(setCheckMode(bool)),
    onSetNewObject: object => dispatch(setNewObject(object)),
    onAddSaveNumber: number => dispatch(addSavedNumber(number)),
    onAddCountNumbers: number => dispatch(addCountNumbers(number)),
    onSetCheckMessage: message => dispatch(SetCheckMessage(message)),
    onSetCheckingValue: value => dispatch(SetCheckValue(value)),
    onSetIndexToCheck: value => dispatch(SetIndexToCheck(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game)
