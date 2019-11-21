import React, { Component } from 'react'
import "./Button.scss"

export default class Button extends Component {
    render() {
        const { count, regionType, districtNested, onClick } = this.props
        return (
            <>
                {!districtNested ?
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

        // if (!districtNested) {
        //     debugger
        //     return (
        //         <button className="close" onClick={onClick}>
        //             {count + "  " + regionType}
        //             <span className="plus">+</span>
        //         </button>
        //     )
        // } else {
        //     debugger
        //     return (
        //         <button className="close" onClick={onClick}>
        //             {count + "  " + regionType}
        //             <span className="plus">-</span>
        //         </button>
        //     )
        // }
    }
}
