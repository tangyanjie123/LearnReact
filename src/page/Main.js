import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from './Home';
import Detail from "./Details";
import Login from './Login/Login';

const history = createHashHistory();
history.replace('/home');   //默认添加，显示主页面
// history.replace('home');  //这个会出现一些问题

class Main extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        {/* 如果存在二级路由的话，父级不能使用exact来匹配 */}
                        <Route path="/home" component={Home} />
                        <Route path="/detail" component={Detail}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;