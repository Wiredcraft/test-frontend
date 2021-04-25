import React, { useEffect } from "react";
import notification from "../notification.png";
import home from "../home.png";
import user from "../user.png";
import store, { ImgReducer } from "../store/reducer";
import { GET_IMGS } from "../store/types";
import {debounce} from 'lodash';

interface IHeadProps{

}

interface IHeadState{
    keyWord: string;
}

export const DEFAULT_WAIT = 700;

export default class Head extends React.Component<IHeadProps, IHeadState>{
    constructor(props: IHeadProps){
        super(props);
        this.state ={
            keyWord: ""
        }
        // set debounce
        this.searchImg = debounce(this.searchImg, DEFAULT_WAIT);
    }

    handleChange(e: any){
        this.setState({keyWord: e.target.value});
        this.searchImg(e.target.value);
    }

    searchImg(name: string){
        store.dispatch({
            type: GET_IMGS,
            keyWord: name
        })
    }

    render(){
        return (
        <div className = "head">
            <img src={home}/>
            <img src={notification}/>
            <img src={user}/>
        <input value = {this.state.keyWord} onChange = {(e) => this.handleChange(e)}/>
    </div>
    )
    }
}
