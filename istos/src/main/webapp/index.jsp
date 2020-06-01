<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <script src="js/jquery-3.5.0.min.js"></script> <!--Importing the jquery library for the api calls.-->
        <script type="text/javascript" src="js/index.js" defer></script>
        <link rel="stylesheet" type="text/css" href="css/index.css">
    </head>
    <body>
        <div class="grid">
        	<div class = "content">
	        	<p>${feedback}</p>
	        	<form action = "bookmarks">
	    			<input class = "button" type = "submit" value="Go to Bookmarks">
	    		</form>
	    		<form action = "savedata">
	    			<input type = "hidden" name = "movieTitle" id = "movietitle"><br>
	    			<input type = "submit" value="Save Movie" id = "saveButton">
	    		</form>
	            <input id = "searchInput" type="text" placeholder="Search a movie title...">
	            <p id="title"></p>
	            <img id="poster" src="" alt="" width="280" height="280"><br>
	            <button id = 'moreInfo'>Show More</button>
	                <h3>Movie Plot</h3>
	                <p id = "moviePlot"></p>
	            <div id = "moreInfoContainer">
	                <h3>Actors</h3>
	                <p id="actors"></p>
	                <h3>Runtime</h3>
	                <p id = "runtime"></p>
	                <h3>Genre</h3>
	                <p id = "genre"></p>
	                <h3>Metascore</h3>
	                <p id="metascore"></p>
	            </div>
			</div>
			<div class = "login">
				<p><a href="login.jsp">Login</a></p>
				<p><a href="signup.jsp">Sign Up</a></p>
			</div>
        </div>
    </body>
</html>