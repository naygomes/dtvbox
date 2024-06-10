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
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="./index.css" />
              <script defer src="./index.js"></script>

              <title>Document</title>
            </head>
            <body>
              <div class="container">
                <div id="title" class="source-element">Hello World</div>
                  <a id="button" onclick="changeName()">Change Title</a>
              </div>
            </body>
          </html>
        `,
				},
			},
			"index.js": {
				file: {
					contents: `
          function changeName() {
            const element = document.getElementById("title");
            element.innerHTML = "New title!";
          }
          
          window.onload = function () {
            document.getElementById("button").focus();
          };                   
        `,
				},
			},
			"index.css": {
				file: {
					contents: `
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 40vh;
              width: 100%;
              height: 100%;
            }
            
            .source-element {
              width: fit-content;
              height: 100%;
              color: #ff0000;
              font-size: 3rem;
            }

            a {
              color: blue;
            }

            a:hover {
              text-decoration: underline;
              cursor: pointer;
            }

            a:focus {
              background-color: lightblue;
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
          "name": "client-tv",
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
