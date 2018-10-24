import React, {Component} from 'react';
// import "./Titlebar.scss"
import "bulma"
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
            </section>
        </>;
    }
}