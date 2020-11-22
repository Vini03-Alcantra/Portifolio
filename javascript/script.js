document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector("#qtde").addEventListener("change", atualizaPreco);

function atualizaPreco(){
    const qtde = document.querySelector("#qtde").value;
    let preco = qtde * 100;
    document.querySelector("#preco").innerHTML = `R$ ${preco}`;
}