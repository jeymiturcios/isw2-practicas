const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 100;
const NOTA_APROBACION = 70;
const NOTA_RECUPERACION = 60;

function validarEstudiante(estudiante) {
    return Boolean(estudiante && estudiante.nombre);
}

function validarNotas(notas) {
    if (!Array.isArray(notas) || notas.length === 0) {
        return false;
    }

    return notas.every(nota =>
        typeof nota === "number" &&
        nota >= NOTA_MINIMA &&
        nota <= NOTA_MAXIMA
    );
}

function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

function determinarEstado(promedio) {
    if (promedio >= NOTA_APROBACION) {
        return "Aprobado";
    }

    if (promedio >= NOTA_RECUPERACION) {
        return "Recuperación";
    }

    return "Reprobado";
}

function crearResultado(estudiante, promedio, estado) {
    return {
        nombre: estudiante.nombre,
        promedio: Number(promedio.toFixed(2)),
        estado,
        mensaje: `El estudiante ${estudiante.nombre} obtuvo ${estado}`
    };
}

function crearError(mensaje) {
    return {
        error: true,
        mensaje
    };
}

function procesarNotas(estudiante, notas) {
    if (!validarEstudiante(estudiante)) {
        return crearError("Datos del estudiante incompletos");
    }

    if (!validarNotas(notas)) {
        return crearError("Las notas deben estar entre 0 y 100");
    }

    const promedio = calcularPromedio(notas);
    const estado = determinarEstado(promedio);

    return crearResultado(estudiante, promedio, estado);
}

module.exports = procesarNotas;