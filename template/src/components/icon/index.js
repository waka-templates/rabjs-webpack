/**
 * Created by mengqinghui on 16/1/29.
 */

'use strict';
import './index.less';
import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class extends Component {
    static defaultProps = {
        type: 'default',
        className: '',
        onClick: () => {},
        style: {},
        spin: false
    };
    static propTypes = {
        type: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.object,
        spin: PropTypes.bool
    };

    render() {
        let { type, spin, className, ...other } = this.props;
        let classString = classNames(
            {
                'wxoicon wxo-icon': true,
                [`wxoicon-${type}`]: type,
                'iconfont-spin': !!spin || type === 'loading'
            },
            className
        );
        return <i className={classString} {...other} />;
    }
}
