<?php
	include "public.php";
	//接收客户端传递的数据
	$uname = $_POST['username'];
	$upwd = $_POST['password'];
	
	//操作数据库——4.编写sql语句
	$sql = "SELECT * FROM `user` where Username='$uname'";
	//5.执行sql语句
	$set = mysql_query($sql); //返回的是数据集
//	echo $set;
	//转为数组
	$arr = mysql_fetch_array($set);
//  print_r($arr);
	//判断用户名是否存在，如果存在，判断密码是否相同
	//echo $arr['uname'];
	if($arr['Username'] == $uname){
		if($arr['Upassword'] == $upwd){
			echo "<script>alert('登录成功');location.href='../html/index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='../html/login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在');location.href='../html/login.html';</script>";
	}
?>