/**
 * Created by ximing on 2018/11/4.
 */
'use strict';
import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Panel extends Component {
    state = {
        fixed: false
    };
    onExpand = () => {
        this.setState({
            fixed: !this.state.fixed
        });
    };

    renderStyle() {
        return this.state.fixed ? { position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 } : {};
    }

    render() {
        const { style = {} } = this.props;
        return (
            <div
                className={classnames({
                    'panel panel-inverse': true,
                    'panel-expand': this.state.fixed
                })}
                style={Object.assign({},this.renderStyle(),style)}
            >
                <div className="panel-heading">
                    <div className="panel-heading-btn">
                        <a
                            href="javascript:;"
                            className="btn btn-xs btn-icon btn-circle btn-success"
                            data-click="panel-expand"
                            onClick={this.onExpand}
                        >
                            <i className="fa fa-expand" />
                        </a>
                        {this.props.moreBtns}
                    </div>
                    <h4 className="panel-title">{this.props.title}</h4>
                </div>
                <div className="panel-body">{this.props.children}</div>
            </div>
        );
    }
}
