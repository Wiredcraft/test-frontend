import {FC, useCallback} from 'react'
import {Loading, PageHeader, PageHeaderSearch} from './components'
import InViewDetector from './components/InViewDetector/InViewDetector'
import {useInfinityRequest} from './hooks/useInfinityRequest'
import MasonryLayout, {PhotoData} from './MasonryLayout/MasonryLayout'

const App: FC = () => {
  const {status, data, run, setParams, reset} = useInfinityRequest<PhotoData>(
    'http://localhost:8081/api/photos'
  )

  const onLoadMore = useCallback(() => {
    run()
  }, [run])

  const onSearch = useCallback(
    (search) => {
      setParams(search ? {keyword: search} : null)
      reset()
    },
    [reset, setParams]
  )

  return (
    <div>
      <PageHeader>
        <PageHeaderSearch onChange={onSearch} />
      </PageHeader>
      <div>
        <MasonryLayout data={data} />
        {status === 'loading' ? (
          <Loading>LOADING...</Loading>
        ) : status === 'finish' ? (
          <Loading>NO MORE</Loading>
        ) : (
          <InViewDetector distance={100} onEnter={onLoadMore} />
        )}
      </div>
    </div>
  )
}

export default App
