
function validarNotas(notas) {
    for (let indice = 0; indice < notas.length; indice++) {
        if (
            typeof notas[indice] !== "number" ||
            notas[indice] < 0 ||
            notas[indice] > 100
        ) {
            return false;
        }
    }

    return true;
}

function calcularPromedio(notas) {
    let promedio = 0;

    for (let indice = 0; indice < notas.length; indice++) {
        promedio += notas[indice];
    }

    return promedio / notas.length;
}

function procesarNotas(estudiante, notas) {
    let promedio = 0;
    let estado = "";

    if (estudiante && estudiante.nombre && notas && notas.length > 0) {
        if (validarNotas(notas)) {
            promedio = calcularPromedio(notas);

            if (promedio >= 70) {
                estado = "Aprobado";
            } else {
                if (promedio >= 60) {
                    estado = "Recuperación";
                } else {
                    estado = "Reprobado";
                }
            }

            return {
                nombre: estudiante.nombre,
                promedio: Number(promedio.toFixed(2)),
                estado: estado,
                mensaje: "El estudiante " + estudiante.nombre + " obtuvo " + estado
            };
        } else {
            return {
                error: true,
                mensaje: "Las notas deben estar entre 0 y 100"
            };
        }
    } else {
        return {
            error: true,
            mensaje: "Datos del estudiante incompletos"
        };
    }
}

module.exports = procesarNotas;
