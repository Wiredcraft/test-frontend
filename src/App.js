import React, { useEffect } from 'react'
import { render } from 'react-dom'
import './App.scss'
import Header from './Header'
import Main from './Main'

const App = () => (
    <>
        <Header></Header>
        <Main></Main>
    </>
)

render(<App />, document.querySelector('#app'))
