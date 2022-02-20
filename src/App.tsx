import React, { Suspense } from 'react'
import { TopNav } from './components/TopNav'
import './App.scss'
const ImageList = React.lazy(() => import('./components/ImageList'))

function App() {
    return (
        <div className="App">
            <TopNav />
            <Suspense fallback={<div>Loading...</div>}>
                <ImageList />
            </Suspense>
        </div>
    )
}

export default App
