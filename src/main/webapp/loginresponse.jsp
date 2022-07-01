<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String userid=(String)request.getAttribute("userid");
	String username=(String)request.getAttribute("username");
	String usertype=(String)request.getAttribute("usertype");
	if(userid != null && username !=null && usertype!=null){
		HttpSession sess = request.getSession();
		sess.setAttribute("userid", userid);
		sess.setAttribute("username",username);
		String url=null;
		if(usertype.equalsIgnoreCase("admin")){
			url="AdminControllerServlet;jsessionid="+sess.getId();
		}else if(usertype.equalsIgnoreCase("teacher")){
			url="TeacherControllerServlet;jsessionid="+sess.getId();
		}else{
			url="StudentControllerServlet;jsessionid="+sess.getId();
		}
		out.println(url);
	}else{
		out.println("error");
	}
%>