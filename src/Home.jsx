import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import ImageContainer from './components/ImageContainer'
import { useGlobalContext } from './store/global'
import queryString from 'query-string'

const Home = (props) => {

  const { fetchImages, searchResults, openModal } = useGlobalContext()

  useEffect(() => {
    const { search } = props.location
    const { q } = queryString.parse(search)

    if (q) {
      fetchImages(q)
    }

  }, [props.location])


  return (
    <ImageContainer images={searchResults} openModal={openModal} />
  )

}

export default withRouter(Home)