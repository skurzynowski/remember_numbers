import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'

import {
    setSavedNumber,
    clickCheck,
    setCheckingResult,
    setIndexToCheck,
    setInputValue,
    setRememberd,
    setCheckMode,
} from '../redux/appState/actions'

class Check extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={this.handleClick}>Check</Button>);
    }

    handleClick = () => {
        //Click check
        this.props.onClickCheck(true);
    }
}

const mapDispatchToProps = dispatch => ({
    onSetSavedNumber: (number) => dispatch(setSavedNumber(number)),
    onSetIndexToCheck: (index) => dispatch(setIndexToCheck(index)),
    //Click check
    onClickCheck: (bool) => dispatch(clickCheck(bool)),
    onSetCheckingResult: (result) => dispatch(setCheckingResult(result)),
    //Set input value
    onSetInputValue: (value) => dispatch(setInputValue(value)),
    //Set rememberd numbers
    onSetRememberd: (rememberd) => dispatch(setRememberd(rememberd)),
    onSetCheckMode: (bool) => dispatch(setCheckMode(bool)),
});

const mapStateToProps = state => ({
    checkMode: state.appState.checkMode,
    savedNumbers: state.appState.savedNumbers,
    indexToCheck: state.appState.indexToCheck,
    checkingValue: state.appState.checkingValue,
    object: state.appState.object,
    timer: state.appState.timer,
    clickCheck: state.appState.clickCheck,
});

export default connect(mapStateToProps, mapDispatchToProps)(Check)
