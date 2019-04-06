
// window.addEventListener("load",function(){
//     var boton=document.getElementById('btnGuardar');//boton=$('btnGuardar);
//     boton.addEventListener("click",agregar);
// });
function $(id){
    return document.getElementById('id');
}
function Agregar(){
     var nombre=document.getElementById('inputNombre').value;
     var apellido=document.getElementById('inputApellido').value;
    
     if(nombre=='')
     {
         nombre.className="Error";
     }
     if(apellido=='')
     {
         apellido.className="Error";
     }
     else{
        if(confirm("Esta seguro que desea agregar?")==true)
        {
            var tBody=document.getElementById('tCuerpo');
            tBody.innerHTML=tBody.innerHTML + "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td><a href=''>borrar</td></tr>"
        }
     }
     
}
function cerrar()
{
    document.getElementById('divIngreso').style.display='none';
}
function AbrirAgregar(){
    document.getElementById('divIngreso').style.display='inline-block';
}