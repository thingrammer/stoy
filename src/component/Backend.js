import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../util/Utils'


export class Wid extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query BackendQuery {
                        viewer {
                            id
                        }
                    }
                `}
                variables={{}}
                render={({error, props}) => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }
                    return <div>User ID: {props.viewer.id}</div>
                }}

            />
        );
    }
}
