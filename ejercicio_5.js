let Cedula = prompt("Dame tu cedula")
let Monto = prompt("Dame tu monto de compra")
let Puntos = 100

if(Monto <= 100000){
    Puntos += 100
}else if(Monto > 100000 && Monto <= 500000){
    Puntos += 250
}else{
    Puntos += 400
}
if(Puntos < 500){
alert(`A los 500 puntos te otorgamos un descuento de 20% del precio de tu compra actual en tu siguiente compra`)
}

if(Puntos >= 500){
    let descuento = Monto * 0.20
    alert(`¡Felicidades! Tienes un descuento pendiente de $${descuento} para tu próxima compra.`)
}else{
    alert(`Sigue acumulando. Te faltan ${500 - Puntos} puntos para llegar a 500.`)
}