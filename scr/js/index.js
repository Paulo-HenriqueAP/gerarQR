let botaoGerar = document.querySelector(".gerar");
let botaoVoltar = document.querySelector(".gerar_anterior");
let qrCode = document.getElementById("gerador");
let sequenciaFinal = 0;
let contagemFichas = 0;
let pressionado = false;
let adicionarMais = document.querySelector(".totalFichas");
let idFicha = document.querySelector(".idFicha")
let aleatorio = Math.floor(Math.random() * 90000 + 1001)
const aleatorioLigado = document.getElementById("aleatoriON");
const aleatorioDesligado = document.getElementById("aleatoriOFF");
let aleatorioDesativado = true;
let fichaAnterior = " ";
pressionado = false;

aleatorioLigado.addEventListener("click", () => {
    aleatorioDesativado = true;
    aleatorioLigado.classList.add("hidden");
    aleatorioDesligado.classList.remove("hidden");
  });
  
  aleatorioDesligado.addEventListener("click", () => {
    aleatorioDesativado = false;
    aleatorioDesligado.classList.add("hidden");
    aleatorioLigado.classList.remove("hidden");
  });

  botaoGerar.addEventListener("mousedown", function() {
    pressionado = true;
    contagemFichas = contagemFichas + 1;
    adicionarMais.textContent = "Fichas geradas: " + contagemFichas;
    if (aleatorioDesativado) {
        sequenciaFinal = sequenciaFinal + 1;
        fichaAnterior = sequenciaFinal - 1
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + sequenciaFinal + "&choe=UTF-8");
        idFicha.textContent = "ID: 0221512070160715" + sequenciaFinal;
    } else {
        fichaAnterior = aleatorio;
        aleatorio = Math.floor(Math.random() * 90000+ 1001)
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "022151207016" + aleatorio + "&choe=UTF-8");
        idFicha.textContent = "ID: 022151207016" + aleatorio;
    }
});
botaoGerar.addEventListener("mouseup", function() {
    pressionado = false;
});

botaoVoltar.addEventListener("mousedown", function() {
    pressionado = true;
    if (aleatorioDesativado) {
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "0221512070160715" + fichaAnterior + "&choe=UTF-8")
        idFicha.textContent = "ID: 0221512070160715" + fichaAnterior
    } else {
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=252x252&cht=qr&chl= " + "022151207016" + fichaAnterior + "&choe=UTF-8")
        idFicha.textContent = "ID: 022151207016" + fichaAnterior
    }
    });

botaoVoltar.addEventListener("mouseup", function() {
    pressionado = false;
});
