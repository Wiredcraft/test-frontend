import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableBody } from '../Table'
import NameCol from './NameCol'
import NameColCell from './NameColCell'
import RestColCell from './RestColCell'
import { getRegions } from '../server'
import useRegions from '../useRegions'
import styles from './index.module.scss'

const RegionsTable = props => {
    const [regions, setRegions] = useRegions()
    useEffect(() => void getRegions().then(setRegions), [])
    const [expantion, setExpantion] = useState({})
    const hashExpantionKey = (regionKey, type) => `${regionKey} - ${type}`

    return (
        <Table {...props}>
            <TableHeader>
                <NameColCell>Region</NameColCell>
                <RestColCell>Last Input</RestColCell>
                <RestColCell>Number of Forms</RestColCell>
                <RestColCell>Number of Votes</RestColCell>
                <RestColCell>Updates</RestColCell>
            </TableHeader>
            <TableBody>
                {regions.map(region => (
                    <>
                        <NameCol
                            key={region.state.key}
                            area={region.state}
                            iconText="S"
                            withExpandtionButton
                            count={region.distracts.length}
                            toExpand="Distract"
                            expand={() => setExpantion}
                            expanded={expantion[hashExpantionKey(region.key, 'distract')]}
                        ></NameCol>
                        {expantion[hashExpantionKey(region.key, 'distract')] &&
                            regions.distracts.map(distract => (
                                <NameCol
                                    key={distract.key}
                                    area={distract}
                                    iconText="D"
                                    count={region.township.length}
                                    toExpand="Township"
                                    expand={() => setExpantion}
                                    expanded={expantion[hashExpantionKey(region.key, 'township')]}
                                ></NameCol>
                            ))}
                        {expantion[hashExpantionKey(region.key, 'distract')] &&
                            expantion[hashExpantionKey(region.key, 'township')] &&
                            regions.distracts.map(township => (
                                <NameCol key={township.key} area={township} iconText="T" withExpandtionButton></NameCol>
                            ))}
                    </>
                ))}
            </TableBody>
        </Table>
    )
}

export default RegionsTable
