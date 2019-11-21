import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./Header.scss"

export default class Header extends Component {

    render() {
        return (<div className="Header-Container">
            <Link to={`/`}><img src={logo} alt="logo" /></Link>
            <h2 id="report">Reports</h2>
            <Link to={`/overall`}><h2 id="overall">Overall</h2></Link>
            <Link to={`/specific`}><h2 id="specific">Specific</h2></Link>
        </div>)
    }
}

