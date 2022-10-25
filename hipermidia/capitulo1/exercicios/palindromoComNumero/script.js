function palindromo() {
    var palavra = prompt('verificar palindromo');
    var resultado = palavra.toString();
    var word = resultado.split("");
    for (var i = 0; i < palavra.length; i++) {
    if (word[i] !== word[palavra.length -1 - i]) {
      return alert('não é um palindromo');
  }else
  {
    return alert('é um palidromo');
  }
}
}