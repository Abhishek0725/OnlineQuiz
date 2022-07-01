function saveExamDetail(){
	exam=$("#exam").val();
	examid=$("#examid").val();
	tot_ques=Number($("#tot_ques").val());
	tot_marks=Number($("#tot_marks").val());
	if(isValidate()){
		let data={
			exam:exam,
			examid:examid,
			tot_ques:tot_ques,
			tot_marks:tot_marks
		};
		let xhr=$.post("ExamDetailServlet",data,processResponse);
		xhr.fail(handleError);
	}
}

function handleError(xhr){
	swal("Error","Problem in Server Communication: "+xhr.statusText,"error");
}
function processResponse(responseText,textStatus,xhr){
	let str=responseText.trim();
}