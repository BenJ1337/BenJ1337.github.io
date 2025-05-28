export const storeModel = model => {
    localStorage.setItem("model", JSON.stringify(model));
}

export const loadModel = model => {
    console.debug(`Model: ${model}`);
    const modelLS = JSON.parse(localStorage.getItem("model"));
    console.debug(modelLS);
    if(modelLS !== null) {
        console.debug(`Restoring last state: ${JSON.stringify(modelLS)}`);
        Object.assign(model, modelLS);
    } else {
        console.debug('Nothing to restore');
    }
}