import {useCallback, useEffect, useState} from 'react'
import {PhotoData} from '../MasonryLayout'

type Status = 'loading' | 'success' | 'failed' | 'finish'

type Response<T> = {
  data: {
    items: T[]
    hasNext: boolean
  }
}

export const useInfinityRequest = <T extends PhotoData>(
  url: string,
  getParams?: () => Record<string, string | number>
): {
  status: Status
  data: T[]
  loadNext: () => void
  reset: () => void
} => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<T[]>([])
  const [status, setStatus] = useState<Status>('loading')

  const request = useCallback(async () => {
    const query = new URLSearchParams()
    query.append('page', String(page))
    query.append('size', String(20))

    if (getParams) {
      const params = getParams()
      Object.keys(params).forEach((key) => {
        query.append(key, String(params[key]))
      })
    }

    setStatus('loading')

    fetch(`${url}?${query}`)
      .then<Response<T>>((res) => res.json())
      .then(({data}) => {
        setStatus(data.hasNext ? 'success' : 'finish')
        setData((prev) => [...prev, ...data.items])
      })
      .catch(() => {
        setStatus('failed')
      })
  }, [page, getParams, url])

  const loadNext = useCallback(() => {
    if (status === 'finish') {
      return
    }
    setPage((prev) => prev + 1)
  }, [status])

  const reset = useCallback(() => {
    setData([])
    setStatus('loading')
  }, [])

  useEffect(() => {
    request()
  }, [request])

  return {
    data,
    status,
    loadNext,
    reset
  }
}
