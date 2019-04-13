var xml=new XMLHttpRequest();
window.addEventListener("load",function(){
    var btn= $("btn");
    btn.addEventListener("click",enviarPost);
    // btn.addEventListener("click",enviarGet);
    
});
function callback()
{
    if(xml.readyState===4){
        if(xml.status===200)
        {
            var respuesta=xml.responseText;
            if(respuesta=="true"){
                 alert("login ok")
             }
             else if(respuesta=="false")
            {
                 alert("datos incorrectos.")
            }
        }
        
        else{
            alert("error en el servidor");
        }
    }
}
// function enviarGet(){
//     var usr= $("usuario");
//     var pass= $("pass");

//     if(usuario.value!="" && pass.value!="")
//     {
//         var parametros="?usr="+usr.value+"&pass="+pass.value;
//         xml.open("GET","http://localhost:3000/loginUsuario"+parametros,true);
//         xml.onreadystatechange=callback;
//         xml.send();
//     }
// }
function enviarPost(){
    var usr= $("usuario");
    var pass= $("pass");

    if(usuario.value!="" && pass.value!="")
    {
        var parametros="usr="+usr.value+"&pass="+pass.value;
        xml.open("POST","http://localhost:3000/loginUsuario",true);
        xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xml.onreadystatechange=callback;
        xml.send(parametros);
    }
}
function $(id){
    return document.getElementById(id);
}