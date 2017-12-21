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

    //Using computed to filter the elements without altering the data
    computed: {},
    methods: {
        //Changes the depth level (S = 1, D = 2, T = 3)
        changeDisplayLevel: function (region, clickedLevel) {
            //Finding the required region in results
            var elem = this.results.regions.find(function (e) {
                if (e.name === region)
                    return e;
            });
            console.log(elem.districts[0].level);
            //Assigning new depth level and using Vue's reactive features to display the correct items on the table
            if (clickedLevel === 1) {
                if (elem.level > 1) {
                    elem.level = 1;
                } else if (elem.level === 1) {
                    elem.level = 2;
                }
            } else if (clickedLevel === 2){
                if (elem.districts.level > 2){
                    elem.districts.level = 2;
                } else if (elem.districts.level === 2){
                    elem.districts.level = 3;
                }
            }
        },
    }
});
