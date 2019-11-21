import React from 'react'
import { TableRow } from '../Table'
import styles from './index.module.scss'
import NameColCell from './NameColCell'
import RestColCell from './RestColCell'

const NameCol = ({ area, iconText, toExpand, expanded, expand, count }) => (
    <TableRow>
        <NameColCell>
            <div className={styles['name-container']}>
                <div className={styles['name']}>
                    <div className={styles['icon']}>{iconText}</div>
                    <span>{area.name}</span>
                </div>
                {toExpand && (
                    <div onClick={expand} className={styles['expantion-button']}>
                        {count} <span>{toExpand}</span>
                        {expanded ? '-' : '+'}
                    </div>
                )}
            </div>
        </NameColCell>
        <RestColCell>{area.lastInput}</RestColCell>
        <RestColCell>{area.numberOfForms}</RestColCell>
        <RestColCell>{area.numberOfVotes}</RestColCell>
        <RestColCell>{area.updates}</RestColCell>
    </TableRow>
)

export default NameCol
