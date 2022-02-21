const getImages = async (url: string) => {
    const fetch = window.fetch
    try {
        const res = await fetch(url)
        return res.json()
    } catch (e) {
        console.error('Request Failed', e)
        alert('Network Error!')
        throw e
    }
}

export { getImages }
