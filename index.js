
function somatorio() {
    var soma = 0;
    for(var i = 1; i < (parseInt(document.getElementById('numero').value)); i++){
           
        if((i % 3 == 0)||(i % 5 == 0)){
            soma += i;
        }
    }
    document.getElementById('result').innerHTML = soma;
  }