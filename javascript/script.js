document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector("#qtde").addEventListener("change", atualizaPreco);
document.querySelector("#js").addEventListener("change", atualizaPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco)
function atualizaPreco(){    
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const layout = document.querySelector("#layout-sim").checked;
    let preco = qtde * 100;
    if(layout) preco = preco + 500;
    if (temJS) preco += (preco/10)
    document.querySelector("#preco").innerHTML = `R$ ${preco}`;
}