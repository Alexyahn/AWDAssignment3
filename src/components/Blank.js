import React from 'react';
import { Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from 'redux-store';
import { connect } from 'react-redux';
import App from './App';

function Blank() {
    return <div className="blankContent">
        <p>This will be a web page to include all the necessary functionality of Assignment 5. < br/>
        The code provided in this page mimicks what would be needed for the Redux provider and the Redux connect functions</p>

    const store = createStore()

        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')

    </div>
}

export default connect(Blank);