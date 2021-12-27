const botaoAdicionar = document.querySelector(".adicionar");
const inputDoUsuario = document.querySelector(".texto");
const lista = document.querySelector(".listaDeTarefas");


botaoAdicionar.addEventListener("click", adicionar);
lista.addEventListener("click", botaoDeExcluir);

function adicionar(event){
    event.preventDefault();
    
    if(inputDoUsuario.value === ""){
        alert("invalido! tarefa vazia")
    }else{
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

    
}

function botaoDeExcluir(e){
    const item = e.target;
    if(item.classList[0] === "excluir"){
        const minhaDiv = item.parentElement;
        minhaDiv.remove();
    }
    if(item.classList[0] === "pronto"){
        const minhaDiv = item.parentElement;
        minhaDiv.classList.toggle("ok");
    }
}
