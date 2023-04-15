// obrigado: https://dev.to/sbodi10/download-images-using-javascript-51a9
// obrigado: https://image-charts.com/

const totalGerado = document.getElementById("totalFichas")
let QRgerados = 0
const gerarFicha = document.getElementById("gerar")
let qrCode = document.getElementById("qr")
const baixarQR = document.getElementById("baixar")
const ligarAleatorio = document.getElementById("aleatoriOFF")
const desligarAleatorio = document.getElementById ("aleatoriON")
let idFichas = document.getElementById("idFicha")

/*let sites = [
    "https://www.youtube.com/",
    "https://www.netflix.com/browse",
    "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
] O plano é o botao aleatorio pegar um site dessa lista.*/

desligarAleatorio.addEventListener("click", () => {
    desligarAleatorio.classList.add("hidden")
})

ligarAleatorio.addEventListener("click", () => {
    desligarAleatorio.classList.remove("hidden")
   
})

gerarFicha.addEventListener("click", () =>{
    qr_personalizado()
})

async function baixarQR_CODE() {
    const QR_URL = qrCode.src; 
  
    const img = await fetch(QR_URL);
    const imgBlob = await img.blob(); 
  
    const objectURL = URL.createObjectURL(imgBlob); 
  
    const link = document.createElement('a');
    link.href = objectURL;
    link.download = ("QR ;)")
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    URL.revokeObjectURL(objectURL); 
  }
  

baixarQR.addEventListener("click", () => {
    baixarQR_CODE()
})

function qr_personalizado() {
    totalGerado.textContent=("Gerou: " + QRgerados + " QR codes");

    let textoUser = document.getElementById("texto_usuario").value;
    console.log(qrCode)
    if (textoUser === "gerarFICHAS") {
        numAleatorio = Math.floor(Math.random() * 1000000);
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=250x250&cht=qr&chl=022151207016" + numAleatorio + "choe=UTF-8");
        idFichas.textContent = ("ID: 022151207016" + numAleatorio)
        return;
    }

    if (textoUser != "") {
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=250x250&cht=qr&chl=" + textoUser);
        QRgerados++;
    } else {
        qrCode.setAttribute("src", "scr/inicio/inicio2.png");
        qr_usuario.classList.toggle("nada")
    }
}
