import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchTooltip } from "./brunchTooltip"



export class BrunchCheckBox implements BrunchComponent{
    label: string
    brunchTooltip:BrunchTooltip
    click:(event:Event)=>void
    textFormat?: BrunchTextFormat
    constructor(label:string, brunchTooltip:BrunchTooltip,click:(event:Event)=>void,textformat?:BrunchTextFormat){
        this.label = label
        this.brunchTooltip=brunchTooltip
        this.click=click
        this.textFormat = textformat
    }
    getTemplate(object: object) {
        //create a checkbox here
        let html=` 
          <div class="brunchcheckbox1">
               <input type="checkbox" class="bcheckbox" id="PinCheckBox"> 
               <div class="mspacer4"></div>
               <div class="brunchlabel1">${this.label}<br></div>
               <div class="mspacer4"></div>
               <div class="tooltipcontainer">
                  <div class="brunchtooltip">?
                  <div class="tooltipupTemplate"></div>   <!-- tooltipUpTemplate -->
               </div>              
          </div>`
        let div=document.createElement('div')
        div.innerHTML=html
        div.getElementsByClassName("tooltipcontainer")[0].addEventListener('mouseenter',()=>{
            div.getElementsByClassName("tooltipupTemplate")[0].append(this.brunchTooltip.getTemplate({}))
        })
        div.getElementsByClassName("tooltipcontainer")[0].addEventListener('mouseleave',()=>{
            document.getElementsByClassName("tooltipup")[0].remove()
        })
        div.addEventListener('change',this.click)
  return (
       div
        )
    }   

}
