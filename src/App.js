import React, {Component} from 'react';
import './component/TitleBar';
import {TitleBar} from './component/TitleBar';
import {Helmet} from "react-helmet";

class App extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Fatgrammer's Timeline</title>
                    <meta name="description" content="fatgrammer's timeline"/>
                    <meta name='theme-color' content="#880088"/>
                </Helmet>
                <TitleBar/>
            </>
        );
    }
}

export default App;
