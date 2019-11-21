const regions = [
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    },
    {
        state: { name: 'Shan state', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        distract: { name: 'Anglan', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 },
        township: { name: 'Loilen', lastInput: 123456, numberOfForms: 342456, numberOfVotes: 123456, updates: 342456 }
    }
].map((region, idx) => ({ ...region, key: idx }))

export const getRegions = async () => {
    return regions
}
