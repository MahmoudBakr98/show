import { BrunchComponent, ViewInterface } from "../interfaces/interfaces"
import { SmallAvi } from "./brunchSmallAvi"
import { BrunchTooltip } from "./brunchTooltip"



//Grid of Avatars or Abstraction of grid of pictures
export class GridPics implements BrunchComponent{
    pics: ViewInterface[] //By using ViewInterface implies that the GridPics can have any template. For this job, the interface should refer smallAvis.
    constructor(pics: ViewInterface[]) {
        this.pics = pics
    }

    getTemplate(object: object) {
        let html=
        `<div class="cellcontentcontainer darkglass3">
           <div class="mspacer4"></div>
           <div class="cellcontentcontainerv">
               <div class="mspacer4"></div>
               <div class="cellcontent"></div>
           </div>
        </div>`

        // creating a div with "avismallcontainerTemplate" class under cellcontent div would affect the style !!!!! 
        let div=document.createElement('div')
        div.innerHTML=html;
        for (let i=0;i<this.pics.length;i++){
            div.getElementsByClassName('cellcontent')[0].append(this.pics[i].getTemplate({}))
        }
        return (
          div
        )
    }

}