import React, { Component } from 'react'
import "./Overall.scss"
import OverallData from '../components/OverallData'
import regions from "../data/regions.json"




export default class Data extends Component {

    state = {
        regions: regions,
        searchedRegions: regions,
        filterType: "region"
    }

    changeHandler = (e) => {
        const filter = e.target.value
        this.setState({ filterType: filter })
    }

    searchHandler = (e) => {
        var searchQuery = e.target.value

        if (this.state.filterType === "region") {
            var searchResult = this.state.regions.filter((region) =>
                region.region.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            )
            this.setState({ searchedRegions: searchResult })
        } else if (this.state.filterType === "lastinput") {
            var searchResult = this.state.regions.filter((region) =>
                region.lastinput.toString().indexOf(searchQuery.toString()) !== -1
            )
            this.setState({ searchedRegions: searchResult })
        }
        else if (this.state.filterType === "formnumbers") {
            var searchResult = this.state.regions.filter((region) =>
                region.formnumbers.toString().indexOf(searchQuery) !== -1
            )
            this.setState({ searchedRegions: searchResult })
        } else if (this.state.filterType === "voternumbers") {
            var searchResult = this.state.regions.filter((region) =>
                region.voternumbers.toString().indexOf(searchQuery) !== -1
            )
            this.setState({ searchedRegions: searchResult })
        } else if (this.state.filterType === "update") {
            var searchResult = this.state.regions.filter((region) =>
                region.update.toString().indexOf(searchQuery) !== -1
            )
            this.setState({ searchedRegions: searchResult })
        }
    }
    render() {
        return (
            <div className="Data">
                <div className="Overall-White-Container">
                    <select value={this.state.filterType} onChange={this.changeHandler}>
                        <option value="region">Region</option>
                        <option value="lastinput">Last Input</option>
                        <option value="formnumbers">Form Numbers</option>
                        <option value="voternumbers">Voter Numbers</option>
                        <option value="update">Update</option>
                    </select>
                    <input className="DataSeaarch" onChange={this.searchHandler} type="text" placeholder="Search Regions" />
                    {
                        this.state.searchedRegions.map((region) =>
                            <OverallData
                                region={region}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
