/**
 * Created by ximing on 2018/8/3.
 */

import React, { Component } from 'react';
import _ from 'lodash';
import ErrorComponent from '../500';

export default class WrapContainer extends Component {
    constructor() {
        super();
        this.onWindowResizeDebounce = _.debounce(this.onWindowResize, 800, { maxWait: 1200 });
        this.state = {
            hasError: false,
            error: '',
            info: ''
        };
    }

    componentDidCatch(error, info) {
        console.log('root componentDidCatch');
        if (!document.getElementById('dxDocEditor')) {
            this.setState({
                hasError: true
            });
        }
        console.log(error, info);
    }

    componentDidMount() {
        $(window).on('resize', this.onWindowResizeDebounce);
    }

    componentWillUnmount() {
        $(window).off('resize', this.onWindowResizeDebounce);
    }

    onWindowResize() {}

    render() {
        if (this.state.hasError) {
            return <ErrorComponent errorInfo="发生一些错误，但编辑数据已经保存，请尝试如下操作" />;
        }
        return this.props.children;
    }
}
