onload = () => {
    var form = document.getElementById('form');

    form.onsubmit = (submit) => {
        submit.preventDefault();

        var cidadeRetirada = document.getElementById('cidade_retirada').value;
        var cidadeEntrega = document.getElementById('cidade_entrega').value;
        var tipoCarro = document.getElementById('tipo_carro').value;

        var precoTipo = {basico: 119, ar: 199, executivo: 299};

        var totalPreco = 0;

        totalPreco += precoTipo[tipoCarro];
        if(cidadeEntrega !== cidadeRetirada){
            totalPreco+=300;
        }

        window.alert('preço: ' + totalPreco + ' reais');

    }
}

