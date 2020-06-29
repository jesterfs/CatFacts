'use strict'



let counter = 3;

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

function displayResults(responseJson){
  if(counter === 100){
    $('#text').text(`Fresh out of facts :(`)
    $('#buttonDiv').html(`<button type="button">
      <a href='https://RosybrownClearVendors--stewartjester.repl.co'>Refresh Page</a>
      </button>`)
  } else {
    $('#text').text(responseJson.all[counter].text);
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