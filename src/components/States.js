import React from 'react';
import   State   from "./State.js"

export const States = (props) => {
    const HandleClick = (id) => {
        props.onClick(id)
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>Region</td>
                    <td>Last input</td>
                    <td>Number of forms</td>
                    <td>Number of votes</td>
                    <td>Update</td>
                </tr>
            </thead>
            <tbody>
                {props.states.map(state => {
                    return (
                        <State 
                            key = { state.id } 
                            state = { state }
                            onClick = { HandleClick } />
                    )
                })}
                
            </tbody>
        </table>
    )
}