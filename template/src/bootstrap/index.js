/**
 * Created by ximing on 2018/12/18.
 */
import React from 'react';
import rab, { call } from 'rabjs';
import { Route, routerRedux, Redirect, Switch } from 'rabjs/router';
const { ConnectedRouter: Router } = routerRedux;
import loadComponent from '../libs/loadComponent';
import WrapContainer from '../components/wrap';
const Home = loadComponent(import(/* webpackChunkName: "home" */ '../modules/container/home.js'));

export default class BootStrap {
    static getSingleton() {
        return globalSingleton;
    }
    initModels() {}

    initApp() {
        this.app = rab({
            debug: true,
            initialState: {}
        });
        this.app.router(({ history }) => {
            return (
                <Router history={history}>
                    <WrapContainer>
                        <div id="container">
                            <Switch>
                                <Route path={'/kefu/index*'} component={Home} />
                            </Switch>
                        </div>
                    </WrapContainer>
                </Router>
            );
        });
        window.kefuApp = this.app;
        window.kefuApp.call = call;
        return this.app;
    }

    init() {
        this.initModels();
        this.initApp();
        this.provider = this.app.start();
        return this;
    }
}
const globalSingleton = new BootStrap();
