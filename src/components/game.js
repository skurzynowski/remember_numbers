import React from 'react';
import StatsPanel from "./stats-panel";
import PresentationPanel from "./presentation-panel";
import ControlPanel from "./control-panel";
import {connect} from 'react-redux'
import {
    CleanInput,
    setSavedNumber,
    clickCheck,
    setCheckingResult,
    setIndexToCheck,
    setInputValue,
    setRememberd,
    setCheckMode,
} from '../redux/appState/actions'
import control

class Game extends React.Component {
    componentDidUpdate(previousProps, previousState) {
        //if button is clicked triger calculations
        if (previousProps.clickCheck !== this.props.clickCheck && this.props.clickCheck === true) {
            if (this.props.checkMode === true) {
                if (this.props.savedNumbers[this.props.indexToCheck] === parseInt(this.props.checkingValue)) {
                    if (this.props.indexToCheck < this.props.savedNumbers.length - 1) {
                        this.props.onSetIndexToCheck(this.props.indexToCheck + 1);
                        this.props.onSetCheckingResult('correct');
                        this.props.onSetInputValue('');
                    } else {
                        this.props.onSetIndexToCheck(0);
                        this.props.onSetCheckingResult('finished');
                        this.props.onSetInputValue('');
                    }
                } else {
                    this.props.onSetCheckingResult('notCorrect');
                    this.props.onSetInputValue('');
                }
            }else{
                this.props.onSetCheckMode(true);

                //when click check save last subject to array
                var savedNumbers = this.props.savedNumbers;
                savedNumbers = savedNumbers.concat(this.props.object);
                this.props.onSetSavedNumber(savedNumbers);
                var countNumbers = this.props.savedNumbers.length;
                this.props.onSetRememberd(countNumbers);
                clearInterval(this.props.timer);
            }
            //Clean input
            this.props.onCleanInput();
            //after click reset state of button
            this.props.onClickCheck(false);
        }
    }

    render() {
        return (
            <div className="game">
                <StatsPanel/>
                <PresentationPanel/>
                <ControlPanel/>
            </div>);
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
    //Clean input
    onCleanInput: () => dispatch(CleanInput()),
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

export default connect(mapStateToProps, mapDispatchToProps)(Game)
