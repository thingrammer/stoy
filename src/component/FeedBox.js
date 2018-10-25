import React, {Component} from 'react';
import 'bulma';

export class FeedBox extends Component {
    render() {
        return <div className="box">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            {/*<strong>FatLiu</strong> <small>2018-10-25</small>*/}
                            <strong>{this.props.uname}</strong> <small>{this.props.date}</small>
                            <br/>
                            {/*This is my first post. I need to write something useless to occupy the paragraph.*/}
                            {this.props.children}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    }
}