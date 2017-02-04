/**
 * @author: heliang
 * @date: 2017/2/3
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
import {FETCH_INDEX,RECEIVE_INDEX} from '../actionTypes';


let fetchType=()=>{
    return {
        type:FETCH_INDEX,
        data:""
    }
}

let receiveType=(data)=>{
    return {
        type:RECEIVE_INDEX,
        data:data
    }
}

//发送请求
function fetchIndex() {
    return (dispatch)=>{
        dispatch(fetchType());
        //ajax异步
        fetch("http://offline-news-api.herokuapp.com/stories").then((res)=>res.json()).then((json)=>{
            console.log(json);
            //成功后
            dispatch(receiveType(json))
        })
    }
}

export {fetchIndex}


