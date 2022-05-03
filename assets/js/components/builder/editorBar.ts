import { EditorBar } from "../editorBar";
import { editorIconBuilder } from "./editorIcon";
import { editorInGridBuilder } from "./editorInGrid";
let editorActions = require("../../use-case/editor");

let clicks = new Array();
// clicks[0] = editorActions.move;
// clicks[1] = myFunction;
clicks[0] = editorActions.Undo;
clicks[1] = editorActions.Redo;
clicks[2] = editorActions.Front;
clicks[3] = editorActions.Back;
clicks[4] = editorActions.delete;
clicks[5] = editorActions.addNavigation;
clicks[6] = editorActions.rotate;
clicks[7] = editorActions.addImage;
clicks[8] = editorActions.dublicateImage;
clicks[9] = editorActions.addNavigation;
clicks[10] = editorActions.addCircle;


clicks[11] = editorActions.save;
clicks[12] = editorActions.closeEditor;
let exp = {
  icons: new Array(11).fill("./assets/images/move-icon.svg"),
  tooltips: [
    // "Move",
    // "Add Circle-Spots",
    "Undo",
    "Redo",
    "Move to Front",
    "Move to back",
    "Delete",
    "Add Navigation",
    "Rotate",
    "Add Image",
    "dublicate",
    "Add Navigation",
  ],
  clicks: clicks,
};

export var editor = editorBuilder(exp);

function editorBuilder(object: any) {
  let editorIcon = [];
  for (let i = 0; i < object.icons.length; i++) {
    editorIcon.push(
      editorIconBuilder(
        object.icons[i],
        `Icon${i + 1}`,
        object.clicks[i],
        object.tooltips[i],
        dispTooltipIcon
      )
    );
  }
  let editorInGrid = editorInGridBuilder(editorIcon, object.clicks);
  let editor = new EditorBar(editorInGrid);
  return editor;
}

//Just for testing
function myFunction(i: any) {
  console.log(i);
}
//mouse enter Icon function
let ActiveDrag = false;
function dispTooltipIcon(e: any, tooltip: any) {
  !ActiveDrag &&
    e.target.parentElement
      .getElementsByClassName("tooltipupTemplate")[0]
      .append(tooltip.getTemplate({}));
}

// Drag editor
export let dragEditor = function dragEditor() {
  var dragItem = document.getElementsByClassName("editortopmovablearea")[0];
  var editor = document.getElementsByClassName("editorbarcontainer")[0];
  var container = document.body;
  let editorRect = editor.getBoundingClientRect();
  // If the editor's drag zone is smaller than the entire page, change container to the new drag zone to define the new boundaries. Only in containerRect !!!
  let containerRect = container.getBoundingClientRect();
  //create boundaries
  function limit(currentX: number, currentY: number) {
    let newPosXL = editorRect.x + currentX;
    let newPosYT = editorRect.y + currentY;
    let newPosXR = editorRect.x + editorRect.width + currentX;
    let newPosYB = editorRect.y + editorRect.height + currentY;
    let XYLimit = [false, false];
    if (
      newPosXL < containerRect.x ||
      newPosXR > containerRect.x + containerRect.width
    ) {
      XYLimit[0] = true;
    }
    if (
      newPosYT < containerRect.y ||
      newPosYB > containerRect.y + containerRect.height
    ) {
      XYLimit[1] = true;
    }
    return XYLimit;
  }
  var active = false;
  var currentX = 0;
  var currentY = 0;
  var initialX = 0;
  var initialY = 0;
  var xOffset = 0;
  var yOffset = 0;

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, { passive: false });

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e: any) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (dragItem.contains(e.target)) {
      active = true;
      ActiveDrag = true;
    }
  }

  function dragEnd(e: any) {
    initialX = currentX;
    initialY = currentY;

    active = false;
    ActiveDrag = false;
  }

  function drag(e: any) {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }
      !limit(currentX, currentY)[0] && (xOffset = currentX);
      !limit(currentX, currentY)[1] && (yOffset = currentY);
      setTranslate(xOffset, yOffset, editor);
    }
  }

  function setTranslate(xPos: Number, yPos: Number, el: any) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
};
