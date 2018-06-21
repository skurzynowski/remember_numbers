import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_clicked: false
        };
    }

    onClick = (e) => {
        if (this.state.is_clicked === true) {
            return;
        }
        this.props.onClick(e);
        this.setState({is_clicked: true});
    };

    shouldComponentUpdate = (newProps, newState) => {
        if (this.state.is_clicked === false && newState.is_clicked === true) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        return (<div onClick={this.onClick}>{this.props.player}</div>);
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_mark: '',
        };
    }

    handleClick = () => {
        if (this.state.current_mark === 'O') {
            this.setState({
                current_mark: 'X',
            });
        } else {
            this.setState({
                current_mark: 'O',
            });
        }
    };

    add_player_bord = () => {
        if (this.state.current_mark === 'O') {
            return (<Player player="X"/>);
        } else {
            return (<Player player="O"/>);
        }
    };

    render() {
        return (<div>
            {this.add_player_bord()}
            <div className="game_bord">
                <div className="row">
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                </div>
                <div className="row">
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                </div>
                <div className="row">
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                    <Square onClick={this.handleClick} player={this.state.current_mark}/>
                </div>
            </div>
        </div>);
    }
}


class Player extends React.Component {
    render() {
        return (<div>Current player:{this.props.player}</div>);
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));