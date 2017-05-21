import React, { Component } from "react";
import { Filter } from "./components/Filter.js"
import  Searchbar from "./components/Searchbar.js"
import { States } from "./components/States.js"
import states from "./states.js"
import './App.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      states,
      term:''
    }
  }
  InitStates(){
     states.map(state=>{
				if(state.level === 'State'){
				   state.isShow = true
				}else {
					 state.isShow = false
				}
        return state
			})
      return states
  }
  ChangeBySelection(term){
    if(term === ''){
      return this.InitStates()
    }else{
      let statesBySelect = states.filter(state_item=>{
        state_item.isShow = false
        return state_item.level === term
      })
      statesBySelect.map(state_item=>{
          state_item.isShow = true
			})
      return statesBySelect  
    }
  }
  HandleChangeTerm(term){
      this.setState({
        states: this.ChangeBySelection(term),
        term
      }) 
  }
  HandleKeyUpTerm(term){    
     term = term.toLowerCase().trim();
     this.InitStates();    
     let StateBySearch = this.ChangeBySelection(this.state.term).filter(state_item=>{
        state_item.isShown = false
        return state_item.name.toLowerCase().indexOf(term) !== -1
     }).map(state_item=>{
          state_item.isShow = true
          return state_item
			})

      this.setState({
        states:StateBySearch
      })
  }
  HandleClickVisibility(id){
				let subCities = this.state.states.map( State => {
         
          if (State.pid === id){
            State.isShow = !State.isShow
          }

          if(State.level === 'District' && State.pid === id && State.isShow === false ){
            states.map( State1 => {
              if(State1.pid === State.id){
                State1.isShow = false
              }
              return State1
            })
          }
          return State
        })
        
        this.setState({
          states: subCities
        })
  }
  render() {
    return (
      <div id="app">
        <div className="app_header">
            <span>Logo</span>
            <span>Reports</span>
          <div className="app_header_right">
            <span className="active" >Overall</span>
            <span>Specific</span>
          </div>
        </div>
        <div className="table_header">
          <Filter onChange= {(term) => this.HandleChangeTerm(term)}></Filter>
          <Searchbar onKeyUp= {(term) => this.HandleKeyUpTerm(term)}></Searchbar>
        </div>
          <States states= { this.state.states } onClick= { (id) => this.HandleClickVisibility(id) }></States>
      </div>
    );
  }
}

