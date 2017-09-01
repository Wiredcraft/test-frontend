import React from 'react'


const tableFilter  = ({filterType,filterName,filterVisible,filterClick,searchValueChange,filterMenuVisible}) => {
    return (
        <div className ="tableFilter">
            <div id = "filter" onClick={ filterMenuVisible }>
                <div id = "filterContent">{filterType!=="" ? filterName : "Filter"}</div>
                <ul className={filterVisible ? "" : "hidden"}>
                    <li onClick={()=> filterClick( 'name', 'Region')}>Region</li>
                    <li onClick={()=> filterClick( 'lastInput', 'Last input')}>Last input</li>
                    <li onClick={()=> filterClick( 'numberOfForms', 'Number of forms')}>Number of forms</li>
                    <li onClick={()=> filterClick( 'numberOfVotes', 'Number of voters')}>Number of Voters</li>
                    <li onClick={()=> filterClick('update', 'Update')}>Update</li>
                </ul>
            </div>
            <div id = "search">
                <input type="text" className = "searchInput" placeholder= "Search" onChange = {(e)=> searchValueChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default tableFilter