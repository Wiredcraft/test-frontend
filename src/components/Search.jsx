import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { useGlobalContext } from '../store/global'

const Search = (props) => {

  const { fetchImages } = useGlobalContext()

  useEffect(() => {
    // handle search on enter
    const submitOnEnter = (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
        const s = document.getElementById('searchbar')
        if (s.value) {
          props.history.push(`/?q=${s.value}`)
          fetchImages(s.value)
        }
			}
		}
    // add handlet
    document.getElementById('searchbar').addEventListener('keypress', submitOnEnter)
    return (() => {
      document.getElementById('searchbar').removeEventListener('keypress', submitOnEnter)
    })
  }, [])

  const handleSearch = () => {
    const s = document.getElementById('searchbar')
    if (s.value) {
      props.history.replace('/')
      fetchImages(s.value)
    }
  }

  return (
    <div className="search">
      <FontAwesomeIcon className="search__icon" icon={faSearch} onClick={handleSearch} />
      <input id="searchbar" className="search__input" type="text" onChange={handleSearch}></input>
    </div>
  )
}

export default withRouter(Search)
