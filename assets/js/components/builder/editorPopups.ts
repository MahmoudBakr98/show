import { BrunchActionPopup,BrunchMessagingPopup } from "../brunchPopup" 
import { AddCircle, ReseizeHeight, AddImage, Save, ErrorMessage,AddNavigation} from "../editorPopups"
import { XCloseButtonTiny } from "../xCloseButton"

export let addNavigationPopup=(click:Function , nav:HTMLElement)=>{
   let addNavigationPopup= new BrunchActionPopup(new AddNavigation(()=>{click()},nav),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
 return addNavigationPopup
}
export let addCirclePopup=(click:Function)=>{
   let addCirclePopup= new BrunchActionPopup(new AddCircle(()=>{click()}),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
 return addCirclePopup
}

export let reseizeHeightPopup=(click:Function)=>{

  let ReseizeHeightPopup=new BrunchActionPopup(new ReseizeHeight(()=>{click()}),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
  return ReseizeHeightPopup
}

export let addImagePopup=()=>{
    let addImagePopup= new BrunchActionPopup(new AddImage(),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
    return addImagePopup
}

export let savePopup=(click:Function)=>{
    let savePopup=new BrunchActionPopup(new Save(()=>{click()}),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
    return savePopup
}

export let errorMessagePopup=(errorMessage:string)=>{
    let errorMessagePopup= new BrunchMessagingPopup(new ErrorMessage(errorMessage)).getTemplate({})
    return errorMessagePopup
}

function xCLose(){
  document.getElementsByClassName("notification50centralizercontainer")[0].parentElement!.remove();
  let icons=document.getElementsByClassName("editoriconexternal");
  for (let i of icons){i.classList.remove("darkglass3selected")};
}