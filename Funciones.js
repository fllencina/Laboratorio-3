function $(id){
    return document.getElementById('id');
}

var xml=new XMLHttpRequest();
window.addEventListener("load",function(){

    //var btn=document.getElementById('btnSingIn');
   //  btn.addEventListener("click", LogIn);
   // var btnPublicar=document.getElementById('btnPublicar');
   // btnPublicar.addEventListener("click",PublicarPost);
});
var mailIngresado;
 function callback(){
     if(xml.readyState===4){
         if(xml.status===200)
         {
           var respuesta=xml.responseText;      
            alert(respuesta);
            var preferencias=JSON.parse(respuesta);
            if(preferencias.autenticado=="si"){
                var mail=document.getElementById('email').value;
                mailIngresado=mail;
                 var prefcolor=preferencias.preferencias.color;
                var preffont=preferencias.preferencias.font;
                 window.location.replace("./Index.html?color="+prefcolor+"&font:"+preffont+"&email="+ mail);
            }              
        }       
        else{
            alert("error en el servidor");
         }
     }   
 }
function LogIn()
{
    xml.open("POST","http://localhost:1337/login",true); 
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    
    var DatosLogin={
        email:email,
        password:password
     }                
    xml.onreadystatechange=callback;      
    xml.send(JSON.stringify(DatosLogin));                 
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}   

function callbackPost(){
    if(xml.readyState===4){
         
        if(xml.status===200)
        {
            document.getElementById('cargando').style.display='none';
            document.getElementById('NuevoPost').style.display='block';  
            document.getElementById('mostrar').style.display='block'; 

            
            var respuesta=xml.responseText;      
            alert(respuesta);
           

            var Post=JSON.parse(respuesta);
            var Titulo=Post.title;
            var Encabezado=Post.header;
            var posteo=Post.postText;
            var author=Post.author;
            var fecha=Post.date;

            var DatosMostrar=document.getElementById('mostrar');

            var divAgregar=document.createElement('div');
            divAgregar.innerHTML='Titulo: '+Titulo+'<br>Encabezado: '+Encabezado+'<br>Post: '+posteo+'<br>Author: '+author+'<br>Fecha: '+fecha;
            DatosMostrar.appendChild(divAgregar);
                 
        }
        
        else{
            alert("error en el servidor");
        }
    }   
}

function PublicarPost(){
    xml.open("POST","http://localhost:1337/postearNuevaEntrada",true); 
    var texttitle=document.getElementById('title').value;
    var textheader=document.getElementById('header').value;
    var textpostText=document.getElementById('postText').value;
    var parametros=getParameterByName('email','');
    var DatosPost={
        title:texttitle,
        header:textheader,
        postText:textpostText,
        author:parametros
     }                
    xml.onreadystatechange=callbackPost; 
    document.getElementById('cargando').style.display='block';  
    document.getElementById('NuevoPost').style.display='none'; 
    document.getElementById('mostrar').style.display='none';   
    xml.send(JSON.stringify(DatosPost)); 
   
}
