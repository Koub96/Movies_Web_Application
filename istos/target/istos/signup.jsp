<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
         <!--<script src="script.js" defer></script> -->
		 <script src="js/jquery-3.5.0.min.js"></script>
		<script src="js/validations.js" defer></script>
		<script type="text/javascript" src="js/signupvalidations.js" defer></script>
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
			<div id = "signup">
				<h1>Sign Up</h1>
				<div id = "email">
					<label for = "email-input">Enter your Email</label><br>
					<input id = "email-input" type = "text">
				</div>
				<div id = "email-verification">
					<label for = "email-verification-input">Confirm your Email</label><br>
					<input id = "email-verification-input" type = "text"></input>
				</div>
				<div id = "password">
					<p class = "password-requirements">
					Password must be at least 8 characters.
					</p>
					<label for = "password-input">Enter your password</label><br>
					<input id = "password-input" type = "password"></input>
				</div>
				<div id = "password-verification">
					<label for = "password-verification-input">Confirm your password</label><br>
					<input id = "password-verification-input" type = "password"></input>
				</div>
				<button  class = "submit" type="button">Submit</button>
				<p id = "error-message"></p>
				<div class = "info-section">
					<p>Already have an account?</p>
					<a href="login.jsp">Log in here</a><br>
					<a href="index.jsp">Back to Homepage</a>
				</div>
			</div>
		</div>
	</body>
</html>	