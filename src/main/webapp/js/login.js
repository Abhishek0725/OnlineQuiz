let userid,password;
$.urlParameters = function(params) {
  	var results = new RegExp("[?&]" + params + "=([^&#]*)").exec(
    	window.location.href
  	);
  	return results ? decodeURI(results[1]) : null;
	};

function loginUser(){	
	console.log("Abhishek");
	userid=$("#userid").val();
	password=$("#password").val();
	console.log(`${userid} ${password}`);
	usertype=$.urlParameters("usertype");
	console.log(`${usertype}`);
	if(isValidate()){
		let data={
			userid:userid,
			password:password,
			usertype:usertype	
		};
		console.log(`${userid} ${password} ${usertype}`);
		let xhr=$.post("LoginControllerServlet",data,processResponse);
		xhr.fail(handleError);
	}
	
}

function isValidate(){
	if(userid.trim() ==="" || password.trim()===""){
		swal("Access Denied","Username or Password Requierd","error");
		return false;
	}
	return true;
}

function processResponse(responseText,textStatus,xhr){
	let str=responseText.trim();
	if(str==="error"){
		swal("Access Denied","Please Enter valid Userid/password","error");
	}else if(str.indexOf("jsessionid")!=-1){
		swal("Success","Login Successfully","success").then((value)=>{
			window.location=str;
		});
	}else{
		swal("Error","Some Problem Occured","error");
	}
}

function handleError(xhr){
	swal("Error","Problem in Server Communication: "+xhr.statusText,"error");
}
