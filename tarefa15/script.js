function fatorial(){
    var num = window.prompt("Digite numero inteiro.");

    var total=1;
    if(num<=1){
        alert("O fatorial de "+num+" é 1");
    }else{
        for(var i = 1; i<=num; i++){
            total *=i;
        }
    }
    alert("O fatorial de "+num+" é "+total);

}