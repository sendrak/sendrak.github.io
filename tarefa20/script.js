
window.addEventListener("load",function(){
    var e1 = document.getElementById('verifica1');
    e1.addEventListener('click', Ocultar);

    var e2 = document.getElementById('verifica2');
    e2.addEventListener('click', Ocultar);

    var e3 = document.getElementById('verifica3');
    e3.addEventListener('click', Ocultar);

})



function Ocultar(e)
{  
     
  teste ="painel"+e.target.id[7];
  c = document.getElementById(teste);
  
  if(e.target.innerHTML=="Mostrar Conteudo"){
    c.style.display = "block";
    e.target.textContent="Ocultar Conteúdo"
  }

  else{
    c.style.display = 'none';
    e.target.textContent="Mostrar Conteudo"
  }

}