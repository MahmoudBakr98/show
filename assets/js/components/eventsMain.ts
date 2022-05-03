import { BrunchColor } from "../domain/brunchColor";
import { BrunchComponent } from "../interfaces/interfaces";
import { Category } from "../types/category";
import { ButtonRectangle } from "./brunchButton";
import { BrunchTooltipContainer} from "./brunchTooltip";


export class EventsCategory implements BrunchComponent{
 category:Category
 tooltipConainer:BrunchTooltipContainer
 button:ButtonRectangle
 constructor(category:Category,tooltipConainer:BrunchTooltipContainer,button:ButtonRectangle){
     this.category=category
     this.tooltipConainer=tooltipConainer
     this.button=button
 }
 getTemplate (object: object){
  let brunchColor= new BrunchColor()
  let bgColor = brunchColor.colorGoBrunch[this.category.bgColor!]
  let newCategory='';
  (this.category.new)&&(newCategory='NEW')

  let html=`
        <div class="eventscategoryspacerup">
            <div class="mspacer23"></div>
            <div class="eventscontainercard glass7">
              <div class="mspacer23"></div>
              <div class="eventscontentcontainer">
                <div class="mspacer5"></div>
                <div class="categoryicon categoryiconhome" style="background:${bgColor}"></div>
                <div class="mspacer23alldevices"></div>
                <div class="textcenter">
                  <div class="brunchtitle1">${this.category.name}</div>
                </div>
                <div class="mspacer23alldevices"></div>
                <div class="textcenter">
                  <div class="brunchlabel1 widthmobileextensor">${this.category.description}</div>
                  <div class="mspacer4"></div>
                  <div class="tooltipcontainerTemplate"></div>     <!--TooltipConatiner-->
                </div>
                <div class="mspacer23alldevices"></div>
                <div class="brunchbuttonTemplate"></div>      <!--Button rectangle-->
                <div class="mspacer5"></div>
              </div>
              <div class="mspacer23"></div>
              <div class="eventsnewlabelcontainer" style="color:${bgColor}">
                <div class="eventsnewlabelspacerrright">
                  <div class="mspacer23"></div>
                  <div class="eventsnewlabelspacerdown">
                    <div class="mspacer23"></div>
                    <div class="brunchtitle3">${newCategory}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="mspacer23"></div>`
  let div=document.createElement('div')
  div.className='eventscategoryrepeater'
  div.innerHTML=html
  div.getElementsByClassName('tooltipcontainerTemplate')[0].append(this.tooltipConainer.getTemplate({}))
  div.getElementsByClassName('brunchbuttonTemplate')[0].append(this.button.getTemplate({}))
  return div  
 };
}




export class EventsMain implements BrunchComponent{
    eventsCategory:EventsCategory[]
    constructor( eventsCategory:EventsCategory[]){
        this.eventsCategory=eventsCategory
    }
    getTemplate(object: object){

        let html=`
<div class="homecategories">
    <div class="homebgcolor">
      <div class="bluelayer"></div>
      <div class="redlayer1"></div>
      <div class="redlayer2"></div>
      <div class="redlayer3"></div>
      <div class="bluelayercenter"></div>
    </div>
    <div class="eventsmain">
       <div class="eventscontainer">
                                                         <!--EventsCategory -->
        </div> 
    </div>   
    <div class="linktonewmyevents">
      <div class="mspacer23"></div>
      <div class="brunchlink">View All My Sessions</div>
      <div class="mspacer5"></div>
    </div>
</div>
<div class="combodivs">
   <div class="categoryiconhome"></div>
</div>
    `
        let div=document.createElement('div')
        div.innerHTML=html
        for (let e of this.eventsCategory){
            div.getElementsByClassName('eventscontainer')[0].append(e.getTemplate({}))
        }
        
        return div
    };
}