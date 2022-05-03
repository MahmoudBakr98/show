import { BrunchComponent} from "../interfaces/interfaces"
import { CategoryFilters } from "./myEventsCategoryFilters"
import { ContainerCard } from "./myEventsContainerCard"


export class MyEvents implements BrunchComponent{
    categoryFilters:CategoryFilters
    containerCard:ContainerCard[]
    constructor(categoryFilters:CategoryFilters,containerCard:ContainerCard[]){
        this.categoryFilters=categoryFilters
        this.containerCard=containerCard
    }

    getTemplate (object:object){
     let html=`
<div class="homebg">
   <div class="homebgcolor">
      <div class="bluelayer"></div>
      <div class="redlayer1"></div>
      <div class="redlayer2"></div>
      <div class="redlayer3"></div>
      <div class="bluelayercenter"></div>
   </div>
   <div class="spacerright">
      <div class="mspacer5"></div>
      <div class="spacerupwidth100percent">
         <div class="mspacer5"></div>
         <div class="categoryfiltersTemplate"></div>
         <div class="mspacer5"></div>
         <div class="myeventscontainercardrepeaterTemplate"></div>
      </div>
      <div class="mspacer5"></div>
    </div>
</div>`

     let div=document.createElement('div')  
     div.innerHTML=html 
     div.getElementsByClassName('categoryfiltersTemplate')[0].append(this.categoryFilters.getTemplate({}))
     for (let card of this.containerCard){
            div.getElementsByClassName('myeventscontainercardrepeaterTemplate')[0].append(card.getTemplate({}))
      }
      return div
    } 
}