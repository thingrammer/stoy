import React, {Component} from 'react';
import './component/TitleBar';
import {TitleBar} from './component/TitleBar';
import {Helmet} from "react-helmet";
import {NavBar} from './component/NavBar'

import {BrowserRouter as Router, Route} from "react-router-dom";


import Sticky from 'react-stickynode'


import 'bulma'
// import {FeedBox} from "./component/FeedBox";
import {FeedList} from "./component/FeedList"
import {BackTop} from "./component/BackTop";
import {Footer} from './component/Footer';




import "./App.scss"



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            backtop_hidden: "Hidden"
        }
    }
    handleStateChange = (status) => {
        if (status.status === Sticky.STATUS_FIXED) {
            this.setState({
                backtop_hidden: ""
            })
        } else {
            this.setState({
                backtop_hidden: "Hidden"
            })
        }

    }

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
                        <Sticky enabled={true} onStateChange={this.handleStateChange}>
                            <NavBar/>
                        </Sticky>
                        <div id="bnavbar"></div>
                        <Route path="/box"
                               component={
                                   () => <FeedList className="Feedlist"/>
                               }
                        />
                        <Route path="/" exact component={null}/>
                        {/*<Route path="/" component={FeedBox}/>*/}
                    </>
                </Router>
                {/*<Sticky enabled={true} bottom={0}>*/}
                {/*<h1>Bottom</h1>*/}
                {/*</Sticky>*/}
                {new Array(80).fill(0).map(e => {
                    return <br/>
                })}
                {/*<BackTop className={this.state.backtop_hidden}/>*/}

                <BackTop hidden={this.state.backtop_hidden}/>
                <Footer/>
            </>
        );
    }
}

export default App;
