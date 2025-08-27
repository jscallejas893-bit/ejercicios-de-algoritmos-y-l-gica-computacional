let estado = prompt ("El semaforo esta encendido o apagado?")

switch (estado){
case "apagado": 
    console.log("Fallo en el dispositivo")
    break;
case "verde":
    console.log("puedes avanzar")
    break;
case "amarillo":
    console.log("precaucion")
    break;
 case "rojo":
    console.log("detengase")
    break;
default:
    console.log("Dato invalido")
}


