import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './component/TitleBar';
import {TitleBar} from './component/TitleBar';
import {Helmet} from "react-helmet";
import {Wid} from './component/Backend'

class App extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Fatgrammer's Timeline</title>
                    <meta name="description" content="todo"/>
                    <meta name='theme-color' content="#880088"/>
                </Helmet>
                <TitleBar/>
                return <Wid/>
            </>
        );
    }
}

export default App;
