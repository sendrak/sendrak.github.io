

function calculaPreco(){
    //Dados
    var name = document.getElementById('nome');
    var telefone = document.getElementById('telefone');
    var cidadeRetirada = document.getElementById('cidRet');
    var cidadeDevolucao = document.getElementById('cidDev');
    //Datas
    var dataRetirada = document.getElementById('dataRetirada');
    var dataDevolucao = document.getElementById('dataDevolucao');

    var dataRetiradaReal = new Date(dataRetirada.value);
    var dataDevolucaoReal = new Date(dataDevolucao.value);

    var calculo = dataDevolucaoReal - dataRetiradaReal;
    var diferencaDias = calculo / (1000*3600*24);

    //Correção de dias negativos ou mesmo dia
    if(diferencaDias <= 0){
        diferencaDias = 1;
    }

    //Tipo
    var tipo = document.getElementById('tipo').value;

    if(cidadeRetirada.value != cidadeDevolucao.value){
        if(tipo == 119){
            var valorAluguel = (diferencaDias * tipo)+300;
            tipo = "Básico(R$ 119,00)";
        }else if(tipo == 199){
            var valorAluguel = (diferencaDias * tipo)+300;
            tipo = "Básico com Ar(R$ 199,00)";
        }else{
            var valorAluguel = (diferencaDias * tipo)+300;
            tipo = "Executivo(R$ 299,00)";
        }
    }else{
        if(tipo == 119){
            var valorAluguel = diferencaDias * tipo;
            tipo = "Básico(R$ 119,00)";
        }else if(tipo == 199){
            var valorAluguel = diferencaDias * tipo;
            tipo = "Básico com Ar(R$ 199,00)";
        }else{
            var valorAluguel = diferencaDias * tipo;
            tipo = "Executivo(R$ 299,00)";
        }
    }

    return alert(
        "Nome: "+name.value+
        "\ntelefone: "+telefone.value+
        "\nCidade de Retirada: "+cidadeRetirada.value+
        "\nCidade de Devolução: "+cidadeDevolucao.value+ 
        "\nData de Retirada: "+dataRetirada.value+
        "\nData de Devolução: "+dataDevolucao.value+
        "\nTipo: "+tipo+
        "\nDias de Aluguel: "+diferencaDias+
        "\nValor Aluguel: "+valorAluguel+",00"
    );

}