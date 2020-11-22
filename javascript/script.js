document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector("#qtde").addEventListener("change", atualizaPreco);

function atualizaPreco(){
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    let preco = qtde * 100;
    if (temJS) preco += (preco/10)
    document.querySelector("#preco").innerHTML = `R$ ${preco}`;
}