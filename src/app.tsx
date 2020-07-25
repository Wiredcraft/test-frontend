/**
 * app view
 * Thu Jul 23 10:35:14 2020
 * by xiaoT
 */

import React, { FC, Suspense } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import routes from '@Routes'

// import css
import 'normalize.css'
import '@CSS/common.scss'

const Loading = () => {
  return (
    <div className='loading'>加载中...</div>
  )
}

const App: FC<{}> = (): JSX.Element => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((item: any, index) => {
            return (
              <Route key={item.path + index} {...item} />
            )
          })}
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default App
