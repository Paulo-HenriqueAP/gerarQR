let botaoGerar = document.querySelector(".gerar");
let botaoVoltar = document.querySelector(".gerar_anterior");
let qrCode = document.getElementById("gerador");
let sequenciaFinal = 0;
let contagemFichas = 0;
let adicionarMais = document.querySelector(".totalFichas");
let idFicha = document.querySelector(".idFicha")
let pressionado = false;

pressionado = false;

botaoGerar.addEventListener("mousedown", function() {
    pressionado = true;
    contagemFichas = contagemFichas + 1;
    sequenciaFinal = sequenciaFinal + 1;
    adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
    qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
    idFicha.textContent = "ID: 02215120701607150" + sequenciaFinal;
});

botaoGerar.addEventListener("mouseup", function() {
    pressionado = false;
});

botaoVoltar.addEventListener("mousedown", function() {
    pressionado = true;
    contagemFichas = contagemFichas - 1;
    sequenciaFinal = sequenciaFinal - 1;
    adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
    qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
    if (contagemFichas < 0) {
        alert("Isso pode até funcionar, mas é melhor ir para frente.");
        idFicha.textContent = "ID:02215120701607150" + sequenciaFinal;
    }
});

botaoVoltar.addEventListener("mouseup", function() {
    pressionado = false;
});
