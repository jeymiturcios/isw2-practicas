# Práctica 3: Refactor SOLID

## Implementación después del refactor

Se separaron las responsabilidades de la clase original `Pedido` en diferentes componentes. 

### 1. Clase ValidadorStock

Responsable únicamente de verificar que exista suficiente inventario.

```javascript
class ValidadorStock {
    validar(productos) {
        for (const producto of productos) {
            if (producto.stock < producto.cantidad) {
                throw new Error(
                    "Stock insuficiente para: " + producto.nombre
                );
            }
        }
        return true;
    }
}
```

### 2. Clase CalculadoraPedido

Responsable de calcular el subtotal, el ISV y el total del pedido.

```javascript
class CalculadoraPedido {
    calcular(productos) {
        let subtotal = 0;

        for (const producto of productos) {
            subtotal += producto.precio * producto.cantidad;
        }

        const isv = subtotal * 0.15;
        const total = subtotal + isv;

        return { subtotal, isv, total };
    }
}
```

### 3. Clase ImpresoraTicket

Responsable únicamente de generar e imprimir el ticket.

```javascript
class ImpresoraTicket {
    imprimir(pedido, cliente) {
        console.log("========== TICKET ==========");
        console.log("Cliente: " + cliente.nombre);

        for (const producto of pedido.productos) {
            console.log(
                producto.nombre + " x " +
                producto.cantidad + " = L. " +
                (producto.precio * producto.cantidad)
            );
        }

        console.log("----------------------------");
        console.log("Subtotal: L. " + pedido.subtotal);
        console.log("ISV (15%): L. " + pedido.isv);
        console.log("TOTAL: L. " + pedido.total);
        console.log("============================");
    }
}
```

### 4. Clase Pedido

Responsable de coordinar el procesamiento del pedido. Recibe sus dependencias mediante el constructor.

```javascript
class Pedido {
    constructor(
        validadorStock,
        calculadora,
        repositorioPedidos,
        notificador,
        impresora
    ) {
        this.validadorStock = validadorStock;
        this.calculadora = calculadora;
        this.repositorioPedidos = repositorioPedidos;
        this.notificador = notificador;
        this.impresora = impresora;
    }

    procesar(productos, cliente) {
        this.validadorStock.validar(productos);

        const calculo = this.calculadora.calcular(productos);

        const pedido = {
            cliente: cliente.nombre,
            telefono: cliente.telefono,
            productos: productos,
            subtotal: calculo.subtotal,
            isv: calculo.isv,
            total: calculo.total
        };

        this.repositorioPedidos.guardar(pedido);

        this.impresora.imprimir(pedido, cliente);

        this.notificador.enviarWhatsApp(
            cliente.telefono,
            "Tu pedido fue procesado. Total: L. " + pedido.total
        );

        return pedido;
    }
}
```

### 5. Dependencias externas

Las implementaciones concretas se crean fuera de la clase `Pedido` y se inyectan al construirla.

```javascript
const repositorioPedidos = new RepositorioBaseDatos();
const notificador = new ServicioWhatsApp();

const validador = new ValidadorStock();
const calculadora = new CalculadoraPedido();
const impresora = new ImpresoraTicket();

const pedido = new Pedido(
    validador,
    calculadora,
    repositorioPedidos,
    notificador,
    impresora
);

pedido.procesar(productos, cliente);
```

**Resultado:** la clase `Pedido` ya no necesita conocer los detalles internos de la base de datos ni de WhatsApp. Puede trabajar con cualquier implementación que proporcione los métodos esperados.