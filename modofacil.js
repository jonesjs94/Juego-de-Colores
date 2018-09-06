$(document).ready(function(){

//Variables globales
var arrayButtonsId = ["color", "button-color1", "button-color2", "button-color3", "button-color4", "button-color5", "button-color6"];
var colorPrincipal;
var colorB1; var colorB2; var colorB3;
var colorB4; var colorB5; var colorB6;
var facil; var normal;

//Impedimos que el jugador pueda clickear botones antes de la partida
for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.pointerEvents="none";
	};
	//y tampoco podra clickear el boton Nuevo juego
	//hasta seleccionar una dificultad
	document.getElementById("juegoNuevo").style.opacity ="0.5";
	document.getElementById("juegoNuevo").style.pointerEvents="none";


//La función para el RGB del texto y posteriormente los botones
function darRGB(){
	var color1 =document.getElementById("color1").innerHTML = "rgb(" + Math.round(Math.random()*256);
	var color2 =document.getElementById("color2").innerHTML = ", " + Math.round(Math.random()*256);
	var color3 =document.getElementById("color3").innerHTML = ", " + Math.round(Math.random()*256) + ")";
	return color1+color2+color3;	
};

function jugarDeNuevo() {
	
for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.pointerEvents="none";
	};
	//restauramos la opacidad
	document.getElementById("facil").style.opacity ="1";
	document.getElementById("normal").style.opacity ="1";
	document.getElementById("dificil").style.opacity ="1";

	//devuelve la opacidad y el valor del color a buscar 
	document.getElementById("color").style.opacity ="1";

	//reinicia el "Class" del boton para iniciar el juego
	document.getElementById("resultado").className = 'resultado'

	//resetea el puntaje
	document.getElementById("puntaje").value = '0';

	//reactiva los colores
	document.getElementById("facil").style.pointerEvents="auto";
	document.getElementById("normal").style.pointerEvents="auto";
	document.getElementById("dificil").style.pointerEvents="auto";

   //cambia el valor de la variable para "apagar" el IF
	facil = "off"
	normal = "off"
	
	//Deuelve los colores al principio
	// y reiniciamos las ubicaciones de los botones
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId [i]).style.backgroundColor = "grey";
		document.getElementById(arrayButtonsId[i]).style.display="block";
	};

	//detiene el intervalo de dificil
	clearInterval(intervalo);

	//Volvemos a escribir "Elige la dificultad"
	color1 =document.getElementById("color1").innerHTML = "Elige"
	color2 =document.getElementById("color2").innerHTML = "la"
	color3 =document.getElementById("color3").innerHTML = "dificultad"
	
}



function darColorFacil () {
	//le damos el valor "on" para luego usarlo en un IF
	facil = "on";

	//permite clickear en los botones
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.pointerEvents="auto";
	};
	
	//Muestra el color que debemos encontrar
	document.getElementById("color").style.opacity ="1";
		
	//le da colores a las variables declaradas mas arriba
	colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();
	colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();
	colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();
			

	//mostramos los botones que pudieron desaparecer
	document.getElementById("button-color1").style.display="block";
	document.getElementById("button-color2").style.display="block";
	document.getElementById("button-color3").style.display="block";
	
	//El color random que debemos buscar
	colorPrincipal = Math.round(Math.random()*3);

	//aca ocultamos los 3 colores adicionales
	document.getElementById("button-color4").style.display = 'none';
	document.getElementById("button-color5").style.display = 'none';
	document.getElementById("button-color6").style.display = 'none';
		
	//el color principal va a igualarse a uno de los 3 primeros
	//dependiendo del valor random que le tocó más arriba
	switch (colorPrincipal) {
	case 0:
	case 1:
		colorPrincipal = document.getElementById("color").style.backgroundColor = colorB1; 
		break;
	case 2:
		colorPrincipal = document.getElementById("color").style.backgroundColor = colorB2; 
		break;	
	case 3:
		colorPrincipal = document.getElementById("color").style.backgroundColor = colorB3; 
		break;
		}

	//cambiamos la opacidad a la mitad
	document.getElementById("facil").style.opacity ="0.5";
	document.getElementById("normal").style.opacity ="0.5";
	document.getElementById("dificil").style.opacity ="0.5";

	//activa el uso del boton "Nuevo juego"
	document.getElementById("juegoNuevo").style.opacity ="1";
	document.getElementById("juegoNuevo").style.pointerEvents="auto";

	//desactiva los botones de las dificultades
	document.getElementById("facil").style.pointerEvents="none";
	document.getElementById("normal").style.pointerEvents="none";
	document.getElementById("dificil").style.pointerEvents="none";


};





	
//aca buscamos coincidencias y realizamos varias acciones
//el botton de resulado va a cambiar según acierte o no el jugador
//además si pierde el boton desaparecerá en los modos normal y facil
function buscarCoincidencia1() {
	if (colorPrincipal === colorB1) {
			document.getElementById("resultado").value = 'Acertaste';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color1").style.display = 'none';
					puntosAlPerder();}}

