<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        
        <script src="js/jquery-3.5.0.min.js" defer></script>
		<script type="text/javascript" src="js/validations.js" defer></script>
		
		<link rel="stylesheet" type="text/css" href="css/style.css">
		
		<!--APO EDO KAI KATO MEXRI TO TELOS TOU HEAD TA SCRIPT SINDEOUN TI VASI STO FIREBASE -->
		<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js"></script>
		<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-auth.js"></script>
		<script>
		  const projectId = 'projectistos';
			var config = {
			apiKey: 'AIzaSyBoSnauIPrkLDywIzs1iTixvJARR594neM',
			authDomain: `${projectId}.firebaseapp.com`,
			databaseURL: "https://projectIstos.firebaseio.com",
			projectId: projectId,
			storageBucket: `${projectId}.appspot.com`,
			messagingSenderId: '760287494'
		  };
		  firebase.initializeApp(config);
		</script>
	</head>
	<body>
		<div class = "grid">
			<div id = "login">
				<h1>Log In</h1>
				<div id = "email">
					<label for = "email-input">Enter your Email</label><br>
					<input id = "email-input" type = "text">
				</div>
				<div id = "password">
					<label for="password-input">Enter your password</label><br>
					<input id = "password-input" type = "password"> 
				</div>
				<button class = "submit" type="button">Submit</button>
				<p id = "error-message"></p>
				<div class = "info-section">
					<p>Don't have an account?</p>
					<a href="signup.jsp">Sign up here</a><br>
					<a href="index.jsp">Back to Homepage</a>
				</div>
			</div>
		</div>
	</body>
</html>	
	