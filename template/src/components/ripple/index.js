/**
 * Created by ximing on 2018/10/24.
 */
'use strict';
import './index.less';
import React, { Component } from 'react';

export default function Ripple(props) {
    const style = {"borderColor":props.borderColor};
    return (
        <div className="lds-ripple">
            <div style={style} />
            <div style={style} />
        </div>
    );
}
