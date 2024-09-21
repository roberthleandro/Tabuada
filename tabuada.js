function gerar(){
  document.getElementById("tela").innerHTML = ("");
  let input = document.getElementById("number").value;

    if(!input){ alert ("Digite um Número")}

    else {

    for(var n3 = 1 ; n3 >= 1 && n3 <= 10; n3++){
      var txt = document.getElementById("tela")
      var n1 = Number(input)
      var n2 = (n1 * n3)
      txt.innerHTML += (` ${n1} x ${n3} = ${n2} \n`)
      
    }
  }
}