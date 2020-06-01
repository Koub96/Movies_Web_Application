
var title = document.getElementById("title"); //a p element holding the title of the movie
var poster = document.getElementById("poster"); //the image element
var plotInfo = document.getElementById("moviePlot"); //the text input acting as a search bar.
var input = document.getElementById("searchInput"); //the text input acting as a search bar.
var moreInfoBtn = document.getElementById("moreInfo") //the button that show more info about the movie.
var responseObj; //global variable of the response form the api
var timeout;
var i = 0;

document.getElementById("moreInfoContainer").style.display = "none"


//the p elements that the more info of the movie gets displayed.
pActors = document.getElementById("actors")
pRuntime = document.getElementById("runtime")
pGenre = document.getElementById("genre")
pMetascore = document.getElementById("metascore")

// Add an event listener to monitor changes
input.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    //wait extra 1,2 seconds before making a request to the api with what the user searched.
    timeout = setTimeout(function () {
        console.log('User input: ', input.value);
        apiCall(input.value)
    }, 1200);
});

moreInfoBtn.addEventListener('click',function(){
    if(i == 0){
        document.getElementById("moreInfoContainer").style.display = "inline"
        printMoreInfo()
        moreInfoBtn.innerHTML = "Show Less"
        i = 1
    }else if(i == 1){
        document.getElementById("moreInfoContainer").style.display = "none"
        clearParagraphElements()
        moreInfoBtn.innerHTML = "Show More"
        i = 0;
    }
    
});

//The function that makes the API call.
function apiCall(movie_title){
    //When you make a new api call ,first reset the show more button and the paragraph elements from previous information.
    clearParagraphElements()
    document.getElementById("moreInfoContainer").style.display = "none"
    i = 0
    moreInfoBtn.innerHTML = "Show More"

    $.getJSON('http://www.omdbapi.com/?apikey=ab12310f&t=' + movie_title).then(function(response){ //once we make the call to the api for the Harry Potter title
                                                                                                        //fetch the title and the poster image from the response object.
        console.log(response); //For debug reasons
        responseObj = response; //holding the response object in a global variable to be accesed by other functions with ease.
        printInfo(response) 
    })
}

//This function is responsible for printing to the user all the info about the movie,if a movie was found.
function printInfo(response){
    if(response.Response == "False"){ //if the response is not valid
        title.innerHTML = "No movie was found with that title!" //Print a error message to user.
        plotInfo.innerHTML = "No plot information was found for that movie."
        poster.setAttribute("src","img/noPoster.png") //put a default image.

    }else{ //else if all went fine
        title.innerHTML = response.Title //Print the title to the user.

        if(response.Plot == "N/A"){
            plotInfo.innerHTML = "No plot information was found for that movie." 
        }else{
            plotInfo.innerHTML = response.Plot //Print the plot of the movie to the user.
        }

        if(response.Poster == "N/A"){ //if the response doesnt come with a poster movie image
            poster.setAttribute("src","img/noPoster.png") //then put the default
        }else{
            poster.setAttribute("src",response.Poster) //else put the poster image of the movie
        }
        
    }
}

//A function that gets called when the more Info button is clicked to display more info about the movie.
function printMoreInfo(){
    pActors.innerHTML = responseObj.Actors
    pRuntime.innerHTML = responseObj.Runtime
    pGenre.innerHTML = responseObj.Genre
    pMetascore.innerHTML = responseObj.Metascore
}

//helper method to clear the p elements for the next movie's info to get displayed in.
function clearParagraphElements(){
    pActors.innerHTML = ""
    pGenre.innerHTML = ""
    pRuntime.innerHTML = ""
    pMetascore.innerHTML = ""
}

