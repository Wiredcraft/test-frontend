import React ,{Component}from 'react';
import PropTypes from "prop-types";

export default class State extends Component {  
    constructor(){
        super();
        this.state = {
            more_cities: false
        }   
    }
  
    subcitiesString(){
        let { level, subCities } = this.props.state;
        const hashMap = {'State':'District','District':'County'};
        const stateLevel = hashMap[level];
        if(subCities === 0){
            return ;
        }else if(subCities === 1){
            return `${subCities} ${stateLevel}`
        }else if(subCities > 1 && level === 'District'){
            return `${subCities} Counties`
        }else{
            return `${subCities} ${stateLevel}s`
        }
    }

    HandleClickVisibility(){
        this.setState({
            more_cities:!this.state.more_cities
        })
        this.props.onClick(this.props.state.id)
    }

    render(){
        let { lastIput, formNumber, votersNumber, updateNumber, level, isShow, name } = this.props.state;
        return (
            <tr className={ isShow ? "show" : "hide" }>
                <td>
                    <span className={` first_capital ${level}`}
                        >{ level.slice(0,1) }</span>
                    <span>{ name }</span>
                    <span className={ `more_cities ${this.state.more_cities?"active":null}`} onClick={ () => this.HandleClickVisibility() } >
                        {this.subcitiesString()}
                    </span>
                </td>
                <td>{ lastIput }</td>
                <td>{ formNumber }</td>
                <td>{ votersNumber }</td>
                <td>{ updateNumber }</td>
            </tr>
        )
    }
}

State.propTypes = {
    onClick: PropTypes.func
}