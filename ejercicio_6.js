let operador = prompt("Que operador deseas escojer? (Claro, Tigo o Movistar)")
let operacion = prompt("Que operacion deseas elejir (recarga o paquete)")
let CV = 12000
let CA = 20000
let TA = 22000
let TB = 30000

operador = operador.toLowerCase();
operacion = operacion.toLowerCase();

if(operador == "claro"){
    if(operacion == "recarga"){
        let recarga = Number(prompt("Ingrese el valor de su recarga no menor a 10.000"))
        if(recarga <= 10000) {
        alert("Lo sentimos su recarga debe ser mayor a 10.000")
        }else if(recarga > 10000){
        alert(`Operador: ${operador}, tipo de operacion: recarga, monto: ${recarga}. Tu operacion fue realizada con exito`)
        }
    }else if(operacion == "paquete"){
        alert("El operador tiene disponibilidad")
        let paquete = prompt("Dame un codigo del paquete valido (CV o CA)")
        let precio
        if(paquete == "CV"){
            precio = CV
        }else if(paquete == "CA"){
            precio = CA
        }else{
            paquete = false
        }
        if(paquete === false){
            alert("El paquete que haz elejido es invalido")
        }else{
        alert(`Operador: ${operador}, tipo de operacion: ${operacion}, monto: ${precio}. Tu operacion fue realizada con exito`)
        }
        }
    }else if(operador == "tigo"){
    if(operacion == "recarga"){
        let recarga = Number(prompt("Ingrese el valor de su recarga no menor a 10.000"))
        if(recarga <= 10000) {
        alert("Lo sentimos su recarga debe ser mayor a 10.000")
        }else if(recarga > 10000){
        alert(`Operador: ${operador}, tipo de operacion: recarga, monto: ${recarga}. Tu operacion fue realizada con exito`)
        }
    }else if(operacion == "paquete"){
        alert("El operador tiene disponibilidad")
        let paquete = prompt("Dame un codigo del paquete valido (TA o TB)")
        let precio
        if(paquete == "TA"){
            precio = TA
        }else if(paquete == "TB"){
            precio = TB
        }else{
            paquete = false
        }
        if(paquete === false){
            alert("El paquete que haz elejido es invalido")
        }else{
        alert(`Operador: ${operador}, tipo de operacion: ${operacion}, monto: ${precio}. Tu operacion fue realizada con exito`)
        }
        }
    }else if(operador == "movistar"){
    if(operacion == "recarga"){
        let recarga = Number(prompt("Ingrese el valor de su recarga no menor a 10.000"))
        if(recarga <= 10000) {
        alert("Lo sentimos su recarga debe ser mayor a 10.000")
        }else if(recarga > 10000){
        alert(`Operador: ${operador}, tipo de operacion: recarga, monto: ${recarga}. Tu operacion fue realizada con exito`)
        }
    }else if(operacion == "paquete"){
        alert("El operador por el momento no tiene disponible paquetes intente con una recarga")
        }
    }
