import React from 'react';
import { withRouter } from 'react-router';
import './Header.less';
import { Button } from 'antd';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                今天我还会为你
                <div className="header-top">
                    唱一首枕边故事
                </div>
                <Button htmlType="button" type="primary" onClick={this._goPath.bind(this, "齐天")}>齐天</Button>
                <Button htmlType="button" type="primary" onClick={this._goPath.bind(this, "我管你")}>我管你</Button>
                <Button htmlType="button" type="primary" onClick={this._goPath.bind(this, "异类")}>异类</Button>
                <Button htmlType="button" type="primary" onClick={this._goPath1}>华晨宇</Button>
            </div>
        );
    }

    _goPath = (name) => {
        this.props.history.push({
            pathname: "/songs/" + name,
            state: {
                name: "test"
            }
        })
    };

    _goPath1 = () => {
        this.props.history.push({
            pathname: "/hcy/"
        })
    }
}

export default withRouter(Header);
