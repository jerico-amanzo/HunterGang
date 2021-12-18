var txtNom=document.getElementById("txtNom");
var txtCom=document.getElementById("txtCom");

function LlamarClase(m){
        error.style.display='block';
        error.innerHTML+='<li>'+m+'</li>';
}

function Validar(){
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor complete sus nombres");
        LlamarClase("Por favor escriba su comentario");
        txtNom.focus();
    }else if(txtCom.value=="" || txtCom.value==null){
        LlamarClase("Por favor escriba su comentario");
        txtApe.focus();
    }else{
        error.style.display='none';
        alert("Gracias por tu comentario")
    }
}