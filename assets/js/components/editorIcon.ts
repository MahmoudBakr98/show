import { BrunchComponent } from "../interfaces/interfaces"
import { BrunchTooltip } from "./brunchTooltip"




export class EditorIcon implements BrunchComponent {
    image: string
    id:string
    click:(e:Event)=>void
    dispTooltip:(e:Event)=>void
    tooltipMsg: String
    //mouseover to show tooltip
    constructor (image: string,id:string,click:(e:Event)=>void,dispTooltip:(e:Event)=>void ,tooltipMsg:String) {
        this.image = image
        this.id=id
        this.click=click   
        this.dispTooltip=dispTooltip
        this.tooltipMsg=tooltipMsg
    }
    getTemplate(object: object) {
     let html=`
      <div class="editoriconrightspacerrepeater">
           <div class="editoriconbottomspacer">
               <div class="editoriconexternal tooltipcontainer" id=${this.id}>
                   <div class="editoricon" ><img src=${this.image} loading="lazy" alt="" class="editoriconimage"></div>
                   <div class="tooltipupTemplate"></div>
               </div>
               <div class="mspacer4"></div>
           </div>
           <div class="mspacer4"></div>
      </div>`
      let div=document.createElement('div')
      div.innerHTML=html
      let editoriconexternal= div.getElementsByClassName("editoriconexternal")[0];
      let editorIcon=div.getElementsByClassName("editoricon")[0]
   
      editorIcon.addEventListener('mouseenter',this.dispTooltip)
      editorIcon.addEventListener('mouseleave',()=>{
              let tooltipMsg=document.getElementsByClassName("tooltipup")[0]
              tooltipMsg&&tooltipMsg.remove()
      })
     //highlight editor icon external on click
      editoriconexternal.addEventListener('click',()=>{

              let icons=document.getElementsByClassName("editoriconexternal");
              let addClass=!editoriconexternal.classList.contains("darkglass3selected")
        for (let i of icons){i.classList.remove("darkglass3selected")}
        addClass&&editoriconexternal.classList.add("darkglass3selected")
      
    })

      editoriconexternal.addEventListener('click',this.click);
      
       return div
    }

}