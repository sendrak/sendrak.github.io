function tempoTranscorrido(){
    var date = document.getElementById("date").value;
    var dataInformada = new Date(date);
    var comparacao = new Date(new Date() - dataInformada);

    console.log(date);
    console.log(dataInformada);
    console.log(comparacao);
    return alert((comparacao.toISOString().slice(0, 4) - 1970) + " Anos, " +
        comparacao.getMonth() + " Meses, e " + (comparacao.getDate()-1) + " Dias");
}
