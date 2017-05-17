import React, {Component} from 'react'
import './table.scss'
import _tableFilter from '../tableFilter/index'
import _tableHeader from '../tableHeader/index'

export default class _table extends Component {
    render() {
        return (
            <div>
                table
                <_tableFilter></_tableFilter>
                <_tableHeader></_tableHeader>
            </div>
        );
    }
}
