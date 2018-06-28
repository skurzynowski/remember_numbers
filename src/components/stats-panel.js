import React from 'react';
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import {connect} from 'react-redux'
import Time from './time';
import Counter from './counter';


class StatsPanel extends React.Component {
    render() {
        return (<ButtonGroup className="stats_panel">
            <Counter/>
            <Time/>
        </ButtonGroup>);
    }
}

export default connect()(StatsPanel)
