//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){

  donationAmount = window.prompt('How much would you like to donate?');
  var donationThankYou = document.createElement("h3");

  if (donationAmount < 100){
    var donationThankYouText = document.createTextNode('Thank you for your donation of ' + donationAmount + '.');
  } if (donationAmount >= 100) {
    var donationThankYouText = document.createTextNode('Thank you for your very generous donation of ' + donationAmount + '!!');
    donationThankYou.setAttribute("style", "color: #DB152C");
  };

  donationThankYou.appendChild(donationThankYouText);
  document.querySelector("#ConsoleDisplay").appendChild(donationThankYou);
});

var consoleDisplayText = document.createElement( "p" );
document.querySelector("#ConsoleDisplay").appendChild(consoleDisplayText);

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplayText.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '. ';

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplayText.innerHTML += 'This speech took place before the common era. ' ;
  }else{
    consoleDisplayText.innerHTML += 'This speech took place during the common era. ' ;
  };

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  };

  if(speechesArray[0].year === oldest){
    consoleDisplayText.innerHTML += 'This is the oldest speech on the page. ' ;
  }
  if(speechesArray[0].year === newest){
    consoleDisplayText.innerHTML += 'This is the most recent speech on the page. ' ;
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  consoleDisplayText.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '. ';

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplayText.innerHTML += 'This speech took place before the common era. ' ;
  }else{
    consoleDisplayText.innerHTML += 'This speech took place during the common era. ' ;
  };

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  };

  if(speechesArray[1].year === oldest){
    consoleDisplayText.innerHTML += 'This is the oldest speech on the page. ' ;
  }
  if(speechesArray[1].year === newest){
    consoleDisplayText.innerHTML += 'This is the most recent speech on the page. ' ;
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  consoleDisplayText.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '. ';

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplayText.innerHTML += 'This speech took place before the common era. ' ;
  }else{
    consoleDisplayText.innerHTML += 'This speech took place during the common era. ' ;
  };

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  };

  if(speechesArray[2].year === oldest){
    consoleDisplayText.innerHTML += 'This is the oldest speech on the page. ' ;
  }
  if(speechesArray[2].year === newest){
    consoleDisplayText.innerHTML += 'This is the most recent speech on the page. ' ;
  }
});
