import React, {Component} from 'react'
import './table.scss'
import _tableFilter from '../tableFilter'
import _tableRow from '../tableRow'

export default class _table extends Component {
    render() {
        const tableContent = this.props.tableData.map((item, index) => {
            return (item.display === false
                ? ''
                : <_tableRow {...item} key={index}
                    _expand={this.props._expand}
                    expandable={item.subItemLength === 0 ? false : true}/>);
        });

        return (
            <div>
                <_tableFilter _search={this.props._search}></_tableFilter>
                <_tableRow isTitle={true}></_tableRow>
                {tableContent}
            </div>
        )
    }
}
