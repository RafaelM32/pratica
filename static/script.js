const startButton = document.getElementById("startButton")
const eraseButton = document.getElementById("borracha")
const outputDiv   = document.getElementById("output")
const elemento_img_caderno = document.getElementById("caderno")
const buttonImage = document.getElementById("imagem_do_botao_de_play")
const buttonEraseImage =  document.getElementById("imagem_do_botao_de_apagar")


let isListenning = false


elemento_img_caderno.src = "static/img/caderno.png"
buttonImage.src = "static/img/play.png"
buttonEraseImage.src = "static/img/borracha.png"

const recognition = new (window.SpeechRecognitionAlternative || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';


recognition.onstart = () => {
    buttonImage.src = "static/img/pouse.png"
}

recognition.onresult = (data) => {
const transcript =  data.results[0][0].transcript;
outputDiv.textContent =  outputDiv.textContent +" "+transcript;
}

recognition.onend = () =>{
    if(isListenning){
        recognition.start();
    }else{
        recognition.stop()
    }

}


startButton.addEventListener('click', () => {
    if(!isListenning){
        recognition.start();
        isListenning = true;
    }else{
        isListenning = false;
        buttonImage.src = "static/img/play.png"
    }

})

eraseButton.addEventListener('click',() => {
    outputDiv.textContent = ""
})

