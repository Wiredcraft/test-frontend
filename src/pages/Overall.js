import React, { Component } from 'react'
import "./Overall.scss"
import OverallData from '../components/OverallData'
import regions from "../data/regions.json"
import "./Overall-Mobile.scss"

export default class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regions: regions,
            searchedRegions: regions,
            filterType: "region",
            isDesktop: false
        }
        this.updatePredicate = this.updatePredicate.bind(this)

    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 750 });
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
        const isDesktop = this.state.isDesktop;
        return (
            <>
                {isDesktop ? (<div className="Data">
                    <div className="Overall-White-Container">
                        <div className="filter">
                            <div className="input-class">
                                <select class="custom-select" style={{ width: "200px" }} required value={this.state.filterType} onChange={this.changeHandler}>
                                    <option className="select-items" defaultValue>Filter</option>
                                    <option value="region">Regions</option>
                                    <option value="lastinput">Last Input</option>
                                    <option value="formnumbers">Form Numbers</option>
                                    <option value="voternumbers">Voter Numbers</option>
                                    <option value="update">Update</option>
                                </select>
                            </div>
                            <input className="DataSeaarch" onChange={this.searchHandler} type="text" placeholder="Search" />
                        </div>
                        <div>
                            <div className="Table-Header-Container">
                                <ul className="Table-Header">
                                    <li className="Header-Region-Column">Region</li>
                                    <li className="Header-Data-Columns">Last Input</li>
                                    <li className="Header-Data-Columns">Number of forms</li>
                                    <li className="Header-Data-Columns">Number of voters</li>
                                    <li className="Header-Data-Columns">Update</li>
                                </ul>
                            </div>
                            {
                                this.state.searchedRegions.map((region) =>
                                    <OverallData
                                        region={region}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>) : (
                        <div className="Mobile-Data">
                            <div className="Mobile-Overall-White-Container">
                                <div className="Mobile-filter">
                                    <div className="Mobile-input-class">
                                        <select class="Mobile-custom-select" style={{ width: "200px" }} required value={this.state.filterType} onChange={this.changeHandler}>
                                            <option className="Mobile-select-items" defaultValue>Filter</option>
                                            <option value="region">Regions</option>
                                            <option value="lastinput">Last Input</option>
                                            <option value="formnumbers">Form Numbers</option>
                                            <option value="voternumbers">Voter Numbers</option>
                                            <option value="update">Update</option>
                                        </select>
                                    </div>
                                    <input className="Mobile-Data-Seaarch" onChange={this.searchHandler} type="text" placeholder="Search" />
                                </div>
                                <div className="Mobile-Row-Container">
                                    <div className="Mobile-Table-Header-Container">
                                        <ul className="Mobile-Table-Header">
                                            <li className="Mobile-Header-Region-Column">Region</li>
                                            <li className="Mobile-Header-Data-Columns">Last Input</li>
                                            <li className="Mobile-Header-Data-Columns">Number of forms</li>
                                            <li className="Mobile-Header-Data-Columns">Number of voters</li>
                                            <li className="Mobile-Header-Data-Columns">Update</li>
                                        </ul>
                                    </div>
                                    {
                                        this.state.searchedRegions.map((region) =>
                                            <OverallData
                                                region={region}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }

            </>
        )
    }
}
