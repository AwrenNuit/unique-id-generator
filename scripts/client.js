$(document).ready(function(){
    $(`#generate`).on(`click`, generateUniqueID);
});

let length = 0;
let charset = ``;
let tempID = ``;

function generateUniqueID(){
    updateCharsets();
    createPassword();
    appendPasswordToDom();
    clearVariables();
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

    for(let i=0; tempID.length<length; i++) {
        if(i == randomCharset.length){
            i = 0;
        }
        else{
            randomCharset.sort(() => Math.random() - 0.5);
            if(checkDupe(randomCharset[i])){
                tempID += randomCharset[i];
            }
        }
    }
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
        case `-`:
        case `_`:
        case `#`:
        case `;`:
        case `:`:
        case '\`':
        case `~`:
        case `!`:
        case `@`:
        case `#`:
        case `$`:
        case `%`:
        case `^`:
        case `&`:
        case `*`:
        case `(`:
        case `)`:
        case '+':
        case `=`:
        case `{`:
        case `}`:
        case `[`:
        case `]`:
        case `/`:
        case `?`:
        case `\\`:
            if(tempID[tempID.length-1] == char){
                return false;
            }
        default:
            return true;
    }
}