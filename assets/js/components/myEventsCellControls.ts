import { BrunchComponent} from "../interfaces/interfaces"
import { ButtonCircle } from "./brunchButton"


export class CellControls implements BrunchComponent{
    buttons:ButtonCircle[]
    constructor(buttons:ButtonCircle[]){
        this.buttons=buttons
       
    }
    getTemplate(obejct:object){
       
       let div=document.createElement('div')
       div.className="cellcontrols"
       for (let b of this.buttons){
        let mspacer4=document.createElement('div')
        mspacer4.className="mspacer4"
        div.append(mspacer4)
          div.append(b.getTemplate({}))
        }

       return div
    }
}