document.addEventListener("DOMContentLoaded", function() {
  const emailField = document.getElementById("newsletter-input");
  const modalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const contentContainer = document.querySelector(".container");
  const mobileImage = document.getElementById("img-mobile");
  const errorMsg = document.getElementById("errorMsg");
  const emailDisplayModal = document.getElementById("emailDisplayModal");

  emailField.addEventListener("input", function() {
    emailDisplayModal.textContent = emailField.value;
  });

  function displayErrorMessage(message) {
    errorMsg.innerHTML = message;
    errorMsg.style.display = "block";
  }

  function hideErrorMessage() {
    errorMsg.style.display = "none";
  }

  emailField.addEventListener("input", function() {
    hideErrorMessage(); 
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
      hideErrorMessage(); 
    } else {
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
      contentContainer.style.zIndex = "-1"; 
      contentContainer.style.opacity = "0.1"; 
      mobileImage.style.display = "none";
    }
  });
  

  function closeModal() {
    modal.style.display = "none";
    contentContainer.style.zIndex = "auto"; 
    contentContainer.style.opacity = "1";
    mobileImage.style.display = "block";
  }
  
  
  const dismissButton = document.getElementById("btn");
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
