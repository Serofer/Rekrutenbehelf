//this whole code is completely unnecessary because you could just use the <details> tag. But I wanted to learn some JS.
var x = document.getElementById("view_ruhn");
var y = document.getElementById("view_achtung");
var clicked_ruhn = "false";
var clicked_achtung = "false";
var ruhn = "> Ruhnstellung";
var achtung = "> Achtungstellung";

function show() {
  x.innerHTML = ruhn;
  y.innerHTML = achtung;
}

function Appear_Achtung() {
  const hidden = document.getElementById("hidden_achtung");
  const visible = document.querySelector(".visible");

  switch (clicked_achtung) {
    case "false":
      hidden_achtung.style.display = "block";
      clicked_achtung = "true";

      achtung = "˅ Achtungstellung";
      break;
    case "true":
      hidden_achtung.style.display = "none";
      clicked_achtung = "false";

      achtung = "> Achtungstellung";

      break;
  }
  y.innerHTML = achtung;
}

function Appear_Ruhn() {
  const hidden = document.getElementById("hidden_ruhn");
  const visible = document.querySelector(".visible");

  switch (clicked_ruhn) {
    case "false":
      hidden_ruhn.style.display = "block";
      clicked_ruhn = "true";

      ruhn = "˅ Ruhnstellung";
      break;
    case "true":
      hidden_ruhn.style.display = "none";
      clicked_ruhn = "false";

      ruhn = "> Ruhnstellung";

      break;
  }
  x.innerHTML = ruhn;
}
x.onload = show();
y.onload = show();
