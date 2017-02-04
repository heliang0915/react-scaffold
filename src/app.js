/**
 * APP挂载入口文件 此文件中只引入 router
 * @author: heliang
 * @date: 2017/1/25
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider,connect} from 'react-redux';
import RootRouter from './router';
import store from './redux/store/store';


class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <RootRouter />
            </Provider>
        )
    }
}

let app=document.getElementById("app")
render(<App />,app)

