import React, {Component} from 'react'
import logo from './logo.png'
import "bulma"
import {Link} from "react-router-dom";

// import {BackTop} from './BackTop';

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: "navbar-menu"
        }
        this.toggleBurger = this.toggleBurger.bind(this)
    }

    toggleBurger() {
        if (this.state.menu === "navbar-menu") {
            this.setState({
                menu: "navbar-menu is-active"
            })
        } else {
            this.setState({
                menu: "navbar-menu"
            })
        }

    }

    render() {
        return <nav id="navbar" className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Logo" width="28" height="28"/>
                </a>

                <span role="button" className="navbar-burger burger"
                      aria-label="menu" aria-expanded="false"
                      data-target="navEntry"
                      onClick={this.toggleBurger}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>
            <div className={this.state.menu} id="navEntry">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/box">Box</Link>


                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" to="">
                            More
                        </Link>

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
                            <Link to={""} className="button is-primary">
                                <strong>Green</strong>
                            </Link>
                            <Link to={""} className="button is-light">
                                White
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    }
}