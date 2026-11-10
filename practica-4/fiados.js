/*function calcularMora(monto, diasVencidos) {
    return 0;
}

module.exports = { calcularMora };*/

/*Segunda etapa: Implementar la función calcularMora para que pase las pruebas.*/


function calcularMora(monto, diasVencidos) {

    if (monto < 0) {
        throw new Error('El monto no puede ser negativo');
    }

    if (typeof diasVencidos !== 'number' || !Number.isFinite(diasVencidos)) {
        throw new Error('Los días vencidos deben ser un número válido');
    }

    if (diasVencidos > 0) {
        return monto * 0.05;
    }

    return 0;
}

module.exports = { calcularMora };
