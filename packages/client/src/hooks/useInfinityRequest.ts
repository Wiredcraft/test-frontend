import {useCallback, useEffect, useRef, useState} from 'react'
import {PhotoData} from '../MasonryLayout'

type RequestParams = Record<string, string | number>

type Status = 'ready' | 'loading' | 'success' | 'failed' | 'finish'

type Response<T> = {
  data: {
    items: T[]
    hasNext: boolean
  }
}

export const useInfinityRequest = <T extends PhotoData>(
  url: string
): {
  status: Status
  data: T[]
  run: (params?: RequestParams) => void
  setParams: (value: RequestParams | null) => void
  reset: () => void
} => {
  const [page, setPage] = useState<{value: number}>({value: 0})
  const [data, setData] = useState<T[]>([])
  const [status, setStatus] = useState<Status>('ready')

  const params = useRef<RequestParams | null>()

  const request = useCallback(async () => {
    const query = new URLSearchParams()
    query.append('page', String(page.value))
    query.append('size', String(20))

    if (params.current) {
      const paramData = params.current
      Object.keys(paramData).forEach((key) => {
        paramData[key] && query.append(key, String(paramData[key]))
      })
    }

    setStatus('loading')

    const {data} = await fetch(`${url}?${query}`).then<Response<T>>((res) =>
      res.json()
    )

    if (!data) {
      return
    }

    setStatus(data.hasNext ? 'success' : 'finish')
    setData((prev) => [...prev, ...data.items])
  }, [page, url])

  const run = useCallback(() => {
    if (!['loading', 'finish'].includes(status)) {
      setPage((prev) => ({value: prev.value + 1}))
    }
  }, [status])

  const setParams = (value: RequestParams | null) => {
    params.current = value
  }

  const reset = () => {
    setData([])
    setStatus('ready')
    setPage({value: 1})
  }

  useEffect(() => {
    page.value > 0 && request()
  }, [page, request])

  return {
    data,
    status,
    run,
    setParams,
    reset
  }
}
