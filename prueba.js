function setCookie(cname, cvalue, exhours) {
    const d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000)); //aquí cambio para que sea 1 hora
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function validar(){
    
    let nombreInput = document.getElementById("inputNombre").value.trim();

    setCookie("nombre" , nombreInput , 1);

    document.getElementById("mostrarNombre").textContent = "El nombre que has introducido en el input de nombre es " + nombreInput;

    let apellidosInput = document.getElementById("inputApellidos").value.trim();

    setCookie("apellidos" , apellidosInput , 1);

    document.getElementById("mostrarApellidos").textContent = "Los apellidos que has introducido en el input de apellidos es " + apellidosInput;

    let ciudadInput = document.getElementById("inputCiudad").value.trim();

    setCookie("ciudad" , ciudadInput , 1);

    document.getElementById("mostrarCiudad").textContent = "La ciudad que has introducido en el input de ciudad es " + ciudadInput;

    let dniInput = document.getElementById("inputDni").value.trim();

    setCookie("dni" , dniInput , 1);

    document.getElementById("mostrarDni").textContent = "El dni que has introducido en el input de dni es: " + dniInput;

    let telefonoInput = document.getElementById("inputTelefono").value.trim();

    setCookie("telefono" , telefonoInput , 1);

    document.getElementById("mostrarTelefono").textContent = "El telefono que has introducido en el input es " + telefonoInput;

    url = "Mostrar_datos_input.html";
    window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

    console.log("Has guardado las cookies de forma exitosa");
}


function devolver(){
    return{
        nombre:document.getElementById("inputNombre").value.trim(),
        apellidos:document.getElementById("inputApellidos").value.trim(),
        ciudad:document.getElementById("inputCiudad").value.trim(),
        dni:document.getElementById("inputTelefono").value.trim(),
        telefono:document.getElementById("inputTelefono").value.trim()
    }
}





function devolverCookie(){
  return{
    nombre:getCookie("nombre"),
    apellidos:getCookie("apellidos"),
    ciudad:getCookie("ciudad"),
    dni:getCookie("dni"),
    telefono:getCookie("telefono")
  }
}

function valorCookies(){
    url = "Mostrar_datos_cookies.html";
    window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

}

function borrarCookies(){
    console.log("%cCookies borradas", "color: green; font-size:20px;");
    setCookie("nombre" , "");
    setCookie("apellidos" , "");
    setCookie("ciudad" , "");
    setCookie("dni" , "");
    setCookie("telefono" , "");
  }