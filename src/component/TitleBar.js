import React, {Component} from 'react';
// import "./Titlebar.scss"
import "bulma"
import "./MainStyle.scss"

export class TitleBar extends Component {

    render() {
        return <>
            <section class="hero is-dark is-bold is-fullheight">
                <div class="hero-body">
                    <div className="container">
                        <h1 className="title">Fatgrammer's Timeline</h1>
                        <h2 className="subtitle">- Life is boring. Enjoy your solitude.</h2>
                    </div>

                </div>

                <a className="level-right" id="Jump-to-context" title="Jump to Homepage Context" href="#navbar">▼</a>
            </section>
        </>;
    }
}