import Dispatcher from '../dispatcher/dispatcher';
import {EXPAND, CHANGEFILTER} from '../constant/VoteInfoActionType';

export default {
  expandList(voteAreaId){
    Dispatcher.dispatch({type: EXPAND, payload: voteAreaId});
  },
  searchInfo(filterType, filterText){
    Dispatcher.dispatch({type: CHANGEFILTER,
      payload: {filterType: filterType, filterText: filterText}});
  }
};
