import React, {Component} from 'react'
import logo from './logo.png'
import "bulma"
import {Link} from "react-router-dom";


export class NavBar extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} alt="Logo" width="28" height="28"/>
                </a>

                <span role="button" className="navbar-burger burger"
                   aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/box">Box</Link>


                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="">
                                About
                            </Link>
                            <Link className="navbar-item" to="">
                                Contact
                            </Link>
                            <hr className="navbar-divider"/>
                            <Link className="navbar-item" to="">
                                Report an issue
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    }
}