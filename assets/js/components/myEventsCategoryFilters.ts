import { BrunchComponent} from "../interfaces/interfaces"
import { CategoryIcon } from "./categoryIcon"


export class CategoryFilters implements BrunchComponent{
    categoryIcons:CategoryIcon[]
    constructor(categoryIcons:CategoryIcon[]){
        this.categoryIcons=categoryIcons
    }
    getTemplate(obejct:object){
       let html=`
       <div class="categoryfilters">
          <div class="brunchtitle3">Filter by Category</div>
          <div class="mspacer23"></div>
          <div class="categoryicons"></div>
        </div>`
       let div=document.createElement('div')
       div.innerHTML=html
       for (let i of this.categoryIcons){
          div.getElementsByClassName('categoryicons')[0].append(i.getTemplate({}))
        }

       return div
    }
}