function buscarCoincidencia2() {
	if (colorPrincipal === colorB2) {
			document.getElementById("resultado").value = 'Acertaste';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color2").style.display = 'none';
					puntosAlPerder();}}

function buscarCoincidencia3() {
	if (colorPrincipal === colorB3) {
			document.getElementById("resultado").value = 'Acertaste';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color3").style.display = 'none';
					puntosAlPerder();}}

function buscarCoincidencia4() {
	if (colorPrincipal === colorB4) {
			document.getElementById("resultado").value = 'Acertaste';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color4").style.display = 'none';
					puntosAlPerder();}}

function buscarCoincidencia5() {
	if (colorPrincipal === colorB5) {
			document.getElementById("resultado").value = 'Acertaste';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color5").style.display = 'none';
					puntosAlPerder();}}

function buscarCoincidencia6() {
	if (colorPrincipal === colorB6) {
			document.getElementById("resultado").value = 'Acertaste!';
			document.getElementById("resultado").className = 'ganaste';
			puntosAlGanar();
			resetear();
			} else {document.getElementById("resultado").value = 'Le pifiaste';
					document.getElementById("resultado").className = 'perdiste';
					document.getElementById("button-color6").style.display = 'none';
					puntosAlPerder();}}

//busca las dificultades y aplica los reseteos correspondientes
function resetear() {
	if (facil === "on") {
		resetearColoresFacil();} 
		else if (normal === "on") {resetearColoresNormal();} else {resetearColoresDificil(); }
}

 //esta funcion va a seleccionar nuevos colores a los 7 botones
function resetearColoresFacil() {

	//muestro los botones que pudieron desaparecer
	document.getElementById("button-color1").style.display="block";
	document.getElementById("button-color2").style.display="block";
	document.getElementById("button-color3").style.display="block";

	//El color random que debemos buscar
	colorPrincipal = Math.round(Math.random()*3)

	//Los colores random de los 6 botones y los asignamos a variables para usarlos mas adelante
	colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();
	colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();
	colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();
	
switch (colorPrincipal) {
			case 0:
			case 1:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB1; 
				break;
			case 2:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB2; 
				break;	
			case 3:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB3; 
				break;	
			 }
}


function resetearColoresNormal() {
	//muestro los botones que pudieron desaparecer
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.display="block";
	};
	//El color random que debemos buscar
	colorPrincipal = Math.round(Math.random()*6)

	//Los colores random de los 6 botones y los asignamos a variables para usarlos mas adelante
	colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();
	colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();
	colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();
	colorB4 = document.getElementById("button-color4").style.backgroundColor = darRGB();
	colorB5 = document.getElementById("button-color5").style.backgroundColor = darRGB();
	colorB6 = document.getElementById("button-color6").style.backgroundColor = darRGB();

switch (colorPrincipal) {
			case 0:
			case 1:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB1; 
				break;
			case 2:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB2; 
				break;	
			case 3:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB3; 
				break;
			case 4:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB4; 
				break;
			case 5:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB5; 
				break;
			case 6:
				colorPrincipal = document.getElementById("color").style.backgroundColor = colorB6; 
				break;		
			 }
}


// Esta funcion suma 1 al puntaje en facil y 2 al normal
var puntos;
function puntosAlGanar() {
	puntos = parseInt(document.getElementById("puntaje").value)
	if (facil === "on") {
	puntos++;
	document.getElementById("puntaje").value = puntos;} 
		else if (normal === "on") {
			puntos += 2;
			document.getElementById("puntaje").value = puntos;}
			else {
				puntos += 4;
			document.getElementById("puntaje").value = puntos;}
	}

//Esta funcion resta 1 al puntaje en facil y 2 al normal
function puntosAlPerder() {
	puntos = parseInt(document.getElementById("puntaje").value)
	if (facil === "on") {
	puntos--;
	document.getElementById("puntaje").value = puntos;} 
		else if (normal === "on") {
			puntos -= 2;
			document.getElementById("puntaje").value = puntos;}
			else {
				puntos -= 4;
			document.getElementById("puntaje").value = puntos;}
}




}); //TERMINA DOCUMENT READY