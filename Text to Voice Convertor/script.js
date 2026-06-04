let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voiceSelect.innerHTML = ''; // Clear existing options
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

// Load voices when they change
window.speechSynthesis.onvoiceschanged = loadVoices;

// Also load voices immediately in case they're already loaded
loadVoices();

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});