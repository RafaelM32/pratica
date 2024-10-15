const startButton = document.getElementById("startButton")
const outputDiv   = document.getElementById("output")



const recognition = new (window.SpeechRecognitionAlternative || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';


recognition.onstart = () => {
startButton.textContent = 'Listening...'
}

recognition.onresult = (data) => {
const transcript =  data.results[0][0].transcript;
outputDiv.textContent = transcript;
}

recognition.onend = () =>{
startButton.textContent = 'Start Voice Input';
recognition.start();
}


startButton.addEventListener('click', () => {
recognition.start();
})


