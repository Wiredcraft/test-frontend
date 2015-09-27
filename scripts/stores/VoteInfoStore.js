var EventEmitter = require('events').EventEmitter;

import Dispatcher from '../dispatcher/dispatcher';
import {EXPAND, CHANGEFILTER} from '../constant/VoteInfoActionType';
import {REGION, INPOT} from '../constant/FilterType';

let CHANGE_EVENT = 'change';
import voteDataList from './fakeData';

class VoteInfoStore extends EventEmitter{
  constructor(){
    super();
    //create Index
    voteDataList.forEach(item => {
      item.subItems = voteDataList.filter(listItem => { return listItem.parentId === item.id; });
      item.subItemCount = item.subItems.length;
      item.expended = false;
   });
  }
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

// let filter = '';

function displayParentNode(node){
  if(node.parentId === 0){
    return;
  }
  let parentNode = voteDataList.filter(item => {return item.id === node.parentId; })[0];
  parentNode.expended = true;
  parentNode.display = true;
  displayParentNode(parentNode);
}

function restInfoList(show = false){
  voteDataList.map(item => {
    item.display = show;
    item.expended = show;
  });
}

Dispatcher.register(function(action) {
  switch(action.type) {
    case EXPAND:
      let rootItem = voteDataList.filter(item => {return item.id === action.payload; })[0];
      rootItem.subItems.map(item => {
          item.display = !rootItem.expended;
          if(item.display === false){
            item.subItems.map(subItem => {subItem.display = false; });
          }
        });
      rootItem.expended = !rootItem.expended;
      store.emitChange();
    break;
    case CHANGEFILTER:
      if(action.payload.filterText === ''){
        restInfoList(true);
        store.emitChange();
        return;
      }
      restInfoList();
      switch(action.payload.filterType) {
        case REGION:
          voteDataList.map(item => {
            if(item.title.indexOf(action.payload.filterText) > -1){
              item.display = true;
              if(item.areaLevel > 0){
                displayParentNode(item);
              }
            }
          });
        break;
        case INPOT:

          voteDataList.map(item => {
            if(item.lastData === action.payload.filterText){
              item.display = true;
              if(item.areaLevel > 0){
                displayParentNode(item);
              }
            }
          });
        break;
        default:
          return;
      }
      store.emitChange();
      break;
    default:
      return;
  }
});
