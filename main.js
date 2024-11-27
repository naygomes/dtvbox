import "./style.css";
import { WebContainer } from "@webcontainer/api";
import { files } from "./files";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance;

let debugMode = true;

window.addEventListener("load", async () => {
  const fitAddon = new FitAddon();

  const terminal = new Terminal({
    convertEol: true,
  });
  terminal.loadAddon(fitAddon);
  terminal.open(terminalEl);

  fitAddon.fit();

  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);

  const exitCode = await installDependencies(terminal);
  if (exitCode !== 0) {
    throw new Error("Falha na Instalação");
  }

  startDevServer(terminal);
});

/**
 * @param {Terminal} terminal
 */
async function installDependencies(terminal) {
  const installProcess = await webcontainerInstance.spawn("npm", ["install"]);
  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        terminal.write(data);
      },
    })
  );
  return installProcess.exit;
}

/**
 * @param {Terminal} terminal
 */
async function startDevServer(terminal) {
  const serverProcess = await webcontainerInstance.spawn("npm", [
    "run",
    "start",
  ]);
  serverProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        terminal.write(data);
      },
    })
  );

  webcontainerInstance.on("server-ready", (port, url) => {
    iframeEl.src = url;
  });
}

document.querySelector("#app").innerHTML = `
  <div class="container ${
    debugMode ? "show-terminal-container" : "hide-terminal-container"
  }">
  	<div class="terminal ${debugMode ? "show-terminal" : "hide-terminal"}"></div>
    <div class="preview">
      <iframe src="./loading.html"></iframe>
    </div>  
  </div>
`;

/** @type {HTMLIFrameElement | null} */
const iframeEl = document.querySelector("iframe");

/** @type {HTMLTextAreaElement | null} */
const textareaEl = document.querySelector("textarea");

/** @type {HTMLTextAreaElement | null} */
const terminalEl = document.querySelector(".terminal");
