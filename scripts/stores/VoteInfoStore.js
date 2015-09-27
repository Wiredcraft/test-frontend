var EventEmitter = require('events').EventEmitter;

import Dispatcher from '../dispatcher/dispatcher';
import {EXPAND} from '../constant/VoteInfoActionType';

let CHANGE_EVENT = 'change';
let variables = [];

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
  getVocabularies() {
    return variables;
  }
  getInfoList(){

  }
}

let store = new VoteInfoStore();
export default store;

Dispatcher.register(function(action) {
  switch(action.type) {
    case EXPAND:
      break;
    default:
  }
});
