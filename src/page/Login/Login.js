import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register';
import TrueLogin from './TrueLogin';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:false,
        }
    }
   changeState(flag){
       this.setState({
           isLogin:flag
       })
   }
    render() {
        return (
            <div>
                <h1>登录主页面</h1>

                {
                    this.state.isLogin
                    ? <Register isLogin={this.state.isLogin} changeState={this.changeState.bind(this)}/> 
                    : <TrueLogin />
                }
                <br />
                <NavLink replace to="/home">确定登录</NavLink>

            </div>
        )
    }
}

export default Login;