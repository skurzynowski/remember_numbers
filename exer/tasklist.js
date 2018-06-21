import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//TODO how to import task list

class TaskList extends React.Component {
    displayTask = (task) => {
        return <li>{task}</li>;
    };

    render() {
        return (
            <ul>
                {this.props.tasks.map(this.displayTask)}
            </ul>
        );
    }
}

class TaskApp extends React.Component {

    addTask = (e) => {
        this.setState({
            items : this.state.items.concat([this.state.text]),
            text : ''
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
        };
    }

    onChange = (e) => {
        this.setState({text: e.target.value});
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h3>Task list</h3>
                <TaskList tasks={this.state.items}/>
                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.text}/>
                    <button>Add task</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TaskApp/>, document.getElementById('root'));

