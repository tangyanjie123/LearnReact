import React from 'react';
import { NavLink } from 'react-router-dom';


class B extends React.Component{
    render(){
        return(
            <div>
                <NavLink replace to="/home">回到list 列表页面</NavLink>
                <br/>
               
               <br/>
               <NavLink to="/detail">回到A页面</NavLink>
               <h1>这是B页面</h1>
            </div>
        )
    }
}

export default B;