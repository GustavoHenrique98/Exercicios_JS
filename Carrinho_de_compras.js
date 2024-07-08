const siteElements ={
    inputs:document.querySelectorAll('.entradas'),
    precos:document.querySelectorAll('.precos'),
    saida:document.getElementById('saida')
}


let cart = [];


siteElements.inputs.forEach((input, i) => {
    input.addEventListener('change', (e) => {
        let valorInput = parseInt(e.target.value);
        let preco = parseFloat(siteElements.precos[i].textContent);
        
       
        if (isNaN(valorInput) || valorInput < 0) {
            valorInput = 0;
        }

        cart[i] = valorInput * preco;

        let total = cart.reduce((acc, curr) => acc + curr, 0);


        siteElements.saida.textContent = total.toFixed(2); // Arredonda para 2 casas decimais
    });
});