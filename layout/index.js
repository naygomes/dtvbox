function changeText(text) {
  const element = document.getElementById("description");
  element.innerHTML = text;
}

const getKeysCodes = () => {
  const KeyCodes = {};

  KeyCodes.VK_ENTER = 13; // All values based on CEA-2014-A CE-HTML Annex F
  KeyCodes.VK_LEFT = 37;
  KeyCodes.VK_RIGHT = 39;

  return KeyCodes;
};

const getFocus = (id) => {
  return document.getElementById(id)?.focus();
};

const handleKeyDown = (event) => {
  const { VK_LEFT, VK_RIGHT, VK_ENTER } = getKeysCodes();

  switch (event.keyCode) {
    case VK_LEFT:
      event.preventDefault();
      getFocus("home");
      break;

    case VK_RIGHT:
      event.preventDefault();
      getFocus("about");
      break;

    case VK_ENTER:
      event.preventDefault();
      const focused = document.activeElement?.id;

      focused == "about"
        ? changeText(
            "Projeto de Graduação apresentado ao Curso de Engenharia de Computação e Informação da Escola Politécnica, Universidade Federal do Rio de Janeiro, como parte dos requisitos necessários à obtenção do título de Engenheira. O projeto foi finalizado e apresentado no ano de 2024."
          )
        : focused == "home"
        ? changeText(
            "Uma plataforma inovadora que explora a portabilidade de aplicações web para o DTV Play"
          )
        : "";

      break;

    default:
      event.preventDefault();
      break;
  }
};

window.onload = function () {
  document.getElementById("home").focus();
  window.addEventListener("keydown", handleKeyDown);
};
