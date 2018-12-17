import React, { Component } from 'react'
import Row from './Row'
import DistrictRow from './DistrictRow'
import PropTypes from 'prop-types'

class StateRow extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false }
	}

	handleButtonClicked = () => {
		this.setState((prevState) => ({show: !prevState.show}))
	}

	render() {
		const {districts} = this.props.stateData
		
		// this renders a single state-level row 
		// and optionally rendering its district-level childrens
		return (
			<React.Fragment>
				<Row data={this.props.stateData}>
					<button onClick={this.handleButtonClicked}>{districts.length} Districts</button>
				</Row>
				{this.state.show && districts.map(i => <DistrictRow key={i.name} districtData={i} />) }
			</React.Fragment>
  	)
	}
}

StateRow.propTypes = {
	stateData: PropTypes.object.isRequired
}

export default StateRow