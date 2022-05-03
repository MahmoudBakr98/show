import { BrunchComponent } from "../interfaces/interfaces"
import { ButtonRectangle } from "./brunchButton"


export class AddNavigation implements BrunchComponent{
    click:()=>void
    target:HTMLElement

    constructor(click:()=>void , target:HTMLElement){
        this.click=click;
        this.target=target
    }
    
    getTemplate(object: object) {
        let disable = false
        let value =this.target.getAttribute('navLink');
    let defaultLink ="";
        let options = [
            {SessionName:"This is my session name 1 and might be long" , link:"1"},
            {SessionName:"This is my session name 2 and might be really really really long" , link:"2"},
            {SessionName:"This is my session name 3 and might be long" , link:"3"},
            {SessionName:"This is my session name 4 and might be long" , link:"4"},
            {SessionName:"This is my session name 5 and might be long" , link:"5"},
                ]
        options = options.map(ele=>{
            let name =ele.SessionName 
            if(ele.SessionName.length>20){
                name = name.slice(0,20)
                name+="...."
            }
            return{SessionName:name,link:ele.link}
        })
        let options2 = [
            {lastSegment:"/Meeting URL1" , link:"6"},
            {lastSegment:"/Meeting URL2" , link:"7"},
            {lastSegment:"/Meeting URL3" , link:"8"},
            {lastSegment:"/Meeting URL4" , link:"9"},
            {lastSegment:"/Meeting URL5" , link:"10"},
                ]
        if(this.target.getAttribute('isNewLink')==='on'){
           disable=true
            defaultLink = this.target.getAttribute('navLink')!
        }else if(this.target.getAttribute('isNewLink')==='off'){
            
        }
        // <div class="brunchinput">Choose one from here - dropdown menu</div>
     let html=`  <div class="notificationcontent" style="">
     <div class="brunchtitle4">WHERE THIS BUTTON WILL LINK TO?</div>
     <div class="inputspacer">
       <div class="mspacer23alldevices"></div>
       <input style="font-size:12px;" type="text" id="newLink" class="brunchinput" value="${defaultLink}" placeholder="Paste any GoBrunch room link here"></input>
     </div>
     <div class="labelspacer">
       <div class="mspacer23alldevices"></div>
       <div class="text-block">Or</div>
     </div>
       <div class="inputspacer"> 
         <div class="mspacer23alldevices"></div> 
         <select ${disable?"disabled":""} style="font-size:12px;color:9ca8ad" class="brunchinput"  id="selector" >
         <option value="" disabled selected hidden>Choose one from here - dropdown menu</option>
         <optgroup label="Session Name">

              ${options.map(op=>`<option ${op.link ===value?"selected":""} value="${op.link}-${op.SessionName}">${op.SessionName}</option>`)}
              </optgroup>
              <optgroup  label="Meeting URL">
              ${options2.map(op=>`<option ${op.link ===value?"selected":""} value="${op.link}-${op.lastSegment}">${op.lastSegment}</option>`)}
              
         </optgroup> 
         </select>
       </div>
     
     <div class="buttonwithlabel">
     <div class="buttonspacerdown">
         <div class="mspacer23alldevices"></div>
         <div class="brunchbutton1"></div>
         </div>
         <div class="mspacer4"></div>
         </div>
         </div>`
     let  div=document.createElement('div')
     div.innerHTML=html ;
     
     let selector = div.querySelector('#selector') as HTMLInputElement;
    //  selector!.addEventListener('change', (e)=>{
    //      let el =e.target as HTMLInputElement  
    //                el.setAttribute('data-name',"333")
    //                console.log(el.value) 
    //                this.click()
    //     })
     div.querySelector('#newLink')!.addEventListener('input', (e)=>{
         let el =e.target as HTMLInputElement  
         
        if(el.value !==""){
            selector!.disabled = true
            selector!.value = ""
        }else{
             selector!.disabled = false
         }
     })

    //  div.getElementsByTagName("select")[0].addEventListener()
     div.getElementsByClassName("brunchbutton1")[0].append(new ButtonRectangle('OK','',this.click).getTemplate({}))
     return div
    }
}
export class AddCircle implements BrunchComponent{
    click:()=>void
    constructor(click:()=>void){
        this.click=click
    }
    
