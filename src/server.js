import uuidv4 from 'uuid/v4'
import { randInt } from './utils/helpers'

const state = { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
const district = { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
const township = { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }

const regions = []
for (let i = 0; i < randInt(5, 10); i++) {
    const districts = []
    for (let j = 0; j < randInt(1, 5); j++) {
        const townships = []
        for (let k = 0; k < randInt(1, 5); k++) townships.push({ ...township, key: uuidv4() })
        districts.push({ ...district, key: uuidv4(), townships })
    }

    regions.push({ state: { ...state, key: uuidv4() }, key: uuidv4(), districts })
}

export const getRegions = async () => {
    return regions
}
