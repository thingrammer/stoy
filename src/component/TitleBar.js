import React, {Component} from 'react';
import styled from 'styled-components';
import "./Titlebar.scss"

export class TitleBar extends Component {
    render() {
        return <>
            <section class="hero  is-dark is-bold">
                <div class="hero-body">
                    <div className="container">
                        <h1 className="title">Fatgrammer's Timeline</h1>
                        <h2 className="subtitle">- Life is boring. Enjoy your solitude.</h2>
                    </div>
                </div>
            </section>
            {/*<button className="button is-primary is-size-4e">button</button>*/}
            {/*<a class="button is-link"> button</a>*/}
        </>;
    }
}