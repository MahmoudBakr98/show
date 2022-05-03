import { BrunchColor, ColorGobrunchEnum } from "../domain/brunchColor"
import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchToolTipUp } from "./brunchTooltip"


//General Buttons in GoBrunch. As much as the buttons have optional arguments for color and font format, we can't ignore it and use strictly the CSS class content. 
export class BrunchButton {
        label: string
        id: string
        click:(event:Event)=>void
        bgcolor?: string
        textcolor?: string
        textformat?: object
        width?: number
        height?: number

        constructor(data: {
            label: string
            id: string
            click:(event:Event)=>void
            bgcolor?: ColorGobrunchEnum
            textcolor?: ColorGobrunchEnum
            textformat?: TextFormatGoBrunchEnum
            width?: number
            height?: number
        }) {
            const brunchColors = new BrunchColor()
            const brunchText = new BrunchTextFormat()
            this.label = data.label
            this.id=data.id
            this.click=data.click
            this.bgcolor = brunchColors.colorGoBrunch[data.bgcolor!]
            this.textcolor = brunchColors.colorGoBrunch[data.textcolor!]
            this.textformat = brunchText.gobrunchtext[data.textformat!]
            this.width = data.width
            this.height = data.height
        }

    }


export class ButtonRectangle extends BrunchButton implements BrunchComponent {

    constructor(label: string, id: string,click:(event:Event)=>void ,bgcolor?:any, textcolor?:any, textformat?:any, width?:any, height?:any) {
        super({ id, label, click,bgcolor, textcolor, textformat, width, height})
    }

    getTemplate(object: object) {
        //below is just an example. replace with the provided webflow css.
        let style=`style='background:${this.bgcolor};'`;
        let html=`<div class="brunchbutton1" id="${this.id}" ${style}>
                          ${this.label}
                  </div>`
        let div=document.createElement('div')
        div.innerHTML=html
        div.addEventListener('click',this.click)
        return (
            div
        )
    }

}

export class ButtonRectangle2 extends ButtonRectangle  implements BrunchComponent {
    constructor(label: string, id: string,click:(event:Event)=>void ,bgcolor?:any, textcolor?:any, textformat?:any, width?:any, height?:any) {
        super(label,id,click)  
        
    }

    getTemplate(object: object) {
        let html=`
            <div class="buttonbottomspacer4 width100percent">
               <div class="brunchbutton1 width100percent">${this.label}</div>
               <div class="mspacer4"></div>
            </div>
            <div class="mspacer4"></div>`
        let div=document.createElement('div')
        div.className="buttonrightspacer4"
        div.innerHTML=html
        div.addEventListener('click',this.click)
        return div
    }
}

export class ButtonCircle extends BrunchButton implements BrunchComponent {
     tooltipup?:BrunchToolTipUp
    constructor(label: string, id: string,click:(event:Event)=>void, bgcolor?:any,tooltipup?:BrunchToolTipUp,textcolor?:any, textformat?:any, width?:any, height?:any) {
        super({ id, label,click ,bgcolor, textcolor, textformat, width, height})   
        this.tooltipup=tooltipup
    }

    getTemplate(object: object) {
        //below is just an example. replace with the provided webflow css.
        let style=`style='background:${this.bgcolor}'`;    
        let html= `<div class="brunchbuttoncircle1" id="${this.id}">
                          <div class="tooltipupTemplate"></div>
                          <div class="brunchbuttoncircle1label" ${style}> ${this.label}</div>
                   </div>` 
        let div=document.createElement('div')
        div.innerHTML=html;
        let tooltipup= div.getElementsByClassName('tooltipupTemplate')[0];
        div.addEventListener('mouseenter',()=>{
            (this.tooltipup)&&tooltipup.append(this.tooltipup.getTemplate({}))
        })
        div.addEventListener('mouseleave',()=>{
            (this.tooltipup)&&tooltipup.removeChild(tooltipup.firstChild!)
        })
       
        div.addEventListener('click',this.click)
        return div
       
    }

}

/* 
 let textFormat=''
        if(this.textformat){
            for (let [key,value]of Object.entries(this.textformat!)){
                    (key!=='medium')&&(textFormat+=`${key}:${value};`)
              }
          }
          //text format still needs attention!!!
;width:${this.width}px;height:${this.height}px;min-width:${this.width}px;min-height:${this.height}px;color:${this.textcolor};${textFormat}'

*/


/*
export var BrunchButtom1 = (function () {
    class BrunchButtom1 implements BrunchComponent {
        label: string
        click: (event: MouseEvent) => void

        bgcolor?: string
        textcolor?: string
        textformat?: object
        width?: number
        height?: number

        constructor(data: {
            label: string
            click: (event: MouseEvent) => void
            bgcolor?: ColorGobrunchEnum
            textcolor?: ColorGobrunchEnum
            textformat?: TextFormatGoBrunchEnum
            width?: number
            height?: number
        }) {
            const brunchColors = new BrunchColor()
            const brunchText = new BrunchText()
            this.label = data.label
            this.click = data.click
            this.bgcolor = brunchColors.colorGoBrunch[data.bgcolor]
            this.textcolor = brunchColors.colorGoBrunch[data.textcolor]
            this.textformat = brunchText.gobrunchtext[data.textformat]
            this.width = data.width
            this.height = data.height
        }

        getTemplate(object: object) {
            return (
                `<div class="brunchbutton1" onclick=${this.click}(event)>
                    <label>${this.label}</label>
                </div>`
            )
        }

        render(): void { }
    }

    return BrunchButtom1
}());
*/
