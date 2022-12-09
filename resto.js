let imageBurger = document.getElementById("image")
let clique = true

    

function bang(){
    if(clique){
        imageBurger.src = "img/burger3.jpg"
        clique = false
        console.log(clique)
    }else{
        imageBurger.src = "img/burger1.jpg"
        clique = true
        console.log(clique)
    }
    
}
imageBurger.addEventListener("click", bang)

let imagePizza = document.querySelector(".pizza img")
let compteur = 0

imagePizza.addEventListener("click",panorama)   

function panorama(){
    if(compteur>=4){
        compteur = compteur - 3
    imagePizza.src = "img/pizza1.jpg"
    }else{
        compteur = compteur + 1
    imagePizza.src = "img/pizza"+compteur+".jpg"

    }
    console.log(compteur)
}