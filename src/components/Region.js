import React from 'react'

export default function Region(props) {
    return (
        <tr className="table-region">
            <td>
                {props.region.region}
                <p onClick={""}>{props.region.districts.length} districts +</p>
            </td>
            <td>{props.index}</td>
            <td>{props.region.lastinput}</td>
            <td>{props.region.formnumbers}</td>
            <td>{props.region.voternumbers}</td>
            <td>{props.region.update}</td>
        </tr>
    )
}
