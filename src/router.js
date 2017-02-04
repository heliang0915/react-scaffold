/**
 * 定义所有路由映射
 * @author: heliang
 * @date: 2017/1/25
 */

import React,{Component} from 'react';
import {Route,Router,browserHistory} from 'react-router';
import IndexView from './views/IndexView';

class RootRouter extends  Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={IndexView}/>
            </Router>
        )
    }
}
export  default RootRouter;
