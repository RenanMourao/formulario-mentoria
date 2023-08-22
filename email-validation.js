document.addEventListener("DOMContentLoaded", function() {
  const emailField = document.getElementById("newsletter-input");
  const modalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const contentContainer = document.querySelector(".container");
  const mobileImage = document.getElementById("img-mobile");
  const errorMsg = document.getElementById("errorMsg");
  const emailDisplayModal = document.getElementById("emailDisplayModal");

  emailField.addEventListener("input", function() {
    emailDisplayModal.textContent = emailField.value; // Atualiza o email no modal enquanto o usuário digita
  });

  function displayErrorMessage(message) {
    errorMsg.innerHTML = message;
    errorMsg.style.display = "block";
  }

  function hideErrorMessage() {
    errorMsg.style.display = "none";
  }

  emailField.addEventListener("input", function() {
    hideErrorMessage(); // Ocultar a mensagem de erro quando o usuário começa a digitar
  });

  modalButton.addEventListener("click", function() {
    if (
      emailField.style.borderColor === "green" &&
      emailField.value.trim() !== ""
    ) {
      // Exibir o modal
      modal.style.display = "flex";
      contentContainer.style.zIndex = "-1";
      contentContainer.style.opacity = "0.1";
      mobileImage.style.display = "none";
      hideErrorMessage(); // Ocultar a mensagem de erro
    } else {
      // Exibir mensagem de erro se o campo de email estiver vazio
      displayErrorMessage("Required field");
      emailDisplayModal.textContent = emailField.value;
    }
  });

  emailField.addEventListener("blur", function() {
    validateEmail(emailField);
  });

  
  modalButton.addEventListener("click", function() {
    if (
      emailField.style.borderColor === "green" &&
      emailField.value.trim() !== ""
    ) {
      modal.style.display = "flex";
      contentContainer.style.zIndex = "-1"; // Aplicar z-index negativo
      contentContainer.style.opacity = "0.1"; // Reduzir opacidade
      mobileImage.style.display = "none"; // Reduzir opacidade da imagem mobile
    }
  });

  
  function displayEmptyFieldError() {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Escreva um email, seu jumento!";
  }
  

  function closeModal() {
    modal.style.display = "none";
    contentContainer.style.zIndex = "auto"; // Restaurar z-index
    contentContainer.style.opacity = "1"; // Restaurar opacidade
    mobileImage.style.display = "block"; // Restaurar opacidade da imagem mobile
  }
  
  // Adicionar evento click ao botão "Dismiss message"
  const dismissButton = document.getElementById("btn"); // Botão "Dismiss message"
  dismissButton.addEventListener("click", closeModal);
  

  
  function validateEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    ) {
      document.getElementById("msgemail").innerHTML = "Valid email";
      document.getElementById("msgemail").style.color = "green";
      field.style.borderColor = "green";
    } else {
      document.getElementById("msgemail").innerHTML = "Valid email required";
      document.getElementById("msgemail").style.color = "red";
      field.style.borderColor = "red";
    }
  }

  function displayEmptyFieldError() {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Required field";
  }
  
  setTimeout(function() {
    contentContainer.classList.remove("opacity-0");
  }, 1000);
});