    getTemplate(object: object) {
     let html=`
<div class="notificationcontent">
    <div class="brunchtitle4">Choose the desirable circle size and color</div>
    <div class="inputspacer">
        <div class="mspacer23alldevices"></div>
        <input id="CircleSize" class="brunchinput" type="number" placeholder="Circle Size" min="0">
    </div>
    <div class="inputspacer">
        <div class="mspacer23alldevices"></div>
        <input id="CircleColor" class="brunchinput" type="text" placeholder="Circle Color">
    </div> 
    <div class="mspacer23alldevices"></div>  
    <div class="buttonTemplate"></div> 
    <div class="mspacer23alldevices"></div>  
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html ;
    
     div.getElementsByClassName("buttonTemplate")[0].append(new ButtonRectangle('Submit','',this.click).getTemplate({}))
     return div
    }
}


export class ReseizeHeight implements BrunchComponent{
    
    click:()=>void
    constructor(click:()=>void){
        this.click=click
    }
    
    getTemplate(object: object) {
     let html=`
<div class="notificationcontent">
    <div class="brunchtitle4">Choose the desirable new viewbox height</div>
    <div class="inputspacer">
        <div class="mspacer23alldevices"></div>
        <input id="ViewboxSize" class="brunchinput" type="number" placeholder="Viewbox Height"  min="0">
    </div>
    <div class="mspacer23alldevices"></div>  
    <div class="buttonTemplate"></div> 
    <div class="mspacer23alldevices"></div>  
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html  
     div.getElementsByClassName("buttonTemplate")[0].append(new ButtonRectangle('Submit','',this.click).getTemplate({}))
     return div
    }
}


export class AddImage implements BrunchComponent{
    
    constructor(){}
    
    getTemplate(object: object) {
     let html=`
<div class="notificationcontent">
    <div class="brunchtitle4">Click here to upload your image</div>
    <div class="inputspacer">
        <div class="mspacer23alldevices"></div>
        <label for="AddImage" style="margin:auto; color:white;background:black;width:max-content;border-radius:7px;padding:7px">Upload</label>
        <input id="AddImage" class="brunchinput" type="file" >
        <div class="mspacer23alldevices"></div>
    </div>
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html  
     return div
    }
}


export class Save implements BrunchComponent{
    
    click:()=>void
    constructor(click:()=>void){
        this.click=click
    }
    
    getTemplate(object: object) {
     let html=`
<div class="notificationcontent">
    <div class="brunchtitle4">Enter your file name</div>
    <div class="inputspacer">
        <div class="mspacer23alldevices"></div>
        <input id="SaveSvg" class="brunchinput" type="text" placeholder="File name"  min="0">
    </div>
    <div class="mspacer23alldevices"></div>  
    <div class="buttonTemplate"></div> 
    <div class="mspacer23alldevices"></div>  
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html  
     div.getElementsByClassName("buttonTemplate")[0].append(new ButtonRectangle('Submit','',this.click).getTemplate({}))
     return div
    }
}


export class ErrorMessage implements BrunchComponent{
    errorMessage:String
    constructor(errorMessage:String){
        this.errorMessage=errorMessage;
    }
    
    getTemplate(object: object) {
     let html=`
<div class="notificationcontent">
    <div class="mspacer23alldevices"></div>
    <div class="brunchtitle4">${this.errorMessage}</div>
    <div class="mspacer23alldevices"></div>
</div>`
     let  div=document.createElement('div')
     div.innerHTML=html  
     return div
    }
}


