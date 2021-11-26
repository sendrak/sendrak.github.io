function verificaPalindromo(){
    var palavra = window.prompt("Digite uma palavra para verificar.");
    var compara = palavra.split("").reverse().join("");

    if (palindromo(palavra)==1) {
        alert(palavra+' - Não é palindromo');
    }else {
        alert(palavra+' - É um palindromo');
    }

    function palindromo(palavra){
        if(palavra !== compara){
          return 1;
        }
        return 0;
     }
}


