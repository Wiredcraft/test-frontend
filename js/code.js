// Adding the town files
  // $(function(){
  //   var a = [[1,1], [4,1], [4,1], [4,1], [4,1], [4,1], [4,1]];
  //   $(".table_content:first").text(" ");
  //   $.each(a, function(index, value){
  //     $(".table_content:first").append($("<div>", {"class":"table_row"}).load("snippets/state.html"));
  //     for(var i = 0; i < value[0]; i++){
  //       $(".table_content:first").append($("<div>", {"class":"table_row_district"}).load("snippets/district.html"));
  //       // for(var j = 0; j < value[1]; j++ ){
  //         $(".table_content:first").append($("<div>", {"class":"table_row_township"}).load("snippets/township.html"));
  //       // };
  //     };
  //     });
  // });
  // $(function(){
  //   var a = [[1,1], [4,1], [4,1], [4,1], [4,1], [4,1], [4,1]];
  //   $.each(a, function(index, value){
  //     $(".district_number:eq("+ index +")").text(value[0]);
  //   });
  // });
//Enabling the dropdown
  $(function(){
    // Dropdwon for states
    $(".table_row_state_select").click(function(){
      var parent_this = $(this).parent().parent().parent();
      // console.log(parent_this);
      next_district = parent_this.nextUntil(".table_row", ".table_row_district");
      next_township = parent_this.nextUntil(".table_row", ".table_row_township");
      // console.log(next_district);
      // Dropdown enabled sign =
      if($(this).attr("drop_down") !== "enabled" ){
        $(this).attr("drop_down", "enabled");
        next_district.css("display", "inline-grid");
        //Change the sign to -
        $(this).children().last().html("<b>-</b>");
      }
      // Dropdown disabled sign +
      else {
        $(this).children().last().html("<b>+</b>");
        $(this).attr("drop_down", "disabled");
        $.each(next_district, function(index){
          var district_trigger = $(this).children().first().children().last().children().last();
          district_trigger.attr("drop_down", "disabled");
          district_trigger.children().last().html("<b>+</b>");
        });
        next_district.css("display", "none");
        next_township.css("display", "none");
      };
    });
    //Dropdown for Townships
    $(".table_row_district_select").click(function(){
      var parent_this = $(this).parent().parent().parent();
      console.log(parent_this);
      next_township = parent_this.nextUntil(".table_row_district", ".table_row_township");
      console.log(next_township);

      if($(this).attr("drop_down") !== "enabled" ){
        $(this).attr("drop_down", "enabled");
        next_township.css("display", "inline-grid");
        //Change the sign to -
        $(this).children().last().html("<b>-</b>");
      } else {
        $(this).children().last().html("<b>+</b>");
        $(this).attr("drop_down", "disabled");
        next_township.css("display", "none");
      };
    });
  });

  //Search function
  $(function(){
    $("#search_button").click(function(){
      //Change the button to x
      $("#search_button").attr("id", "reset_button");
      $("#reset_button").html("<span>X</span>");
      $("#reset_button").click(function(){
        location.reload();
      });
      // $(".table_row_district_select").click();
      //Get the Filter
      var filter = $("#search_select option:selected").text();
      console.log(filter);
      //Get the search string
      var search_string = $("#search_input").val();
      console.log(search_string);
      //search
      function search_data(mode, search_string){
        console.log(".table_row_data_" + mode);
        $.each($(".table_content:first").find(".table_row_data_" + mode), function(index){
          value = $(this).text();
          console.log(value);
          console.log(search_string);
          if (value.trim() == search_string){
            $(this).parent().css("display", "inline-grid");
          } else{
            $(this).parent().css("display", "none");
          };
        });
      };
      switch (filter) {
        case "Region":
          console.log("Region selected");
          // var values = [];
          $.each($(".table_content:first").find(".table_row_title_content"), function(index){
            value = $(this).children().eq(1).text();
            // values.push(value);
            if (value == search_string){
              $(this).parent().parent().css("display", "inline-grid");
            } else{
              $(this).parent().parent().css("display", "none");
            };
          });
          // console.log(values);

          break;
        case "Last Input":
          console.log("LI selected");
          search_data(1, search_string);
          break;

        case "Number of Forms":
          console.log("NF selected");
          search_data(2, search_string);
          break;

        case "Number of Voters":
          console.log("NV selected");
          search_data(3, search_string);
          break;

        case "Update":
          console.log("U selected");
          search_data(4, search_string);
          break;

        default:
          console.log("Illegal Filter");
      };

    });
  });
