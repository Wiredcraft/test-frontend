var _searchArray, dataSource, searchDistrict, searchState, searchTownship;

dataSource = [];

_searchArray = function(dataArray, keywordsArray) {
  return dataArray.filter(function(item) {
    var i, len, rg, word;
    for (i = 0, len = keywordsArray.length; i < len; i++) {
      word = keywordsArray[i];
      rg = new RegExp(word, "i");
      if (item.title.search(rg) < 0) {
        return false;
      }
    }
    return true;
  });
};

searchState = function(dataArray, keywordsArray) {
  return _searchArray(dataArray, keywordsArray);
};

searchDistrict = function(dataArray, keywordsArray) {
  return dataArray.filter(function(item) {
    var matched;
    if (item.sub_records.length === 0) {
      return false;
    }
    matched = _searchArray(item.sub_records, keywordsArray);
    if (matched.length > 0) {
      item.sub_records = matched;
      return true;
    } else {
      return false;
    }
    return true;
  });
};

searchTownship = function(dataArray, keywordsArray) {
  return dataArray.filter(function(item) {
    var district, i, len, matched, ref;
    if (item.sub_records.length === 0) {
      return false;
    }
    ref = item.sub_records;
    for (i = 0, len = ref.length; i < len; i++) {
      district = ref[i];
      if (district.sub_records.length === 0) {
        continue;
      }
      matched = _searchArray(district.sub_records, keywordsArray);
      if (matched.length > 0) {
        district.sub_records = matched;
        return true;
      } else {
        return false;
      }
    }
    return true;
  });
};

module.exports = {
  setDataSource: function(data) {
    return dataSource = data;
  },
  getAllRecords: function() {
    return dataSource;
  },
  searchRecords: function(level, keywords) {
    var data, keywordsArray;
    if (!keywords) {
      return this.getAllRecords();
    }
    level = level || "State";
    keywordsArray = keywords.split(" ");
    data = this.getAllRecords();
    switch (level) {
      case "State":
        return searchState(data, keywordsArray);
      case "District":
        return searchDistrict(data, keywordsArray);
      case "Township":
        return searchTownship(data, keywordsArray);
      default:
        return data;
    }
  }
};
