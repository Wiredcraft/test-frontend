import React from 'react';
import { connect } from 'react-redux'
import TableRow from '../components/TableRow'


const confirmVisible = (regionState, searchValue) => {
    return regionState.name.toLowerCase().indexOf(searchValue) > -1 ||
        regionState.lastInput.toString().toLowerCase().indexOf(searchValue) > -1 ||
        regionState.numberOfForms.toString().toLowerCase().indexOf(searchValue) > -1 ||
        regionState.numberOfVotes.toString().toLowerCase().indexOf(searchValue) > -1 ||
        regionState.update.toString().toLowerCase().indexOf(searchValue) > -1;
};

const sortByType = (regionState,type) => {
    console.log("sort");
    regionState.sort((a , b) => {
            let index = "lastInput numberOfForms numberOfVotes update name".indexOf(type);
            if(index !== -1 ) {
                if(index === 45 ) return a[type].toString().localeCompare(b[type].toString()); else  return b[type] - a[type];
            }
            return 0;
        }
    );
};

const mapStateToProps = (state , ownProps) => ({
    filterType : state.tableFilter.filterType,
    searchValue : state.searchValue,
    regionStates : ownProps.regionStates,
    visible : ownProps.visible

});

const VisibleTableRow = (state) => {
    state.filterType !== "" && state.regionStates != null ? sortByType(state.regionStates,state.filterType) : "";
    let rows = state.regionStates.map((regionState) => {
        let visible = state.searchValue != "" ?  confirmVisible( regionState, state.searchValue.toLowerCase()) : state.visible ;
        return (
            <TableRow regionState = {regionState} visible = {visible}/>
        )
    })
    return (<div>{rows}</div>)
}


export default connect (mapStateToProps) (VisibleTableRow)