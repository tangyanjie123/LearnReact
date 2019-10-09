import React from 'react';
import { is } from 'immutable';

class LiatItem extends React.Component {
    renderList(){
        const array = [];
        //普通的对象使用 for..in 
        // immutable中的所有 集合 的循环都要用 forEach()
        this.props.list.forEach((v,k) => {
            array.push(<li key={k}>商品名称：{k} ，数量：{v}</li>)
        });
        return array;
    }
    shouldComponentUpdate(nextProps){  //通过比较，节省很大的性能。
        // return !nextProps.list.equals(this.props.list);  //第一种
        return !is(nextProps.list,this.props.list);      //第二种
    } 
    render() {
        console.log("again");
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

export default LiatItem;


