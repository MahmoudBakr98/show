import { BrunchColor, ColorGobrunchEnum } from "../domain/brunchColor"
import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import { BrunchComponent } from "../interfaces/interfaces"


    
export class BrunchTooltip implements BrunchComponent{
    
    getTemplate(object: any) {
    let html=`
    <div class="tooltiptopcontainer" id="tooltiptopcontainer">
        <div class="selectorcontainer">
            <div class="dropselectorwhite glass"></div>
        </div>
        <div class="tooltiplabel glass">Tooltip with Name and Last Name ${object.id}</div>
    </div>`
    let div=document.createElement('div')
    div.innerHTML=html
        return (
           div
        )
    }

}


export class BrunchToolTipUp extends BrunchTooltip {
    tooltipMessage: string
    constructor(tooltipMessage:string){
        super()
        this.tooltipMessage = tooltipMessage
    }

    getTemplate(object: any) {
    let html=` 
         <div class="tooltipup">
             <div class="tooltiplabelup">${this.tooltipMessage}</div>
             <div class="dropselectordowndarkgray"></div>
         </div>`      
    let div=document.createElement('div')
    div.innerHTML=html;
    return div
        
    }
}

export class BrunchTooltipContainer implements BrunchComponent{
    toolTipUp:BrunchToolTipUp
    constructor(toolTipUp:BrunchToolTipUp){
        this.toolTipUp=toolTipUp
       
    }
    getTemplate(obejct:object){
       let html=`
       <div class="tooltipcontainer">
            <div class="brunchtooltip">?</div>
            <div class="tooltipupTemplate"></div>
        </div>`
       let div=document.createElement('div')
       div.innerHTML=html
       let tooltipupContainer=div.getElementsByClassName("tooltipcontainer")[0]
       let tooltipup=div.getElementsByClassName("tooltipupTemplate")[0]
       tooltipupContainer.addEventListener('mouseenter',()=>{
            tooltipup.append(this.toolTipUp.getTemplate({}))
         })
       tooltipupContainer.addEventListener('mouseleave',()=>{
            tooltipup.removeChild(tooltipup.firstChild!)
         })
       
       
       return div
    }
}