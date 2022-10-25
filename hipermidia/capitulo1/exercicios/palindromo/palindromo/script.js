function palindromo() {
    var palavra = prompt('verificar palindromo');
    resultado = palavra.split("");

    for (var i = 0; i < palavra.length; i++) {
    if (resultado[i] !== resultado[palavra.length -1 - i]) {
      return alert('não é um palindromo');
  }else
  {
    return alert('é um palidromo');
  }
}
}