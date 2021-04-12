import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import Masonry from '../../components/Masonry'
import photoActions from '../../store/photo/actions';

function Home(props) {

  const {photo, getPhotos} = props;
  const photos = photo.photos;

  const [offset, setOffset] = useState(0);
  const [keyword, setKeyword] = useState('');

  const fetchPhotos = async () => {
    await getPhotos({offset, keyword});
  };

  useEffect(() => {
    fetchPhotos()
  }, [offset, keyword]);

  const loadMore = (newOffset) => {
    setOffset(newOffset);
  };

  const reload = () => {
    fetchPhotos()
  };

  return (
    <div className="Home">
      <Header
        items={[
          {
            type: 'input',
            icon: 'search',
            onChange: (e) => {
              setOffset(0);
              setKeyword(e.target.value);
            }
          },
          {
            type: 'link',
            to: "/home",
            icon: 'home',
          },
          {
            type: 'link',
            to: "/notification",
            icon: 'notification',
          },
          {
            type: 'link',
            to: "/user",
            icon: 'user',
          },
        ]}/>
      <Masonry
        responsive={true}
        fetchingStatus={photo.getPhotosStatus}
        rows={photos.rows}
        offset={photos.offset}
        count={photos.count}
        limit={photos.limit}
        columnWidth={200}
        columnCount={6}
        itemPadding={5}
        loadMore={loadMore}
        reload={reload}
        scrollThreshold={300}
      />
    </div>
  )

}

const mapStateToProps = (state) => ({
  photo: state.photo
});

const dispatchToProps = (dispatch) => ({
  getPhotos: (payload) => photoActions.getPhotos(dispatch, payload)
});

export default connect(mapStateToProps, dispatchToProps)(Home);