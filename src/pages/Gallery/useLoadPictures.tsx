import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPictureList, loadMore } from "../../redux/actions";
import { getPictures } from './service';
import { LOAD_MORE_STATUS, ACTIONS, pictureCard } from '../../redux/types';
import { rootState } from '../../redux/reducers';

// customer hook with load more data with pagination, filter and loading status
function useLoadPictures(loadingStatus: string) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { query, onEnterSearch } = useSelector((state:rootState) => state.search);

    const fetchData = async () => {
      try {
        const pictures = await getPictures({search: query, page: currentPage});
        if(currentPage > pictures.data.pageCount){
          dispatch(loadMore(LOAD_MORE_STATUS.STOP));
          return;
        }
        const results  = pictures.data.result;
        dispatch(loadPictureList(ACTIONS.LOAD_PICTURE_LIST, [...results]));
        setCurrentPage(currentPage+1);
        dispatch(loadMore(LOAD_MORE_STATUS.PAUSE));
      } catch (error) {
        dispatch(loadMore(LOAD_MORE_STATUS.STOP));
      }
    };

    useEffect(() => {
      //default load picture
      if (query.length === 0) { 
        fetchData();
        return;
      }

      // enter search word, loading state
      if(query.length > 0 && !onEnterSearch){
        setCurrentPage(1);
        dispatch(loadPictureList(ACTIONS.RESET, []));
      }

      // on search
      if(onEnterSearch){
        fetchData();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingStatus, onEnterSearch, query]);
  
    return loadingStatus;
}

export default useLoadPictures;