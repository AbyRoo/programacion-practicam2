function cambioOpcion(selectelement) {
    value = selectelement.value;
    switch (value) {
        case "triangulo":
            cambiarTitulo("Area del triangulo");
            cambiarLabels("Base", "Altura");
            break;
        case "esfera":
            cambiarTitulo("Volumen esfera");
            cambiarLabels("Radio");
            break;
        case "convertirDolar":
            cambiarTitulo("Convertidor divisas");
            cambiarLabels("Pesos", "Tipo cambio");
            break;
        default:

    }
}


function ejecutar() {
    const selectedValue = document.getElementById("selecionaCalculo").value
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    const resultado = document.getElementById("resultado");
    let resultadoValor = 0;
    switch (selectedValue) {
        case "triangulo":
            if (valor1 < 0) {
                mostrarError("El campo Base no puede ser negativo")
            }
            if (valor2 < 0) {
                mostrarError("El campo altura no puede ser negativo")
            }
            resultadoValor = (valor1 * valor2) / 2
            break;
        case "esfera":
            if (valor1 < 0) {
                mostrarError("El campo Radio no puede ser negativo")
            }
           
            resultadoValor =  (4/3) * Math.PI * Math.pow(valor1, 3);
            break;
        case "convertirDolar":
            if (valor1 < 0) {
                mostrarError("El campo peso no puede ser negativo")
            }
            if (valor2 < 0) {
                mostrarError("El campo tipo cambio no puede ser negativo")
            }
            resultadoValor = valor1 / valor2;
            break;
        default:

    }
    if (resultadoValor > 0) {
        resultado.innerText = `El resultado es: ${resultadoValor.toFixed(2)}`;
    }
}

function cambiarTitulo(titulo) {
    document.getElementById("titulo").innerText = titulo
}

function mostrarError(error) {
    document.getElementById("error").innerText = error;
}

function cambiarLabels(label1, label2) {
    document.getElementById("label1").innerText = label1;
    document.getElementById("label2").innerText = label2;

if (!label2 || label2.trim() === "") {
        document.getElementById("label2").style.display = "none";
        
    }
     }

function limpiar() {
    document.getElementById("titulo").innerText = "";
    document.getElementById("label1").innerText = "";
    document.getElementById("label2").innerText = "";
    document.getElementById("error").innerText = "";
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("selecionaCalculo").selectedIndex = 0;
}



