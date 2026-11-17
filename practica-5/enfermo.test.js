
const procesar = require("./enfermo");

function assertEqual(actual, esperado, mensaje) {
    if (JSON.stringify(actual) !== JSON.stringify(esperado)) {
        throw new Error(
            `${mensaje}: esperado ${JSON.stringify(esperado)}, recibido ${JSON.stringify(actual)}`
        );
    }
    console.log(`✓ ${mensaje}`);
}

function test(nombre, callback) {
    try {
        callback();
    } catch (error) {
        console.error(`✗ ${nombre}: ${error.message}`);
        process.exitCode = 1;
    }
}

test("Debe aprobar a un estudiante con promedio mayor o igual a 70", () => {
    const resultado = procesar({ nombre: "Ana" }, [80, 90]);

    assertEqual(resultado.promedio, 85, "Promedio correcto");
    assertEqual(resultado.estado, "Aprobado", "Estado aprobado");
});

test("Debe indicar recuperación con promedio entre 60 y 69", () => {
    const resultado = procesar({ nombre: "Luis" }, [60, 70]);

    assertEqual(resultado.promedio, 65, "Promedio correcto");
    assertEqual(resultado.estado, "Recuperación", "Estado recuperación");
});

test("Debe reprobar con promedio menor a 60", () => {
    const resultado = procesar({ nombre: "Carlos" }, [40, 50]);

    assertEqual(resultado.estado, "Reprobado", "Estado reprobado");
});

test("Debe rechazar notas fuera del rango permitido", () => {
    const resultado = procesar({ nombre: "María" }, [80, 110]);

    assertEqual(resultado.error, true, "Validación de notas");
});

test("Debe rechazar datos incompletos del estudiante", () => {
    const resultado = procesar(null, [80, 90]);

    assertEqual(resultado.error, true, "Validación de estudiante");
});
