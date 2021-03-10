/*Una software factory registra la siguiente informacion de sus empleados:
Nombre ,edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 
*/
function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let sueldoF = 0;
	let sueldoM = 0;
	let sueldoNB = 0;
	let puesto;
	let sueldo;
	let promProgramador = 0;
	let acumProgramador = 0;
	let contProgramador = 0;
	let promAnalista = 0;
	let acumAnalista = 0;
	let contAnalista = 0;
	let promQa = 0;
	let acumQa = 0;
	let contQa = 0;
	let sueldoMax;
	let flagFemSueldo = 1;
	let femSueldo;
	let nombreFemMaxSueldo;
	let programNoBin = 0;
	let seguir = "s";


	do {
		nombre = prompt("Ingrese un nombre: ");

		edad = parseInt(prompt("Ingrese la edad: "));
		while (isNaN(edad) || edad <= 0) {
			edad = parseInt(prompt("Error. Ingrese la edad: "));
		}
		sexo = prompt("Ingrese sexo: femenino/masculino/no binario").toLowerCase();
		while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
			sexo = prompt("Error. Ingrese sexo: femenino/masculino/no binario").toLowerCase();
		}
		puesto = prompt("Ingrese el puesto:  programador/analista/Qa").toLowerCase();
		while (puesto != "programador" && puesto != "analista" && puesto != "qa") {
			puesto = prompt("error. Ingrese el puesto:  programador/analista/Qa").toLowerCase();
		}
		sueldo = parseInt(prompt("Ingrese un sueldo entre 15000 y 70000"));
		while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000) {
			sueldo = parseInt(prompt("Error. Ingrese un sueldo entre 15000 y 70000"));
		}
		if (puesto == "programador") {
			acumProgramador += sueldo
			contProgramador++
			if (sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000) {
				programNoBin++
			}
		} else if (puesto == "analista") {
			acumAnalista += sueldo
			contAnalista++
		}
		else {
			acumQa += sueldo
			contQa++
		}

		if (sexo == "femenino") {
			sueldoF += sueldo
		} else if (sexo == "masculino") {
			sueldoM += sueldo
		} else {
			sueldoNB += sueldo
		}

		if (sueldoF > sueldoM && sueldoF > sueldoNB) {
			sueldoMax = "femenino"
		} else if (sueldoM >= sueldoF && sueldoM > sueldoNB) {
			sueldoMax = "masculino"
		} else {
			sueldoMax = "no binario"
		}


		if (flagFemSueldo || sueldo > femSueldo) {
			femSueldo = sueldo;
			nombreFemMaxSueldo = nombre;
			flagFemSueldo = 0
		}

		if (contProgramador != 0) {
			promProgramador = acumProgramador / contProgramador
		}
		if (contAnalista != 0) {
			promAnalista = acumAnalista / contAnalista
		}
		if (contQa != 0) {
			promQa = acumQa / contQa
		}
		seguir = prompt("Desea seguir ingresando datos?:");
	} while (seguir == "s");

	console.log("El promedio de sueldo de los Programadores es de " + promProgramador)
	console.log("El promedio de sueldo de los Analistas es de " + promAnalista)
	console.log("El promedio de sueldo de los Qa es de " + promQa)

	console.log("El sexo que tiene el mayor sueldo es el " + sueldoMax)
	console.log("La mujer con mas sueldo se llama " + nombreFemMaxSueldo)
	console.log("La cantidad de programadores no binarios con un sueldo entre 20000 y 55000 es de " + programNoBin)







}