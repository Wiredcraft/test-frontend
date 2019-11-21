import React, { cloneElement } from 'react'
import styles from './Table.module.scss'

// const withSrcs = (elements, srcs) => React.Children.toArray(elements).map(element => cloneElement(element, { srcs: element.srcc || srcs }))

export const TableHeader = ({ children, ...props }) => (
    <div className={styles.header} {...props}>
        {children}
    </div>
)

export const TableCell = ({ children, ...props }) => (
    <div className={styles.cell} {...props}>
        {children}
    </div>
)

export const TableRow = ({ children, ...props }) => (
    <div className={styles.row} {...props}>
        {children}
    </div>
)

export const Table = ({ children, ...props }) => (
    <div className={styles.table} {...props}>
        {children}
    </div>
)

export const TableBody = ({ children, ...props }) => <div className={styles.tableBody}>{children}</div>
