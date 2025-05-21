import { model } from './model.js';
import { calc, addResult, duration, newTerm } from './calc.js';
import {
    resultElm,
    operatorElm
} from './ui-elements.js';

export const addListeners = () => {
    resultElm.addEventListener('keyup', (input) => {
        console.debug(`Input value: ${input.target.value}`);
        if(isNaN(input.target.value)) {
            console.debug('Not a Number');
            input.target.value = '';
        }
        const expectedValue = calc(parseInt(factor1.value), parseInt(factor2.value), model.operator);
        console.debug(`Expected value: ${expectedValue}`);
        if(expectedValue == input.target.value) {
            const val1 = factor1.value.toString().padStart(2, ' ');
            const val2 = factor2.value.toString().padEnd(2, ' ');
            const val3 = input.target.value.toString().padEnd(3, ' ');
            addResult(`${val1} x ${val2} = ${val3} | Speed: ${Math.floor(duration()/1000).toString().padEnd(2, ' ')} seconds | Attempts: ${model.attempts}`);
            newTerm();
        }
        if(!expectedValue.toString().startsWith(input.target.value.toString())) {
            model.attempts++;
            input.target.value = '';
        }
    });

    operatorElm.addEventListener('keyup', function (input) {
        switch(input.target.value) {
            case '*':
            case 'x': 
            case '+':
            /*case '-':
            case '/':
            case ':': */
            case '': 
                break;
            default:
                input.target.value = '';
        }
    });
}