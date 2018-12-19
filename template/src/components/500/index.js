/**
 * Created by yeanzhi on 17/7/10.
 */
'use strict';
import './index.less';
import React, { Component } from 'react';

export default class extends Component {
    static defaultProps = {
        showRefreshBtn: true,
        showCloseBtn: true
    };

    render() {
        let errorInfo = this.props.errorInfo || '服务端错误';
        return (
            <div className="not-found-container">
                <div className="not-found-body">
                    <div className="not-found-inner">
                        <img
                            src="https://s3.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/apps-open/d0c468bf-d2c8-4712-a904-b1d85bc4a6d7_1499674103711?filename=%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C.png"
                            alt=""
                        />
                    </div>
                    <p>{errorInfo}</p>
                </div>
            </div>
        );
    }
}
