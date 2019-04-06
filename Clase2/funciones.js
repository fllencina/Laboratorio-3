
window.addEventListener("load",function(){
var btnSumar=document.getElementById('btnSumar');
btnSumar.addEventListener("click",Sumar);
var btnSumarYGuardar=document.getElementById('btnSumarYGuardar');
btnSumarYGuardar.addEventListener("click",Sumar);
btnSumarYGuardar.addEventListener("click",Guardar);

});

function Sumar(){
    var Numero1=document.getElementById('inputNumero1');
    var Numero2=document.getElementById('inputNumero2');
    var resultado= (parseInt(Numero1.value) + parseInt(Numero2.value));
   
    inputResultado.value=resultado;
}
function Guardar(){
    var tbody=document.getElementById('tbody');
    var Numero1=document.getElementById('inputNumero1').value;
    var Numero2=document.getElementById('inputNumero2').value;
    var resultado= (parseInt(Numero1) + parseInt(Numero2));
    tbody.innerHTML="<tr><td>" + Numero1 +"</td> <td>" + Numero2 + "</td><td>"+ resultado +"</td></tr>" ;
    // var Fila=tbody.insertRow(1);
    // var CeldaNumero1=Fila.insertCell(0);
    // CeldaNumero1.innerHTML = Numero1;
    // var CeldaNumero2=Fila.insertCell(1);
    // CeldaNumero2.innerHTML=Numero2;
    //  var CeldaResultado=Fila.insertCell(2);
    // CeldaResultado.innerHTML=resultado;

   
}