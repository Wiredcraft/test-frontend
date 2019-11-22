import { useState, useEffect } from 'react'

const listeners = new Set()
window.addEventListener('popstate', () => {
    for (const listener of listeners) listener({ ...location })
})

const usePathname = () => {
    const [loc, local] = useState({ ...location })

    useEffect(() => {
        listeners.add(local)
        return () => {
            listeners.delete(local)
        }
    }, [])

    const goto = url => {
        history.pushState(null, '', url)
        for (const listener of listeners) listener({ ...location })
    }

    return [loc, goto]
}

export default usePathname
