import React from 'react';
import FormControl from "react-bootstrap/lib/FormControl";
import {connect} from 'react-redux'
import {handleInputChange} from '../redux/appState/actions';

class ControlForm extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        let message;

        switch (this.props.checkingResult) {
            case 'correct':
                message = 'Congratulation ' + (this.props.indexToCheck) + ' correct';
                break;
            case 'notCorrect':
                message = 'Sorry try one more time';
                break;
            case 'finished':
                message = 'Congratulations You win!';
                break;
            default:
                message = 'Fill in number in input:';
        }

        return (
            <form>
                <p>{message}</p>
                <FormControl
                    ref={this.myRef}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.inputValue}
                    onChange={this.onChange}
                />
                <FormControl.Feedback/>
            </form>
        )
            ;
    }

    onChange = (e) => {
        this.props.onInputChange(e);

    }
}

const mapStateToProps = state => ({
    placeholder: state.appState.placeholder,
    inputValue: state.appState.inputValue,
    indexToCheck: state.appState.indexToCheck,
    checkingResult: state.appState.checkingResult,

});

const mapDispachState = dispach => ({
    onInputChange: e => dispach(handleInputChange(e)),
});

export default connect(mapStateToProps, mapDispachState, null, {withRef: true})(ControlForm)
