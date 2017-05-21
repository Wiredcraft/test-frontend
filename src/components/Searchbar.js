import React , { Component } from 'react';

export default class Searchbar extends Component  {
    constructor(){
        super();
        this.state = {
            searchWord:""
        }
    }
    componentDidMount () {
        this.input.focus()
    }
    HandleSearchChange(event){
        this.setState({
            searchWord: event.target.value
            })
    }
    HandleKeyUp(event) {
        event.keyCode === 13 && this.props.onKeyUp(event.target.value)         
    };
    HandleClick(event) {  
        this.props.onKeyUp(this.state.searchWord)
    };
    render(){
        return (
            <div className="searchbar">
                <input type="" 
                    value ={this.state.searchWord}
                    ref={(input) => this.input = input} 
                    onKeyUp={ event => this.HandleKeyUp(event) }
                    onChange={this.HandleSearchChange.bind(this)} />
                <span className="searchIcon" onClick={ (event) =>this.HandleClick(event) }></span>
            </div>
        )
    }
}