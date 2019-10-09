import '.././Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 1, name: "第一个列表" },
                { id: 2, name: "第二个列表" },
                { id: 3, name: "第三个列表" },
                { id: 4, name: "第四个列表" },
                { id: 5, name: "第五个列表" },
                { id: 6, name: "第六个列表" },
                { id: 7, name: "第七个列表" },
                { id: 8, name: "第八个列表" },
                { id: 9, name: "第九个列表" },
                { id: 10, name: "第十个列表" },
                { id: 11, name: "第11个列表" },
                { id: 12, name: "第12个列表" },
                { id: 13, name: "第13个列表" },
                { id: 14, name: "第14个列表" },
                { id: 15, name: "第15个列表" },
                { id: 16, name: "第16个列表" },
                { id: 17, name: "第17个列表" },
                { id: 18, name: "第18个列表" },
                { id: 19, name: "第19个列表" },
                { id: 20, name: "第20个列表" },
                { id: 21, name: "第21个列表" },
                { id: 22, name: "第22个列表" },
                { id: 23, name: "第12个列表" },
                { id: 24, name: "第13个列表" },
                { id: 25, name: "第14个列表" },
                { id: 26, name: "第15个列表" },
                { id: 27, name: "第16个列表" },
                { id: 28, name: "第17个列表" },
                { id: 29, name: "第18个列表" },
                { id: 30, name: "第19个列表" },
                { id: 31, name: "第20个列表" },
                { id: 32, name: "第21个列表" },
                { id: 33, name: "第22个列表" },
            ],
            ensure: true,
            cls: 'top',
            isScrollTop: true
        };
        this.scrollHandle = this.scrollHandle.bind(this);
    }
    scrollHandle() {
        let height = document.body.scrollTop || document.documentElement.scrollTop;
        if (Number.parseInt(height) >= 200) {
            console.log('111');
            this.setState({
                cls: 'top fixed',
            })
        } else {
            console.log('333');
            this.setState({
                cls: 'top'
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandle);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandle);
    }
    renderList() {
        return this.state.list.map((item, i) => {
            return (
                <li className="blocks" key={i}>
                    <NavLink to="/detail">{item.name}</NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.cls}>
                    <p>我在顶部，滚动的话我会吸顶</p>
                </div>
                <ul className="f-ul">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default First;