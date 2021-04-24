import {FC, useCallback, useState} from 'react'
import {PageHeader, PageHeaderSearch} from './components'
import {useRequest} from './hooks/useRequest'
import MasonryLayout, {PhotoData} from './MasonryLayout/MasonryLayout'

const App: FC = () => {
  const [search, setSearch] = useState('')
  const onSearch = useCallback((value) => setSearch(value), [])

  const {data, loading} = useRequest<{items: PhotoData[]}>({
    url: 'http://localhost:8081/api/photos',
    params: {page: 1}
  })

  return (
    <div>
      <PageHeader>
        <PageHeaderSearch onChange={onSearch} />
      </PageHeader>
      <div>
        {loading || !data ? 'loading...' : <MasonryLayout data={data.items} />}
      </div>
    </div>
  )
}

export default App
