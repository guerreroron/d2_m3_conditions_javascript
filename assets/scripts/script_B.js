
function totalStickers(){
    const input1 = parseInt(document.getElementById("input1").value)
    const input2 = parseInt(document.getElementById("input2").value)
    const input3 = parseInt(document.getElementById("input3").value)
    suma = input1 + input2 + input3
    const totalSpan = document.getElementById("totalText")
    // totalSpan.innerHTML = suma
    // console.log(suma)
    if (suma <= 10){
        totalSpan.innerHTML = "Llevas un total de " + suma + " stickers"
    } else {
        totalSpan.innerHTML = "Llevas demasiados stickers"
    }
}