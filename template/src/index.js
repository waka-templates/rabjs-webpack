/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

import React, {Component} from 'react';
import rab, { connect } from 'rabjs';
import { Router, Route } from 'rabjs/router';
import Hello from './components/hello/index';

const app = rab();

app.router(({ history }) => {
    return (
        <Router history={history}>
            <Route path="/" component={Hello} />
        </Router>
    );
});

// 5. Start
app.start('#wrap_container');
