let formOutput = document.querySelector('.form__output-result');
let buttonCancel = document.querySelector('#cancel');
let buttonPercent = document.querySelector('#percent'); 
let buttonBracketL = document.querySelector('#bracketL');
let buttonBracketR = document.querySelector('#bracketR');
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
 
function addChar (char) {
    if (formOutput.textContent === "0" ||  formOutput.classList.contains('form__output-result_type_answer')) {
        formOutput.classList.remove('form__output-result_type_answer');
        formOutput.textContent = char;
    } else {
        formOutput.textContent += char; 
    }
}

//Цифры

buttonOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(1);
}
);

buttonTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(2);
}
);

buttonThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(3);
}
);

buttonFour.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(4);
}
);

buttonFive.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(5);
}
);

buttonSix.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(6);
}
);

buttonSeven.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(7);
}
);

buttonEight.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(8);
}
);

buttonNine.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(9);
}
);

buttonZero.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(0);
}
);

//Кнопки действий

buttonCancel.addEventListener('click', function (evt) {
    evt.preventDefault();
    formOutput.classList.remove('form__output-result_type_answer');
    formOutput.textContent = 0;
}
);

buttonPlus.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('+');
}
);

buttonMinus.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('-');
}
);

buttonUmn.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('*');
}
);

buttonDelit.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('/');
}
);

buttonTochka.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('.');
}
);

buttonBracketL.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar('(');
}
);

buttonBracketR.addEventListener('click', function (evt) {
    evt.preventDefault();
    addChar(')');
}
);

buttonPercent.addEventListener('click', function (evt) {
    evt.preventDefault();
    let result = formOutput.textContent;
    let massiv = result.split("*"||"-"||"+"||"/");
    let percent = massiv[massiv.length - 1] / 100;
    
    result.replace(massiv[massiv.length-1], percent);
    let answer = eval(result);
    formOutput.textContent = answer/100;
    formOutput.classList.add('form__output-result_type_answer');
   
}
);

buttonRavno.addEventListener('click', function (evt) {
    evt.preventDefault();
    let result = eval(formOutput.textContent);
    formOutput.classList.add('form__output-result_type_answer');
    formOutput.textContent = result;
}
);
parseInt