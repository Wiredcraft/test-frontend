import React, { Component } from 'react'
import "./OverallData.scss"
import stateImg from "../images/s.png"
import districtImg from "../images/d.png"
import townshipImg from "../images/t.png"
import downloadImg from "../images/download.png"

export default class OverallData2 extends Component {

    handleClick = (e) => {
        let self = e.currentTarget
        let parent = e.currentTarget.parentElement.parentElement.parentElement
        let children = parent.childNodes

        for (let i = 0; i < children.length; i++) {
            if (children[i].className === "districts") {
                if (children[i].style.display === "none") {
                    e.currentTarget.childNodes[2].innerText = "-"
                    children[i].style.display = "flex"
                    self.style.background = "#dadeea"
                } else {
                    children[i].style.display = "none"
                    self.style.background = "#F0F1F7"
                    e.currentTarget.childNodes[2].innerText = "+"
                }
            } else if (children[i].className === "townships") {
                if (children[i].style.display === "none") {
                    children[i].style.display = "flex"
                    self.style.background = "#dadeea"
                    e.currentTarget.childNodes[2].innerText = "-"

                } else {
                    children[i].style.display = "none"
                    self.style.background = "#F0F1F7"
                    e.currentTarget.childNodes[2].innerText = "+"
                }
            }
        }
    }

    render() {
        return (
            <>
                <div className="regions" >
                    <ul className="region-list">
                        <li className="Region-Column">
                            <div className="Region-Title">
                                <img src={stateImg} alt="State Icon" />
                                {this.props.region.region}
                                <img src={downloadImg} alt="Download icon" />
                            </div>
                            <button onClick={this.handleClick}>
                                {this.props.region.districts.length}&nbsp;&nbsp;Districts
                            <span className="plusMinus">+</span>
                            </button>
                        </li>
                        <li className="Data-Columns">{this.props.region.lastinput}</li>
                        <li className="Data-Columns">{this.props.region.formnumbers}</li>
                        <li className="Data-Columns">{this.props.region.voternumbers}</li>
                        <li className="Data-Columns">{this.props.region.update}</li>
                    </ul>

                    {this.props.region.districts.map((district) => {
                        return (
                            <div className="districts" style={{ display: "none" }}>
                                <ul className="district-list">
                                    <li className="Region-Column">
                                        <div className="District-Rectangle"></div>
                                        <img src={districtImg} alt="District Icon" />
                                        {district.district}
                                        <img src={downloadImg} alt="Download icon" />
                                        <button onClick={this.handleClick}>
                                            {district.townships.length} Townships
                                        <span>+</span>
                                        </button>
                                    </li>
                                    <li className="Data-Columns">{district.lastinput}</li>
                                    <li className="Data-Columns">{district.formnumbers}</li>
                                    <li className="Data-Columns">{district.voternumbers}</li>
                                    <li className="Data-Columns">{district.update}</li>
                                </ul>

                                {district.townships.map((township) => {
                                    return (
                                        <div className="townships" style={{ display: "none" }} >
                                            <ul className="township-list">
                                                <li className="Region-Column"><div className="Township-Rectangle"></div> <img src={townshipImg} alt="Township icon" />{township.township} <img src={downloadImg} alt="Download icon" /><div className="Invisible-Box"></div></li>
                                                <li className="Data-Columns">{township.lastinput}</li>
                                                <li className="Data-Columns">{township.formnumbers}</li>
                                                <li className="Data-Columns">{township.voternumbers}</li>
                                                <li className="Data-Columns">{township.update}</li>

                                            </ul>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}
