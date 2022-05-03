import { BrunchComponent} from "../interfaces/interfaces"
import { BrunchColor,ColorGobrunchEnum} from "../domain/brunchColor"
import { BrunchToolTipUp } from "./brunchTooltip"


export class CategoryIcon implements BrunchComponent{
    bgColor:string
    tooltipup:BrunchToolTipUp
    click?:()=>void
    constructor(bgColor:ColorGobrunchEnum,tooltipup:BrunchToolTipUp,click?:()=>void){
        const brunchColor= new BrunchColor()
        this.bgColor = brunchColor.colorGoBrunch[bgColor]
        this.tooltipup=tooltipup
        this.click=click
    }
    getTemplate(obejct:object){
       let html=`
            <div class="categoryicon categoryiconfilter" style="position:relative;background:${this.bgColor}">
                <div class="tooltipupTemplate"></div>
            </div>
            <div class="mspacer23"></div>`

       let div=document.createElement('div')
       div.className="categoryiconspacerrightrepeater";
       div.innerHTML=html
       let tooltipupTemplate=div.getElementsByClassName('tooltipupTemplate')[0]
       div.addEventListener('mouseenter',()=>{
                tooltipupTemplate.append(this.tooltipup.getTemplate({}));
          })
       div.addEventListener('mouseleave',()=>{
              tooltipupTemplate.innerHTML='';
        });

        (this.click)&&div.addEventListener('click',this.click)
       
        return div
    }
}

export class CategoryIconSmall extends CategoryIcon implements BrunchComponent{
    
    constructor(bgColor:ColorGobrunchEnum,tooltipup:BrunchToolTipUp){
                      super(bgColor,tooltipup) 
    }
    getTemplate(obejct:object){
       let html=`
       <div class="categoryicon iconcategorysmall" style="position:relative;background:${this.bgColor}">
            <div class="tooltipupTemplate"></div>
       </div>`

       let div=document.createElement('div')
       div.innerHTML=html
       let tooltipupTemplate=div.getElementsByClassName('tooltipupTemplate')[0]
       div.addEventListener('mouseenter',()=>{
                tooltipupTemplate.append(this.tooltipup.getTemplate({}));
          })
       div.addEventListener('mouseleave',()=>{
                 tooltipupTemplate.innerHTML='';
        });

        return div
    }
}