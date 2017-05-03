require.config({
    paths : {
        "jquery" : "../common/jQuery/jquery-2.1.4.min",
        "data" : "data" 
    }
});

require(["jquery","data"], function(jquery,data){
    $(function(){
    	 init(); //初始化
    })
    function init(){
		showData();//数据显示
		putIconClick();//展开合并开关
		filterEvent(); //过滤筛选
    }
    /*  过滤事件 */
    function filterEvent(){
    	$(".filInput").keyup(function (evnet) {
			if (evnet.keyCode == '13') {
				showData();
			}
		});
    	$(".searchIcon").on('click', function(event) {
    		showData();
    	});
    	$(".filSelect").on('change',function(){
    		showData();
    	})
    	$(".downPng").on('click', function(event) {
    		alert("暂无此操作");
    	});
    }
    /* 获取数据 */
    function showData(){
		var Data = data.getData();
		var keyword = $(".filInput").val();
		var filVal = $(".filSelect").val();
		renderData(filVal,keyword,Data)   	
	}
	/* 数据渲染 */
	function renderData(filVal,keyword,data){
		var html = renderThead();						
		$(data).each(function(index1,content){ //省份渲染
			if(isShow(filVal,"city") && blurrySelect(content.name,keyword)){
				html += renderTr(content,"","city","levelone");
			}	
			$(content.city).each(function(index2,City){ //城市渲染
				if(isShow(filVal,"area") && blurrySelect(City.name,keyword)){
					html += renderTr(City,content.name,"area","leveltwo");
				}
				$(City.area).each(function(index3,Area){ //区域渲染
					if(blurrySelect(Area.name,keyword)){
						html += renderTr(Area,City.name,"","levelthree");
					}
				})	
			})
		})
		$(".table").html(html);
	}
	/* 数据渲染一行 */
	function renderTr(data,parent,children,level){
			var html = '<tr parent="'+ parent +'" name="'+ data.name +'" class="'+ level  +'">';
				html += '<td  class="tdFir">';
				html += '<span class="initials">'+ data.name.slice(0,1) +'</span>';
				html += '<span class="name">'+ data.name +'</span>'
				html += '<img src="img/down.png" class="downPng" alt="">'
			if(children != "" && data[children].length != 0){
				var Children = data[children]; 
				var showChild = "";
				if(children == "city"){showChild = "Districts"}else{showChild="Townships"}
				html += '<span put="yes" class="tip">&nbsp;'+Children.length + "" + showChild + '<img src="img/down.ico" class="plusAnddown" alt="" />';	
			}
			html += '<td>'+ data.lastInput +'</td>';
			html += '<td>'+ data.forms +'</td>';
			html += '<td>'+ data.voter +'</td>';
			html += '<td>'+ data.update +'</td>';
			html += "</tr>";
			return html;
	}
	/* 表头渲染 */
	function renderThead(){
		thead = '<tr class="trFir">'
    			 + '<th>Region</th>'
    			 + '<th>Last input</th>'
    			 + '<th>Number of forms</th>'
    			 + '<th>Number of voters</th>'
    			 + '<th>Updates</th>'
    			 + '</tr>';
		return thead;
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
	/* 下拉框显示 */
	function isShow(filVal,child){
		if(filVal == "" || filVal == null){
			return true;
		}else if(filVal == "Districts"){
			if(child == "area" || child == ""){
				return true;
			}else{
				return false;
			}
		}else if(filVal == "Townships"){
			if(child == ""){
				return true;
			}else{
				return false;
			}
		}
	}
	/*  文本框关键字查询 */
	function blurrySelect(name,keyword){
		if(keyword == "" ||keyword == null){
			return true
		}else{
			var reg = new RegExp(keyword);
			return reg.test(name);
		}
	}
})

