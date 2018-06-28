import React from 'react';
import Button from "react-bootstrap/lib/Button";
import {connect} from 'react-redux'

class Counter extends React.Component {
    render() {
        return (<Button bsStyle="primary" disabled>Remebmerd: {this.props.rememberd}</Button>);
    }
}

const mapStateToProps = state => ({
    rememberd: state.appState.rememberd,
});

export default connect(mapStateToProps )(Counter)
