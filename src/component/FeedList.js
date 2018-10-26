import React, {Component} from 'react';
import {FeedBox} from './FeedBox'
import {InputBox} from "./InputBox";
import '../App.scss'

export class FeedList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                uname: 'Liu',
                content: "This is my first post. I need to write something useless to fill the blank."
            }, {
                uname: 'Fat',
                content: "Haha"
            }
            ]

        }
    }

    render() {
        return <>
            <InputBox/>
            <div className="Feedlist">
                {
                    this.state.data.map(
                        e =>
                            <FeedBox uname={e.uname}>
                                {e.content}
                            </FeedBox>
                    )
                }
            </div>
        </>
    }
}