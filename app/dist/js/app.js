var data = {
    "district1": {
        "name": "Shan state",
        "lastInput": 123456,
        "numOfForms": 342456,
        "numOfVoters": 123456,
        "update": 342456,
        "distict": {
            "name": "Aunglan",
            "lastInput": 123456,
            "numOfForms": 342456,
            "numOfVoters": 123456,
            "update": 342456,
            "townships": {}

        }
    }
};
var app = new Vue({
    el: '#content',
    data: data
});

console.log(data);
