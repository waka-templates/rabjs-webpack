/**
 * Created by ximing on 2018/12/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './bootstrap';

if (module.hot) {
    module.hot.accept();
}

const app = Bootstrap.getSingleton().init();
ReactDOM.render(React.createElement(app.provider), document.getElementById('wrap_container'));
