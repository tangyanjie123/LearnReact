import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TooList from './details/Toolist';
import B from "./details/B";

class Details extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/detail" component={TooList} />
                        <Route exact path="/detail/b" component={B}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default Details;