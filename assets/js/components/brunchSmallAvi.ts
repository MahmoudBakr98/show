import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchTooltip } from "./brunchTooltip"




//Avatar Small or Abstraction of small picture
export class SmallAvi implements BrunchComponent {
    image: string
    id:string
    tooltip: BrunchTooltip
    click?:()=>void
    //mouseover to show tooltip
    constructor (image: string, id: string, tooltip: BrunchTooltip,click?:()=>void) {
        this.image = image
        this.tooltip = tooltip
        this.id=id
        this.click=click
    }
    getTemplate(object: object) {
     let html=`
     <div class="avismallcontainer">
        <div class="avismallcontainerv">
            <div class="avismall"></div>
            <div class="mspacer4"></div>
            <div class="tooltiptopcontainerTemplate"></div>
        </div>
        <div class="mspacer4"></div>
      </div>
      `
      let div=document.createElement('div')
      div.innerHTML=html
      let toolTipTemplate:any=div.getElementsByClassName("tooltiptopcontainerTemplate")[0];
      let aviSmallContainer=div.getElementsByClassName("avismallcontainerv")[0];
     
       aviSmallContainer.addEventListener('mouseenter',()=>{
          toolTipTemplate.append(this.tooltip.getTemplate({id:this.id}));
          let panelmain=document.getElementsByClassName("panelmain")[0];
          let toolTipRect=toolTipTemplate.getBoundingClientRect() ;  
          let aviSmallRect=aviSmallContainer.getBoundingClientRect() ;
          let panelmainRect=panelmain.getBoundingClientRect();
          if(navigator.userAgent.includes('Safari')&& !navigator.userAgent.includes('Chrome') &&!navigator.userAgent.includes('Mobile')){
            toolTipTemplate.style.top=`${aviSmallRect.top+aviSmallRect.height}px`;
            toolTipTemplate.style.left=`${aviSmallRect.left-toolTipRect.width/2+aviSmallRect.width/2}px`;
           }
          else{
            toolTipTemplate.style.top=`${aviSmallRect.top-panelmainRect.top+aviSmallRect.height}px`;
            toolTipTemplate.style.left=`${aviSmallRect.left-panelmainRect.left-toolTipRect.width/2+aviSmallRect.width/2}px`;
          }
          let rooms=document.getElementsByClassName("cellcontentcontainer");
          for (let r of rooms){
              r.addEventListener('scroll',()=>{
                (toolTipTemplate.firstChild)&&toolTipTemplate.removeChild(toolTipTemplate.firstChild!)
            })
          }
         let viewgridmain=document.getElementsByClassName("viewgridmain")[0];
         viewgridmain.addEventListener('scroll',()=>{
            (toolTipTemplate.firstChild)&&(toolTipTemplate.removeChild(toolTipTemplate.firstChild!))
           })
        })

       aviSmallContainer.addEventListener('mouseleave',()=>{(toolTipTemplate.firstChild)&&toolTipTemplate.removeChild(toolTipTemplate.firstChild!)})
       
      





       return (div)
    }

}
