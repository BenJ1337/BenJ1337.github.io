import { setMaxValues, newTerm, resetTimerAndSetFocus, setOperator, showOperator  } from './calc.js';
import {
    timerElm, 
    protElm,
    controlElementsElm
} from './ui-elements.js';
import { model } from './model.js';

const createLinkTag = (url) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    return link;
}

const addFontRef = () => {
    document.head.appendChild(createLinkTag('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'));
}

export const addListeners = () => {
    document.getElementById("applyValues").onclick = (button) => {
        setMaxValues();
        newTerm();
        resetTimerAndSetFocus();
        setOperator();
        showOperator();
        console.debug(model);
    }

    document.getElementById("resetTimer").onclick = (button) => {
        resetTimerAndSetFocus();
    }

    document.getElementById("hideTimer").onclick = (button) => {
        resetTimerAndSetFocus();
        timerElm.style.opacity = '0';
    }

    document.getElementById("showTimer").onclick = (button) => {
        resetTimerAndSetFocus();
        timerElm.style.opacity = '1';
    }

    document.getElementById("hideProt").onclick = (button) => {
        protElm.style.opacity = '0';
        resetTimerAndSetFocus();
    }

    document.getElementById("showProt").onclick = (button) => {
        resetTimerAndSetFocus();
        protElm.style.opacity = '1';
    }

    document.getElementById("showHideTools").onclick = (button) => {
        resetTimerAndSetFocus();
        if(controlElementsElm.style.display == 'none') {
            controlElementsElm.style.display = 'initial';
            button.target.textContent = 'Hide Controls';
        } else {
            controlElementsElm.style.display = 'none';
            button.target.textContent = 'Show Controls';
        }
    }

    document.getElementById("loadFont").onclick = (button) => {
        addFontRef();
        button.target.style.display = 'none';
        resetTimerAndSetFocus();
    }
}