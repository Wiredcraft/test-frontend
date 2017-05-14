<template>
  <div id="app">
    <div class="app_header">
        <span class="">Logo</span>
        <span>Reports</span>
      <div class="app_header_right">
        <span class="active">Overall</span>
        <span>Specific</span>
      </div>
    </div>
    <div class="table_header">
      <app-filter></app-filter>
      <app-searchbar></app-searchbar>
    </div>
      <app-states></app-states>
  </div>
</template>

<script>
import filter from './components/Filter.vue'
import searchbar from './components/SearchBar.vue'
import states from './components/States.vue'

export default {
  components:{
    appFilter:filter,
    appStates:states,
    appSearchbar:searchbar
  },
  created(){
    this.$store.dispatch('initStates')
  }

}
</script>

<style>
#app {
  margin-bottom: 50px;
}
body {
  box-sizing: border-box;
  background-color: #565b71;
  font-size: 14px;
  margin: 0;
}
.table_header {
  width: 1016px;
  margin: 0 auto;
  font-size: 0;
  margin-top: 40px;
}
.app_header {
  height: 54px;
  background-color: #fff;
}
.app_header_right{
  float: right;
}

.app_header span{
  display: inline-block;
  height: 54px;
  width: 185px;
  line-height: 54px;
  text-align: center;
}

.app_header>span:first-child {
  width: 52px;
  border-right: 1px solid #ddd;
}
.app_header>span:nth-child(2) {
  text-align: left;
  padding-left: 20px;
}
.app_header_right span {
  float: left;
  border-left: 1px solid #ddd;
}
.active {
  background-color: #f1f2f7;
}
</style>
