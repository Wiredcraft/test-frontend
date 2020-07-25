/**
 * Thu Jul 23 10:34:39 2020
 * by xiaoT
 */

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import store from '@Store/index.ts'
import App from './app.tsx'

const appWrap = document.getElementById('app')
ReactDom.render(<Provider store={store}><App /></Provider>, appWrap)
