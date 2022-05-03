import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchCheckBox } from "./brunchCheckbox"




export class PanelSettings implements BrunchComponent{
    brunchCheckBox: BrunchCheckBox
    //later on we will have more control settings here
    constructor(brunchCheckBox: BrunchCheckBox) {
        this.brunchCheckBox=brunchCheckBox
    }
    
    getTemplate(object: object) {
       let html=`
       <div class="panelsettings">
         <div class="panelsettingcontent"></div>
         <div class="mspacer23"></div>
       </div>`;
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName("panelsettingcontent")[0].append(this.brunchCheckBox.getTemplate({}) )

        return (
         div
        )
    }

}