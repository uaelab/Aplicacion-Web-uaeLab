window.onload = () => {

    const entrar = document.getElementById("iniciar");
    entrar.onclick = () => {

        const user = document.getElementById("user").value;
        const password = document.getElementById("pass").value;
        if(user == "admin" && password == "uae12345"){
            window.open("../html/inicio.html","_self");
        }else{
            alert("Usuario y/o Contraseña invalidos.");
        }
        
    };
    
}
