import { Category } from "../../types/category";
import { EventInfo, MyEvent } from "../../types/myEvent";
import { BrunchToolTipUp } from "../brunchTooltip";
import { ContainerCard, ItemInfo } from "../myEventsContainerCard";
import { tooltipContainerBuilder } from "./brunchTooltipContainer";
import { deleteEvent, deleteSession, duplicateEvent, duplicateSession, editEventTitle, expandCollapse } from "./myEvents";
import { cellControlsBuilder } from "./myEventsCellControls";
import { sessionBuilder } from "./myEventsSession";




export let itemInfoBuilder=(eventInfo:EventInfo,category:Category,copyLink:Function)=>{
    let cellCntrlBtn=[
        {label:'✎',id:'',click:()=>{editEventTitle(eventInfo.id)},bgColor:7,tooltipLabel:'Edit'},
        {label:'⎘',id:'',click:()=>{duplicateEvent(eventInfo.id)},bgColor:7,tooltipLabel:'Duplicate'},
        {label:'X',id:'',click:()=>{deleteEvent(eventInfo.id)},bgColor:3,tooltipLabel:'Delete'}]
    let cellControls=cellControlsBuilder(cellCntrlBtn)
    let info={id:eventInfo.id,category:category.name,title:eventInfo.title,date:eventInfo.date,link:eventInfo.link}
    let itemInfo=new ItemInfo(info,cellControls,tooltipContainerBuilder('date'),tooltipContainerBuilder('link'),()=>{copyLink(eventInfo.link)} )  

return itemInfo
}

export let itemSessionsBuilder=(myEvent:MyEvent,category:Category,copyLink:Function)=>{
    let sessions=new Array;
    for (let s of myEvent.sessions) {
       let cellCntrlBtn=[
            {label:'✎',id:'',click:()=>{},bgColor:7,tooltipLabel:'Edit'},
            {label:'⎘',id:'',click:()=>{duplicateSession(s.id,myEvent.info.id)},bgColor:7,tooltipLabel:'Duplicate'},
            {label:'X',id:'',click:()=>{deleteSession(s.id,myEvent.info.id)},bgColor:3,tooltipLabel:'Delete'}]
        sessions.push(sessionBuilder(s,category,copyLink,cellCntrlBtn))
    } 
   return sessions
}

export let containerCardBuilder=(myEvent:MyEvent,category:Category,copyLink:Function)=>{
   let itemInfo=itemInfoBuilder(myEvent.info,category,copyLink)
   let sessions=itemSessionsBuilder(myEvent,category,copyLink)
   let tooltipUp=new BrunchToolTipUp(category.name)
   let containerCard=new ContainerCard(itemInfo,sessions,tooltipUp,myEvent.info.id,category.bgColor,()=>{expandCollapse(myEvent.info.id)})
    return containerCard
}

