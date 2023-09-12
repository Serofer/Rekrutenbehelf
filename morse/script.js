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
  document.getElementById("alpha").textContent = translated_morse.trim();
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
  document.getElementById("morse").textContent = translation_string.trim();
  translation_string = "";
}
