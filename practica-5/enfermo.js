
function procesar(a, b) {
    let x = 0;
    let y = "";

    if (a && a.nombre && b && b.length > 0) {
        let z = true;

        for (let i = 0; i < b.length; i++) {
            if (typeof b[i] !== "number" || b[i] < 0 || b[i] > 100) {
                z = false;
            }
        }

        if (z) {
            for (let i = 0; i < b.length; i++) {
                x = x + b[i];
            }

            x = x / b.length;

            if (x >= 70) {
                y = "Aprobado";
            } else {
                if (x >= 60) {
                    y = "Recuperación";
                } else {
                    y = "Reprobado";
                }
            }

            return {
                nombre: a.nombre,
                promedio: Number(x.toFixed(2)),
                estado: y,
                mensaje: "El estudiante " + a.nombre + " obtuvo " + y
            };
        } else {
            return {
                error: true,
                mensaje: "Las notas deben estar entre 0 y 100"
            };
        }
    } else {
        return {
            error: true,
            mensaje: "Datos del estudiante incompletos"
        };
    }
}
