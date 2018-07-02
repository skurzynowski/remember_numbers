import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'

class Time extends React.Component {
    changeTimeFormat = () => {
        var minutes = Math.floor((this.props.time / 60));
        var seconds = Math.floor((this.props.time % 60));
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

export default connect(mapStateToProps )(Time)
