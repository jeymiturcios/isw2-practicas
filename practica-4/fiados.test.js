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


// GREEN: Implementar la función calcularMora para que pase las pruebas.

test('Debe calcular el 5% cuando hay días vencidos', () => {
    // Arrange
    const monto = 1000;
    const diasVencidos = 5;

    // Act
    const resultado = calcularMora(monto, diasVencidos);

    // Assert
    assertEqual(resultado, 50);
});

test('Debe calcular el 5% para un monto diferente', () => {
    // Arrange
    const monto = 2000;
    const diasVencidos = 10;

    // Act
    const resultado = calcularMora(monto, diasVencidos);

    // Assert
    assertEqual(resultado, 100);
});

// CASOS BORDE

test('No debe cobrar mora cuando los días vencidos son cero', () => {
    // Arrange
    const monto = 1000;
    const diasVencidos = 0;

    // Act
    const resultado = calcularMora(monto, diasVencidos);

    // Assert
    assertEqual(resultado, 0);
});

test('No debe cobrar mora cuando el monto es cero', () => {
    // Arrange
    const monto = 0;
    const diasVencidos = 5;

    // Act
    const resultado = calcularMora(monto, diasVencidos);

    // Assert
    assertEqual(resultado, 0);
});
