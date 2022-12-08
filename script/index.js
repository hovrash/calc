let formOutput = document.querySelector('.form__output-result');
let buttonCancel = document.querySelector('#cancel'); 
let buttonSeven = document.querySelector('#seven');
let buttonEight = document.querySelector('#eight');
let buttonNine = document.querySelector('#nine');
let buttonDelit = document.querySelector('#delit');
let buttonFour = document.querySelector('#four');
let buttonFive = document.querySelector('#five');
let buttonSix = document.querySelector('#six')
let buttonUmn = document.querySelector('#umn');
let buttonOne = document.querySelector('#one');
let buttonTwo = document.querySelector('#two');
let buttonThree = document.querySelector('#three');
let buttonMinus = document.querySelector('#minus');
let buttonTochka = document.querySelector('#tochka');
let buttonZero = document.querySelector('#zero');
let buttonPlus = document.querySelector('#plus');
let buttonRavno = document.querySelector('#ravno');
 
buttonSeven.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (formOutput.textContent === "0") {
        formOutput.textContent = 7;
    } else { formOutput.textContent += 7; 
    }
}
);

buttonPlus.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (formOutput.textContent === "0") {
        formOutput.textContent = '+';
    } else { formOutput.textContent += '+'; 
    }
}
);

buttonMinus.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (formOutput.textContent === "0") {
        formOutput.textContent = '-';
    } else { formOutput.textContent += '-'; 
    }
}
);

buttonRavno.addEventListener('click', function (evt) {
    evt.preventDefault();
    let result = eval(formOutput.textContent);
    formOutput.textContent = result;
})