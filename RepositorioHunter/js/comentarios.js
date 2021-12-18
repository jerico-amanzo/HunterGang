var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtEmail=document.getElementById("txtEmail");
var txtTel=document.getElementById("txtTel");
var txtMen=document.getElementById("txtMen");


function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtEmail.value="";
    txtTel.value="";
    txtMen.value="";
    txtName.focus();
}

function Validar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Completa todos los campos");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Completa todos los campos");
        txtApe.focus();

    }else if(txtEmail.value=="" || txtEmail==null){
        alert("Completa todos los campos");
        txtEmail.focus();
    }else if(txtTel.value=="" || txtTel==null){
        alert("Completa todos loc campos");
        txtTel.focus();
    }else if(txtMen.value=="" || txtMen.value==null){
        alert("Completa todos los campos");
        txtMen.focus();
    }else{
        alert("Gracias por tus comentarios")
    }
}



