import React from 'react';
import FormControl from "react-bootstrap/lib/FormControl";
import {connect} from 'react-redux'

class ControlForm extends React.Component {
    render() {
        return (
            <form>
                <p>{this.props.checkMessage}</p>
                <FormControl
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.inputValue}
                    onChange={(e) => this.props.handleInputCheck(e)
                    }
                />
                <FormControl.Feedback/>
            </form>
        );
    }
}

class PresentationPanel extends React.Component {
    renderSubject = () => {
        if (this.props.mode === false) {
            return this.props.subject;
        } else {
            //redirect to other page
            return (
                <ControlForm inputValue={this.props.inputValue} checkMessage={this.props.checkMessage}
                             handleInputCheck={this.props.handleInputCheck} placeholder={this.props.placeholder}/>);
        }
    };

    render() {
        return (
            <div className="subject">
                {this.renderSubject()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    checkMessage: state.appState.checkMessage,
    placeholder: state.appState.placeholder,
});

export default connect(mapStateToProps)(PresentationPanel)

