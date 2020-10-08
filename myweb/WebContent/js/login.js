//XMLHttpRequest对象
//XMLHttpRequest对象
var xmlHttp;
function CreateXmlHttp() {
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest;

	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// var userName=document.getElementById("userName").nodeValue;
	// var password=document.getElementById("passWord").nodeValue;

}
function ajaxCheckLogin() {

	// 1.创建对象
	CreateXmlHttp();
	// 2.发送请求
	// 2.1
	xmlHttp.open("post", "ajaxCheckLogin.do", true);

	// 2.2设置内容类型编码类型为url的编码格式
	xmlHttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	// 2.3设置请求头
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	var vcode = document.getElementById("vcode").value;
	var date = "userName=" + userName + "&password=" + password + "&vcode="
			+ vcode;
	// console.log(date);
	// 2.4发送请求头
	xmlHttp.send(date);

	// 3. //判断是否初始化完成
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var info = xmlHttp.responseText;
			var obj = JSON.parse(info);

			if (obj.code == 0) {
				window.location.href = "main.jsp";
			} else {
				console.log(2);
				alert(452357);
				document.getElementById("").innerText = obj.info;
			}

		} else {
			console.log(11);
		}
	}

}

function changeCode() {
	var codeImg = document.getElementById("verifyCode").src = "CreateVcodeImageController.do?t="
			+ math.random();
}
function getCookie(c_name){
	//判断document.cookie对象里面是否存有cookie
	if (document.cookie.length>0){
	  c_start=document.cookie.indexOf(c_name + "=");
		//如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
	  if (c_start!=-1){ 
	    c_start=c_start + c_name.length+1 ;
	    c_end=document.cookie.indexOf(";",c_start);
	    if (c_end==-1) c_end=document.cookie.length;
	    return unescape(document.cookie.substring(c_start,c_end));
	    } 
	  }
	return "";
}
function myfunction( ) {
	
		  	 
    console.log(getCookie("userName") && getCookie("password"));
	if (getCookie("userName") && getCookie("password")) {//如果为true
		//需要创建一个user
		//直接调用cookielogin
		
		 document.getElementById("form1").action="cookielogin";
		 console.log(document.getElementById("form1").action);
         //模拟一次点击登录按键
         //然后直接调用点击登录
          var oBtn = document.getElementById('tj');
          oBtn.click();
     }// 判断多选框是否选中

}    


