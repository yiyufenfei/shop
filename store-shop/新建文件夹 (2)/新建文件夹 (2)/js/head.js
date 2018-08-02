// JavaScript Document
//获取路径传的参数
function GetQueryString(name) {  
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
     var r = window.location.search.substr(1).match(reg); 
     if (r != null){
	     return unescape(r[2]);
	 }
      return null;   
}   

function GetRequest(){ 
	var url = location.search; //获取url中"?"符后的字串
	url=decodeURI(url);
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) 
	var str = url.substr(1); 
	strs = str.split("&"); 
	for(var i = 0; i < strs.length; i ++){ 
	   theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
	}
	return theRequest; 
}  

 $(function(){
	var Request = new Object(); 
    Request = GetRequest();
	
	var page=Request["page"];
	var username=Request["username"];

	if(page!=null)
	{
		$(".head_menu ul li").removeClass("li_hover");
		$(".head_menu ul li").eq(parseInt(page)).addClass("li_hover");
		
	}
	//var index=$(".head_menu ul li[class='li_hover']").index();
	var index=parseInt(page);

	<!--文本框获得焦点-->
	$(".main_search .input_01").focus(function(){
			if($(this).val()=="搜服务，搜商品，搜租房信息！"){
				$(this).val("");
				$(this).css("color","#666");
			}
			
	});
	<!--文本框失去焦点-->
	$(".main_search .input_01").blur(function(){
		if($(this).val()==""){
			 $(this).val("搜服务，搜商品，搜租房信息！");
			 $(this).css("color","#999");
		}
	});	
	
	<!--搜索按钮的移上移出事件-->
	$(".main_search .input_02").hover(
	   function(){
		   $(this).css("background-color","#ff7f00");
	   },
	   function(){
		   $(this).css("background-color","#ff6000");
	   }
	);
	
	<!--导航条点击事件-->
	/*$(".head_menu ul li").click(
	   function(){
		   index=$(this).index();
		   $(this).addClass("li_h");
		   $(".head_menu ul li").not(this).removeClass("li_h");
		   <!--$(".head_menu ul li").eq(index).css("background","url(image/menu_hover_bg.png) no-repeat");-->
	   }
	);*/
	
	<!--导航条的移上移出事件-->
	$(".head_menu ul li").hover(
	   function(){
		   $(".head_menu ul li").eq(index).removeClass("li_hover");
		   $(this).addClass("li_hover");
	   },
	   function(){
		   $(this).removeClass("li_hover");
		   $(".head_menu ul li").eq(index).addClass("li_hover");
	   }
	);
});