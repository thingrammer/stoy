import React, {Component} from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById("modal");

export class Modal extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div');
    }
    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    render() {
        return ReactDom.createPortal(
            this.props.children,
            this.el
        );
    }
}

export class BackTop extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <Modal ><a href="#"id="Backtop" title="Back Top" className={this.props.hidden}>▲</a></Modal>
    }
}