import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'

import {
    setSavedNumber,
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
        if (this.props.checkMode === true) {
            if (this.props.savedNumbers[this.props.indexToCheck] === parseInt(this.props.checkingValue)) {
                if (this.props.indexToCheck < this.props.savedNumbers.length - 1) {
                    this.props.onSetIndexToCheck(this.props.indexToCheck + 1);
                    this.props.onSetCheckingResult('correct');
                    this.props.onSetInputValue('');
                    return;
                } else {
                    this.props.onSetIndexToCheck(0);
                    this.props.onSetCheckingResult('finished');
                    this.props.onSetInputValue('');
                    return;
                }
            } else {
                this.props.onSetCheckingResult('notCorrect');
                this.props.onSetInputValue('');
                return;
            }
        }

        this.props.onSetCheckMode(true);

        //when click check save last subject to array
        var savedNumbers = this.props.savedNumbers;
        savedNumbers = savedNumbers.concat(this.props.object);
        this.props.onSetSavedNumber(savedNumbers);
        var countNumbers = this.props.savedNumbers.length;
        this.props.onSetRememberd(countNumbers);
        clearInterval(this.props.timer);
    }
}


const mapDispatchToProps = dispatch => ({
    onSetSavedNumber: (number) => dispatch(setSavedNumber(number)),
    onSetIndexToCheck: (index) => dispatch(setIndexToCheck(index)),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Check)
