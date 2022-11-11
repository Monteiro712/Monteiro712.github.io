function pegarNome(){
    var Pname = document.getElementById('pInicial')
    var pegar_Nome = document.getElementsByTagName('input')
    Pname.textContent+=pegar_Nome[0].value
}