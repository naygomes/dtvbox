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
                <div class="source-element">Hello World</div>
              </div>
            </body>
          </html>
        `,
				},
			},
			"index.css": {
				// Because it's a file, add the "file" key
				file: {
					contents: `
            .container {
              position: relative;
              width: 100vw;
              height: 100vh;
            }
            
            .source-element {
              width: 100%;
              height: 100%;
              background-color: #f0f0f0;
              color: #ff0000;
              font-size: 3rem;
            }
            
            .appearing-element {
              position: absolute;
              width: 50px;
              height: 50px;
              background-color: #ff0000;
              opacity: 0;
              transition: opacity 0.5s, transform 0.5s;
            }
  
            .container:hover .appearing-element {
              opacity: 1;
              transform: translate(100%, 100%);
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
