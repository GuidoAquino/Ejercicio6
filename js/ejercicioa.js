console.log(
  " -------------------------------------------------------------------\n",
  "-------------------------- Ejercicio A ----------------------------\n",
  "-------------------------------------------------------------------\n"
);

var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato;

  switch (i % 3) {
    case 0:
      gato = "😹";

      break;
    case 2:
      gato = "😸";

      break;
    case 1:
      gato = "😺";

      break;
  }

  console.log("Gato#" + i + ": " + gato);
}



   