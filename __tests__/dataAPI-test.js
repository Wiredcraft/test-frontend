jest.dontMock("../toBeTest/utils/dataAPI");

describe("dataAPI", function() {
  var mockData;

  beforeEach(function() {
    mockData = [
        {
          id: "0001",
          title: "Shanghai State",
          level: "State",
          sub_records: [
            {
              id: "00011",
              title: "Jingan District",
              level: "District",
              sub_records: []
            }, 
            {
              id: "00012",
              title: "Pudong District",
              level: "District",
              sub_records: [
                {
                  id: "000121",
                  title: "Lujiazui Township",
                  level: "Township",
                  sub_records: []
                }, {
                  id: "000122",
                  title: "Zhangjiang Township",
                  level: "Township",
                  sub_records: []
                }
              ]
            }
          ]
        },
        {
          id: "0004",
          title: "Shan State",
          level: "State",
          sub_records: []
        }    
    ];
  });

  it("should return matched records (including all their sub_records) when it searches on State level", function() {
    var tool, result1;
    tool = require("../toBeTest/utils/dataAPI");
    tool.setDataSource(mockData);
    result1 = tool.searchRecords("State", "shan");

    expect(result1.length).toBe(2);
  });

  it("should return matched records (including all their sub_records) when it searches on District level", function() {
    var tool, result1;
    tool = require("../toBeTest/utils/dataAPI");
    tool.setDataSource(mockData);
    result1 = tool.searchRecords("District", "pudong");
    
    expect(result1[0].sub_records.length).toBe(1);
    expect(result1[0].sub_records[0].id).toBe("00012");
  });

  it("should return matched records when it searches on Township level", function() {
    var tool, result1;
    tool = require("../toBeTest/utils/dataAPI");
    tool.setDataSource(mockData);
    result1 = tool.searchRecords("Township", "Lujiazui");
    
    expect(result1[0].sub_records.length).toBe(2);
    expect(result1[0].sub_records[1].sub_records[0].id).toBe("000121");
  });    
});
