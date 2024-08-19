/** @satisfies {import('@webcontainer/api').FileSystemTree} */
/** @type {import('@webcontainer/api').FileSystemTree} */

export const files = {
  "index.js": {
    file: {
      contents: `
      import express from 'express';

      const app = express();
      const port = 3111;

      app.use(express.static('./build'))

      app.get('*', (req,res) => res.sendFile('index.html' , { root : './build/' }))


      app.listen(port, () => {
        console.log(\`App is live at http://localhost:\${port}\`);
      });`,
    },
  },
  build: {
    directory: {
      "index.html": {
        file: {
          contents: `
          <!DOCTYPE html>

          <html lang="pt-br">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="./index.css" />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Raleway"
              />
              <script defer src="./index.js"></script>

              <title>DTVBox</title>
            </head>
            <body>
              <div class="container">
                <div id="navbar">
                  <img class="logo" src="https://i.ibb.co/4V40m6N/logo-dtvbox.png" alt="logo DTVBox" />
                  <div class="navbar-buttons">
                    <button id="home" onclick="changeTheme()">Início</button>
                    <button id="about" onclick="changeDescription()">Sobre</button>
                  </div>
                </div>
                <div class="text-container">
                  <h1 id="title" class="text">DTV<strong>BOX</strong></h1>
                  <hr class="border-gray" />
                  <p id="description" class="description">
                    Uma plataforma inovadora que explora a portabilidade de aplicações web
                    para o DTV Play
                  </p>
                </div>
                <div id="footer">
                  <hr class="border" />
                  <div id="credits-container">
                    <p class="credits">
                      Desenvolvido por: <br />
                      <strong id="student-name">Nayara Gomes da Silva</strong>
                    </p>
                    <p class="professor">
                      Orientado por:<br />
                      <strong id="professor-name">Claudio Miceli de Farias</strong>
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
      },
      "index.js": {
        file: {
          contents: `
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
          `,
        },
      },
      "index.css": {
        file: {
          contents: `
          :root {
            --pink: #f43295;
            --blue: #507bae;
          }

          * {
            font-family: "Raleway", sans-serif;
            color: #f2f2f2;
          }

          body {
            width: 100vw;
            height: 100vh;

            margin: 0;
            padding: 0;
          }

          p {
            margin: 0;
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;

            padding: 2vw 5vw;
            box-sizing: border-box;

            background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.5)
              ),
              url("https://i.ibb.co/XtXdk8t/screen-tv.jpg");
            background-position: center;
            background-size: cover;
          }

          #navbar {
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            height: 10vh;
          }

          .navbar-buttons {
            width: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 7vw;
          }

          button {
            background-color: transparent;
            box-shadow: none;
            border: none;
            font-size: 1.2rem;
            padding-bottom: 0.2rem;
          }

          .text-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4vh;
            margin-bottom: 4.5rem;
          }

          .text {
            width: fit-content;
            font-size: 6rem;
            margin: 0;
            font-weight: 400;
          }

          #title strong {
            font-weight: bolder;
            color: var(--pink);
          }

          .border-gray {
            margin: auto;
            width: 40%;
          }

          .description {
            font-size: 1.5rem;
            text-align: center;
            width: 80%;
          }

          #footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            gap: 2vh;
          }

          #footer .border {
            width: 100%;
            border-color: var(--pink);
          }

          #credits-container {
            display: flex;
            justify-content: space-between;
            align-items: end;
            font-size: 0.7rem;
          }

          #student-name,
          #professor-name {
            font-size: 0.8rem;
            color: var(--pink);
          }

          button:hover {
            text-decoration: underline;
            cursor: pointer;
          }

          button:focus {
            color: var(--pink);
            border-bottom: 1px solid var(--pink);
            font-weight: bolder;
            outline: none;
          }
          `,
        },
      },
    },
  },
  "package.json": {
    file: {
      contents: `
        {
          "name": "dtvbox",
          "type": "module",
          "dependencies": {
            "express": "latest",
            "nodemon": "latest"
          },
          "scripts": {
            "start": "nodemon index.js"
          }
        }`,
    },
  },
};
