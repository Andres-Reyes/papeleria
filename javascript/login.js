//registro de usuarios//
function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var encriptada;
    $(document).ready(function() {
        $("email").change(function() {
            var filesSelected = document.getElementById("email").files;
            if (filesSelected.length > 0) {
                var fileToLoad = filesSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent) {
                    var base64value = fileLoadedEvent.target.result;
                    console.log(base64value);
                    $("encriptada").val(base64value);
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        });
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result) {
            alert("Usuario Registrado");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })

    .catch(function(error) {

        alert("Usuario no se registro");
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

function cerrarA() {
    firebase.auth().signOut()
        .then(function() {
            alert("sesión cerrada");
            window.location = "../../index.html";
        })
        .catch(function(error) {
            alert("sesión no cerrada");
        })
}