onload = () => {
    var formulario = document.getElementById('formulario');
    formulario.onsubmit = (submit) => {
        submit.preventDefault();
        var cidadeRetirada = document.getElementById('cidade_retirada').value;
        var cidadeEntrega = document.getElementById('cidade_entrega').value;
        var tipoCarro = document.getElementById('tipo_carro').value;
        var precoTipo = {basico: 119, ar: 199, executivo: 299};
        var totalPreco = 0;
        totalPreco = totalPreco + precoTipo[tipoCarro];

        if(cidadeEntrega !== cidadeRetirada){
            totalPreco = totalPreco + 300;
        }
        alert('preço: ' + totalPreco + ' reais');
    }
}

