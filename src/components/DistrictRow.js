import React, { Component } from 'react'
import Row from './Row'
import TownshipRow from './TownshipRow';
import PropTypes from 'prop-types'

class DistrictRow extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false }
	}

	handleButtonClicked = () => {
		this.setState((prevState) => ({show: !prevState.show}))
	}

	render() {
    const {townships} = this.props.districtData
    
    // this renders a single district-level row 
		// and optionally rendering its township-level childrens
		return (
			<React.Fragment>
				<Row data={this.props.districtData}>
					<button onClick={this.handleButtonClicked}>{townships.length} Townships</button>
				</Row>
				{this.state.show && townships.map(i => <TownshipRow key={i.name} townshipData={i} />) }
			</React.Fragment>
  	)
	}
}

DistrictRow.propTypes = {
	districtData: PropTypes.object.isRequired
}


export default DistrictRow