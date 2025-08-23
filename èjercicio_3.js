let estado = prompt ("El semaforo esta encendido o apagado?")

if (estado === "apagado") {
    alert ("Fallo en el dispositivo");
}else if (estado === "encendido"){
    let color = prompt("Cual es el color del semaforo");
    if (color === "verde"){
        alert("Puedes avanzar");
    }else if (color === "amarillo"){
        alert("Precaucion");
    }else if(color === "rojo"){
        alert("Detengase");
    }
}else{
    alert("Dato invalido intente otra vez")
}
    

    





