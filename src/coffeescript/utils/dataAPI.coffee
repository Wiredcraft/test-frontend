module.exports =

  getAllRecords: ->
    JSON.parse localStorage.getItem("records")