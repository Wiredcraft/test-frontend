import React, { Component } from 'react'
import Row from './Row'
import TownshipRow from './TownshipRow';
import PropTypes from 'prop-types';
import styles from './StateRow.module.scss'; // only use its Active Default classes

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
		const { show } = this.state
    
    // this renders a single district-level row 
		// and optionally rendering its township-level childrens
		// &nbsp; is space in HTML entities
		return (
			<React.Fragment>
				<Row type='D' data={this.props.districtData}>
					<button 
						className={show ? styles.Active : styles.Default} 
						onClick={this.handleButtonClicked}>{townships.length} Townships &nbsp;
						{show || townships.length === 0 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }</button>
				</Row>
				{show && townships.map(i => <TownshipRow key={i.name} townshipData={i} />) }
			</React.Fragment>
  	)
	}
}

DistrictRow.propTypes = {
	districtData: PropTypes.object.isRequired
}


export default DistrictRow