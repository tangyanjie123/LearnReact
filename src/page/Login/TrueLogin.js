import React from 'react';

class TrueLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    loginHandle = () => {
        let username = this.name.value;
        let password = this.pwd.value;
        this.setState({
            username,
            password
        });
    }
    render() {
        
        return (
            <div>
                <h1>用户登录</h1>
                <div>
                    <span>用户名：</span>
                    <input type="text" ref={(ref) => { this.name = ref }} />
                </div>
                <div>
                    <span>密码：</span>
                    <input type="password" ref={(ref) => { this.pwd = ref }} />
                </div>
                <div>
                    <button onClick={this.loginHandle}>登录</button>
                </div>
            </div>
        )
    }
}

export default TrueLogin;