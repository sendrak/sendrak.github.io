function validarEmail(){
    var email = document.getElementById("texto");

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if(!regex.test(email.value)){
        return alert("O e-mail " +email.value+ " é Inválido!");
    }else{
        return alert("O e-mail " +email.value+ " é um email Válido!");
    }
}
