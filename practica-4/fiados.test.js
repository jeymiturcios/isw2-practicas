const { calcularMora } = require('./fiados');

function test(nombre, fn) {
    try {
        fn();
        console.log(`✅ ${nombre}`);
    } catch (error) {
        console.log(`❌ ${nombre}: ${error.message}`);
    }
}

function assertEqual(actual, esperado) {
    if (actual !== esperado) {
        throw new Error(`Esperado ${esperado}, recibido ${actual}`);
    }
}

function assertThrows(fn) {
    let errorLanzado = false;

    try {
        fn();
    } catch (error) {
        errorLanzado = true;
    }

    if (!errorLanzado) {
        throw new Error('Se esperaba un error');
    }
}

// PRUEBAS RED: escritas antes de implementar las reglas.

test('Debe lanzar error cuando el monto es negativo', () => {
    assertThrows(() => calcularMora(-100, 5));
});

test('Debe lanzar error cuando los días no son numéricos', () => {
    assertThrows(() => calcularMora(100, 'cinco'));
});