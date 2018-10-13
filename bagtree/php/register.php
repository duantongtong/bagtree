<?php
	//引入外部公共php文件
	include "public.php";
	//接收客户端传递的数据
	$uname = $_POST['username'];
	$upwd = $_POST['password'];
	$repassword = $_POST['repassword'];
//	echo $uname,$upwd;

	//操作数据库
	
	//4.编写sql语句
	$sql = "INSERT INTO `user`(`Username`, `Upassword`, `repassword`) VALUES ('$uname','$upwd','$repassword')";
	//5.执行sql语句
	$row = mysql_query($sql);
//	echo $row;
	//判断是否注册成功
	if($row){
		echo "<script>alert('注册成功');location.href='../html/login.html';</script>";
	}else{
		echo "<script>alert('注册失败');location.href='../html/register.html';</script>";
	}
?>