let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  
  if (nameInput.value.trim() === "") {
    showAlert("Por favor, ingrese su nombre.");
    return;
  }
  
  if (emailInput.value.trim() === "") {
    showAlert("Por favor, ingrese su correo electrónico.");
    return;
  }
  
  if (messageInput.value.trim() === "") {
    showAlert("Por favor, ingrese su mensaje.");
    return;
  }
  
  // Si todas las validaciones pasan, puedes realizar el envío del formulario aquí
  // Por ejemplo, puedes llamar a una función para enviar los datos a través de una solicitud AJAX
  
  // Mostrar una alerta de éxito
  showAlert("¡Mensaje enviado con éxito!", true);
  
  // Limpiar los campos del formulario
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

function showAlert(message, isSuccess = false) {
  var alertClass = isSuccess ? "success" : "error";
  alert(message);
}
