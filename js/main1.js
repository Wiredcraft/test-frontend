
require.config({
    paths : {
        "jquery" : "../common/jQuery/jquery-2.1.4.min",
        "data" : "data",
        "Handlebars" :"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.7/handlebars.min"
    }
});

require(["jquery","data","Handlebars"], function(jquery,data,Handlebars){
    $(function(){
    	renderData();//数据渲染
    	putIconClick(); //合并收起控制
    	filterCondition();//条件查询
    })
    //条件查询
    function filterCondition(){
    	$(".filSelect").on('change',function(){
    		renderData();
    	});
    	$(".searchIcon").on('click',function(){
    		renderData();
    	});
    	$(".filInput").keyup(function (evnet) {
			if (evnet.keyCode == '13') {
				renderData();
			}
		});
    }
    //数据渲染
    function renderData(){
    	$(".tbody").html("");
    	//过滤
    	Handlebars.registerHelper("filterCondition",function(filType,nowVal,options){
            var filVal = $(".filSelect").val();
			var keyword = $(".filInput").val();
			if((filVal == "" || filType == filVal) && blurrySelect(nowVal,keyword)){
				 return options.fn(this);
			}
         });
    	//名称一列
		Handlebars.registerHelper('nameTd', function(index,num) {
		  return new Handlebars.SafeString( 
		    "<span class='initials'>" + this.name.slice(0,1) +"</span>"+
		    "<span class='name'>"+ this.name +"</span>"+
		    "<img src='img/down.png' class='downPng' alt=''>"
		  );
		});
		//名称td中的标签
		Handlebars.registerHelper('spanTag', function() {
			var spanTag = "";
			if(this["level"] == "levelone" && this["city"].length != 0){
				spanTag = '<span put="yes" class="tip">&nbsp;'+this["city"].length + 'Districts<img src="img/down.ico" class="plusAnddown" alt="" />';
			}else if(this["level"] == "leveltwo" && this["area"].length != 0){
				spanTag = '<span put="yes" class="tip">&nbsp;'+this["area"].length + 'Townships<img src="img/down.ico" class="plusAnddown" alt="" />';
			}
		  return new Handlebars.SafeString( 
		    spanTag
		  );
		});
		var moudle = getModule();
		var DataList={Data:data.getData()};
    	var template = Handlebars.compile(module);
		$(".tbody").html(template(DataList));
    }
    /* 获取模板 */
    function getModule(filVal){
    	var _tr = 		"<td class='tdFir'>{{nameTd}}{{spanTag}}</td>"+
						"<td>{{lastInput}}</td>"+
						"<td>{{forms}}</td>"+
						"<td>{{voter}}</td>"+
						"<td>{{update}}</td>"+
						"</tr>";
		return module = "{{#each Data}}"+ //省
						"{{#filterCondition '' name}}<tr class='{{level}}' parent='' name='{{name}}'>"+ _tr + "{{/filterCondition}}"+
						"{{#each city}}"+ //市
						"{{#filterCondition 'Districts' name}}<tr class='{{level}}' parent='{{../name}}' name='{{name}}'>"+  _tr + "{{/filterCondition}}"+
						"{{#each area}}"+ //区
						"{{#filterCondition 'Townships' name}}<tr class='{{level}}' parent='{{../name}}' name='{{name}}'>"+  _tr + "{{/filterCondition}}"+
						"{{/each}}"+
						"{{/each}}"+
						"{{/each}}";
    }
	/* 列表显示开关 */
	function putIconClick(){
		$(".table").on('click', '.tip', function(event) {
			var $this = $(this);
			var name =$(this).parent().parent().attr("name");
			if($this.attr("put") == "yes"){
				$this.attr("put","no");
				$this.find("img").attr("src","img/plus.ico");
				var $children = $("tr[parent='"+name+"']");
				$children.hide(100);
				$children.each(function(index,child){
					$(child).find('.tip').attr("put","no");
					$(child).find(".tip img").attr("src","img/plus.ico");
					$("tr[parent='"+$(child).attr("name")+"']").hide(100);
				});
			}else{
				$this.attr("put","yes");
				$this.find("img").attr("src","img/down.ico");
				$("tr[parent='"+name+"']").show(100);
			}
		});
	}
	/*  文本框关键字查询 */
	function blurrySelect(name,keyword){
		if(keyword == "" ||keyword == null){
			return true;
		}else{
			var reg = new RegExp(keyword);
			return reg.test(name);
		}
	}
})

