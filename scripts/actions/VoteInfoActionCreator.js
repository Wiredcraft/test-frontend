import Dispatcher from '../dispatcher/dispatcher';
import {EXPAND} from '../constant/VoteInfoActionType';

export default {
  expandList(voteAreaId){
    Dispatcher.dispatch({type: EXPAND, payload: voteAreaId});
  }
};
