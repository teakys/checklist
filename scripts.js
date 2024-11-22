const item = document.getElementById("main-input");
const botaoSalvarItem = document.getElementById("add-item");
const listaDeCompras = document.getElementById("list");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("list-container");

    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("main-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "./assets/images/excluir.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}