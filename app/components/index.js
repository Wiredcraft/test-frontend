import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as tableActions from '../actions/index'

import _header from './header'
import _content from './content'

class AppComponent extends Component {
    render() {
        const { tableData } = this.props.tableState
        return (
            <div>
                <_header></_header>
                <_content tableData = {tableData} _expand = {this.props.tableActions._expand}></_content>
            </div>
        )
    }
}

AppComponent.propTypes = {
    tableState: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return { tableState: state.tableState }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(tableActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
