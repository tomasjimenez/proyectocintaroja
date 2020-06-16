// Datos Card
let titulo = document.getElementById("col2Titulo");
let subTitulo1 = document.getElementById("col2Sub1");
let text1 = document.getElementById("col2Text1")
let subTitulo2 = document.getElementById("col2Sub2");
let text2 = document.getElementById("col2Text2")
let subTitulo3 = document.getElementById("col2Sub3")
let text3 = document.getElementById("col2Text3")

// Botones columna 1
let datos = document.getElementById("datos");
let puntaje = document.getElementById("puntaje");
let historial = document.getElementById("historial");
let colaboracion = document.getElementById("colaboracion");

console.log(customCard.classList);

//Funciones

const mostrarDatos = () => {
    customCard.classList.remove("customCard") 
    customImg1.classList.add("customImg1")
    customImg2.classList.add("customImg2")
    customImg3.classList.add("customImg3")  
    titulo.innerHTML = "Mis Datos"
    subTitulo1.innerHTML = "Nombre"
    text1.innerHTML = " Hola Argemiro Panda"
    subTitulo2.innerHTML = "Correo"
    text2.innerHTML = "argempanda@abc.com"
    subTitulo3.innerHTML = "Telefono"
    text3.innerHTML = "+1123456789"  
    customImg2.classList.add("customImg2")
    customImg3.classList.add("customImg3")     
}

const mostrarPuntaje = () => {
    customCard.classList.remove("customCard")
    customImg1.classList.add("customImg1")
    customImg2.classList.add("customImg2")
    customImg3.classList.add("customImg3")
    titulo.innerHTML = "Mi Puntaje"
    subTitulo1.innerHTML = "Hola Argemiro Panda"
    text1.innerHTML = "Tu puntaje es: 100"  
    subTitulo2.innerHTML = ""
    text2.innerHTML = ""
    subTitulo3.innerHTML = ""
    text3.innerHTML = ""  
}

const mostrarHistorial = () => {
    
    customCard.classList.remove("customCard")
    customImg1.classList.add("customImg1")
    customImg2.classList.remove("customImg2")
    customImg3.classList.add("customImg3")    
    titulo.innerHTML = "Mi Historial"
    subTitulo1.innerHTML = "Hola Argemiro Panda"
    text1.innerHTML = "Estas son tus visitas"  
    subTitulo2.innerHTML = ""
    text2.innerHTML = ""
    subTitulo3.innerHTML = ""
    text3.innerHTML = ""  
}

const mostrarColaboracion = () => {
    customCard.classList.remove("customCard")
    customImg1.classList.add("customImg1")
    customImg2.classList.add("customImg2")
    customImg3.classList.remove("customImg3")
    titulo.innerHTML = "Mi Colaboracion"
    subTitulo1.innerHTML = "Hola Argemiro Panda"
    text1.innerHTML = "Estas son tus colaboraciones"  
    subTitulo2.innerHTML = ""
    text2.innerHTML = ""
    subTitulo3.innerHTML = ""
    text3.innerHTML = ""  
}



// llamado de funciones

datos.addEventListener("click" , mostrarDatos)
puntaje.addEventListener("click" , mostrarPuntaje)
historial.addEventListener("click" , mostrarHistorial)
colaboracion.addEventListener("click" ,  mostrarColaboracion)