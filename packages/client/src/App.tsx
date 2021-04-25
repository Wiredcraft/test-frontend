import {FC, useCallback, useState} from 'react'
import {Loading, PageHeader, PageHeaderSearch} from './components'
import InViewDetector from './components/InviewDetector/InViewDetector'
import {useInfinityRequest} from './hooks/useInfinityRequest'
import MasonryLayout, {PhotoData} from './MasonryLayout/MasonryLayout'

const App: FC = () => {
  const [search, setSearch] = useState('')
  const onSearch = useCallback((value) => setSearch(value), [])

  const {status, data, loadNext} = useInfinityRequest<PhotoData>(
    'http://localhost:8081/api/photos',
    search
  )

  return (
    <div>
      <PageHeader>
        <PageHeaderSearch onChange={onSearch} />
      </PageHeader>
      <div>
        {<MasonryLayout data={data} />}
        {status === 'loading' && <Loading>loading...</Loading>}
        <InViewDetector onEnter={loadNext} />
      </div>
    </div>
  )
}

export default App
