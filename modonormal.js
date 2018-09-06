
$(document).ready(function(){


function darColorNormal()  {
	//le damos el valor "on" para luego usarlo en un IF
	normal = "on";

	//permite clickear en los botones
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.pointerEvents="auto";
	};

	//Muestra el color que debemos encontrar
	document.getElementById("color").style.opacity ="1";

	//El color random que debemos buscar
	colorPrincipal = Math.round(Math.random()*6)

	//Los colores random de los 6 botones y los asignamos a variables para usarlos mas adelante
	colorB1 = document.getElementById("button-color1").style.backgroundColor = darRGB();
	colorB2 = document.getElementById("button-color2").style.backgroundColor = darRGB();
	colorB3 = document.getElementById("button-color3").style.backgroundColor = darRGB();
	colorB4 = document.getElementById("button-color4").style.backgroundColor = darRGB();
	colorB5 = document.getElementById("button-color5").style.backgroundColor = darRGB();
	colorB6 = document.getElementById("button-color6").style.backgroundColor = darRGB();

	//aca mostramos los 3 botones adicionales
	//y agregamos los que puedan desaparecer
	for (i=0; i < arrayButtonsId.length ; i++) {
		document.getElementById(arrayButtonsId[i]).style.display="block";
	};

	//le damos el color al boton chiquito
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

}); //TERMINA DOCUMENT READY
