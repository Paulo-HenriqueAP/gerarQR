let botaoGerar = document.querySelector(".gerar");
let botaoVoltar = document.querySelector(".gerar_anterior");
let qrCode = document.getElementById("gerador");
let sequenciaFinal = 0;
let contagemFichas = 0;
let adicionarMais = document.querySelector(".totalFichas");
let idFicha = document.querySelector(".idFicha")
let pressionado = false;
let aleatorio = Math.floor(Math.random() * 90000 + 1001)
const aleatorioLigado = document.getElementById("aleatoriON");
const aleatorioDesligado = document.getElementById("aleatoriOFF");
let aleatorioAtivo = true;
let palavraAleatorio = document.getElementById("aleatorioPalavraOFF")
pressionado = false;

aleatorioLigado.addEventListener("click", () => {
    aleatorioAtivo = true;
    aleatorioLigado.classList.add("hidden");
    aleatorioDesligado.classList.remove("hidden");
  });
  
  aleatorioDesligado.addEventListener("click", () => {
    aleatorioAtivo = false;
    aleatorioDesligado.classList.add("hidden");
    aleatorioLigado.classList.remove("hidden");
  });

  botaoGerar.addEventListener("mousedown", function() {
    pressionado = true;
    contagemFichas = contagemFichas + 1;
    adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
    if (aleatorioAtivo) {
        sequenciaFinal = sequenciaFinal + 1;
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
        idFicha.textContent = "ID: 02215120701607150" + sequenciaFinal;
    } else {
        aleatorio = Math.floor(Math.random() * 90000+ 1001)
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "022151207016" + aleatorio + "&choe=UTF-8");
        idFicha.textContent = "ID: 022151207016" + aleatorio;
    }
    if (contagemFichas >= 0) {
    palavraAleatorio.textContent = ""
    };
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
        palavraAleatorio.textContent = ("Aleatório indisponível :(");
    }
});

botaoVoltar.addEventListener("mouseup", function() {
    pressionado = false;
});
