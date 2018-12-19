/**
 * Created by ximing on 11/5/17.
 */
'use strict';
import './index.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import crel from 'crel';
const layerClass = 'noaid-layers-container';
document.body.appendChild(crel('div', { id: layerClass, class: layerClass }));
export default class Layer extends Component {
    static defaultProps = {
        style: {},
        className: '',
        outAreaClosable: true,
        container: layerClass
    };

    constructor(props) {
        super(props);
        this.el = crel('div', {
            class: 'noaid-layer'
        });
        this.modalRoot = document.getElementById(props.container);
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
    }

    render() {
        let { style, className } = this.props;
        Object.keys(style).forEach((key) => {
            this.el.style[key] = style[key];
        });
        if (className) {
            className.split(' ').forEach((classname) => {
                this.el.classList.add(classname);
            });
        }
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
