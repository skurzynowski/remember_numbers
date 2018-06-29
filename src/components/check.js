import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'
import {
    clickCheckButton
} from '../redux/appState/actions'

class Check extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={(e) => this.props.onClickCheckButton(e)}>Check</Button>);
    }
}

const mapDispatchToProps = dispatch => ({
    onClickCheckButton: e => dispatch(clickCheckButton(e)),
});

//TODO what with this function? without this a have error that dispach is not a function
const mapStateToProps = state => ({
});

export default connect( mapStateToProps, mapDispatchToProps)(Check)

