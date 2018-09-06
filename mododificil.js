$(document).ready(function(){

var intervalo;
var arraySixButtons = ["button-color1", "button-color2", "button-color3", "button-color4", "button-color5", "button-color6"];
var colorRandom;

function darColorDificil() {
	//permite clickear en los botones
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.pointerEvents="auto";
	};
	
	//aca mostramos los 3 botones adicionales
	//y agregamos los que puedan desaparecer
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.display="block";
	};

	//Muestra el color que debemos encontrar
	document.getElementById("color").style.backgroundColor = "grey";
	document.getElementById("color").style.opacity ="1";
	
	//El color random que debemos buscar
	colorPrincipal = Math.round(Math.random()*6)

	//damos los primeros colores antes del intervalo
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
		 };
		
		
	colorRandom= Math.round(Math.random()*5);
var colorListo = "vacio"


	intervalo = setInterval(function modoDificil() {
			colorListo = "vacio"
			
			if (document.getElementById("button-color1").style.display === "block")
			  {colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();}
			
			if (document.getElementById("button-color2").style.display === "block")
			  {colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color3").style.display === "block")
			  {colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color4").style.display === "block")
			  {colorB4 = document.getElementById("button-color4").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color5").style.display === "block")
			  {colorB5 = document.getElementById("button-color5").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color6").style.display === "block")
			  {colorB6 = document.getElementById("button-color6").style.backgroundColor = darRGB();} 
			 

			 /* En la variable colorListo, aclaro si esta llena o vacia dependiendo de lo que devuelva
			 el IF, dentro del switch. Si la variable devuelve lleno, el colorPrincipal toma el rgb de ese boton,
			 sino deja la variable en "vacio" y rompe el switch, por lo que el while da true ya que se cumple su
			 condicion y vuelve a hacer todo de nuevo.  */
			while (colorListo === "vacio") { 
				colorRandom= Math.round(Math.random()*5);
			switch (colorRandom) {
				case 0:
				case 1:
					if (document.getElementById("button-color1").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB1
						colorListo= "lleno";
						break;}
						else {colorListo = "vacio";
						break;}
			
				case 2:
					if (document.getElementById("button-color2").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB2
						colorListo= "lleno";
						break;}
						else {colorListo = "vacio";
						break;}
				case 3:
					if (document.getElementById("button-color3").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB3
						colorListo= "lleno";
						break}
						else {colorListo = "vacio";
						break;}
				case 4:
					if (document.getElementById("button-color4").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB4
						colorListo= "lleno";
						break;}
						else {colorListo = "vacio";
						break;}
				case 5:
					if (document.getElementById("button-color5").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB5
						colorListo= "lleno";
						break;}
						else {colorListo = "vacio";
						break;}
				case 6:
					if (document.getElementById("button-color6").style.display === "block" ) {
						colorPrincipal = document.getElementById("color").style.backgroundColor = colorB6
						colorListo= "lleno";
						break;}
						else {colorListo = "vacio";
						break;}
				};
			}
	}, 3000);


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
}









function resetearColoresDificil() {
	//muestro los botones que pudieron desaparecer
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.display="block";
	};

			if (document.getElementById("button-color1").style.display === "block")
			  {colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();}
			
			if (document.getElementById("button-color2").style.display === "block")
			  {colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color3").style.display === "block")
			  {colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color4").style.display === "block")
			  {colorB4 = document.getElementById("button-color4").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color5").style.display === "block")
			  {colorB5 = document.getElementById("button-color5").style.backgroundColor = darRGB();} 
			
			if (document.getElementById("button-color6").style.display === "block")
			  {colorB6 = document.getElementById("button-color6").style.backgroundColor = darRGB();} 

		colorPrincipal = Math.round(Math.random()*6)
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

}); //TERMINA DOCUMENT READY