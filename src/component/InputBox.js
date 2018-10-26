import React, {Component} from 'react';

import 'bulma';
import './MainStyle.scss'
export class InputBox extends Component {
    render() {
        return <>
            {/*<input className="input" type="text" placeholder="Text input"/>*/}
            <nav className="level">
                <div className="level-left">
                    <div className="box level-item is-5 IInput has-text-centered" contentEditable={true}>
                    </div>
                </div>
                <div className="box level-left">
                    <div className="level-item">Commit</div>
                </div>
            </nav>
        </>
    }
}