let contador = 0;

function selecPrato(prato) {
    const prato1 = document.querySelector(".pratoSelecionado");

    if (prato1 !== null) {
        prato1.classList.remove("pratoSelecionado");
        prato1.querySelector("ion-icon").classList.add("none");
    }
    else
        contador++;

    prato.classList.toggle("pratoSelecionado");
    prato.querySelector("ion-icon").classList.remove("none");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Finalizar Pedido";
        document.querySelector(".h12").classList.add("none");
    }
};

function selecBebida(bebida) {
    const bebida1 = document.querySelector(".bebidaSelecionada");

    if (bebida1 !== null) {
        bebida1.classList.remove("bebidaSelecionada");
        bebida1.querySelector("ion-icon").classList.add("none");
    }
    else
        contador++;

    bebida.classList.toggle("bebidaSelecionada");
    bebida.querySelector("ion-icon").classList.remove("none");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Finalizar Pedido";
        document.querySelector(".h12").classList.add("none");
    }
};

function selecSobremesa(sobremesa) {
    const sobremesa1 = document.querySelector(".sobremesaSelecionada");

    if (sobremesa1 !== null) {
        sobremesa1.classList.remove("sobremesaSelecionada");
        sobremesa1.querySelector("ion-icon").classList.add("none");
    }
    else
        contador++;

    sobremesa.classList.toggle("sobremesaSelecionada");
    sobremesa.querySelector("ion-icon").classList.remove("none");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Finalizar Pedido";
        document.querySelector(".h12").classList.add("none");
    }
};