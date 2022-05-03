import { dragEditor, editor } from "./assets/js/components/builder/editorBar";
let loadSvg = require("./assets/js/use-case/editor").load;
let editWithKeyboard =require("./assets/js/use-case/editor").editWithKeyboard;

let container = document.body;
let dispEditor = document.getElementById("dispEditor");
let editorHTML = editor.getTemplate({});
dispEditor?.addEventListener("click", () => {
  container.prepend(editorHTML);
  dragEditor();
  dispEditor!.style.display = "none";
  //delete object with keyboard
  document.addEventListener("keydown", editWithKeyboard);
});
loadSvg();
