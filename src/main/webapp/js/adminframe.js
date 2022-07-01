let examid,exam,tot_ques,tot_marks;
$("#show_question_details").click(function(){
	console.log("show_question_details");
	$(".mycontainer").css("display","none");
	let data={
		exam:"exam"
	}
	let xhr=$.post("ShowExamDetailControllerServlet",data,function(responseText){
		console.log("Hello How are you");
		console.log(responseText);
		let str=JSON.parse(responseText);
		console.log(str);
		$(".show_exam").html(str);
	});
	xhr.fail(handleError);
	let exam=$("#examlist").find(":selected").val();
	$("#examlist").change(function(){
		data={
			exam:"examid"
		}
		let xhr=$.post("ShowExamDetailControllerServlet",data,function(responseText){
		str=JSON.parse(responseText);
		str1= "<select id='exam'>Select Exam<select>"+str;
		$(".show_exam").append('<span></span>');
		$(".show_exam span").html(str1);
		xhr.fail(handleError);

	});
	});
	let examid=$("#examidlist").find(":selected").val();
	$("#examidlist").change(function(){
		$(".show_exam").css("display","none");
		$(".show_ques").css("display","block");
		$("#exam_name").html(`${exam} (${examid})`);
	})
	

});




function examDetails(){
	examid=$("#examid").val();
	exam=$("#exam").val();
	tot_ques=$("#tot_ques").val();
	tot_marks=$("#tot_marks").val();
	if(isValidate()===true){
		let data={
			examid:examid,
			exam:exam,
			tot_ques:tot_ques,
			tot_marks:tot_marks	
		};
		console.log(`${examid} ${exam} ${tot_ques} ${tot_marks}`);
		let xhr=$.post("ExamDetailControllerServlet",data,processResponse);
		xhr.fail(handleError);
	}
}
function isValidate(){
	if(examid.trim()==="" || exam.trim()==="" || tot_ques.trim()==="" || tot_marks.trim()===""){
		swal("Error","All field are mendatory!!","error");
		return false;
	}
	return true;
}

function processResponse(responseText, textStatus, xhr) {
    let str = responseText.trim();
    if (str === "success") {
        swal("Success", "Registration done successfylly", "success");
        setTimeout(redirectExam, 3000);
    } else if (str === "eap")
        swal("Error", "Sorry! the examId already present", "error");
    else
        swal("Error", "Registration failed", "error");
}

function handleError(xhr) {
    swal("Error", "Problem in server communicaion:" + xhr.statusText, "error");
}
function redirectExam(){
	$(".box").css("display","none");
	let cur_ques=1;
	let addQuestion=`
	 <div class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="border">
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>${exam} (${examid})</h4><span>(<span id="curr_ques"> 1 </span> of ${tot_ques})</span>
                        </div>
                    </div>
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center question-title">
                            <h3 class="text-danger">Q.</h3>
                            <h5 class="mt-1 ml-2"><textarea name="" id="ques" cols="60" rows="2"></textarea></h5>
                        </div>
                        <div class="ans ml-2">
                            <span>(a). </span><input id="op1" type="text">
                        </div>
                        <div class="ans ml-2">
                            <span>(b). </span><input id="op2" type="text">  
                        </div>
                        <div class="ans ml-2">
                            <span>(b). </span><input id="op3" type="text">  
                        </div>
                        <div class="ans ml-2">
                            <span>(d). </span><input id="op4" type="text">  
                        </div><br>
                        <div class="ans ml-2">
                            <label for="ans">Correct Ans:</label> 
                           <select name="" id="ans">
                            <option value=""></option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                            <option value="d">d</option>
                           </select>
                        </div>
                
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button id="prev" class="btn btn-primary d-flex align-items-center btn-danger" type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button id="next" class="btn btn-primary border-success align-items-center btn-success" type="button">Next<i class="fa fa-angle-right ml-2"></i></button></div>
                </div>
            </div>
        </div>
    </div>
	`;
	questionDetail = new Array();
	$(".add_ques").html(addQuestion);
	$("#next").click(function(){
		cur_ques++;
		$("#curr_ques").text(cur_ques);
		let ques=$("#ques").val();
		let op1=$("#op1").val();
		let op2=$("#op2").val();
		let op3=$("#op3").val();
		let op4=$("#op4").val();
		let ans=$("#ans").find(":selected").val() || "";
		if(check(ques,op1,op2,op3,op4,ans)==true){
			questionDetail.push(new QuestionDetails(ques,op1,op2,op3,op4,ans));
			if((cur_ques)===Number(tot_ques)+1){
				swal("All Question are set do you want to submit").then((value)=>{
					$("#curr_ques").text(tot_ques);
					let quesArray={
						data:JSON.stringify(questionDetail)
					};
					let xhr=$.post("Question",quesArray,questionResponse);
					xhr.fail(handleError);
				});
			}
			clearValue();
		}else{
			cur_ques--;
			$("#curr_ques").text(cur_ques);
		}
	});
	console.log(questionDetail);
}
function QuestionDetails(ques,op1,op2,op3,op4,ans){
	this.ques=ques;
	this.op1=op1;
	this.op2=op2;
	this.op3=op3;
	this.op4=op4;
	this.ans=ans;
}

function check(ques,op1,op2,op3,op4,ans){
	if(ques.trim()==="" || op1.trim()===""||op2.trim()===""|| op3.trim()===""||op4.trim()==""|| ans.trim()==""){
		swal("Error","All field are mendatory!!","error");
		return false;
	}
	return true;
}
function clearValue(){
		$("#ques").val("");
		$("#op1").val("");
		$("#op2").val("");
		$("#op3").val("");
		$("#op4").val("");
		$("#ans").removeAttr("selected");

}
function questionResponse(responseText, textStatus, xhr) {
    let str = responseText.trim();
    if (str === "success") {
        swal("Success", "Registration done successfylly", "success");
        setTimeout(redirectExam, 3000);
    } else if (str === "eap")
        swal("Error", "Sorry! the examId already present", "error");
    else
        swal("Error", "Registration failed", "error");
}

function showQuestion(){
	
}