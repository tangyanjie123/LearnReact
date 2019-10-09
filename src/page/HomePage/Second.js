import './Animation.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Second extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }
    handleToggole = ()=> {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    render(){
        return(
            <div>
                <h1>这是Second页面</h1>
                <CSSTransition
                      in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                      timeout={1000} //动画执行1秒
                      classNames='fade' //自定义的class名
                      unmountonexit="true" //可选，当动画出场后在页面上移除包裹的dom节点
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggole}>toggle</button>
            </div>
        )
    }
}

export default Second;

