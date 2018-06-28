import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Game from './components/game';


ReactDOM.render(<Provider store={store}><Game/></Provider>, document.getElementById('root'));
