import React from 'react';
import { Map } from 'immutable';
import ListItem from '../thirdChild/LiatItem';

class Third extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:Map({}),
        }
        this.inp = React.createRef();
        this.textnum = React.createRef();
    }
    saveHandle=()=>{
        let key = this.inp.current.value;
        let value = this.textnum.current.value;
        let newData = this.state.list.set(key,value);
        // this.state.list[key]=value;
        this.setState({
            list:newData
        })        
    }
    render(){
        return(
            <div>
                <h1>这是Third页面</h1>
                <br/>
                商品名称：<input type="text" ref={this.inp} />
                <br/>
                数量：<input type="number"  ref={this.textnum} />
                <br/>
                <button onClick={this.saveHandle}>保存</button>
                <hr/>
                <ListItem list={this.state.list}/>
            </div>
        )
    }
}

export default Third;


