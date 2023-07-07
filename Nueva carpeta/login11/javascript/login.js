//registro de usuarios//
function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var palabracodificada = btoa ( email ) ;
    var palabracodificada1 = btoa ( password ) ;

    firebase.auth().createUserWithEmailAndPassword(email, palabracodificada1)
        .then(function(result) {
            alert("Usuario Registrado");
            encriptar();  
          
        })

    .catch(function(error) {
    });
}

//ingreso de usuarios//
function signin() {

    event.preventDefault();
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(user, pass)
        .then(function(result) {
            alert("Inicio de Sesion Correcto");
            contenido()
        })
        .catch(function(error) {
            alert("usuario o contraseña incorrectas");


            // ...
        });

}

function contenido() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var Usuario = document.getElementById("email").value;
            //mientras el usuario ingresado sea el administrador
            if (Usuario == "arielreyes593@gmail.com") {
                window.location = "admin/inicio.html";
            } else {
                window.location = "user/inicio.html";
            }
        }
    });
}
function encriptar(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var palabracodificada = btoa ( email ) ;
    var palabracodificada1 = btoa ( password ) ;
    console.log(palabracodificada);
    console.log(palabracodificada1);
    var palabradescodificada = atob ( palabracodificada ) ;
    var palabradescodificada1 = atob ( palabracodificada1 ) ;
    console.log(palabradescodificada);
    console.log(palabradescodificada1);
    db.collection("Usuarios").add({
        uno:palabracodificada,
        dos:palabracodificada1,
       
    })
    //vaciando los campos 
    .then(function(docRef) {
        alert("DATOS REGISTRADOS CON EXITO");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";   
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


//cerrar sesión de usuarios//
function cerrar() {
    firebase.auth().signOut()
        .then(function() {
            alert("sesión cerrada");
            window.location = "../index.html";
        })
        .catch(function(error) {
            alert("sesión no cerrada");
        })
}

