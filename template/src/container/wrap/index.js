/**
 * Created by yeanzhi on 17/2/28.
 */
'use strict';
import React, {Component,PropTypes} from 'react';

export  default  class Hello extends Component{
    constructor (){
        super();
    }

    render(){
        return (
            <div className="desc">
                {this.props.children}
            </div>
        )
    }
}
