import React from 'react';

class Register extends React.Component {
    loginHandle = () => {
        let { isLogin,changeState } = this.props;
        changeState(!isLogin);
    }
    render() {
        return (
            <div>
                <h1>这是注册页面</h1>
                <button onClick={this.loginHandle}>注册</button>
            </div>
        )
    }
}

export default Register;