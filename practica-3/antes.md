# Práctica 3: Refactor SOLID

## Implementación original (antes del refactor)

La clase `Pedido` concentra múltiples responsabilidades en un solo método: validar el inventario, calcular los importes, guardar la información, imprimir el ticket y notificar al cliente.

```javascript
class Pedido {
    procesarPedido(productos, cliente) {
        console.log("Iniciando procesamiento del pedido...");

        let subtotal = 0;
        let disponible = true;

        // 1. Validar el stock de cada producto
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];

            if (producto.stock < producto.cantidad) {
                console.log("Stock insuficiente para: " + producto.nombre);
                disponible = false;
                break;
            }
        }

        if (!disponible) {
            console.log("El pedido no puede procesarse.");
            return false;
        }

        // 2. Calcular el subtotal
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            subtotal += producto.precio * producto.cantidad;
        }

        // 3. Calcular el ISV (15%)
        let isv = subtotal * 0.15;
        let total = subtotal + isv;

        // 4. Actualizar el inventario
        for (let i = 0; i < productos.length; i++) {
            productos[i].stock -= productos[i].cantidad;
        }

        // 5. Guardar el pedido en la base de datos
        let pedidoDB = {
            cliente: cliente.nombre,
            telefono: cliente.telefono,
            productos: productos,
            subtotal: subtotal,
            isv: isv,
            total: total,
            fecha: new Date()
        };

        console.log("Conectando a la base de datos...");
        console.log("Guardando pedido...");
        let guardado = true;

        if (!guardado) {
            console.log("Error al guardar el pedido.");
            return false;
        }

        // 6. Imprimir el ticket
        console.log("========== TICKET ==========");
        console.log("Cliente: " + cliente.nombre);
        console.log("----------------------------");

        for (let i = 0; i < productos.length; i++) {
            console.log(
                productos[i].nombre + " x " +
                productos[i].cantidad + " = " +
                (productos[i].precio * productos[i].cantidad)
            );
        }

        console.log("----------------------------");
        console.log("Subtotal: L. " + subtotal);
        console.log("ISV (15%): L. " + isv);
        console.log("TOTAL: L. " + total);
        console.log("============================");

        // 7. Enviar confirmación por WhatsApp
        let mensaje = "Hola " + cliente.nombre +
            ", tu pedido fue procesado. Total: L. " + total;

        console.log("Enviando WhatsApp a: " + cliente.telefono);
        let enviado = true;

        if (!enviado) {
            console.log("No se pudo enviar el WhatsApp.");
        }

        console.log("Pedido procesado correctamente.");
        return true;
    }
}
```