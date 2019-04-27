function $(id){
    return document.getElementById('id');
}

var xml=new XMLHttpRequest();
window.addEventListener("load",function(){

    // var btn=document.getElementById('btnSingIn');
    // btn.addEventListener("click", LogIn);
    var btnPublicar=document.getElementById('btnPublicar');
    btnPublicar.addEventListener("click",PublicarPost);
});

// function callback(){
//     if(xml.readyState===4){
//         if(xml.status===200)
//         {
//             var respuesta=xml.responseText;      
//             alert(respuesta);
//             var preferencias=JSON.parse(respuesta);
//             if(preferencias.autenticado=="si"){
//                 var mail=document.getElementById('email').value;
//                 var prefColor=preferencias.preferencias.color;
//                 var prefFont=preferencias.preferencias.font;
//                 window.location.replace("./Index.html?color="+prefColor+"&font:"+prefFont+"&email="+ mail);
//             }  
                
//         }
        
//         else{
//             alert("error en el servidor");
//         }
//     }   
// }
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

function callback(){
    if(xml.readyState===4){
        if(xml.status===200)
        {
            var respuesta=xml.responseText;      
            //alert(respuesta);
            // var preferencias=JSON.parse(respuesta);
            
            // if(preferencias.autenticado=="si"){
            //     var mail=document.getElementById('email').value;
            //     var prefColor=preferencias.preferencias.color;
            //     var prefFont=preferencias.preferencias.font;
            //     window.location.replace("./Index.html?color="+prefColor+"&font:"+prefFont+"&email="+ mail);
            // }  
            document.getElementById('mostrar').innerHTML=respuesta;
            mostrar.apendChild('muestro');   
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
    
    var DatosPost={
        title:texttitle,
        header:textheader,
        postText:textpostText
     }                
    xml.onreadystatechange=callback;      
    xml.send(JSON.stringify(DatosPost)); 
    document.getElementsByClassName('cargando').style.display='block';
}
