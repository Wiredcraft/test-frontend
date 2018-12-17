import React, { Component } from 'react'
import Row from './Row'
import DistrictRow from './DistrictRow'
import PropTypes from 'prop-types'
import styles from './StateRow.module.scss';

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
		const { show } = this.state
		
		// this renders a single state-level row 
		// and optionally rendering its district-level childrens
		return (
			<React.Fragment>
				<Row type='S' data={this.props.stateData}>
					<button 
						className={show ? styles.Active : styles.Default} 
						onClick={this.handleButtonClicked}>{districts.length} Districts &nbsp;
						{show || districts.length === 0 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }
					</button>
				</Row>
				{show && districts.map(i => <DistrictRow key={i.name} districtData={i} />) }
			</React.Fragment>
  	)
	}
}

StateRow.propTypes = {
	stateData: PropTypes.object.isRequired
}

export default StateRow