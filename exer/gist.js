import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

class Gist extends React.Component {
    render() {
        return (
            <div>{this.props.username}'s last gist is <a target="_blank" href={this.props.url}>here</a></div>
        );
    }
}

class GistFormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onChange = (e) => {
        this.setState({text: e.target.value});
    };
    onSubmit = (e) => {
        this.props.onAdd(this.state.text);
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.text} onChange={this.onChange} placeholder="Give a user's name"/>
                    <button>Fetch lattest git</button>
                </form>
            </div>
        );
    }
}

class GistBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: [{username: 'Sebastian', url: 'http://google.com'}]
        };
    }

    addGist = (username) => {
        var url = "https://api.github.com/users/" + username + "/gists";
        $.get(url, function(result){
            var username = result[0].owner.login[0];
            var url = result[0].html_url;
            var gists = this.state.gists.concat({username : username, url : url});
            this.setState({gists:gists});
        }.bind(this));
    };

    render() {
        var newGist = (gist) => {
            return <Gist username={gist.username} url={gist.url}/>;
        };

        return (
            <div>
                <h1>Gistbox</h1>
                <GistFormAdd onAdd={this.addGist}/>
                {this.state.gists.map(newGist)}
            </div>
        );
    }
}

ReactDOM.render(
    <GistBox/>,
    document.getElementById('root')
);
