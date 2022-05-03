import { BrunchComponent} from "../interfaces/interfaces"
import { BrunchColor,ColorGobrunchEnum} from "../domain/brunchColor"
import { BrunchTooltipContainer, BrunchToolTipUp } from "./brunchTooltip"
import { CellControls } from "./myEventsCellControls"
import { Session } from "./myEventsSession"



export class ItemInfo implements BrunchComponent{
    myEventInfo:{id:string,category:string,title:string,date:string, link:string}
    cellControls:CellControls
    dateTooltip:BrunchTooltipContainer
    linkTooltip:BrunchTooltipContainer
    click:()=>void
    constructor( myEventInfo:{id:string,category:string,title:string,date:string, link:string},cellControls:CellControls,dateTooltip:BrunchTooltipContainer, linkTooltip:BrunchTooltipContainer,click:()=>void){
        this.myEventInfo=myEventInfo
        this.cellControls=cellControls
        this.dateTooltip=dateTooltip
        this.linkTooltip=linkTooltip
        this.click=click
    }
    getTemplate(obejct:object){
       let html=`
                  <div class="brunchtitle3">${this.myEventInfo.category}</div>
                  <div class="mspacer4"></div>
                  <div class="myeventsnamecontrols">
                       <div class="cursorpointer">
                          <div class="brunchtitle1">${this.myEventInfo.title}</div>
                       </div>
                       <div class="inputTemplate"></div>                     <!-- inputTemplate -->
                       <div class="mspacer23"></div>
                       <div class="cellcontrolsTemplate"></div>                                       <!-- CellControls -->
                  </div>
                  <div class="mspacer23"></div>
                  <div class="mspacer6balancerpotrait"></div>
                  <div class="myeventseventinfo">
                      <div class="brunchlabel1">${this.myEventInfo.date}</div>
                      <div class="mspacer4"></div>

                      <div class="dateTooltipcontainerTemplate"></div>                     <!-- datetooltipcontainer -->

                      <div class="mspacer23"></div>
                      <div class="brunchlink">${this.myEventInfo.link}</div>
                      <div class="mspacer4"></div>

                      <div class="linkTooltipcontainerTemplate"></div>                                 <!-- linktooltipcontainer -->

                      <div class="mspacer4"></div>
                      <div class="brunchbutton1 height23">Copy Link</div>
                  </div>`

       let div=document.createElement('div')
       div.innerHTML=html

       div.getElementsByClassName("cellcontrolsTemplate")[0].append(this.cellControls.getTemplate({}))
       div.getElementsByClassName("dateTooltipcontainerTemplate")[0].append(this.dateTooltip.getTemplate({}))
       div.getElementsByClassName("linkTooltipcontainerTemplate")[0].append(this.linkTooltip.getTemplate({}))
       div.getElementsByClassName("brunchbutton1")[0].addEventListener('click',this.click)
        return div
    }
}





export class ContainerCard implements BrunchComponent{
    itemInfo:ItemInfo
    sessions:Session[]
    tooltipUp:BrunchToolTipUp
    id:string
    bgColor:string
    click:()=>void
    constructor(itemInfo:ItemInfo,sessions:Session[],tooltipUp:BrunchToolTipUp,id:string,bgColor:ColorGobrunchEnum,click:()=>void){
        this.itemInfo=itemInfo
        this.sessions=sessions
        this.tooltipUp=tooltipUp
        this.id=id
        this.click=click
        const brunchColor= new BrunchColor()
        this.bgColor = brunchColor.colorGoBrunch[bgColor!]
    }
    getTemplate(obejct:object){
       let html=`
<div  id="${this.id}" class="myeventscontainercardrepeater">
  <div class="myeventscontainercard glass7">
     <div class="mspacer5"></div>
     <div class="brunchlistitemcontainer">
         <div class="mspacer5"></div>
         <div class="categoryicon" style="background:${this.bgColor}; position:relative">
               <div class="tooltipupTemplate" style="position:relative;top:1.5px"></div>
         </div>
         <div class="mspacer5"></div>
         <div class="myeventsitemcontainer">
              <div class="iteminfoTemplate"></div>         <!-- ItemInfo -->
              <div class="mspacer23"></div>
              <div class="mspacer6balancerpotrait"></div>

              <div class="myeventsviewroomscontainer" >
                  <div class="expandClickZone myeventsviewroomscontainer" style="cursor:pointer;width:max-content">
                    <div class="brunchlabel1">View Rooms</div>
                    <div class="expandarrow">⌄</div>
                  </div> 
              </div>

              <div class="myeventsessionslistcontainer">
                  <div class="mspacer23"></div>
                  <div class="mspacer6balancerpotrait"></div>
                  <div class="myeventsessionsitemrepeaterTemplate"></div>         <!-- Sessions -->
              </div>
         </div>
         <div class="mspacer5"></div>
     </div>
     <div class="mspacer5"></div>
  </div>
  <div class="mspacer5"></div>
</div>`

       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName("iteminfoTemplate")[0].append(this.itemInfo.getTemplate({}))
       div.getElementsByClassName("expandClickZone")[0].addEventListener('click',this.click)
       let tooltipupTemplate=div.getElementsByClassName("tooltipupTemplate")[0]
       let categoryIcon=div.getElementsByClassName("categoryicon")[0]
       categoryIcon.addEventListener('mouseenter',()=>{
              tooltipupTemplate.append(this.tooltipUp.getTemplate({}))
       })
      categoryIcon.addEventListener('mouseleave',()=>{
            tooltipupTemplate.innerHTML=''
        })
              
       
        return div
    }
}