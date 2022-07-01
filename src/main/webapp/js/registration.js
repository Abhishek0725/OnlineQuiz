let userid,username,usertype,email,mob,dob,gender,pass,cpass ;
function registerUser(){
	userid=$("#userid").val();
	username=$("#username").val();
	usertype=$("#usertype").find(":selected").val();
	email=$("#email").val();
	mob=$("#mob").val();
	dob=$("#dob").val();
	gender=$("#gender").find(":selected").val();
	pass=$("#password").val();
	cpass=$("#cpassword").val();	
	if(validateUser()){
		if(pass !== cpass){
			swal("Error","Password and Confirm Password are not match!","error");
			return;
		}
		if(checkEmail()===false)
			return;
			let data={
			userid:userid,
			username:username,
			usertype:usertype,
			email:email,
			mob:mob,
			dob:dob,
			gender:gender,
			pass:pass	
		};
		let xhr=$.post("RegistrationControllerServlet",data,processResponse);
		xhr.fail(handleError);
	}
	
	console.log(`${userid} ${username} ${usertype} ${email} ${mob} ${dob} ${pass} ${cpass} ${gender}`);
}

function processResponse(responseText, textStatus, xhr) {
    let str = responseText.trim();
	console.log("Hello world");
	console.log(str);
    if (str === "success") {
        swal("Success", "Registration done successfylly", "success");
        setTimeout(redirectUser, 3000);
    } else if (str === "uap")
        swal("Error", "Sorry! the userid already present", "error");
    else
        swal("Error", "Registration failed", "error");
}

function handleError(xhr) {
    swal("Error", "Problem in server communicaion:" + xhr.statusText, "error");
}

function validateUser() {
    if (userid === "" || username === "" || pass === "" || cpass === "" || gender === "" || usertype === "" || dob === "" || email === "" || mob === "" || usertype === "") {
        swal("Error", "All fields are mandatory", "error");
        return false;
    }
    return true;
}

function checkEmail() {
    let attheratepos = email.indexOf("@");
    let dotpos = email.indexOf(".");
    if (attheratepos < 1 || dotpos < attheratepos + 2 || dotpos + 2 >= email.length) {
        swal("Error!", "Plsease enter a valid email", "error");
        return false;
    }
    return true;
}


function redirectUser() {
    window.location = "login.html";
}