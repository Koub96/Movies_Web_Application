<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<script src="js/jquery-3.5.0.min.js"></script> <!--Importing the jquery library for the api calls.-->
        <script type="text/javascript" src="js/bookmarks.js" defer></script>
        <link rel="stylesheet" type="text/css" href="css/bookmarks.css">
		<title>My Bookmarks</title>
	</head>
	<body>
		<div class = "grid">
			<form action = "removal">
					<input id = "removeInput" type="text" placeholder="Type a movie to delete..."><br>
					<input type = "hidden" name = "movieTitle" id = "movietitle"><br>
    				<input type = "submit" value="Delete Movie" id = "deleteButton">
    		</form>
    		<p>${feedback}</p>
    	
			<table>
            	<c:forEach var="movie" items="${allMoviesObjects}">
                	<tr>
                    	<td><c:out value="${movie.name}" /></td>
                	</tr>
            	</c:forEach>
        	</table>
        	<div class ="home">
				<p><a href="index.jsp">Home</a></p>
			</div>
        </div>
	</body>
</html>