<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
		<table>
        <tr><td><label for="question">Question</label></td></tr>
        <tr>
          <th colspan="2"><textarea name="" id="question" cols="45" rows="2"></textarea></th>
        </tr>
        <tr>
          <td>
              <label for="op1">a. </label>
              <input type="text" id="op1">
            </td>
          <td>
              <label for="op2">a. </label>
              <input type="text" id="op2">
            </td>
        </tr>
        <tr>
          <td>
              <label for="op3">a. </label>
              <input type="text" id="op3">
            </td>
          <td>
              <label for="op4">a. </label>
              <input type="text" id="op4">
            </td>
        </tr>
        <tr>
            <td>
                <label for="ans">Correct Option:</label>
                <select name="" id="ans" >

                <option value=""></option>
                <option value="a">a</option>
                <option value="a">b</option>
                <option value="a">c</option>
                <option value="a">d</option>
            </select>
        </td>
        </tr>
      </table>
      <button>Save</button>
      <button>Add More</button>
	</div>
</body>
</html>