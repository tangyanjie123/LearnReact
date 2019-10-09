import './Home.css';

import React from 'react';
import { HashRouter, Route, Switch,NavLink } from 'react-router-dom';
import First from './HomePage/First';
import Second from './HomePage/Second';
import Third from './HomePage/Third';

class Home extends React.Component {
    render() {
        let active = {
            color: "rgb(236, 166, 14)",
            textDecoration: "underline"
        };
        return (
            <div>
                <HashRouter>
                    <Switch>
                        {/* <Route exact path="/home" component={First} />
                        <Route path="/home/second" component={Second}/>
                        <Route path="/home/third" component={Third}/> */}
                        <Route path="/home" exact children={props => {
                            return <First {...props} />
                        }}/>
                        <Route path="/home/second" children={props => {
                            return <Second {...props} />
                        }}/>
                        <Route path="/home/third" children={props => {
                            return <Third {...props} />
                        }} />
                    </Switch>
                </HashRouter>
                <br />
                {/* 底部固定 */}
                <div className="bottom">
                    <ul>
                        {/* exact匹配一下，不然不会有切换效果 */}
                        <li><NavLink exact activeStyle={active} replace to="/home">首页</NavLink></li>
                        <li><NavLink activeStyle={active} replace to="/home/second">订单</NavLink></li>
                        <li><NavLink activeStyle={active} replace to="/home/third">我的</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;