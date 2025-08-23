let lavadoras_pequeñas = parseInt(prompt("Cuántas horas va a alquilar una lavadora pequeña?"))
let lavadoras_grandes = parseInt(prompt("cuántas horas va a alquilar una lavadora grande"))


let costo_total =  (lavadoras_pequeñas * 3000) + (lavadoras_grandes * 4000) 

if(lavadoras_grandes + lavadoras_pequeñas > 10){
    costo_total = (costo_total * 0.03) - costo_total
}
alert("El costo total a pagar es: " + costo_total)

