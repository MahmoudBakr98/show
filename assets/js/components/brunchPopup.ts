
import { BrunchComponent, ViewInterface  } from "../interfaces/interfaces"
import { XCloseButtonTiny } from "./xCloseButton"

export class BrunchMessagingPopup implements BrunchComponent{
    
    ViewInterface:ViewInterface
    topMarginPercentage?: string
    minWidth?: number
    constructor(ViewInterface:ViewInterface,topMarginPercentage?:string, minwidth?:number){
        this.ViewInterface=ViewInterface
        this.topMarginPercentage=topMarginPercentage
        this.minWidth=minwidth
    }
    //This popup will disappear in ${t} seconds !
    getTemplate(object: object) {  
    let t=1;
    let html=`
<div class="notification50centralizercontainer glass3">
    <div class="notificationpopup glass6">
       <div class="notificationspacerrightleft">
          <div class="mspacer23alldevices"></div>
          <div class="spacerupdown">
               <div class="mspacer23alldevices"></div>
               <div class="notificationcontentTemplate"></div>
               <div  class='popupCountDown' style="font-size:smaller;text-align:center">Please Select Circle or Image</div>
           </div>
           <div class="mspacer23alldevices"></div>
        </div> 
     </div> 
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html 
     div.getElementsByClassName("notificationcontentTemplate")[0].append(this.ViewInterface.getTemplate({})) 
    let interval= setInterval(()=>{countDown()}, 1000);
     
     function countDown (){
         t--;
         let msg=`This popup will disappear in ${t} seconds !`
        div.getElementsByClassName("popupCountDown")[0].innerHTML=msg;
        (t===0)&&(clearInterval(interval),div.remove())
     }
     return div
    }
}

export class BrunchActionPopup extends BrunchMessagingPopup implements BrunchComponent{
    
    xCloseButton:XCloseButtonTiny
    constructor(ViewInterface:ViewInterface,xCloseButton:XCloseButtonTiny,topMarginPercentage?:string, minwidth?:number){
          super (ViewInterface,topMarginPercentage,minwidth)
          this.xCloseButton=xCloseButton
    }
    getTemplate(object: object) {  
    let html=`

<div class="notification50centralizercontainer glass3">
    <div class="notificationpopup glass6">
       <div class="notificationspacerrightleft">
          <div class="mspacer23alldevices"></div>
          <div class="spacerupdown">
               <div class="mspacer23alldevices"></div>
               <div class="notificationcontentTemplate"></div>
               <div  id='popupError' style="color:red;font-size:smaller;text-align:center"></div>
           </div>
           <div class="mspacer23alldevices"></div>
        </div> 
     </div> 
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html 
     div.getElementsByClassName("notificationcontentTemplate")[0].append(this.ViewInterface.getTemplate({})) 
     div.getElementsByClassName("notificationpopup")[0].append(this.xCloseButton.getTemplate({}))
     
     return div
    }
}