import express from "express";
import { URL } from "url";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório onde os arquivos estáticos serão servidos
app.use(express.static(path.join(__dirname, "build")));

// Rota principal, serve o arquivo index.html
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
