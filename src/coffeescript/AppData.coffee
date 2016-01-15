module.exports =
  init: ->
    localStorage.clear()
    localStorage.setItem "records", JSON.stringify [
        id: "0001"
        title: "Shanghai State"
        level: "State"
        last_inpot: "2014/12/12"
        form_num: "123,456"
        voter_num: "123,456"
        update: "342,456"
        sub_records: [
            id: "00011"
            title: "Jingan District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: []
          ,
            id: "00012"
            title: "Pudong District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: [
                id: "000121"
                title: "Lujiazui Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
              ,
                id: "000122"
                title: "Zhangjiang Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
            ]           
        ]
      ,  
        id: "0002"
        title: "Beijing State"
        level: "State"
        last_inpot: "2014/10/12"
        form_num: "123,456"
        voter_num: "123,456"
        update: "342,456"
        sub_records: []

    ]