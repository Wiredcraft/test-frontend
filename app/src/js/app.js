//returns all the townships to the list
Vue.filter('townships', function (name) {
    return data.filter(name);
});

var app = new Vue({
    el: '#content',
    data: data
});

console.log(data);
