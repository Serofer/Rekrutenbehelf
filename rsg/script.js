var x = document.getElementById("view_sivo");
var clicked_sivo = "false";
var sivo = "> Ausbildung und Sicherheitsvorschriften";

function show() {
  x.innerHTML = sivo;
}

function Appear_sivo() {
  const hidden = document.getElementById("hidden_sivo");
  const visible = document.querySelector(".visible");

  switch (clicked_sivo) {
    case "false":
      hidden_sivo.style.display = "block";
      clicked_sivo = "true";

      sivo = "˅ Ausrüstung und Sicherheitsvorschriften";
      break;
    case "true":
      hidden_sivo.style.display = "none";
      clicked_sivo = "false";

      sivo = "> Ausbildung und Sicherheitsvorschriften";

      break;
  }
  x.innerHTML = sivo;
}
x.onload = show();
