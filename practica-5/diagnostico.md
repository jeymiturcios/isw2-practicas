
# Diagnóstico de código - Práctica 5

## 1. Objetivo

Analizar el código original del procesamiento de notas de estudiantes,
identificar problemas de diseño y mantenibilidad, y documentar las
mejoras aplicadas mediante el proceso de refactorización.

## 2. Problemas identificados y soluciones

| Problema identificado | Principio SOLID violado (número) | Refactor aplicado |
|---|---|---|
| La función principal realizaba validación, cálculo de promedios y determinación de estados. | 1 - Responsabilidad Única (SRP) | Se dividió la lógica en funciones especializadas. |
| La validación de notas estaba mezclada con el procesamiento del estudiante. | 1 - Responsabilidad Única (SRP) | Se creó una función independiente para validar las notas. |
| Los valores 60, 70 y 100 estaban escritos directamente en las condiciones. | No aplica directamente a SOLID. Problema de mantenibilidad. | Se reemplazaron por constantes descriptivas. |
| Las condiciones anidadas dificultaban la lectura del código. | No aplica directamente a SOLID. Problema de legibilidad. | Se utilizaron retornos tempranos para reducir el anidamiento. |
| El cálculo del promedio y la determinación del estado estaban dentro de la función principal. | 1 - Responsabilidad Única (SRP) | Se separaron en las funciones calcularPromedio y determinarEstado. |
| La creación de respuestas de éxito y error estaba mezclada con la lógica principal. | 1 - Responsabilidad Única (SRP) | Se crearon las funciones crearResultado y crearError. |

## 3. Principios SOLID relacionados

**1. SRP - Single Responsibility Principle (Responsabilidad Única)**

Establece que una función o módulo debe tener una responsabilidad
claramente definida y un único motivo para cambiar.

En esta práctica se aplicó separando la validación, el cálculo
del promedio, la determinación del estado y la creación del resultado.

**2. OCP - Open/Closed Principle (Abierto/Cerrado)**

Establece que el software debe permitir extender su comportamiento
sin modificar innecesariamente el código existente.

**3. LSP - Liskov Substitution Principle (Sustitución de Liskov)**

Establece que los objetos de una clase derivada deben poder sustituir
a los de su clase base sin alterar el comportamiento esperado.

**4. ISP - Interface Segregation Principle (Segregación de Interfaces)**

Establece que los clientes no deben depender de interfaces que
no utilizan.

**5. DIP - Dependency Inversion Principle (Inversión de Dependencias)**

Establece que los módulos de alto nivel deben depender de abstracciones
y no de implementaciones concretas.

## 4. Mejoras obtenidas

- Se mejoraron los nombres de variables y funciones.
- Se extrajeron funciones auxiliares.
- Se reemplazaron números mágicos por constantes.
- Se separaron las responsabilidades del procesamiento de notas.
- Se redujo el anidamiento de condiciones.
- Se mejoró la legibilidad y mantenibilidad del código.

## 5. Validación de pruebas

Se verificó el comportamiento del programa mediante cinco casos de prueba:

1. Aprobar a un estudiante con promedio mayor o igual a 70.
2. Indicar recuperación con promedio entre 60 y 69.
3. Reprobar con promedio menor a 60.
4. Rechazar notas fuera del rango permitido.
5. Rechazar datos incompletos del estudiante.

Las pruebas se ejecutaron tanto en el código original refactorizado
como en la versión final sana, comprobando que se conserva el
comportamiento esperado.

## 6. Conclusión

La refactorización permitió mejorar la estructura, legibilidad y
mantenibilidad del código sin cambiar los resultados esperados
del procesamiento de notas.

Se aplicaron principalmente mejoras relacionadas con el principio
de Responsabilidad Única (SRP), además de técnicas de limpieza
y organización del código.
