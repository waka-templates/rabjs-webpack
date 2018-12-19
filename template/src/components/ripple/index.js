/**
 * Created by ximing on 2018/10/24.
 */
'use strict';
import './index.less';
import React, { Component } from 'react';

export default function Ripple(props) {
    return (
        <div className="lds-ripple">
            <div style={{ borderColor: props.borderColor }} />
            <div style={{ borderColor: props.borderColor }} />
        </div>
    );
}
