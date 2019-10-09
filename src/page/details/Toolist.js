import React from 'react';
import { NavLink } from 'react-router-dom';

//1、函数式组件，创建组件的方式
//2、React.createClass{}  3、es6继承React.Component{}

class Toolist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {title:'吃饭',checked:true},
                {title:'睡觉',checked:true},
                {title:'打豆豆',checked:false},
                {title:'逛街',checked:false},
                {title:'看电视',checked:true},
            ],
        };
    }
    addDate=()=>{
        if (!this.refs.content.value){  //为空不添加
            console.log('err');
            return;
        }
        let templist = this.state.list;
        templist.push({
            title:this.refs.content.value,
            checked:false
        });
        this.refs.content.value = "";  //清空内容
        this.setState({
            list:templist
        })
    };
    removeData=(index)=>{
      //删除的时候，需要获取点击按钮的索引
      let tempList = this.state.list;
      tempList.splice(index,1);
      this.setState({
          list:tempList
      })
    };
   
    changeCheack=(key)=>{
        var temp = this.state.list;
        temp[key].checked = !temp[key].checked;
        this.setState({
            list:temp
        })
    };
    render(){
        return(
            <div>
                <NavLink replace to="/home">回到list 列表页面</NavLink>
                <br/>
                
                <br/>
                <NavLink replace to="/detail/b">去B页面</NavLink>
                <h1>这是A页面</h1>
                <br/>
                
                <br/>
                <h1>请输入要添加的内容:</h1>
                <input type="text" ref="content"/>
                <input type="button" value="增加+" onClick={this.addDate} />
                <hr/>

                <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            // if (!value.checked){
                                return(
                                    <li key={index}>
                                        <input type="checkbox" checked={value.checked} onChange={this.changeCheack.bind(this,index)}/>
                                        {value.title}
                                    </li>
                                )
                            // }
                        })
                    }
                </ul>

            </div>
        )
    }
}
export default Toolist;
