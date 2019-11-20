import React, { Component } from 'react'
import "./OverallData.scss"

export default class OverallData2 extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }


    handleClick = (e) => {
        let parent = e.currentTarget.parentElement.parentElement.parentElement
        let children = parent.childNodes
        for (let i = 0; i < children.length; i++) {
            if (children[i].className === "districts") {
                children[i].style.display === "none" ? children[i].style.display = "flex" : children[i].style.display = "none"
            } else if (children[i].className === "townships") {
                children[i].style.display === "none" ? children[i].style.display = "flex" : children[i].style.display = "none"
            }
        }
    }


    render() {
        return (
            // <div className="Overall-White-Container" >
            //     {this.props.region.map((region) => {
            //         return (
            <>
                <div className="regions" >
                    <ul className="region-list">
                        <li>{this.props.region.region} <button onClick={this.handleClick}>{this.props.region.districts.length} districts</button></li>
                        <li>{this.props.region.lastinput}</li>
                        <li>{this.props.region.formnumbers}</li>
                        <li>{this.props.region.voternumbers}</li>
                        <li>{this.props.region.update}</li>
                    </ul>

                    {this.props.region.districts.map((district) => {
                        return (
                            <div className="districts" style={{ display: "none" }}>
                                <ul onClick={this.handleClick} className="district-list">
                                    <li>{district.district} <button onClick={this.handleClick}>{district.townships.length} districts</button></li>
                                    <li>{district.lastinput}</li>
                                </ul>

                                {district.townships.map((township) => {
                                    return (
                                        <div className="townships" style={{ display: "none" }} >
                                            <ul className="township-list">
                                                <li>{township.township}</li>
                                            </ul>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </>
            //     )
            // })
            // }
            // </div > 
        )
    }
}
