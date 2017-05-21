import React, {Component} from 'react'
import './tableRow.scss'

export default class tableRow extends Component {
    render() {
        const {
            divisionLevel,
            administrations,
            isTitle,
            update,
            numberOfVoters,
            numberOfForms,
            lastInput,
            regionName,
            expandable,
            subItemLength,
            isExpanded,
            _expand
        } = this.props

        const originalTitleWidth = 365;
        const indent = 30;
        const titleWidthDependOnLevel = originalTitleWidth - indent * this.props.divisionLevel;

        const division = divisionLevel === 0
            ? administrations[1]
            : administrations[2]

        const getFirstChar = administrations.filter((item) => {
            return item.substr(0, 1)
        })

        if (isTitle === true) {
            return (
                <div className='table-row table-row-header'>
                    <div className='table-row-update'>
                        <p>{'Update'}</p>
                    </div>
                    <div className='table-row-voter'>
                        <p>{'Number of Voters'}</p>
                    </div>
                    <div className='table-row-form'>
                        <p>{'Number of forms'}</p>
                    </div>
                    <div className='table-row-last-input'>
                        <p>{'Last Input'}</p>
                    </div>
                    <div className='table-header-row-title' style={{width: originalTitleWidth}}>
                        <p className='tilte'>{'Region'}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className='table-row'>
                <div className='table-row-update'>
                    <p>{update}</p>
                </div>
                <div className='table-row-voter'>
                    <p>{numberOfVoters}</p>
                </div>
                <div className='table-row-form'>
                    <p>{numberOfForms}</p>
                </div>
                <div className='table-row-last-input'>
                    <p>{lastInput}</p>
                </div>
                <div className='table-row-title' style={{width: titleWidthDependOnLevel}}>
                    <div className='table-row-title-icon'>
                        <p>{getFirstChar[divisionLevel]}</p>
                    </div>
                    <p className='table-row-title-region-name'>
                        {regionName}
                    </p>
                    <div className='fa fa-download fa-lg table-row-title-button'/>
                    {
                        expandable === false
                        ? ''
                        : <button className='table-row-title-region-expand'
                                onClick={() => {_expand(this.props.id)}}>
                            <span className='table-row-title-region-expand-number'>{subItemLength}</span>
                            <span className='table-row-title-region-expand-division'>{division}</span>
                            <span className={(isExpanded
                                ? 'fa-minus '
                                : 'fa-plus ') + 'fa table-row-title-region-expand-icon'}></span>
                          </button>
                      }
                      </div>
                {
                    divisionLevel === 0
                    ? ''
                    : <svg height="10" width="10" className="lIcon">
                        <polygon points="0,0 2,0 2,8, 10,8 10,10, 0,10"/>
                    </svg>
                }
            </div>
        )
    }
}

tableRow.defaultProps = {
    isTitle: false,
    expandable: false,
    subItemLength: 0,
    divisionLevel: 0,
    administrations: ['State', 'District', 'Township']
}
