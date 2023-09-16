var x = document.getElementById("view_sivo");
var y = document.getElementById("view_grundsatz");
var z = document.getElementById("view_sequenz");

var clicked_sivo = "false";
var clicked_grundsatz = "false";
var clicked_sequenz = "false";
var sivo = "> 4 Sicherheitsgrundregeln im Umgang mit Waffen";
var grundsatz = "> Die 5 Grundsätze des Schiessens";
var sequenz = "> Die Schiesssequenz in 7 Schritten";

function show() {
  x.innerHTML = sivo;
  y.innerHTML = grundsatz;
  z.innerHTML = sequenz;
}

function Appear_sivo() {
  const hidden = document.getElementById("hidden_sivo");
  const visible = document.querySelector(".visible");

  switch (clicked_sivo) {
    case "false":
      hidden_sivo.style.display = "block";
      clicked_sivo = "true";

      ruhn = "˅ 4 Sicherheitsgrundregeln im Umgang mit Waffen";
      break;
    case "true":
      hidden_sivo.style.display = "none";
      clicked_sivo = "false";

      sivo = "> 4 Sicherheitsgrundregeln im Umgang mit Waffen";

      break;
  }
  x.innerHTML = sivo;
}

function Appear_grundsatz() {
  const hidden = document.getElementById("hidden_grundsatz");
  const visible = document.querySelector(".visible");

  switch (clicked_grundsatz) {
    case "false":
      hidden_grundsatz.style.display = "block";
      clicked_grundsatz = "true";

      achtung = "˅ Die 5 Grundsätze des Schiessens";
      break;
    case "true":
      hidden_grundsatz.style.display = "none";
      clicked_grundsatz = "false";

      grundsatz = "> Die 5 Grundsätze des Schiessens";

      break;
  }
  y.innerHTML = grundsatz;
}

function Appear_sequenz() {
  const hidden = document.getElementById("hidden_sequenz");
  const visible = document.querySelector(".visible");

  switch (clicked_sequenz) {
    case "false":
      hidden_sequenz.style.display = "block";
      clicked_sequenz = "true";

      sequenz = "˅ Die Schiesssequenz in 7 Schritten";
      break;
    case "true":
      hidden_sequenz.style.display = "none";
      clicked_sequenz = "false";

      sequenz = "> Die Schiesssequenz in 7 Schritten";

      break;
  }
  z.innerHTML = sequenz;
}

x.onload = show();
y.onload = show();
z.onload = show();
