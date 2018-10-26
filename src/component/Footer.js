import React, {Component} from 'react';
import "bulma";

export class Footer extends Component {
    render() {
        return <footer class="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>
                        Fatgrammer's Timeline by Fatgrammer.
                        {/*The Website content is licensed CC BY BC SA 4.0.*/}
                    </strong>
                </p>
            </div>
        </footer>
    }
}