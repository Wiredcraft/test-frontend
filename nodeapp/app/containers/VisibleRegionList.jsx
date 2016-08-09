import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import RegionList from '../components/RegionList'
import * as RegionsActionCreator from '../actions/regions'
import {PENDING, SUCCESS, FAILED} from '../constants/StatusTypes'
import { Alert } from 'react-bootstrap'

const mapStateToProps = (state) => {
  return {
    status: state.regions.status,
    regions: state.regions.records,
    toggle: state.regions.toggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(RegionsActionCreator, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class VisibleRegionList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.fetchRegions()
  }

  render() {
    const { status, regions } = this.props
    return (
      <div>
        {status === PENDING && <div className="container"><h1>Loading...</h1></div>}
        {status === FAILED && <div className="container m-t-1"><Alert bsStyle="danger"><h4>OOPS! You got an error!</h4> <p>An error has occurred, please try again later.</p></Alert></div>}
        {status === SUCCESS && regions.length > 0 && <RegionList {...this.props} />}
        {status === SUCCESS && regions.length === 0 && <div className="container m-t-1"><Alert bsStyle="info"><strong>OOPS!</strong> No regions matched your search.</Alert></div>}
      </div>
    )
  }
}

