let botaoGerar = document.querySelector(".gerar");
let botaoVoltar = document.querySelector(".gerar_anterior")
var qrCode = document.getElementById("gerador");
var sequenciaFinal = 0;
let pressionado = false;
var contagemFichas = 0
let adicionarMais = document.querySelector(".totalFichas")

botaoGerar.addEventListener("click", function() {
    if (!pressionado) {
        contagemFichas = contagemFichas + 1;
        adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
        sequenciaFinal = sequenciaFinal + 1;
        pressionado = true;
        } else {
            pressionado = false;
        }
});

botaoVoltar.addEventListener("click", function() {
    if (!pressionado) {
        contagemFichas = contagemFichas - 1;
        adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
        sequenciaFinal = sequenciaFinal - 1;
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
        pressionado = true;
        } else {
            pressionado = false;
        }
});
