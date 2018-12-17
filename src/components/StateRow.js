import React, { Component } from 'react'

import Row from './Row'
import DistrictRow from './DistrictRow';

class StateRow extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false }
	}

	handleButtonClicked = () => {
		this.setState((prevState) => ({show: !prevState.show}))
	}

	render() {
		// number of districts shown on the button
		let num = 0 
		if (this.props.stateData.districts) {
			num = this.props.stateData.districts.length
		}
		
		return (
			<React.Fragment>
				<Row type={this.props.stateData.stateName}>
					<button onClick={this.handleButtonClicked}>{num} Districts</button>
				</Row>
				{this.state.show && this.props.stateData.districts.map(i => <DistrictRow key={i.districtName} districtData={i} />) }
			</React.Fragment>
    
  	)
	}
  
}

export default StateRow