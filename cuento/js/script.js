const canasta2 = document.getElementById("canasta2");
const canasta1 = document.getElementById("canasta1")
const boton1 = document.getElementById("boton1");
const casa1 = document.getElementById("casa1");
const bosque1 = document.getElementById("bosque1")
const boton2 = document.getElementById("boton2");
const cap1 = document.getElementById("cap1");
const boton3 = document.getElementById("boton3");
const abuelita1 = document.getElementById("abuelita1");
const lobo1 = document.getElementById("lobo1");
const boton4 = document.getElementById("boton4");
const telefono = document.getElementById("telefono");
const cazador1 = document.getElementById("cazador1");
const boton5 = document.getElementById("boton5");
const cap2 = document.getElementById("cap2");
const abuelita2 = document.getElementById("abuelita2");
const lobo = document.getElementById("lobo");
const boton6 = document.getElementById("boton6");

function mostrarCanasta2(){
	canasta2.style.visibility = "visible";
	canasta1.style.visibility = "hidden";
}
boton1.addEventListener("mouseup",mostrarCanasta2);

function cambiarCaminos(){
	casa1.src = "imagenes/casaSola.png";
	bosque1.src = "imagenes/bosqueCap.png";
}
boton2.addEventListener("mouseup",cambiarCaminos);

function entrarCasa(){
	cap1.style.visibility = "hidden";
}
boton3.addEventListener("mouseup",entrarCasa);

function acercarseAbuelita(){
	lobo1.style.visibility = "visible";
	abuelita1.style.visibility = "hidden";
}
boton4.addEventListener("mouseup",acercarseAbuelita);

function llamarCazador(){
	cazador1.style.visibility = "visible";
	telefono.src = "imagenes/telefono2.png";
}
boton5.addEventListener("mouseup",llamarCazador);

function ahuyentarLobo(){
	cap2.style.visibility = "visible";
	abuelita2.style.visibility = "visible";
	lobo.style.visibility = "hidden";
}
boton6.addEventListener("mouseup",ahuyentarLobo);