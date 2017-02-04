/**
 * @author: heliang
 * @date: 2017/2/3
 */

import React,{Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootreducer';

let store=applyMiddleware(thunk)(createStore)(RootReducer);
export  default store;