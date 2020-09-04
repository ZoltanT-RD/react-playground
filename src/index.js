import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import './index.css';
import DefaultAppPage from './pages/defaultApp';
import BootstrapPage from './pages/bootstrap';
import SliderPage from './pages/SliderPage';
import ParallaxExamplePage from './pages/ParallaxExamplePage';

import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import scss from './global.scss'



const routing = (
    <Router>
        <Switch>
            <Route exact path="/bs">
                <BootstrapPage/>
            </Route>
            <Route exact path="/slider">
                <SliderPage />
            </Route>
            <Route exact path="/para">
                <ParallaxExamplePage />
            </Route>

            <Route exact path="/">
                <DefaultAppPage />
            </Route>
        </Switch>
    </Router>
);

ReactDOM.render(
    routing,
    document.getElementById("root")
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
