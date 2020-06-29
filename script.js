'use strict'



let counter = 0;

function getCat(){
  // let apiKey = `313fc8ff-b940-48ec-8065-9bf9be53f55a`;
  let url =  `https://api.thecatapi.com/v1/images/search`
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayCat(responseJson))
  
}

function displayCat(responseJson){
  let source = responseJson[0].url;
  $('#catPic').attr('src' , source);
}

function watchForm(){
  
  let url = `https://cat-fact.herokuapp.com/facts`;
  $('#button').click(e => {
    getCat();
    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))   
  })
}

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }


function displayResults(responseJson){
  let random = Math.floor((Math.random() * 118) + 3);
  console.log(random);
  if(counter === 118){
    $('#text').text(`Fresh out of facts :(`)
    $('#buttonDiv').html(`<button type="button">
      <a href='https://jesterfs.github.io/CatFacts/'>Refresh Page</a>
      </button>`)
  } else {
    $('#text').text(responseJson.all[random].text);
    $('#button').text(`Gimme more facts!`);
  }
  counter = counter + 1;
}

function onLoad(){
  $('#heyYou').removeClass('hidden');
  watchForm();
  getCat();
  
}
  

  
onLoad()  