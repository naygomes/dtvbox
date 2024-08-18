function changeDescription() {
  const element = document.getElementById("description");
  element.innerHTML =
    "Projeto de Graduação apresentado ao Curso de Engenharia de Computação e Informação da Escola Politécnica, Universidade Federal do Rio de Janeiro, como parte dos requisitos necessários à obtenção do título de Engenheira. \n O projeto foi finalizado e apresentado no ano de 2024.";
}

window.onload = function () {
  document.getElementById("about").focus();
  console.log(document.getElementById("about"));
};
