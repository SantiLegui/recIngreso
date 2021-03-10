/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas, marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad ,total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) */
function mostrar() {
	let nombre;
	let cantidadDeLamparas;
	let contFelipe = 0;
	let contArg = 0;
	let contIlluminatis = 0;
	let acumFelipe = 0;
	let acumArg = 0;
	let acumIlluminatis = 0;
	let promFelipe = 0;
	let promArg = 0;
	let promIlluminatis = 0;
	let marca;
	let desc10;
	let desc5;
	let totalDesc;
	let marcaMaxVentas;
	let precioXUnidad;
	let total;
	let precioFinal;
	let totalVentas = 0;
	seguir = "s"
	do {

		nombre = prompt("Ingrese el nombre del cliente").toLowerCase();
		cantidadDeLamparas = parseInt(prompt("Ingrese la cantidad de lamparas:"));
		while (isNaN(cantidadDeLamparas) || cantidadDeLamparas <= 0) {
			cantidadDeLamparas = parseInt(prompt("Error. Ingrese la cantidad de lamparas:"));
		}
		marca = prompt("Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
			marca = prompt("Error. Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		}
		precioXUnidad = parseInt(prompt("Ingrese el precio por unidad"));
		while (isNaN(precioXUnidad) || precioXUnidad <= 0) {
			precioXUnidad = parseInt(prompt("Error. Ingrese el precio por unidad"));
		}
		total = precioXUnidad * cantidadDeLamparas;
		totalVentas += total

		if (marca == "felipelamparas" && cantidadDeLamparas > 5) {
			desc10 = total * 10 / 100
			precioFinal = total - desc10
			totalDesc += desc10
		}
		else if (marca == "argentinaluz" && cantidadDeLamparas >= 3) {
			desc5 = total * 5 / 100
			precioFinal = total - desc5
			totalDesc += desc5
		}


		if (marca == "felipelamparas") {
			acumFelipe += cantidadDeLamparas
			contFelipe++
		} else if (marca == "argentinaluz") {
			acumArg += cantidadDeLamparas
			contArg++
		} else {
			acumIlluminatis += cantidadDeLamparas
			contIlluminatis++
		}

		if (contFelipe > contArg && contFelipe > contIlluminatis) {
			marcaMaxVentas = "FelipeLamparas"
		} else if (contArg >= contFelipe && contArg > contIlluminatis) {
			marcaMaxVentas = "ArgetinaLuz"
		} else {
			marcaMaxVentas = "Illuminatis"
		}



		seguir = prompt("Desea seguir?:  s/n")
	} while (seguir == "s");

	if (contFelipe != 0) {
		promFelipe = acumFelipe / contFelipe
	}
	if (contArg != 0) {
		promArg = acumArg / contArg
	}
	if (contIlluminatis != 0){
		promIlluminatis = acumIlluminatis / contIlluminatis
	}


	console.log("La empresa recaudo $" + totalVentas);
	if (totalDesc != 0) {
		console.log("La empresa perdio $" + totalDesc + " por descuentos");
	}
	console.log("El promedio de la marca FelipeLamparas es de " + promFelipe);
	console.log("El promedio de la marca ArgentinaLuz es de " + promArg);
	console.log("El promedio de la marca Illuminatis es de " + promIlluminatis);
	console.log("La marca que mas vendio es " + marcaMaxVentas);












}