//returns all the townships to the list
Vue.filter('townships', function (name) {
    return data.filter(name);
});

var app = new Vue({
    el: '#content',
    data: {
        results: votingResults,
        search: '',
        filter: '',
    },

    //Using computed to filter the elements without altering data
    computed: {},
    methods: {
        show: function (el) {

        },
        hide: function (el) {

        }
    }
});
