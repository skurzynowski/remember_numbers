import React from 'react';
import StatsPanel from "./stats-panel";
import PresentationPanel from "./presentation-panel";
import ControlPanel from "./control-panel";
import {connect} from 'react-redux'
import {
    addCountNumbers,
    setTime,
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
        this.setState({timer: timer});
    };

    thick = () => {
        var time = this.props.time;
        time++;
        this.props.onSetTime(time);
    };

    click_next_subject = (e) => {
        //click on next when was checking
        if (this.props.checkMode === true) {
            this.props.setDefaultSavedNumbers();
            this.props.onSetCheckMode(false);
            return;
        }

        var object = this.getRandom(10);
        this.props.onSetNewObject(object);

        var savedNumbers = this.props.saved_numbers;
        savedNumbers = savedNumbers.concat(this.props.object);
        this.props.onAddSaveNumber(savedNumbers);
        //TODO check if works
        var countNumbers = this.props.saved_numbers.length;
        countNumbers++;
        this.props.onAddCountNumbers(countNumbers);
    };

    getRandom = (range) => {
        return Math.floor((Math.random() * range));
    };

    click_check_subject = (e) => {
        //second click
        if (this.props.checkMode === true) {
            this.compareInputWithRememberd();
            return;
        }

        this.props.onSetCheckMode(true);

        //when click check save last subject to array
        var savedNumbers = this.props.saved_numbers;
        savedNumbers = savedNumbers.concat(this.props.object);
        this.props.onAddSaveNumber(savedNumbers);
        //TODO check if works
        var countNumbers = this.props.saved_numbers.length;
        countNumbers++;
        this.props.onAddCountNumbers(countNumbers);
        clearInterval(this.state.timer);
    };

    compareInputWithRememberd = () => {
        //get first from rememberd
        if (this.props.saved_numbers[this.props.indexToCheck] === parseInt(this.props.checkingValue)) {
            if (this.props.indexToCheck < this.props.saved_numbers.length - 1) {
                this.props.onSetCheckMessage('Congratulation ' + (this.props.indexToCheck + 1) + ' correct');
                this.props.onSetIndexToCheck(this.props.indexToCheck + 1);
                this.props.onSetCheckingValue('');
            } else {
                this.props.onSetCheckMessage('Congratulations all numbers correct!!!');
                this.props.onSetCheckingValue('Finished');
            }
        } else {
            this.props.onSetCheckMessage('Congratulations all numbers correct!!!');
        }
        //compare with input value
        //show message
    };


    handleInputCheck = (e) => {
        this.props.onSetCheckingValue(e.target.value);
    };

    render() {
        return (

            <div className="game">
                <StatsPanel/>
                <PresentationPanel subject={this.props.object} mode={this.props.checkMode}
                                   handleInputCheck={this.handleInputCheck} checkMessage={this.props.checkMessage}
                                   inputValue={this.props.checkingValue} placeholder={this.props.placeholder}/>
                <ControlPanel click_next={this.click_next_subject} click_check={this.click_check_subject}/>
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
