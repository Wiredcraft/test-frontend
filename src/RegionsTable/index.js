import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableBody } from '../Table'
import NameCol from './NameCol'
import NameColCell from './NameColCell'
import RestColCell from './RestColCell'

const RegionsTable = ({ regions, ...props }) => {
    const [expantion, setExpantion] = useState({})

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
                            {...(region.districts.length && {
                                withExpandtionButton: true,
                                count: region.districts.length,
                                toExpand: 'District',
                                expand: () => setExpantion(prev => ({ ...prev, [region.key]: !expantion[region.key] })),
                                expanded: expantion[region.key]
                            })}
                        ></NameCol>
                        {expantion[region.key] &&
                            region.districts.map(district => (
                                <>
                                    <NameCol
                                        key={district.key}
                                        area={district}
                                        iconText="D"
                                        {...(district.townships.length && {
                                            withExpandtionButton: true,
                                            count: district.townships.length,
                                            toExpand: 'Township',
                                            expand: () => setExpantion(prev => ({ ...prev, [district.key]: !expantion[district.key] })),
                                            expanded: expantion[district.key]
                                        })}
                                    ></NameCol>
                                    {expantion[district.key] &&
                                        district.townships.map(township => (
                                            <NameCol key={township.key} area={township} iconText="T" withExpandtionButton></NameCol>
                                        ))}
                                </>
                            ))}
                    </>
                ))}
            </TableBody>
        </Table>
    )
}

export default RegionsTable
