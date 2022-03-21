import React, { Component } from 'react';
import './masonryLayout.scss';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import store from '../../Store/index';
import { initListAction } from '../../Store/Action/action';

class MasonryLayout extends Component {
  constructor(props){
    super(props);
    store.subscribe(this.handleStoreChange)
  }
  state = store.getState();
  async componentDidMount(){
    const { data: pics}  = await axios.get("/api/pics");
    const action = initListAction(pics);
    store.dispatch(action);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }

  render() {
    return (
      <ImageList variant="masonry" cols={6} gap={14}>
      {this.state.list.map((pic) => (
        <ImageListItem key={pic.index}>
          <img
            src={`${pic.src}?w=201&fit=crop&auto=format`}
            srcSet={`${pic.src}?w=201&fit=crop&auto=format&dpr=2 2x`}
            alt={pic.name}
            name={pic.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    )
  }
}

export default MasonryLayout
