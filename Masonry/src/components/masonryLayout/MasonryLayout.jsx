import React, { Component } from 'react'
import './masonryLayout.scss'
import axios from 'axios'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { initListAction } from '../../Store/Action/action'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'

class MasonryLayout extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { data: pics } = await axios.get('/api/pics')
    const action = initListAction(pics)
    this.props.dispatch(action)
  }

  render() {
    return (
      <ImageList variant="masonry" cols={6} gap={14}>
        {this.props.list.map((pic) => (
          <LazyLoad height={500} offset={200} key={pic.index}>
            <ImageListItem key={pic.index}>
              <img
                src={`${pic.src}?w=201&fit=crop&auto=format`}
                srcSet={`${pic.src}?w=201&fit=crop&auto=format&dpr=2 2x`}
                alt={pic.name}
                name={pic.name}
                loading="lazy"
              />
            </ImageListItem>
          </LazyLoad>
        ))}
      </ImageList>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    all: state.all
  }
}
export default connect(mapStateToProps)(MasonryLayout)
