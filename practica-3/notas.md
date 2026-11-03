# Práctica 3: Refactor SOLID

## Notas de los principios aplicados

### S — Single Responsibility Principle (SRP)

1. Se aplicó el principio correspondiente del decálogo que establece que una clase debe tener una única responsabilidad.
2. La clase original `Pedido` realizaba múltiples tareas dentro de un mismo método.
3. Se separaron las responsabilidades en `ValidadorStock`, `CalculadoraPedido` e `ImpresoraTicket`.
4. Cada componente ahora tiene una función específica, facilitando su mantenimiento y modificación.
5. Esta separación permite realizar pruebas individuales sin afectar las demás funcionalidades.

### D — Dependency Inversion Principle (DIP)

1. Se aplicó el principio correspondiente del decálogo que establece que los módulos de alto nivel no deben depender directamente de módulos de bajo nivel.
2. La clase `Pedido` dejó de crear directamente las dependencias de base de datos y WhatsApp.
3. Se implementó inyección de dependencias mediante el constructor.
4. Los componentes `RepositorioBaseDatos` y `ServicioWhatsApp` se proporcionan desde el exterior.
5. Esto reduce el acoplamiento y permite sustituir las implementaciones por otras sin modificar la lógica principal de `Pedido`.

## Conclusión

El refactor permitió mejorar la organización del código mediante la separación de responsabilidades y la inversión de dependencias. Como resultado, el diseño es más mantenible, flexible y fácil de probar.