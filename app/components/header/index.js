import React, {Component} from 'react'
import './header.scss'

export default class header extends Component {
    render() {
        return (
            <div className={'header-container'}>
                <div className={'header-icon'}></div>
                <h2 className={'header-title'}>Reports</h2>
                <div className={'header-tab'}>
                    <h2 className={'header-tab-title'}>Specific</h2>
                </div>
                <div className={'header-tab selected'}>
                    <h2 className={'header-tab-title'}>Overall</h2>
                </div>
            </div>
        )
    }
}
