import { useState, useEffect } from 'react'

const createStore = initState => {
    const listeners = new Set()
    let curr = initState

    return () => {
        const [state, local] = useState(curr)
        useEffect(() => {
            listeners.add(local)
            return () => {
                listeners.delete(local)
            }
        }, [])

        const setState = state => {
            curr = state
            for (const setState of listeners) setState(state)
        }

        return [state, setState]
    }
}

export default createStore
