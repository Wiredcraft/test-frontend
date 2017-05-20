import React, {Component} from 'react'
import './content.scss'
import _table from '../table'

export default class content extends Component {
    render() {
        return (
            <div className={'ContentArea'}>
                <_table tableData = {this.props.tableData} _expand = {this.props._expand}></_table>
            </div>
        )
    }
}
