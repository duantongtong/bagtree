//检验用户名、密码等
function showTips(uid,info){
				// 控制后面的span元素：
				document.getElementById(uid+"span").innerHTML = "<font color='gray'>"+info+"</font>";
			}
			// 判断用户名
			function checkUsername(){
				
				var uValue = document.getElementById("username").value;
				var userSpan = document.getElementById("usernamespan");
			   var reg = /^\d{11}$/;
			   var email =  /^[a-z0-9]\w+@[a-z0-9]{2,3}(\.[a-z]{2,3}){1,2}$/i;
			   if(reg.test( uValue) || email.test(uValue)){
			       //符合规则 
			       userSpan.innerHTML="success".fontcolor("green");
			       
			   }else if(uValue == ""){
					   userSpan.innerHTML="用户名不能为空".fontcolor("red");
			          
					}else{
						
			       //不符合规则
			       userSpan.innerHTML="用户名输入不规范".fontcolor("red");
			      
			   } 
			}
			 //校验密码  6位
		   function checkpassword(){
			
				var upwd = document.getElementById("password").value;
				var pwdSpan = document.getElementById("passwordspan");
			   var reg =/^\w{6,12}$/;
			   if(reg.test( upwd)){
			       //符合规则 
			       pwdSpan.innerHTML="success".fontcolor("green");
			       
			   }else if(upwd == ""){
					   pwdSpan.innerHTML="密码不能为空".fontcolor("red");
			          
					}else{
						
			       //不符合规则
			       pwdSpan.innerHTML="密码输入不规范".fontcolor("red");
			      
			   } 
			}
			 //确认密码
			  function checkrepassword(){
				  var urepwd = document.getElementById("repassword").value;
				var upwd = document.getElementById("password").value;
				
				var repwdSpan = document.getElementById("repasswordspan");
			   if(urepwd == ""){
				   repwdSpan.innerHTML="确认密码不能为空".fontcolor("red");
			       
			   }else if(urepwd!=upwd){
			       
				   //不符合规则
			       repwdSpan.innerHTML="两次密码输入不一致".fontcolor("red");
			      
					}else{ //符合规则 
					       repwdSpan.innerHTML="success".fontcolor("green");
					          
			   } 
			}

//检验验证码
function checkcode(){
				this.init = function (){
					this.ele  = document.getElementById("checkCode");
					this.imgslist = ["../img/0.jpg","../img/11.jpg","../img/12.jpg","../img/13.jpg","../img/4.jpg","../img/5.jpg"]
					this.datelist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
					this.run();
					this.dianji();
				}
				this.dianji = function (){
					this.ele.onclick = function (){
						this.init()
					}.bind(this)
				}
				this.run = function (){
					this.index = Math.floor(Math.random() * 6);
					var i = 4;
					this.date = ""
					for(var j = 0 ; j < 4; j ++){
						this.indexdate = Math.floor(Math.random() * 36);
						this.date += this.datelist[this.indexdate]
					}
					this.ele.style.background = "url(" + this.imgslist[this.index] +")";
					this.ele.innerHTML = this.date;
				}
			}
			function panduan(){
				this.init = function (){
					this.ele  = document.getElementById("checked");
					this.ele1  = document.getElementById("checkCode");
					this.ele2  = document.getElementById("checkedspan");
					this.val = this.ele1.innerHTML;
				    this.last()
				}
				this.last = function (){
						this.ele.oninput = function (){
							if(this.ele.value.length >= 4 ){
							//console.log(this.ele.value.length)
							 if(this.ele.value == this.val){
								this.ele2.innerHTML = "success".fontcolor("green");
							}else{
								this.ele2.innerHTML = "<font color = 'red'>false</font>"
							}
						}
						else{
						this.ele2.innerHTML = "<font color = 'gray'>请输入验证码</font>"
					}
					}.bind(this)
				}
			}