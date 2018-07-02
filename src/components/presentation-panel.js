import React from 'react';
import {connect} from 'react-redux'
import ControlForm from './control-form'


class PresentationPanel extends React.Component {
    renderSubject = () => {
        if (this.props.checkMode === false) {
            return this.props.object;
        } else {
            return (
                <ControlForm/>);
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
    object: state.appState.object,
    checkMode : state.appState.checkMode,

});

export default connect(mapStateToProps)(PresentationPanel)

