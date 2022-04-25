import { useState, memo, useCallback, useEffect } from 'react'
import Masonry from './components/Mansory/index'
import Search from './components/Search/index'
import Home from './components/Icons/home';
import Notification from './components/Icons/notification'
import User from './components/Icons/user'
import './app.less'

const ImageElement = memo(({ value }) => (
  <div className="image-wrap" style={{ borderRadius: '10px', margin: '5px' }}>
      <img src={value} style={{ width: '100%', borderRadius: '10px' }} />
  </div>
))

const App = () => {
  let initialImages = []
  const [images, setImages] = useState(initialImages)

  useEffect(async () => {
    fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
      initialImages = data.slice(0,100).map((item)=>item.src)
      setImages(initialImages)
    });
  })

  const handleImages = useCallback(() => setImages(prev => [...prev, ...initialImages]), [setImages])

  const settingColumns = useCallback(() => {
    if(window.innerWidth >= 1400) return 6
    if(window.innerWidth >= 800) return 5
    if(window.innerWidth >= 500) return 4
    if(window.innerWidth >= 300) return 3
    return 1
  }, [])
  const [column, setColumn] = useState(() => settingColumns())



  useEffect(() => {
    window.addEventListener('resize', () => setColumn(() => settingColumns()))

    return window.removeEventListener('resize', () => setColumn(() => settingColumns()))
  }, [setColumn, settingColumns])

  return (
    <div className="App">
      <div className="top" style={{ boxShadow: '0px 4px 8px rgb(103 102 102 / 25%)' }}>
        <div className="actions-center">
            <Search />
            <Home />
            <Notification />
            <User />  
        </div>     
        </div>
      <div style={{ padding: '5px 60px', margin: '0px 0px 0px 0px' }}>
        <Masonry
          dataArray={images}
          columnCount={column}
          ChildsElement={ImageElement}
        />
      </div>
      <button onClick={handleImages} style={{ cursor: 'pointer', padding: '20px', display: 'block', margin: '30px auto 80px auto' }}>Load More Image</button>
    </div>
  )
}

export default memo(App)