import React, { Component } from 'react'
import "./Button.scss"

export default class DistrictButton extends Component {
    render() {
        const { count, regionType, townshipNested, onClick } = this.props
        return (
            <>
                {!townshipNested ?
                    <button className="show" onClick={onClick}>
                        {count + "  " + regionType}
                        <span className="plus">+</span>
                    </button>
                    : <button className="close" onClick={onClick} >
                        {count + "  " + regionType}
                        < span className="plus" >-</span >
                    </button >}
            </>
        )
        // if (!townshipNested) {
        //     return (
        //         <button className="show" onClick={onClick}>
        //             {count + "  " + regionType}
        //             <span className="plus">+</span>
        //         </button>
        //     )
        // }
        // return (
        //     <button className="close" onClick={onClick} >
        //         {count + "  " + regionType}
        //         < span className="plus" >-</span >
        //     </button >
        // )
    }
}
