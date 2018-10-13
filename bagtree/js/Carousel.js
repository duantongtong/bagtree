function LunBo(){
				this.index = 0;
			}
			$.extend(LunBo.prototype,{
				init : function (){
					clearInterval(this.id)
					 this.id = setInterval(function (){
						 this.start()
						 this.olstart()
					 }.bind(this),3000)
					 this.stop();
					 this.dianji();
				},
				start : function (){
					this.index ++;
					if(this.index >= 3){
						this.index = 0;
					}
					$("#banner>ul>li").eq(this.index).addClass("run")
					.siblings().removeClass("run")
				},
				stop : function (){
					$("#banner").on("mouseenter",function (){
						clearInterval(this.id)
					}.bind(this))
					$("#banner").on("mouseleave",function (){
						this.init()
					}.bind(this))
				},
				dianji : function (){
					that = this;
					$("#banner>ol").on("click","li",function (e){
						$(e.target).addClass("ranse")
						.siblings().removeClass("ranse")
						//console.log($("ol>li").eq(0))
// 						for(var i = 0 ; i < $("ol>li").length ; i ++){
// 							if($("ol>li").eq(i) == this){
// 								console.log(i)
// 							}
// 						}
                       // console.log($(this).index())
					    that.index = $(this).index()
						$("#banner>ul>li").eq(that.index).addClass("run")
						.siblings().removeClass("run")
					})
				},
				olstart : function (){
						$("#banner>ol>li").eq(this.index).addClass("ranse")
						.siblings().removeClass("ranse")
				}
			})
	