document.addEventListener("DOMContentLoaded", function() {
  const emailField = document.getElementById("newsletter-input");
  const modalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const contentContainer = document.querySelector(".container");
  const mobileImage = document.querySelector(".w-full.lg\\:hidden");

  // Adicionar evento blur ao campo de email
  emailField.addEventListener("blur", function() {
    validateEmail(emailField);
  });

  // Adicionar evento click ao botão do modal
  modalButton.addEventListener("click", function() {
    if (
      emailField.style.borderColor === "green" &&
      emailField.value.trim() !== ""
    ) {
      modal.style.display = "flex";
      contentContainer.style.display = "none";
      mobileImage.style.display = "none"; // Remover a imagem no modal
    }
  });

  // Função de validação de email
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

  // Remover a classe opacity-0 após 1 segundo (1000ms) para o fade-in
  setTimeout(function() {
    contentContainer.classList.remove("opacity-0");
  }, 1000);
});
