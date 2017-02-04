/**
 * 列表集合容器
 * @author: heliang
 * @date: 2017/2/4
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/index/ListComponent';

class IndexListContainer extends Component{
    render(){
        return (
            <ListComponent {...this.props} />
        )
    }
}

export default connect((state)=>{
    const {fetchData} = state;
    return {
        fetchData
    }
})(IndexListContainer) ;