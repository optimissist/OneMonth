/*  1. grab the input */

document.querySelector(".js-go").addEventListener("click", function() {
  var input = document.querySelector(".js-userinput").value;
  // console.log(input);
  // pushToDOM(input);
  searchGiphy(input);
});

document.querySelector(".js-userinput").addEventListener("keyup", function(e) {
  var input = document.querySelector(".js-userinput").value;
  // if the key ENTER is pressed, then execute
  if(e.which === 13) {
    //console.log(input);
    // pushToDOM(input);
    searchGiphy(input);
  }
});

/* 2. do the data stuff with the API */
function searchGiphy (searchQuery) {
  var url = "http://api.giphy.com/v1/gifs/search?api_key=llR6dxK0udVWs1K0BuwpVa0hIuM1TGFx&q=" + searchQuery;

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){

    //target.response is the part of the data that you found in the console you want to look at in this case
  var data = e.target.response;
  //console.log(data);
  pushToDOM(data);

});
}

/* 3. Show me the GIFs */

function pushToDOM(response) {

  // turns json API data into something javascript can parse so you can find the item you need to grab (URL). To find what you need you can go back to the documentation. Data -- images -- fixed height -- url
  var response = JSON.parse(response);

  //var imageURL = response.data;
  //console.log(imageURL);

  var imageURLs = response.data;
  console.log(imageURLs);

  var container = document.querySelector(".js-container");

  // reset the div
  container.innerHTML = "";

  imageURLs.forEach(function(image){

  var src = image.images.fixed_height.url;
  // console.log(src);

  // var container = document.querySelector(".js-container");
  container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">" ;
  //container.innerHTML = container.innerHTML + "<img src=\"" + src + "\">";

  });
}
