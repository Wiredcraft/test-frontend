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
        //Finds the region for which the toggle was clicked
        findRegion: function (region) {
            return this.results.regions.find(function (currentRegion) {
                if (currentRegion.name === region)
                    return currentRegion;
            });
        },
        //Finds the district for which the toggle was clicked
        findDistrict: function (region, district) {
            return this.findRegion(region).districts.find(function (currentDistrict) {
                if (currentDistrict.name === district)
                    return currentDistrict;
            });
        },
        //Changes the depth level of the table (S = 1, D = 2, T = 3)
        changeDisplayLevel: function (region, clickedLevel, district) {
            //Assigning new depth level and using Vue's reactive features to display the correct items on the table
            if (clickedLevel === 1) {
                //Finding the required region in results
                var elem = this.findRegion(region);

                if (elem.level > 1) {
                    elem.level = 1;
                    elem.districts.forEach(function(resultDistrict){
                        if(resultDistrict.level > 2){
                            resultDistrict.level = 2;
                        }
                    });
                } else if (elem.level === 1) {
                    elem.level = 2;
                }
            } else if (clickedLevel === 2) {
                //Finding the required region in results
                var elem = this.findDistrict(region, district);
                if (elem.level > 2) {
                    elem.level = 2;
                } else if (elem.level === 2) {
                    elem.level = 3;
                }
            }
        }
    }
});
