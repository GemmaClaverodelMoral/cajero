class Billete {
    constructor(valor, cantidadDisponible) {
        this.valor = valor;
        this.cantidadDisponible = cantidadDisponible;
    }
}

const caja = [
    new Billete(50, 3),
    new Billete(20, 2),
    new Billete(10, 2),
];

function entregarDinero() {
    var cantidadDisponible = parseInt(document.getElementById("input_cantidad").value)
    var resultado = document.getElementById("resultado_p");
    console.log(cantidadDisponible)
    let billetesEntregados = [];
    let saldo = cantidadDisponible;

    for (let billete of caja) 
    {
            let billetesUsados = Math.min(Math.floor(saldo / billete.valor), billete.cantidadDisponible); //se divide el saldo por la denominacion de los billetes. Se toma la parte entera del billetesEntregados.Se le entrega el valor minimo entre esta parte entera y la cantidadDisponible de billetes disponibles.
            billetesEntregados.push( new Billete(billete.valor, billetesUsados)); //Se guarda el billetesEntregados de valor y cantidadDisponible usada en areglo de billetesEntregados.
            saldo -= billete.valor * billetesUsados;
    }

    if (saldo === 0) 
    {
        let mensaje = 'Dinero entregado: <br>';
        for (let billete of billetesEntregados) {
            mensaje += `${billete.cantidadDisponible} billetes de ${billete.valor}<br>`;
            resultado.innerHTML += billete.cantidadDisponible + " billetes de $" + billete.valor + "<br />";
        }
        document.getElementById("mensaje-modal").innerHTML = mensaje;  // Actualizar el contenido del modal con el mensaje
        $('#miModal').modal('show');  // Mostrar el modal
    } else {
        let mensaje = 'Soy un cajero pobre y no te puedo dar ese dinero';
        document.getElementById("mensaje-modal").innerHTML = mensaje;  // Actualizar el contenido del modal con el mensaje
        $('#miModal').modal('show');  // Mostrar el modal
        resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad :(";
    }
}

var sacar = document.getElementById("boton_sacar")
sacar.addEventListener("click", entregarDinero)
    // Coloca aquí tu código que deseas ejecutar después de que el HTML esté completamente cargado

