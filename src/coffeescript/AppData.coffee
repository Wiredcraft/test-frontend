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
        sub_records: [
            id: "00021"
            title: "xichen District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: []
          ,
            id: "00022"
            title: "dongcheng District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: [
                id: "000221"
                title: "congwen Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
              ,
                id: "000222"
                title: "jianguo Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
            ]           
        ]
      ,  
        id: "0003"
        title: "Wuhan State"
        level: "State"
        last_inpot: "2014/10/12"
        form_num: "123,456"
        voter_num: "123,456"
        update: "342,456"
        sub_records: [
            id: "00031"
            title: "Qingshan District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: []
          ,
            id: "00032"
            title: "Hankou District"
            level: "District"
            last_inpot: "2014/12/12"
            form_num: "123,456"
            voter_num: "123,456"
            update: "342,456"
            sub_records: [
                id: "000321"
                title: "hanyang Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
              ,
                id: "000322"
                title: "wudaokou Township"
                level: "Township"
                last_inpot: "2014/12/12"
                form_num: "123,456"
                voter_num: "123,456"
                update: "342,456"
                sub_records: []
            ]           
        ]        
      ,  
        id: "0004"
        title: "Shan State"
        level: "State"
        last_inpot: "2014/10/12"
        form_num: "123,456"
        voter_num: "123,456"
        update: "342,456"
        sub_records: []
      ,  
        id: "0005"
        title: "Shan State"
        level: "State"
        last_inpot: "2014/10/12"
        form_num: "123,456"
        voter_num: "123,456"
        update: "342,456"
        sub_records: []        
    ]