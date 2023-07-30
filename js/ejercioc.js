console.log(
    " -------------------------------------------------------------------\n",
    "-------------------------- Ejercicio C ----------------------------\n",
    "-------------------------------------------------------------------\n"
    );
    
    var cantidadDeGatos = 10
    var cantidadDePasos = 3
    
    
    
    for(var gato = 1; gato <= cantidadDeGatos; gato ++){
    var mensaje = "Gato" + gato + (gato%2 == 0? "🐈 ⬛" : "🐈")
    for (var pasos = 1; pasos <= cantidadDePasos; pasos++ ){
        mensaje += " 🐾";
    
    
    }
    
    console.log(mensaje)
    
    }