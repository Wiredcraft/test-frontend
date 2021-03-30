import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Search from '../search/search';
import './nav.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <Router>
                <div className="nav">
                    <Search placeholder="请搜索..." />
                    <div className="icons">
                        <Link to="/"><span className="iconfont icon-Homehomepagemenu"></span></Link>
                        <span className="iconfont icon-alarm"></span>
                        <span className="iconfont icon-user"></span>
                    </div>
                </div>
            </Router>
        )
    }
}