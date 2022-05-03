import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchColor, ColorGobrunchEnum } from "../domain/brunchColor"
import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import { GridPics } from "./gridPics"


//Grid of Avatars with Room Name or abstraction of grid of pictures with title
export class GridPicsWithTitle implements BrunchComponent{
    gridPics: GridPics
    label: string
    textColor?: BrunchColor
    textFormat?: BrunchTextFormat
    constructor (gridPics:GridPics, label:string, textColor?:BrunchColor, textFormat?: BrunchTextFormat) {
        this.gridPics = gridPics
        this.label = label
    }

    getTemplate(object: object) {
        let html=
        `<div class="cellmain">
             <div class="celllabel">${this.label}</div>
             <div class="mspacer4"></div>
             <div class="cellcontentcontainerTemplate"></div>
             <div class="mspacer4"></div>
         </div>`
         let div=document.createElement('div')
         div.innerHTML=html
         div.getElementsByClassName("cellcontentcontainerTemplate")[0].append(this.gridPics.getTemplate({}))
        return (
           div
        )
    }

}