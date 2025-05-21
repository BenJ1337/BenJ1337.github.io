import { 
    factor1Elm, 
    factor2Elm, 
    maxValue1Elm,
    maxValue2Elm,
    operatorElm, 
    resultElm, 
    operatorInTerminElm, 
    timerElm, 
    protElm 
} from './ui-elements.js';
import { model } from './model.js';

export const newTerm = () => {
    factor1Elm.value = Math.floor(Math.random() * model.maxValue1+1);
    factor2Elm.value = Math.floor(Math.random() * model.maxValue2+1);
    resultElm.value = '';
    model.attempts = 1;
    model.start = performance.now();
}

export const setMaxValues = () => {
    if(maxValue1Elm.value !== '') {
        model.maxValue1 = maxValue1Elm.value;
    }
    if(maxValue2Elm.value !== '') {
        model.maxValue2 = maxValue2Elm.value;
    }
    console.debug(`MaxValue1: ${model.maxValue1}, MaxValue2: ${model.maxValue2}`);
}

export const resetTimerAndSetFocus = () => {
    model.start = performance.now();
    resultElm.focus();
}

export const initTimer = () => {
    const interval = setInterval(() => { timerElm.textContent = Math.floor(duration()/1000); }, 1000);
}

export const showOperator = () => {
    operatorInTerminElm.textContent = model.operator;
}

export const setOperator = () => {
    switch(operatorElm.value) {
        case '':
        case '*':
        case 'x': 
            model.operator = 'x';
            break;
        case '+':
            model.operator = '+';
            break;
        case '-':
            model.operator = '-';
            break;
        case '/':
        case ':': 
            model.operator = ':';
            break;
        default:
            throw Error(`Operator not expected: ${operatorElm.value}`);
    }
}

export const duration = () => {
    let ende = performance.now();
    return ende - model.start;
}

export const addResult = (text) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    protElm.appendChild(li);
    protElm.scrollTop = protElm.scrollHeight;
}

export const calc = (val1, val2, operator) => {
    switch(operator) {
        case 'x':
            return val1 * val2;
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case ':':
            return val1 / val2;
    }
}