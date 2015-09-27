var EventEmitter = require('events').EventEmitter;

import Dispatcher from '../dispatcher/dispatcher';
import {EXPAND} from '../constant/VoteInfoActionType';

let CHANGE_EVENT = 'change';
import voteDataList from './fakeData';

class VoteInfoStore extends EventEmitter{
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  getVoteDataList() {
    return voteDataList;
  }
}

let store = new VoteInfoStore();
export default store;

Dispatcher.register(function(action) {
  switch(action.type) {
    case EXPAND:
      let subList = voteDataList.filter(item => {return item.parentId === action.payload; });
      subList.map(item => {
          item.display = !item.display;
          if(item.display === false){
            voteDataList.filter(subitem => {return subitem.parentId === item.id; })
              .map(subItem => {subItem.display = false; });
          }
        });
      store.emitChange();
      break;
    default:
  }
});
