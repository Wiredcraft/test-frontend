import React, { useState, useEffect } from 'react'
import { getRegions } from './server'
import useRegions from './useRegions'
import RegionsTable from './RegionsTable'
import styles from './Regions.module.scss'
import search from './assets/search.png'
import arrow from './assets/arrow-drop-down.png'
import Select from './Select'

const big = region => regions => regions.filter(region => region.state.lastInput > 100)
const small = region => regions => regions.filter(region => region.state.lastInput <= 100)

const Regions = props => {
    const [regions, setRegions] = useRegions()
    useEffect(() => void getRegions().then(setRegions), [])
    const [text, setText] = useState('')
    const [filter, setFilter] = useState(_ => x => x)

    return (
        <div className={styles.regions}>
            <div className={styles.bar}>
                <div className={styles.filter}>
                    <Select
                        onSelect={setFilter}
                        placeholder="Filter"
                        options={[
                            { text: 'Big', value: big },
                            { text: 'Small', value: small }
                        ]}
                    ></Select>
                </div>
                <div className={styles.search}>
                    <input value={text} onChange={evt => setText(evt.target.value)} placeholder="Search"></input>
                    <img
                        src={search}
                        role="button"
                        onClick={() => setFilter(_ => regions => regions.filter(region => region.state.name.indexOf(text) != -1))}
                    ></img>
                </div>
            </div>
            <RegionsTable regions={filter(regions)}></RegionsTable>
        </div>
    )
}

export default Regions
