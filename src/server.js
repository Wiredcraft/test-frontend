import uuidv4 from 'uuid/v4'

const state = { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
const distract = { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
const township = { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }

const regions = []
for (let i = 0; i < 10; i++) {
    const distracts = []
    const townships = []
    for (let j = 0; j < 4; j++) distracts.push({ ...distract, key: uuidv4() })
    for (let j = 0; j < 2; j++) townships.push({ ...township, key: uuidv4() })

    regions.push({ state: { ...state, key: uuidv4() }, key: uuidv4(), distracts, townships })
}

export const getRegions = async () => {
    return regions
}
