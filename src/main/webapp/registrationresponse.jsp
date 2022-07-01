<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	boolean result=(boolean)request.getAttribute("result");
	boolean userfound=(boolean)request.getAttribute("userfound");
	System.out.println(result);
	System.out.println(userfound);
	if(userfound==true)
    	out.println("uap");
	else if(result==true)
    	out.println("success");
	else
    	out.println("error");
%>