var translation_string = "";
var translated_morse = "";

const dictionary_A = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};
const dictionary_B = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
};

function MorseToAlpha() {
  //document.A_Form.alpha.value = "";
  //document.getElementById("A_Form").reset();

  morse = document.M_Form.morse.value;

  code_array = morse.split(" ");

  for (let i = 0; i < code_array.length; i++) {
    if (dictionary_B[code_array[i]]) {
      translated_morse += dictionary_B[code_array[i]];
    }
  }

  console.log(translated_morse);
  document.getElementById("alpha").value = translated_morse.trim();
  translated_morse = "";
}

function AlphaToMorse() {
  //document.getElementById("alpha").reset();
  text = document.A_Form.alpha.value.toUpperCase();
  //document.getElementById("morse").textContent = "";
  for (let char of text) {
    if (dictionary_A[char]) {
      translation_string += dictionary_A[char] + " ";
    }
  }
  console.log(translation_string);
  document.getElementById("morse").value = translation_string.trim();
  translation_string = "";
}

var slider_sign = document.getElementById("sign");
var slider_word = document.getElementById("word");
var output_sign = document.getElementById("sign_value");
var output_word = document.getElementById("word_value");
var sign_pause = 500;
var word_pause = 1000;
output_sign.innerHTML = display_value(slider_sign, output_sign, sign_pause);
output_word.innerHTML = display_value(slider_word, output_word, word_pause);

function display_value(slider, output, pause) {
  slider.oninput = function () {
    output.innerHTML = this.value;
    pause = slider.value;
  };
}

function generate_audio() {
  let every_sign = new Array();
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", 2);

  morse = document.M_Form.morse.value;

  morse_words = morse.split(" "); //creates an array with all of the "words"

  for (let i = 0; i < morse_words.length; i++) {
    morse_sign = morse_words[i].split(""); //creates an array with all the signs of the word
    //creating an array consisting of all the parts plus after each morse_sign array adding a space element to see where to set the break for the longer break
    for (let j = 0; j < morse_sign.length; i++) {}
  }

  Tone.start();
}
