import { BrunchComponent } from "../interfaces/interfaces"



export class BrunchDropdown implements BrunchComponent{
    id:string
    options:Array<string>
    constructor(id:string,options:Array<string>){
        this.options=options
        this.id=id
    }


   getTemplate(object: object) {
       let options=new String;
       for (let o of this.options)
          {options+=`<option value="${o}" class="brunchinput">${o}</option>`}
       let html=`
    <div class='inputspacer'>
       <div class="mspacer23alldevices"></div>
           <select id="${this.id}" class="brunchinput">
               ${options}
            </select>
     </div>
       `
       let div=document.createElement('div')
       div.innerHTML=html
       return div
   }

}