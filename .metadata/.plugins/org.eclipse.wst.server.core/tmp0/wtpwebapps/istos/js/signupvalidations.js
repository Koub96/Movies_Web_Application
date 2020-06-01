var confirmedEmail = document.getElementById("email-verification-input"); //email deutero
var confirmedPassword = document.getElementById("password-verification-input"); //password deutero
var errorMsg = document.getElementById("error-message") //the p element under the submit button holding the error messages.



var confirmedEmailValid = false; //tha ginei true otan to confirmed email tou xristi einai sosto
var confirmedPasswordValid = false; //tha ginei true otan to confirmed password tou xristi einai sosto
confirmedEmail.addEventListener('keyup', function() {
	verifyEmail(confirmedEmail.value);
}
);

confirmedPassword.addEventListener('keyup', function() {
	verifyPassword(confirmedPassword.value);
}
);


function verifyEmail(typedEmail){ //checkarei an ta 2 email einai idia
	if(typedEmail == emailInput.value){
		//console.log("Emails match");
		errorMsg.innerHTML = "Emails match!"
		confirmedEmailValid = true;
		isSignUpSubmit(); //checkarei an mporei na kanei submit o xristis
	}else{
		//console.log("Emails dont match");
		errorMsg.innerHTML = "Emails don't match!"
		confirmedEmailValid = false;
		for (var j = 0; j < submitInput.length; j++) {
			submitInput[j].disabled = true; //den mporei na kanei submit mexri na einai sosta ta stixia
		}
	}	
}

function verifyPassword(typedPassword){ //checkarei an ta 2 password einai idia
	if(typedPassword == userPassword.value){
		//console.log("Passwords match");
		errorMsg.innerHTML = "Passwords match!"
		confirmedPasswordValid = true; 
		isSignUpSubmit(); //checkarei an mporei na kanei submit o xristis
	}else{
		//console.log("Passwords don't match");
		errorMsg.innerHTML = "Passwords don't match!"
		confirmedPasswordValid = false;
		for (var j = 0; j < submitInput.length; j++) {
			submitInput[j].disabled = true; //den mporei na kanei submit mexri na einai sosta ta stixia
		}
	}
}

function isSignUpSubmit() {
	if(emailValid && passwordValid && confirmedPasswordValid && confirmedEmailValid){
		for (var j = 0; j < submitInput.length; j++) {
		submitInput[j].disabled = false; //mporei na kanei submit
	}
		
	}
}
	
	