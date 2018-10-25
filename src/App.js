import React, {Component} from 'react';
import './component/TitleBar';
import {TitleBar} from './component/TitleBar';
import {Helmet} from "react-helmet";
import {NavBar} from './component/NavBar'

import {BrowserRouter as Router, Route} from "react-router-dom";


import Sticky from 'react-stickynode'


import 'bulma'
import {FeedBox} from "./component/FeedBox";

class App extends Component {


    render() {
        return (
            <>
                <Helmet>
                    <title>Fatgrammer's Timeline</title>
                    <meta name="description" content="fatgrammer's timeline"/>
                    <meta name='theme-color' content="#880088"/>
                </Helmet>
                <TitleBar onScroll={this.pop}/>
                <Router>
                    <>
                        <Sticky enabled={true}>
                            <NavBar/>
                        </Sticky>
                        <Route path="/box" component={() => <FeedBox uname="Liu" date={new Date().toUTCString()}>
                            This is my first post. I need to write something useless to occupy the paragraph.
                        </FeedBox>}/>
                        <Route path="/" exact component={null}/>
                        {/*<Route path="/" component={FeedBox}/>*/}
                    </>
                </Router>
                {new Array(80).fill(0).map(e => {
                    return <br/>
                })}

            </>
        );
    }
}

export default App;
