import {
    protElm,
    maxValue1Elm,
    maxValue2Elm
} from './ui-elements.js';
import { storeModel } from './storage.js';

export const addResult = (prot) => {
    const text = `${prot.value1} x ${prot.value1} = ${prot.input} | Speed: ${prot.duration.toString().padEnd(2, ' ')} seconds | Attempts: ${prot.attempts}`
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    protElm.appendChild(li);
    protElm.scrollTop = protElm.scrollHeight;
}

export const restoreGuiState = model => {
    model.history.forEach(entry => {
        addResult(entry);
    });
    maxValue1Elm.placeholder = model.maxValue1;
    maxValue2Elm.placeholder = model.maxValue2;
}

export const resetProtocol = model => {
    console.debug(model.history);
    model.history = [];
    storeModel(model);
    while(protElm.firstChild) {
        protElm.removeChild(protElm.firstChild);
    }
}