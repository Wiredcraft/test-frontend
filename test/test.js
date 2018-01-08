describe("Vue Unit Tests", function () {

    it("initial value of filterOption must be region", function () {
        expect(app.filterOption).toBe('region');
    });

    it("findRegion() is able to find an region by providing an incomplete search query", function () {
        expect(app.findByRegion("Sha").name).toBe('Shan state');
    });

    it("findRegion() is able to find an region by providing an complete search query", function () {
        expect(app.findByRegion("Shan state").name).toBe('Shan state');
    });

    it("pushResults() is able to correctly push search results", function () {
        var results = {
            "name": "Shan state",
            "lastInput": 123456,
            "numOfForms": 342456,
            "numOfVoters": 123456,
            "update": 342456,
            "level": 1,
            "districts": [{
                "name": "Aunglan",
                "lastInput": 123456,
                "numOfForms": 342456,
                "numOfVoters": 123456,
                "update": 342456,
                "level": 2,
                "townships": [{
                    "name": "Loilen",
                    "lastInput": 123456,
                    "numOfForms": 342456,
                    "numOfVoters": 123456,
                    "update": 342456
                }]
            }]

        }
        app.pushResults(results);
        expect(app.results.regions[0].name).toBe('Shan state');
    });
});
