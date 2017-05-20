import React, {Component} from 'react'
import './table.scss'
import _tableFilter from '../tableFilter'
import _tableRow from '../tableRow'

export default class _table extends Component {
    render() {
        return (
            <div>
                table
                <_tableFilter></_tableFilter>
                <_tableRow></_tableRow>
            </div>
        );
    }
}
