import { BrunchComponent } from "../interfaces/interfaces"
import { EditorIcon } from "./editorIcon"
import {ButtonRectangle2} from "./brunchButton"


export class EditorInGrid implements BrunchComponent{
    editorIcons: EditorIcon[]
    buttons: ButtonRectangle2[]
    constructor(editorIcons: EditorIcon[],
        buttons: ButtonRectangle2[]) {
        this.editorIcons = editorIcons
        this.buttons=buttons
    }

    getTemplate(object: object) {
        let html=`<div class="editoringrid"></div>`
        let div=document.createElement('div')
        div.innerHTML=html
        for (let i of this.editorIcons){
            div.getElementsByClassName('editoringrid')[0].append(i.getTemplate({}))
        }
        for (let b of this.buttons){
            div.getElementsByClassName('editoringrid')[0].append(b.getTemplate({}))
        }
        return (
          div
        )
    }

}