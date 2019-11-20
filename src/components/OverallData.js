import React, { Component } from 'react'
import regions from "../data/regions.json"
import "./OverallData.scss"
import Region from "./Region"

export default class OverallData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regions: regions
        }
        this.handleRowClick = this.handleRowClick.bind(this)
    }


    handleRowClick = (e) => {

    }


    render() {
        return (
            <div className="Overall-White-Container" >

                <table className="table">
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th>Last Input</th>
                            <th>Form Numbers</th>
                            <th>Voter Numbers</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    {this.state.regions.map((region, index) => {
                        return (
                            <>
                                <tbody>
                                    {/* <Region
                                        region={region}
                                        index={index}
                                    /> */}
                                    <tr className="table-region">
                                        <td>
                                            {region.region}
                                            <p onClick={this.handleRowClick}>{region.districts.length} districts +</p>
                                        </td>
                                        <td>{index}</td>
                                        <td>{region.lastinput}</td>
                                        <td>{region.formnumbers}</td>
                                        <td>{region.voternumbers}</td>
                                        <td>{region.update}</td>
                                    </tr>
                                    <>
                                        {region.districts.map((district) => {
                                            return (
                                                <>
                                                    <tr className="table-district">
                                                        <td>
                                                            {district.district}
                                                            <p> {district.townships.length} townships</p>
                                                        </td>
                                                        <td>{index}</td>
                                                        <td>{district.lastinput}</td>
                                                        <td>{district.formnumbers}</td>
                                                        <td>{district.voternumbers}</td>
                                                        <td>{district.update}</td>
                                                    </tr>

                                                    <>
                                                        {district.townships.map((township) => {
                                                            return (
                                                                <>
                                                                    < tr className="table-township" >
                                                                        <td>{township.township}</td>
                                                                        <td>{index}</td>
                                                                        <td>{township.lastinput}</td>
                                                                        <td>{township.formnumbers}</td>
                                                                        <td>{township.voternumbers}</td>
                                                                        <td>{township.update}</td>
                                                                    </tr>
                                                                </>

                                                            )
                                                        })}
                                                    </>
                                                </>
                                            )
                                        })}
                                    </>
                                </tbody>
                            </>
                        )
                    })}

                </table>
            </div >
        )
    }
}
