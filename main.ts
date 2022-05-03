import { BrunchComponent } from "./assets/js/interfaces/interfaces"
import{editor,dragEditor} from "./assets/js/components/builder/editorBar"
import{panelViewRoomsWithPeople} from "./assets/js/components/builder/panelViewRoomsWithPeople"
import { myEventsBuilder } from "./assets/js/components/builder/myEvents"
import { eventsMainBuilder } from "./assets/js/components/builder/eventsMain"
let loadSvg=require('./assets/js/use-case/editor').load

export interface PanelView extends BrunchComponent { }

// lista salas com um botao
class View1 implements PanelView {
  getTemplate(object: object): Element {
      let div=document.createElement('div')
      return div
  }
}

class View2 implements PanelView {
  getTemplate(object: object): Element {
      let div=document.createElement('div')
      return div
  }
}
//var a = new Panel("dasdsa", new View1())



//document.body.append(myEventsBuilder().getTemplate({}))

document.body.append(eventsMainBuilder().getTemplate({}))

let container=document.getElementsByClassName("container")[0];
let dispEditor=document.getElementById('dispEditor')
let editorHTML=editor.getTemplate({});
dispEditor?.addEventListener('click',()=>{
    container.prepend(editorHTML);
    dragEditor();
    dispEditor!.style.display='none'
})
 loadSvg();
document.getElementById("dispPanel")?.addEventListener('click',()=>{
   // document.getElementsByClassName('editorbarcontainer')[0].parentElement!.remove()
    let html=panelViewRoomsWithPeople.getTemplate({});
    container.prepend(html);
    document.body.classList.add('hideOverflow')
    document.getElementsByClassName('xCloseBtnTemplate')[0].addEventListener('click',()=>{
        document.getElementsByClassName('panelmaincontainerbg')[0].parentElement!.remove();
        document.body.classList.remove('hideOverflow');
       // container.prepend(editorHTML)
    })
})
