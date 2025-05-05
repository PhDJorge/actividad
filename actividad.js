const respuestas = {
    input1: "matraz",
    input2: "redondo"
};

function verificar() {
    let aciertos = 0;
    let total = Object.keys(respuestas).length;

    Object.keys(respuestas).forEach(id => {
        const input = document.getElementById(id);
        if (input.value === respuestas[id]) {
            input.disabled = true;
            aciertos++;
        } else {
            input.value = "";
        }
    });

    if (aciertos === total) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup-success").style.display = "block";
    } else {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup-error").style.display = "block";
    }
}

function cerrarPopup() {
    document.getElementById("popup-error").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
