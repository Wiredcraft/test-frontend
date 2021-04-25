
import React, { ChangeEventHandler } from "react";
import store from "../store/reducer";
import { GET_IMGS } from "../store/types";
import LazyLoad from 'react-lazyload';

interface IMasonryProps{

}


export interface DataItem{
    _id: string,
    index: number,
    name: string,
    src: string
}

export interface IMasonryState {
    data: DataItem[]
}

//Todo: set up preloading gif
// const loading = () => {
//     return (
//     <img className="loadingImg" 
//         alt=""
//         src={require('../loading.gif')}/>
//     )
// }

export default class Masonry extends React.Component<IMasonryProps, IMasonryState>{

    constructor(props: IMasonryProps){
        super(props);
        this.state = {
            data: store.getState().imgInfo
        }
        store.dispatch({type: GET_IMGS,
            keyWord: ""})
        
        store.subscribe(() => {
            this.setState({
                data: store.getState().imgInfo
            })
        })
    }

    render(){
        const data = this.state.data;
        return (
            <>
            <div className="masonry">
                {data.map(ele => {
                    return (
                        <div className="item">
                            <LazyLoad height={300} once >
                            <img src={ele.src} />
                            </LazyLoad>
                        </div>
                    )
                })}
            </div>
        </>
        )
    }
}

