//returns all the townships to the list
Vue.filter('townships', function (name) {
    return data.filter(name);
});

var app = new Vue({
    el: '#content',
    data: {
        //Copying the votingResult Object
        results: JSON.parse(JSON.stringify(votingResults)),
        searchQuery: '',
        filterOption: 'region',
    },
    //Watch for changes of this.searchQuery and respond accordingly
    watch: {
        searchQuery: function () {
            //Only do something, if an filter option was selected and this.searchQuery.length is longer than/equals three characters
            if (this.searchQuery.length >= 3) {
                if (this.filterOption === 'region') {
                    var res = this.findByRegion(this.searchQuery);
                    if (res !== undefined)
                        this.pushResults(res);
                } else if (this.filterOption === 'district') {
                    var res = this.findByDistrict(this.searchQuery);
                    if (res !== undefined)
                        this.pushResults(res);
                } else if (this.filterOption === 'township') {
                    var res = this.findByTownship(this.searchQuery);
                    if (res !== undefined)
                        this.pushResults(res);
                }
            } else if (this.searchQuery === '' || this.searchQuery.length < 3) {
                this.restoreOriginalState();
            }
        }
    },
    methods: {
        pushResults: function (res) {
            this.results.regions = [];
            this.results.regions.push(res);
        },
        restoreOriginalState: function () {
            this.results.regions = [];
            this.results = JSON.parse(JSON.stringify(votingResults));
        },
        //Finds a region by specifying a full or partial String in this.searchQuery
        findByRegion: function (regionString) {
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            return tmpResults.regions.find(function (region) {
                //If this.searchQuery matches region.name, the region will be returned. toLowerCase() is being applied, so the user can ignore case sensitivity.
                if (region.name.toLowerCase().match(regionString.toLowerCase()))
                    return region;
            });
        },
        findByDistrict: function (districtString) {
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            return tmpResults.regions.find(function (region) {
                return region.districts.find(function (district) {
                    if (district.name.toLowerCase().match(districtString.toLowerCase())) {
                        region.level = 2;
                        return region;
                    }
                });
            });
        },
        findByTownship: function (townshipString) {
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            return tmpResults.regions.find(function (region) {
                return region.districts.find(function (district) {
                    return district.townships.find(function (township) {
                        if (township.name.toLowerCase().match(townshipString.toLowerCase())) {
                            region.level = 2;
                            district.level = 3;
                            return region;
                        }
                    });
                });
            });
        },
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
                    //If the Region level toggle is clicked and the Districts  are being toggled off, each Township must be toggled off, too.
                    elem.districts.forEach(function (resultDistrict) {
                        if (resultDistrict.level > 2) {
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
