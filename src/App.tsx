import {FC, useCallback, useState} from 'react'
import {PageHeader, PageHeaderSearch} from './components'
import MasonryLayout from './MasonryLayout/MasonryLayout'

const App: FC = () => {
  const [search, setSearch] = useState('')

  const onSearch = useCallback((value) => setSearch(value), [])

  return (
    <div>
      <PageHeader>
        <PageHeaderSearch onChange={onSearch} />
      </PageHeader>
      <div>
        <MasonryLayout data={require('./mock/data.json')} />
      </div>
    </div>
  )
}

export default App
