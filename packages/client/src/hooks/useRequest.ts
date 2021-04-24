import {useCallback, useEffect, useState} from 'react'

type useRequestProps = {
  url: string
  params: {
    page: number
    size?: number
  }
}

export const useRequest = <T>(
  props: useRequestProps
): {
  data?: T
  error?: Error
  loading: boolean
} => {
  const {url, params} = props

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [data, setData] = useState<T>()

  const request = useCallback(async () => {
    setLoading(true)

    const query = new URLSearchParams()
    query.append('page', String(params.page))
    params.size && query.append('size', String(params.size))

    try {
      const res = await fetch(`${url}?${query}`).then()
      const data = await res.json()
      setData(data.data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [params.page, params.size, url])

  useEffect(() => {
    request()
  }, [request])

  return {
    data,
    error,
    loading
  }
}
