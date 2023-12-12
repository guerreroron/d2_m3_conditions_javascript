function addBorder() {
    const image = document.getElementById("railimg")
    const val = image.classList.contains("borders")
    if (val == false){
        image.classList.add("borders")
    } else {
        image.classList.remove("borders")
    }
}