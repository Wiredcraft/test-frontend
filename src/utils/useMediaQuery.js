import { useState, useEffect } from 'react'

const delay = (f, limit) => {
    let id
    return (...args) => {
        if (!id) id = setTimeout(() => f(...args), limit)
        else {
            clearTimeout(id)
            id = setTimeout(() => f(...args), limit)
        }
    }
}

const listeners = new Set()
window.addEventListener(
    'resize',
    delay(() => {
        for (const listener of listeners) listener(null)
    }, 300)
)

const useMediaQuery = query => {
    const [, local] = useState()

    useEffect(() => {
        listeners.add(local)
        return () => {
            listeners.delete(local)
        }
    }, [])

    return [window.matchMedia(query).matches]
}

export default useMediaQuery
