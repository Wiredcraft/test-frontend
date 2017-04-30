define(function(){
	var getData = function(){
		var dataJson = [
			{
				name: "shandong",
				lastInput: "2016-04-21",
				forms: 324456,
				voter: 13425,
				update: "2017-03-22",
				city:[
					{
						name: "jian",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[
							{
								name: "lixia",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							},
							{
								name: "shizhong",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							},
							{
								name: "tianqiao",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							},
							{
								name: "huaiyin",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							}
						]
					},
					{
						name: "qingnao",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[

						]
					},
					{
						name: "yantai",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[

						]
					},
					{
						name: "weihai",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[

						]
					},
					{
						name: "heze",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[
							{
								name: "caoxian",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
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
				city:[
					{
						name: "chengdu",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
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
				city:[
					{
						name: "hangzhou",
						lastInput: "2016-04-21",
						forms: 324456,
						voter: 13425,
						update: "2017-03-22",
						area:[
							{
								name: "xihu",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							},
							{
								name: "shangcheng",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
							},
							{
								name: "xiacheng",
								lastInput: "2016-04-21",
								forms: 324456,
								voter: 13425,
								update: "2017-03-22",
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
