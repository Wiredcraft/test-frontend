import React from 'react'
import VisibleTableRow from '../containers/VisibleTableRow'
import {RegionStates} from '../data'

const table = () => {
    return (
        <div className ="table">
            <ul className="tableHeader">
                <li className = "tableFirst">Region</li>
                <li>Last input</li>
                <li>Number of forms</li>
                <li>Number of Voters</li>
                <li>Update</li>
            </ul>
           <VisibleTableRow regionStates = {RegionStates} visible = {true}/>
        </div>
    )
}
export default table