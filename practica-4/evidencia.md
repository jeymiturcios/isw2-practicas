
# Práctica 4 - Primera suite de tests

## Objetivo
Implementar y probar la función calcularMora utilizando JavaScript puro y Node.js.

## Reglas de negocio
- Aplicar una mora del 5% cuando existen días vencidos.
- No aplicar mora cuando los días vencidos son cero.
- Lanzar un error si el monto es negativo.
- Lanzar un error si los días vencidos no son numéricos.

## Estrategia TDD

### RED
Se escribieron primero dos pruebas:
1. Monto negativo.
2. Días vencidos no numéricos.

Ambas pruebas fallaron con la implementación provisional.

### GREEN
Se implementó calcularMora() y se agregaron
los casos de camino feliz y casos borde.

## Ejecución

Comando:
node fiados.test.js

Resultado:
6 pruebas aprobadas.

## Evidencia
✅ Debe lanzar error cuando el monto es negativo
✅ Debe lanzar error cuando los días no son numéricos
✅ Debe calcular el 5% cuando hay días vencidos
✅ Debe calcular el 5% para un monto diferente
✅ No debe cobrar mora cuando los días vencidos son cero
✅ No debe cobrar mora cuando el monto es cero
con las seis pruebas aprobadas.
