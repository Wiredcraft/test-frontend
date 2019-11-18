import React from 'react'
import logo from "../images/logo.png"
import "./Header.scss"

export default function Header() {
    return (
        <div className="Header-Container">
            <img src={logo} alt="logo" />
            <h2 id="report">Reports</h2>
            <h2 id="overall">Overall</h2>
            <h2 id="specific">Specific</h2>
        </div>
    )
}
