import { ChangeEvent, useCallback } from 'react'
import './App.css'
import { useMasonry } from './data/use-masonry'
import { Masonry } from './component/masonry'
import { Search } from './component/search'
import { IconHome, IconRing, IconUser } from './component/icons'
import { useDebouncedValue } from './util'

function App() {
  const [debounce, debouncedValue] = useDebouncedValue('')
  const { data } = useMasonry(debouncedValue.trim())

  const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    debounce(e.target.value)
  }, [debounce])

  return (
    <>
    <div className="header">
      <Search onChange={onInput} />
      <IconHome />
      <IconRing />
      <IconUser />
    </div>
      <Masonry imgs={data} />
    </>
  )
}

export default App
