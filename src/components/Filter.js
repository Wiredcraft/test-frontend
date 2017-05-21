import React from 'react';

export const Filter = (props) => {
    let HandleChange = (event) =>{
        props.onChange(event.target.value)
    }
    return (
        <select  className="filter" onChange={ HandleChange }>
            <option value="">All</option>
            <option value="State">State</option>
            <option value="District">District</option>
            <option value="County">County</option>
	    </select>
    )
}