
const respuesta = 37
let respuestaUser

function pregunta(){
    
    while (respuestaUser != respuesta ) {
        respuestaUser = parseInt(prompt("¿Cuál es la edad de Lionel Messi?"))

        if (isNaN(respuestaUser)){
            alert("El dato ingresado no es una edad.")

        } else if (respuestaUser == respuesta){
            alert("Correcto!")
        
        } else {
            alert("Seguí intentando")
        }   
    }

    return
}

pregunta()

