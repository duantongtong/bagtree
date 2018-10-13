//鼠标移入A标签图片切换
$("#main>#main1>#main2>#main3>span").on("mouseenter",function (e){ 
var i =  $(e.target).index()
	$(e.target).css({
		"background" : "#a28573" 
	})
	$(e.target).siblings().css({
		"background" : "#866857" 
	})
$("#main>#main1>#main2>#main3>#ad>img").eq(i).addClass("show").siblings().removeClass("show")
})
$("#maintwo>#main1>#main2>#main3>span").on("mouseenter",function (e){ 
var i =  $(e.target).index()
	$(e.target).css({
		"background" : "#a28573" 
	})
	$(e.target).siblings().css({
		"background" : "#866857" 
	})
$("#maintwo>#main1>#main2>#main3>#ad>img").eq(i).addClass("show").siblings().removeClass("show")
})
$("#mainthree>#main1>#main2>#main3>span").on("mouseenter",function (e){ 
var i =  $(e.target).index()
	$(e.target).css({
		"background" : "#a28573" 
	})
	$(e.target).siblings().css({
		"background" : "#866857" 
	})
$("#mainthree>#main1>#main2>#main3>#ad>img").eq(i).addClass("show").siblings().removeClass("show")
})
$("#mainfour>#main1>#main2>#main3>span").on("mouseenter",function (e){ 
var i =  $(e.target).index()
	$(e.target).css({
		"background" : "#a28573" 
	})
	$(e.target).siblings().css({
		"background" : "#866857" 
	})
$("#mainfour>#main1>#main2>#main3>#ad>img").eq(i).addClass("show").siblings().removeClass("show")
})
//商品图片变透明 
$("#main4>img").on("mouseenter",function (){
				//console.log($(this))
				$(this).stop().animate({
					"opacity" : "0.3"
				},500).siblings().css({
						"opacity" : "1"
					})
				
				setTimeout(function (){
					$(this).animate({
						"opacity" : "1"
					},500)
				}.bind(this),500)
			})
//全部商品列表定位
var float_top=  $(".t").height()
			var float_leftdis= $(".t").offset().left  
			console.log(float_top,float_leftdis)
			$("#float_left").css({
				"left" :float_leftdis,
				"top" :float_top,
			})
//左侧楼梯效果
 $(window).scroll(function (){
				//console.log($("body,html").scrollTop())
				if($("body,html").scrollTop() >= 682){
					$("#stairway").slideDown()
					for(var i = 0; i < $("#stairway>li").length; i ++){
						if($("body,html").scrollTop() >= 682 + i*560){
							$("#stairway>li").eq(i).css({
								backgroundPosition : 0 + " " + -30 + "px",	
							}).siblings().css({
								backgroundPosition : 0 + " " + 0,	
				})
						}
					}
				}else{
					$("#stairway").slideUp()
				}
			})
			$("#stairway>li").on("click",function (){
				$(this).css({
					backgroundPosition : 0 + " " + -30 + "px",	
				}).siblings().css({
					backgroundPosition : 0 + " " + 0,	
				})
			})