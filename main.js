import { addListeners as addListenersControlePanel } from './modules/listeners-control-panel.js';
import { addListeners as addListenersCalc } from './modules/listeners-calc.js';
import { setMaxValues, newTerm, initTimer, showOperator } from './modules/calc.js';
import { resultElm } from './modules/ui-elements.js';
import { model } from './modules/model.js';
import { restoreGuiState } from './modules/controller.js';
import { loadModel } from './modules/storage.js';

const init = () => {
    console.debug(`Init: model: ${model}`);
    loadModel(model);
    restoreGuiState(model);
    addListenersControlePanel();
    addListenersCalc();
    setMaxValues();
    newTerm();
    initTimer();
    showOperator();
    model.start = performance.now();
    resultElm.focus();
}
init();
