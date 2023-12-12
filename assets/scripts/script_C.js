function verifyPass(){
    const selection1 = document.getElementById("selector1").value
    const selection2 = document.getElementById("selector2").value
    const selection3 = document.getElementById("selector3").value
    const texto = document.getElementById("passText")

    const compare = selection1 + selection2 + selection3

    if (compare == 911){
        passText.innerHTML = "Password 1 correcto"; texto.classList.add("correct"); texto.classList.remove("incorrect")
    } else if (compare == 714){
        passText.innerHTML = "Password 2 correcto"; texto.classList.add("correct"); texto.classList.remove("incorrect")
    } else {
        passText.innerHTML = "Password incorrecto"; texto.classList.add("incorrect"); texto.classList.remove("correct")
    }
}



