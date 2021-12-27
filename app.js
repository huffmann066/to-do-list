const botaoAdicionar = document.querySelector(".adicionar");
const inputDoUsuario = document.querySelector(".texto");
const lista = document.querySelector(".listaDeTarefas");

botaoAdicionar.addEventListener("click", adicionar);

function adicionar(event){
    event.preventDefault();
    
    const divs = document.createElement("div");
    divs.classList.add("divs");
    
    const linhaLista = document.createElement("li");
    linhaLista.innerText = inputDoUsuario.value;
    linhaLista.classList.add("linha");
    divs.appendChild(linhaLista);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("excluir");
    botaoExcluir.innerText = "X";
    divs.appendChild(botaoExcluir);

    const pronto = document.createElement("button");
    pronto.innerText = "ok";
    pronto.classList.add("pronto");
    divs.appendChild(pronto);

    lista.appendChild(divs);
    
    inputDoUsuario.value = "";
}

