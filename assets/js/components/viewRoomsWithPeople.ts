import { BrunchComponent, ViewInterface } from "../interfaces/interfaces"
import { GridPicsWithTitle } from "./gridPicsWithTitle"
import { BrunchButton, ButtonCircle, ButtonRectangle } from "./brunchButton"
import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import { BrunchColor, ColorGobrunchEnum } from "../domain/brunchColor"
import { PanelViewSettings} from "./panelViewSettings" 
//Grid of Avatars with Room name with Control Buttons. The abstract ViewInterface here should be GridPicsWithTitle

//( modification:Walaeddine added export for the two first class)
export class PeopleInRoomViewCell implements BrunchComponent{
    gridPicsWithTitle: GridPicsWithTitle
    displayControlButtons: boolean
    joinButton: ButtonRectangle 
    editButton: ButtonCircle 
    deleteButton: ButtonCircle

    //buttons with clicks. Note that the buttons should be brunchbutton.circleButton.
    constructor(gridPicWithTitle:GridPicsWithTitle, displayControlButtons:boolean, joinButton:ButtonRectangle, editButton:ButtonCircle, deleteButton:ButtonCircle) {
        this.gridPicsWithTitle = gridPicWithTitle
        this.displayControlButtons = displayControlButtons
        this.joinButton = joinButton
        this.editButton = editButton
        this.deleteButton = deleteButton
    }

    getTemplate(object: object) {
        //add the verification if the buttons should be displayed or not, according to the displayControlButtons  
        let html=`<div class="cellmaincontainer">
                    <div class="cellmaincontainerv">
                       <div class="cellmainTemplate"></div>             <!--GridPic Container -->
                       <div class="cellcontrols">
                           <div class="joinBtnTemplate"></div>         <!--Join Btn -->
                           <div class="mspacer4"></div>
                           <div class"controlsBtnTemplate"></div>      <!--Control Btn-->
                       </div>
                       <div class="mspacer4"></div>
                     </div>
                     <div class="mspacer23"></div>
                  </div>`
        let div=document.createElement('div');
        div.innerHTML=html ;
        //If I creat a div with "controlsBtnTemplate" class under cellcontrols control buttons  won't display !!!!! 
        if(this.displayControlButtons){
              let space=document.createElement('div')
              space.className="mspacer4"
              div.getElementsByClassName('cellcontrols')[0].append(this.editButton.getTemplate({}))  
              div.getElementsByClassName('cellcontrols')[0].append(space)
              div.getElementsByClassName('cellcontrols')[0].append(this.deleteButton.getTemplate({}))   
           }
        div.getElementsByClassName("joinBtnTemplate")[0].append(this.joinButton.getTemplate({}))
        div.getElementsByClassName("cellmainTemplate")[0].append(this.gridPicsWithTitle.getTemplate({}))
        
        return (
            div
        )
    }

}

//Grid of Rooms containing a grid of images inside with title above each cell
export class PeopleInRoomViewGrid implements BrunchComponent{
    peopleInRoomViewCell: PeopleInRoomViewCell[]         
    constructor(peopleInRoomViewCell:PeopleInRoomViewCell[]){      
    this.peopleInRoomViewCell = peopleInRoomViewCell
    }

    getTemplate(object: object) {
        let div=document.createElement('div')
        div.className='viewgridmain'
        let nbrOfRooms=this.peopleInRoomViewCell.length;
        for (let i=0;i<nbrOfRooms;i++){
                div.append(this.peopleInRoomViewCell[i].getTemplate({}));
         }
        return (
           div
        )
    }

}

//Grid of Rooms with title, add button, and settings
export class PeopleInRoomView implements ViewInterface{
    peopleInRoomViewGrid: PeopleInRoomViewGrid
    title: string
    addButton: ButtonCircle
    viewSettings: PanelViewSettings 
    displaySettings?: boolean //if false then it doesn't display.
    titleTextFormat?: BrunchTextFormat
    titleTextColor?: BrunchColor
    
    constructor(peopleInRoomViewGrid: PeopleInRoomViewGrid, title:string, addButton:ButtonCircle, viewSettings: PanelViewSettings, displaySettings?:boolean, titleTextFormat?:BrunchTextFormat, titleTextColor?:BrunchColor){
        this.peopleInRoomViewGrid = peopleInRoomViewGrid
        this.title = title
        this.addButton = addButton
        this.viewSettings = viewSettings
        this.addButton = addButton
        this.title = title
        this.displaySettings = displaySettings
        this.titleTextFormat = titleTextFormat
        this.titleTextColor = titleTextColor
    }

    getTemplate(object: object) {
      let settings=document.createElement('div');
      (this.displaySettings)&&(settings.append(this.viewSettings.getTemplate({})));
      let space=document.createElement('div')
      space.className="mspacer23"
      let addButton=(this.displaySettings)?this.addButton.getTemplate({}):space;
      let html= `
    <div class="panelview glass4">
      <div class="addrow">
        <div class="mspacer23"></div>
        <div class="brunchtitle2">${this.title}</div>
        <div class="addBtnTemplate"></div>                           <!--addBtn-->
      </div>
      <div class="mspacer4"></div>
      <div class="viewgridmainTemplate"></div>       <!--viewgridmain-->
      <div class="mspacer23"></div>
      <div class="viewsettingsTemplate"></div>      <!--Settings-->
    </div>`
     let div=document.createElement('div')
     div.innerHTML=html  
     div.getElementsByClassName("viewsettingsTemplate")[0].append(settings)
     div.getElementsByClassName("viewgridmainTemplate")[0].append(this.peopleInRoomViewGrid.getTemplate({}))
     div.getElementsByClassName("addBtnTemplate")[0].append(addButton)
     

        return (
         div
        )
    }

}

