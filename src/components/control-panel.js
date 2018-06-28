import React from 'react';
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";

class NextSubject extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={(e) => this.props.click(e)}>Next</Button>);
    }
}

class Check extends React.Component {
    render() {
        return (<Button bsStyle="primary" onClick={(e) => this.props.click(e)}>Check</Button>);
    }
}

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control_panel">
                <ButtonGroup>
                    <NextSubject click={this.props.click_next}/>
                    <Check click={this.props.click_check}/>
                </ButtonGroup>
            </div>);
    }
}

export default ControlPanel;
