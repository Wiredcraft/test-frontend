dataSource = [];

_searchArray = (dataArray, keywordsArray) ->
  dataArray.filter (item) ->
    for word in keywordsArray
      rg = new RegExp(word, "i")
      if (item.title.search(rg) < 0)
        return false

    return true

searchState = (dataArray, keywordsArray) ->
  _searchArray(dataArray, keywordsArray)

searchDistrict = (dataArray, keywordsArray) ->
  dataArray.filter (item) ->
    if item.sub_records.length is 0
      return false

    matched = _searchArray(item.sub_records, keywordsArray)
    if matched.length > 0
      item.sub_records = matched
      return true
    else
      return false  
        
    return true

searchTownship = (dataArray, keywordsArray) ->
  dataArray.filter (item) ->
    if item.sub_records.length is 0
      return false

    for district in item.sub_records
      if district.sub_records.length is 0
        continue

      matched = _searchArray(district.sub_records, keywordsArray)

      if matched.length > 0
        district.sub_records = matched
        return true
      else
        return false  
        
    return true

module.exports =
  setDataSource: (data) ->
    dataSource = data

  getAllRecords: ->
    dataSource

  searchRecords: (level, keywords) ->
    if !keywords
      return this.getAllRecords()

    level = level || "State"
    keywordsArray = keywords.split " "
    data = this.getAllRecords()

    switch level

      when "State"
        searchState data, keywordsArray

      when "District"
        searchDistrict data, keywordsArray

      when "Township"
        searchTownship data, keywordsArray

      else
        data
