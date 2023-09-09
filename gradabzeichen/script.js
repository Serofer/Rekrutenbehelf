var x = document.getElementById("table_1");
const grad = [
  //Mannschaft
  "Soldat",
  "Gefreiter",
  "Obergefreiter",
  //Unteroffiziere
  "Korporal",
  "Wachtmeister",
  "Oberwachtmeister",
  //Höhere Unteroffiziere
  "Feldweibel",
  "Fourier",
  "Hauptfeldweibel",
  "Adjutant Unteroffizier",
  "Stabsadjutant",
  "Hauptadjutant",
  "Chefadjutant",
  //Offiziere
  "Leutnant",
  "Oberleutnant",
  "Hauptmann",
  "Major",
  "Oberstleutnant",
  "Oberst",
  "Fachoffizier",
  // Höhere Stabsoffiziere
  "Brigadier",
  "Divisionär",
  "Korpskommandant",
  "General",
];

const grad_short = [
  //Mannschaft
  "Sdt",
  "Gfr",
  "Obgfr",
  //Unteroffiziere
  "Kpl",
  "Wm",
  "Obwm",
  //Höhere Unteroffiziere
  "Fw",
  "Four",
  "Hptfw",
  "Adj Uof",
  "Stabsadj",
  "Hptadj",
  "Chefadj",
  //Offiziere
  "Lt",
  "Oblt",
  "Hptm",
  "Maj",
  "Oberstlt",
  "Oberst",
  "Fachof",
  // Höhere Stabsoffiziere
  "Br",
  "Div",
  "KKdt",
  "General",
];

function display_table() {


var content = "<tr><th>Grad</th><th>Abzeichen</th></tr>";

for (let i = 0; i <= 22; i++) {
  content =
    content +
    " <tr> <td>" +
    grad[i] +
    "</td><td><img class='table_pictures' src='/gradabzeichen/images/" +
    grad[i] +
    ".jpg' alt='Image_" +
    grad_short[i] +
    "' title='" +
    grad_short[i] +
    "' /></td>  </tr> ";
}
//document.writeln(content);
x.innerHTML = content;
}
