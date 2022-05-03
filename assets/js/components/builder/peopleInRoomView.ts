import{PeopleInRoomView,PeopleInRoomViewGrid} from "../viewRoomsWithPeople"
import { PanelViewSettingsBuilder } from "./panelViewSettings"
import {ButtonCircle } from "../brunchButton"


export let peopleInRoomViewBuilder=function peopleInRoomViewBuilder(dispSettings:boolean,peopleInRoomViewCell:any,checkboxClick:Function,addRoomClick:Function){

    let peopleInRoomViewGrid=new PeopleInRoomViewGrid(peopleInRoomViewCell)
    let pannelviewSettings=PanelViewSettingsBuilder('Pin this view',checkboxClick);
    let peopleInRoomView=new PeopleInRoomView(peopleInRoomViewGrid,'Choose the Room You Want to Join',new ButtonCircle("+", 'AddRoom',()=>{addRoomClick('addRoomClicked')},7),pannelviewSettings,dispSettings)
    
    return(peopleInRoomView)
}