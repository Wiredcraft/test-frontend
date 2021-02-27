import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import ImageContainer from './components/ImageContainer'
import { useGlobalContext } from './store/global'
import queryString from 'query-string'

const Home = (props) => {

  const { fetchImages, searchResults } = useGlobalContext()

  useEffect(() => {
    const { search } = props.location
    const { q } = queryString.parse(search)

    if (q) {
      fetchImages(q)
    }

  }, [props.location])


  return (
    <ImageContainer images={searchResults} />
  )

}

export default withRouter(Home)
