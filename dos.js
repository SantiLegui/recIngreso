function mostrar() {
    /*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
    los datos solicitados son:
    nombre 
    carrera("Quimica";"Fisica";"Sistemas")
    sexo (masculino - femenino - no binario)
    cantidad de materias(entre 1 y 5)
    Nota promedio (entre 0 y 10)
    edad (validar)
    se debe informar de existir, o informar que no existe , en el caso que corresponda.
    a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    b) El nombre de la alumna mas joven.
    c) Porcentaje de estudiantes que estudia cada carrera.
    d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/


    let nombre;
    let carrera;
    let sexo;
    let cantidadMaterias;
    let nota;
    let edad;
    let mejorPromedioFisica;
    let nombreMejorPromedioFisica;
    let flagPromedioFisica = 1;
    let nombreAlumnaJoven;
    let edadAlumnaJoven;
    let flagAlumnaJoven = 1;
    let edadMasMaterias;
    let nombreMaxCantidadDeMaterias;
    let maxCantidadDeMaterias;
    let flagMaxCantidadDeMaterias = 1;



    for (let i = 0; i < 2; i++) {

        nombre = prompt("Ingrese nombre: ");
        while (!(isNaN(nombre))) {


            nombre = prompt("Error. Ingrese nombre: ");

        }

        carrera = prompt("Ingrese carrera (quimica, fisica o sistemas) : ").toLowerCase();
        while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {

            carrera = prompt("Error, ingrese carrera (quimica, fisica o sistemas) : ").toLowerCase();

        }

        sexo = prompt("Ingrese sexo (masculino, femenino o no binario) : ");
        while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {

            sexo = prompt("Error, ingrese sexo (masculino, femenino o no binario) : ");


        }

        cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias (entre 1 y 5)"));
        while (cantidadMaterias < 1 || cantidadMaterias > 5 || isNaN(cantidadMaterias)) {

            cantidadMaterias = parseInt(prompt("Error, ingrese cantidad de materias (entre 1 y 5)"));


        }

        nota = parseInt(prompt("Ingrese nota (entre 0 y 10)"));
        while (nota < 0 || nota > 10 || isNaN(nota)) {

            nota = parseInt(prompt("Error, ingrese nota (entre 0 y 10)"));

        }



        edad = parseInt(prompt("Ingrese edad: "));
        while (isNaN(edad) || edad <= 17) {

            edad = parseInt(prompt("Error, Ingrese edad: "));

        }



        if (carrera == "fisica") {

            if (flagPromedioFisica || nota > mejorPromedioFisica) {

                mejorPromedioFisica = nota;
                nombreMejorPromedioFisica = nombre;
                flagPromedioFisica = 0;

            }
        }




        if (sexo == "femenino") {

            if (flagAlumnaJoven || edad < edadAlumnaJoven) {

                edadAlumnaJoven = edad;
                nombreAlumnaJoven = nombre;
                flagAlumnaJoven = 0;

            }
        }



        if (carrera != "quimica") {

            if (flagMaxCantidadDeMaterias || cantidadMaterias > maxCantidadDeMaterias) {

                maxCantidadDeMaterias = cantidadMaterias;
                nombreMaxCantidadDeMaterias = nombre;
                edadMasMaterias = edad;
                flagMaxCantidadDeMaterias = 0;

            }

        }

    }


    if (flagPromedioFisica != 0) {
        console.log("a) No se ingresaron alumnos que estudien fisica")
    }
    else {
        console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica es: " + nombreMejorPromedioFisica + " con un promedio de " + mejorPromedioFisica);
    }
    if (flagAlumnaJoven != 0) {
        console.log("b) No se ingresaron alumnas");
    }
    else {
        console.log("b) El nombre de la alumna mas joven es: " + nombreAlumnaJoven + " con una edad de " + edadAlumnaJoven);
    }
    if (flagMasMaterias != 0) {
        console.log("Sólo se ingresaron alumnos que cursan química")
    }
    else {
        console.log("La edad y nombre del estudiante que cursa mas materias es: " + edadMasMaterias + " y " + nombreMaxCantidadDeMaterias + " con una cantidad de materias de " + maxCantidadDeMaterias);
    }




}