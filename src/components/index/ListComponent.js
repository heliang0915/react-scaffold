/**
 * @author: heliang
 * @date: 2017/2/4
 */
import React,{Component} from 'react';
import {fetchIndex} from '../../redux/actions/index/indexaction' ;
import '../../assets/css/index.css';

class ListComponent extends Component{
    componentWillMount(){
        let {dispatch}=this.props;
        dispatch(fetchIndex());
    }
    render(){
        let {fetchData}=this.props;
        return (
            <div>
                <h2>List</h2>
                <p></p>
                <img src={require("../../assets/images/7.png")} alt="7.png"/>
                {this.show()}
            </div>
        )
    }

    show(){
        let {fetchData}=this.props;
        let list=this.renderList( fetchData.data);
        let loading=this.renderLoading();
        return fetchData.loaded=="loading"?loading:list
    }
    
    renderList(data){
        let ary=[];
        if(data&&data.length>0){
            data.forEach((item)=>{
                ary.push(<p>{item.author}</p>);
            })
        }
        return ary;
    }
    renderLoading(){
        return(
            <p>加载中....</p>
        )
    }
}
export  default ListComponent;