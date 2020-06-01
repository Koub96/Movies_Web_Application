var movieNameParameter = document.getElementById("movietitle") //a hidden field that takes the name of the movie to be saved and sends it as request parameter.
var deleteButton = document.getElementById("deleteButton")
var input = document.getElementById("removeInput"); //the text input acting as a search bar.
var timeout;


// Add an event listener to monitor changes
input.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    //wait extra 1,2 seconds before making a request to the api with what the user searched.
    timeout = setTimeout(function () {
        console.log('User input: ', input.value);
        movieNameParameter.value = input.value
    }, 1000);
});


deleteButton.addEventListener('click',function(){ //when the save button is clicked 
	if(movieNameParameter.value.trim() == ""){ //check if no movie was selected to be saved.
		return
	}
})