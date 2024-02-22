let voiceEle = document.getElementById("dropdown");
let textEle = document.getElementById("textarea");
let speechBtn = document.getElementById("button");
let iconEl = document.getElementById("icon");

let speechSynth = speechSynthesis;

speechSynth.addEventListener("voiceschanged", loadvoices);

function loadvoices() {
    let voices = speechSynth.getVoices();
    for (let voice of voices) {

        let option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voiceEle.appendChild(option);
    }
}

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of speechSynth.getVoices()) {
        if (voice.name === voiceEle.value) {
            utterance.voice = voice;
        }
    }
    speechSynth.speak(utterance);
}

speechBtn.addEventListener("click", function() {
    if (textEle.value !== "") {
        if (!speechSynth.speaking) {
            textToSpeech(textEle.value);
        }
    } else {
        alert("Enter Some Text");
    }


})