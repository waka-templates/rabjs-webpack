import React, { Component } from 'react';
import { Spin } from 'antd';
import './main.less';
import { connect } from 'rabjs';

@connect((state) => ({ globalLoading: state.view.globalLoading }))
export default class GlobalLoading extends Component {
    render() {
        if (!this.props.globalLoading.show) return null;
        return (
            <div className="global-loading">
                <Spin tip="Loading..." />
            </div>
        );
    }
}
