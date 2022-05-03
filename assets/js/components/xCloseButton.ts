import { BrunchComponent } from "../interfaces/interfaces"





//X to click and close
export class XCloseButton implements BrunchComponent{
    id:string
    click:()=>void
    constructor(id:string,click:()=>void) {
        this.id = id
        this.click=click
    }

    getTemplate(object: object) {
        let html= `
        <div class="closemenubutton grayletter" id="${this.id}">
            X
        </div>`
        let div=document.createElement('div')
        div.innerHTML=html
        div.addEventListener('click',this.click)
        return (
           div
        )
    }

}

export class XCloseButtonTiny extends XCloseButton implements BrunchComponent{
    
    constructor(id:string,click:()=>void) {
            super(id,click)
    }

    getTemplate(object: object) {
        let html= `<div class="closemenubuttontiny">X</div>`
        let div=document.createElement('div')
        div.className="xcloseabsolute"
        div.innerHTML=html
        div.addEventListener('click',this.click)
        return (
           div
        )
    }

}