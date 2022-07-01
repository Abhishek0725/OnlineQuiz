<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
<%
	String userid=(String)session.getAttribute("userid");
	if(userid==null){
		session.invalidate();
		response.sendRedirect("accessdenied.html");
		return;
	}
%>
	<div>
	 <form action="">
        <label for="exam">Exam:</label>
        <input id="exam" type="text"><br>
        <label for="examid">ExamId</label>
        <input type="text" id="examid"><br>
        <label for="tot_ques">Total Question:</label>
        <input type="text" id="tot_ques"><br>
        <label for="tot_marks">Total Marks:</label>
        <input type="text" id="tot_marks"><br>
        <input type="submit" onclick="saveExamDetail()" value="save">
    </form>
    </div>
    <script src="js/addquestion.js"></script>
</body>
</html>