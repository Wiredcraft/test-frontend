import React, { Component } from 'react'

import Row from './Row'
import TownshipRow from './TownshipRow';

class DistrictRow extends Component {
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
		if (this.props.districtData.townships) {
			num = this.props.districtData.townships.length
		}
		
		return (
			<React.Fragment>
				<Row type={this.props.districtData.districtName}>
					<button onClick={this.handleButtonClicked}>{num} Townships</button>
				</Row>
        {/* <TownshipRow /> */}
				{this.state.show && this.props.districtData.townships.map(i => <TownshipRow key={i.districtName} townshipData={i} />) }
			</React.Fragment>
    
  	)
	}
  
}

export default DistrictRow