var emailInput = document.getElementById("email-input"); //to email pou exei valei o xristis
var submitInput = document.getElementsByClassName("submit"); //to koumpi submit
var userPassword = document.getElementById("password-input"); //to password pou exei valei o xristis
var errorMsg = document.getElementById("error-message") //the p element under the submit button holding the error messages.
 
var emailValid = false; //otan to email toy xristi einai valid tha ginei true
var passwordValid = false; //otan to password toy xristi einai valid tha ginei true

for (var j = 0; j < submitInput.length; j++) { //xriazete for giati exoume class kai oxi id
	submitInput[j].disabled = true; //den mporei na kanei submit mexri na einai sosta ta stixia
}
emailInput.addEventListener('keyup', function () {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(emailInput.value).toLowerCase())){ //an einai valid to email
		//console.log("Email is ok"); 
		errorMsg.innerHTML = "Email is ok!"
		emailValid = true;
		isSubmit(); //checkarei an mporei na kanei submit o xristis
		
	}else{
		//console.log("incorrect email"); //pros to paron apla grafei sti konsola
		errorMsg.innerHTML = "Incorrect email!"
		emailValid = false;
		for (var j = 0; j < submitInput.length; j++) {
			submitInput[j].disabled = true; //den mporei na kanei submit mexri na einai sosta ta stixia
		}
	}

});	

for (var i = 0; i < submitInput.length; i++) {
	submitInput[i].addEventListener('click',function(){
		errorMsg.innerHTML = "" //before making the sumbit again,clear the error message if there is any.
		submitToDB(); //kanei submit sti vasi (akoma apla kanei console.log)
	});	
}	


$('#password-input').on('blur', function(){  //checkarei an to password einai pano apo 8 xaraktires (jquery)
if($(this).val().length >= 8){
  //console.log("password is long enough");
  errorMsg.innerHTML = "Password is long enough"
  passwordValid = true;
  isSubmit(); //checkarei an mporei na kanei submit o xristis
  
}else{
	//console.log("You need a longer password");
	errorMsg.innerHTML = "You need a longer password"
	passwordValid = false;
	for (var j = 0; j < submitInput.length; j++) {
		submitInput[j].disabled = true; //den mporei  na kanei submit mexri na einai sosta ta stixia
	}
}
});

function isSubmit(){
	if (document.location.href.match(/[^\/]+$/)[0] == "login.jsp"){
		if(emailValid && passwordValid) {
			for (var j = 0; j < submitInput.length; j++) {
				submitInput[j].disabled = false; //mporei na kanei submit
			}
			console.log("success");
		}
	}	
}	


function submitToDB(){
	const userEmail = document.getElementById("email-input").value;
	const userPassword = document.getElementById("password-input").value;
	if (document.location.href.match(/[^\/]+$/)[0] == "login.jsp"){ //an prospathei na kanei login
		firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(res =>{
			document.getElementById("error-message").innerHTML = ""; //xriazete oste na figi kapoio error apo tin othoni tou xristi an simplirose meta to error sosta ta stixia
			window.location.href = 'loggedin.jsp#' + res.user.email; //redirect se loggedin page
		}, err => {
			document.getElementById("error-message").innerHTML = "Incorret login info."; //an evale lathos stixia
		});
	}
	else if (document.location.href.match(/[^\/]+$/)[0] == "signup.jsp") { //an prospathei na kanei signup
		firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(res => {
			window.location.href = 'loggedin.jsp#' + res.user.email; //redirect se loggedin page
		}).catch(error => {errorMsg.innerHTML = error.message }); //catching the 'email already in use' error
	}
}
		

	

