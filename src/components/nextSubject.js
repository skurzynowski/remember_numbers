import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'
import {
    clickButtonNext
} from '../redux/appState/actions'

class NextSubject extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={(e) => this.props.onClickButtonNext(e)}>Next</Button>);
    }

    getRandom = (range) => {
        return Math.floor((Math.random() * range));
    };
}

const mapDispatchToProps = dispatch => ({
    onClickButtonNext: e => dispatch(clickButtonNext(e)),
});
//TODO what with this function? without this a have error that dispach is not a function
const mapStateToProps = state => ({
});

export default connect( mapStateToProps, mapDispatchToProps)(NextSubject)

