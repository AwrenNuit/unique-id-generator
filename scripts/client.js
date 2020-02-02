$(function(){
    $(`#generate`).on(`click`, generateUniqueID);
});

let length = 0;
let charset = ``;
let tempID = ``;

function generateUniqueID(){
  if($(`#length`).val() <= 50 && $(`#length`).val() >= 2){
    updateCharsets();
    createPassword();
    appendPasswordToDom();
    clearVariables();
  }
  else{
    isLengthInRange();
  }
}

function appendPasswordToDom(){
  let el = $(`#output`);
  el.children().empty();
  el.append(`<div>${tempID}</div>`);
}

function clearVariables(){
  charset = ``;
  tempID = ``;
  length = 0;
}

function createPassword(){
  let randomCharset = charset.split(``);
  let notChar = /^[a-zA-Z0-9]/;

  for(let i=0; tempID.length<length; i++) {
    if(i == randomCharset.length){
      i = 0;
    }
    else{
      randomCharset.sort(() => Math.random() - 0.5);
      if(!randomCharset[i].match(notChar)){
        if(checkDupe(randomCharset[i])){
          tempID += randomCharset[i];
        }
      }
      else{
        tempID += randomCharset[i];
      }
    }
  }
}

function isLengthInRange(){
  $(`#length`).val() > 50 ? alert(`Max length is 50`) : '';
  $(`#length`).val() < 2 ? alert(`Min length is 2`) : '';
}

function updateCharsets(){
  length = $(`#length`).val();
  charset = ``;
  if($(`#up-alphabet`).is(`:checked`)){
    charset += $(`#up-alphabet-display`).val();
  }
  if($(`#lo-alphabet`).is(`:checked`)){
    charset += $(`#lo-alphabet-display`).val();
  }
  if($(`#numbers`).is(`:checked`)){
    charset += $(`#numbers-display`).val();
  }
  if($(`#dash`).is(`:checked`)){
    charset += $(`#dash-display`).val();
  }
  if($(`#symbols`).is(`:checked`)){
    charset += $(`#symbols-display`).val();
  }
}

function checkDupe(char){
  switch(char){
    case char:
      if(tempID[tempID.length-1] == char){
        return false;
      }
    default:
      return true;
  }
}