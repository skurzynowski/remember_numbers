import React from 'react';
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Check from "./check";
import  NextSubject from "./nextSubject";
import {connect} from 'react-redux'

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control_panel">
                <ButtonGroup>
                    <NextSubject/>
                    <Check/>
                </ButtonGroup>
            </div>);
    }
}

export default connect() (ControlPanel);
