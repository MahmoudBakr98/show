import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchCheckBox } from "./brunchCheckbox"
import { BrunchTooltip } from "./brunchTooltip"



//Bundle of controls for Views or Panels
export class PanelViewSettings implements BrunchComponent{
    brunchCheckBox: BrunchCheckBox
    //later on we will have more control settings here
    constructor(brunchCheckBox: BrunchCheckBox) {
        this.brunchCheckBox=brunchCheckBox
    }
    
    getTemplate(object: object) {
       let html=`<div class="viewsettings"></div>`;
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName("viewsettings")[0].append(this.brunchCheckBox.getTemplate({}) )

        return (
         div
        )
    }

}