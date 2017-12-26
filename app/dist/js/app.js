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
                //If the results are being filtered by 'region', try to find a match
                if (this.filterOption === 'region') {
                    var res = this.findByRegion(this.searchQuery);
                    //If a region was found, show the results on the page
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
                // If the search input is being deletd, the original data set must be displayed
            } else if (this.searchQuery === '' || this.searchQuery.length < 3) {
                this.restoreOriginalState();
            }
        }
    },
    methods: {
        //Removes the current data set and pushes the results to be shown on the page
        pushResults: function (res) {
            this.results.regions = [];
            this.results.regions.push(res);
        },
        //Restores the inital states and data
        restoreOriginalState: function () {
            this.results.regions = [];
            this.results = JSON.parse(JSON.stringify(votingResults));
        },
        //Finds a region by specifying a full or partial String in this.searchQuery
        findByRegion: function (regionString) {
            //Clone votingResults to use unaltered data
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            return tmpResults.regions.find(function (region) {
                //If this.searchQuery matches region.name, the region will be returned. toLowerCase() is being applied, so the user can ignore case sensitivity.
                if (region.name.toLowerCase().match(regionString.toLowerCase()))
                    return region;
            });
        },
        // Finds a district by specifying a full or partial String in this.searchQuery
        findByDistrict: function (districtString) {
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            //Iterate through all regions
            return tmpResults.regions.find(function (region) {
                //Iterate through all districts of the current region
                return region.districts.find(function (district) {
                    //Check if the (partial) string matches the current district.name
                    if (district.name.toLowerCase().match(districtString.toLowerCase())) {
                        //Change the region level to show the district level in the table
                        region.level = 2;
                        //return the entire region
                        return region;
                    }
                });
            });
        },
        //Finds a township by specifying a full or partial String in this.searchQuery
        findByTownship: function (townshipString) {
            var tmpResults = JSON.parse(JSON.stringify(votingResults));
            //Iterate through all regions
            return tmpResults.regions.find(function (region) {
                //Iterate through all districts
                return region.districts.find(function (district) {
                    //Iterate through all townships
                    return district.townships.find(function (township) {
                        //Check if the current township matches the (partial) search string
                        if (township.name.toLowerCase().match(townshipString.toLowerCase())) {
                            //Change the region level to show the district level in the table
                            region.level = 2;
                            //Change the district level to show alle the districts townships in the table
                            district.level = 3;
                            //Return the entire region
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
                //Toggle out the dostricts
                if (elem.level > 1) {
                    elem.level = 1;
                    //If the region level toggle is clicked and the districts are being toggled off, the township level must be toggled off, too.
                    elem.districts.forEach(function (resultDistrict) {
                        if (resultDistrict.level > 2) {
                            resultDistrict.level = 2;
                        }
                    });
                    //Toggle in the districts
                } else if (elem.level === 1) {
                    elem.level = 2;
                }
            } else if (clickedLevel === 2) {
                //Finding the required region in results
                var elem = this.findDistrict(region, district);
                //Toggle out the townships
                if (elem.level > 2) {
                    elem.level = 2;
                    //Toggle in the townships
                } else if (elem.level === 2) {
                    elem.level = 3;
                }
            }
        },

    }
});
