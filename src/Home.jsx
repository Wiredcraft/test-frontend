import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import ImageContainer from './components/ImageContainer'
import { useGlobalContext } from './store/global'
import queryString from 'query-string'
import { searchPhotos, getAllPhotos } from './utils/data'

const Home = (props) => {

  const { updateImages, searchResults, openModal } = useGlobalContext()

  useEffect(() => {
    const { search } = props.location
    const { q } = queryString.parse(search)

    if (q) {
      searchPhotos(q).then(res => {
        updateImages(res.data)
      })
    }
  }, [props.location])

  useEffect(() => {
    const { search } = props.location
    const { q } = queryString.parse(search)

    if (q) {
      searchPhotos(q).then(res => {
        updateImages(res.data)
      })
    } else {
      getAllPhotos().then(res => {
        updateImages(res.data)
      })
    }

  }, [])



  return (
    <ImageContainer images={searchResults} openModal={openModal} />
  )

}

export default withRouter(Home)
