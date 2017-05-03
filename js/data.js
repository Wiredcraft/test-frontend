define(function(){
	var getData = function(){
		var dataJson = [
			{
				name: "shandong", 
				lastInput: "2016-04-21",
				forms: 324456,
				voter: 13425,
				update: "2017-03-22",
				level: "levelone",
				city:[
					{
						name: "jian",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[
							{
								name: "lixia",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							},
							{
								name: "shizhong",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							},
							{
								name: "tianqiao",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							},
							{
								name: "huaiyin",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							}
						]
					},
					{
						name: "qingnao",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[

						]
					},
					{
						name: "yantai",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[

						]
					},
					{
						name: "weihai",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[

						]
					},
					{
						name: "heze",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[
							{
								name: "caoxian",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							}
						]
					}
				]
			},
			{
				name: "sichuan",
				lastInput: "2016-04-21",
				forms: 324456,
				voter: 13425,
				update: "2017-03-22",
				level: "levelone",
				city:[
					{
						name: "chengdu",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[

						]
					}
				]
			},
			{
				name: "zhejiang",
				lastInput: "2016-04-21",
				forms: 324456,
				voter: 13425,
				update: "2017-03-22",
				level: "levelone",
				city:[
					{
						name: "hangzhou",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						level: "leveltwo",
						area:[
							{
								name: "xihu",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							},
							{
								name: "shangcheng",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							},
							{
								name: "xiacheng",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
								level: "levelthree"
							}
						]
					}
				]
			}
		]
		return dataJson;
	}

	return {
		getData: getData
	}
})
