function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}

function findStr(str,n){
	var tmp=0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i)==n) {
			tmp++;
		}
	}
	return tmp; 
}

window.onload=function(){
	var aInput = document.getElementsByTagName("input");
	var oName = aInput[0];
	var pwd = aInput[1];
	var pwd2 = aInput[2];
	var aP = document.getElementsByTagName("p");
	var name_msg = aP[0];
	var pwd_msg = aP[1];
	var pwd2_msg = aP[2];
	var count = document.getElementById("count");
	var aEm = document.getElementsByTagName("em");
	var name_length = 0;

	

	//用户名
	oName.onfocus = function(){
		name_msg.style.display = "block";
	}

	oName.onkeyup = function(){
		count.style.visibility = "visible";
		name_length = getLength(this.value);
		count.innerHTML = name_length + "个字符";
		if(name_length==0){
			count.style.visibility = "hidden";
		}
	}

	oName.onblur = function(){
		//\u4e00-\u9fa5
		var re = /[^\w\u4e00-\u9fa5]/g;

		//不能输入非法字符
		if(re.test(this.value)){
			name_msg.innerHTML = '<i class="err"></i>含有非法字符！'
		}
		//不能为空
		else if(this.value == ""){
			name_msg.innerHTML = '<i class="err"></i>不能为空！'
		}
		//长度超过25个字符
		else if(name_length>25){
			name_msg.innerHTML = '<i class="err"></i>长度超过25个字符！'
		}
		//长度少于6个字符
		else if(name_length<6){
			name_msg.innerHTML = '<i class="err"></i>长度少于6个字符！'
		}
		else{
			name_msg.innerHTML = '<i class="ok></i>OK!';
		}
	}

	pwd.onfocus = function(){
		pwd_msg.style.display = "block";
		pwd_msg.innerHTML = '<i class="ati></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号';
	}

	pwd.onkeyup = function(){
		//大于5字符“中”
		if (this.value.length>5) {
			aEm[1].className = "active";
			pwd2.removeAttribute("disabled");
			pwd2_msg.style.display = "block";
		}else{
			aEm[1].className = "";
			pwd2.setAttribute("disabled","disabled");
			pwd2_msg.style.display = "none";
		}
		//大于10个字符为“强”
		if (this.value.length>10) {
			aEm[2].className = "active";
		}else{
			aEm[2].className = "";
		}
	}

	pwd.onblur = function(){
		var value = this.value;
		var m =findStr(value,value[0]);
		var re_n = /[^\d]/g;
		var re_n = /[^a-zA-Z]/g
		//不能为空
		if (value=="") {
			pwd_msg.innerHTML = '<i class="err"></i>不能为空';
		}
		//不能用相同字符
		else if(m == value.length){
			pwd_msg.innerHTML = '<i class="err"></i>不能用相同字符';
		}
		//不能全为数字
		else if(!re_n.test(value)){
			pwd_msg.innerHTML = '<i class="err"></i>不能全为数字';

		}
		//长度应为6-16个字符
		else if(value.length<6||value.length>16){
			pwd_msg.innerHTML = '<i class="err"></i>长度应为6-16个字符';

		}
		//不能全为字母
		else if(!re_n.test(value)){
			pwd_msg.innerHTML = '<i class="err"></i>不能全为字母';

		}
		else{
			pwd_msg.innerHTML = '<i class="ok"></i>OK!';

		}
	}
	pwd2.onblur = function(){
		if (this.value!=pwd.value) {
			pwd2_msg.innerHTML = '<i class="err"></i>两次输入的密码不一致！！';			
		}
		else{
			pwd2_msg.innerHTML = '<i class="ok"></i>OK';

		}
	}







}