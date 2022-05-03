import { BrunchComponent } from "../interfaces/interfaces"



export class BrunchInput implements BrunchComponent{
    input:{id:string,type:string,placeholder:string,value?:string,min?:string,max?:string}
    constructor(input:{id:string,type:string,placeholder:string,value?:string,min?:string,max?:string}){
        this.input=input
    }


   getTemplate(object: object) {
      
       let html=`<input id="${this.input.id}" type="${this.input.type}" placeholder="${this.input.placeholder}" value="${this.input.value}" min="${this.input.min}">`
       let div=document.createElement('div')
       div.innerHTML=html
       return div
   }

}