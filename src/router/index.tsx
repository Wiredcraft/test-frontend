/**
 * routes
 * Thu Jul 23 10:39:32 2020
 * by xiaoT
 */

import React, { FC, CSSProperties, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

const Gallery = lazy(() => import(/* webpackChunkName: 'gallery.lazy' */'@Components/gallery/index.ts'))

const NoMatch: FC<RouteComponentProps> = ({ location }) => {
  let style: CSSProperties = {
    color: 'red',
    fontSize: '16px',
    margin: '20px auto',
    textAlign: 'center'
  }
  return (
    <div style={style}>路由不匹配：{location.pathname}</div>
  )
}
const routes = [
  {
    path: '/',
    exact: true,
    render: (props) => {
      return (
        <Redirect to={'/gallery'} />
      )
    }
  }, {
    path: '/gallery',
    exact: true,
    component: Gallery
  }, {
    component: NoMatch
  }
]

export default routes
