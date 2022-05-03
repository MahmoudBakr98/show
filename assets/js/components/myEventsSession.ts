import { BrunchComponent} from "../interfaces/interfaces"
import { BrunchTooltipContainer} from './brunchTooltip'
import { CellControls } from "./myEventsCellControls"
import {  CategoryIconSmall } from "./categoryIcon"




export class SessionName implements BrunchComponent{
    sessionTitle:string
    toolTipContainer: BrunchTooltipContainer
    categoryIcon:CategoryIconSmall
    click:()=>void
    constructor(sessionTitle:string,toolTipContainer: BrunchTooltipContainer,categoryIcon:CategoryIconSmall,click:()=>void){
      this.sessionTitle=sessionTitle  
      this.toolTipContainer=toolTipContainer
      this.categoryIcon=categoryIcon
      this.click=click
    }
    getTemplate(obejct:object){
       let html=`
    <div class="sessionnameandlink">
        <div class="categoryiconandtitle">
             <div class="categoryiconTemplate"></div>        <!--CategoryIconSmall -->
             <div class="mspacer23"></div>
             <div class="sessionnamecontainer widthmobileextensor">
                 <div class="brunchlink">${this.sessionTitle}</div>
            </div>
        </div>
        <div class="mspacer23"></div>
        <div class="mspacer6balancerpotrait"></div>
        <div class="brunchbutton1 height23">Copy Link</div>
        <div class="mspacer4"></div>
        <div class="tooltipcontainerTemplate"></div>                    <!-- tooltipcontainer -->
    </div>
       `
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName('categoryiconTemplate')[0].append(this.categoryIcon.getTemplate({}))
       div.getElementsByClassName('tooltipcontainerTemplate')[0].append(this.toolTipContainer.getTemplate({}))
       div.getElementsByClassName("brunchbutton1")[0].addEventListener('click',this.click)
       return div
    }
}


export class SessionTime implements BrunchComponent{
   sessionDateTime:{date:string,time:string}
    toolTipContainer: BrunchTooltipContainer
    constructor(sessionDateTime:{date:string,time:string},toolTipContainer: BrunchTooltipContainer){
      this.sessionDateTime=sessionDateTime
      this.toolTipContainer=toolTipContainer
    }
    getTemplate(obejct:object){
       let html=`
    <div class="sessiondatetimetooltip">
       <div class="sessiondatetime">
            <div class="brunchlabel1">${this.sessionDateTime.date}</div>
            <div class="mspacer4"></div>
            <div class="brunchlabel1">${this.sessionDateTime.time}</div>
       </div>
       <div class="mspacer4"></div>
       <div class="tooltipcontainerTemplate"></div>       <!-- Timetooltipcontainer -->
    </div>
       `
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName('tooltipcontainerTemplate')[0].append(this.toolTipContainer.getTemplate({}))
       return div
    }
}


export class SessionReports implements BrunchComponent{
    attendanceToolTipContainer: BrunchTooltipContainer
    registrationToolTipContainer: BrunchTooltipContainer
    constructor(attendanceToolTipContainer: BrunchTooltipContainer,registrationToolTipContainer: BrunchTooltipContainer){
        this.attendanceToolTipContainer=attendanceToolTipContainer
        this.registrationToolTipContainer=registrationToolTipContainer
    }
    getTemplate(obejct:object){
       let html=`
    <div class="sessionreports">
       <div class="brunchlink">Download the attendance Report</div>
       <div class="mspacer4"></div>
       <div class="attendancetooltipcontainerTemplate"></div>        <!-- tooltipcontainer -->
       <div class="mspacer23"></div>
       <div class="brunchlink">Download the registration Report</div>
       <div class="mspacer4"></div>
       <div class="registration tooltipcontainerTemplate"></div>     <!-- tooltipcontainer -->
    </div>
       `
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName('attendancetooltipcontainerTemplate')[0].append(this.attendanceToolTipContainer.getTemplate({}))
       div.getElementsByClassName('registration tooltipcontainerTemplate')[0].append(this.registrationToolTipContainer.getTemplate({}))
       return div
    }
}


export class Session implements BrunchComponent{
    sessionId:string
    sessionName:SessionName
    sessionTime:SessionTime
    sessionReports:SessionReports
    cellControls:CellControls
    constructor(sessionId:string,
                sessionName:SessionName,sessionTime:SessionTime,
                sessionReports:SessionReports,cellControls:CellControls){
    this.sessionId=sessionId
    this.sessionName=sessionName
    this.sessionTime=sessionTime
    this.sessionReports=sessionReports
    this.cellControls=cellControls
       
    }
    getTemplate(obejct:object){
       let html=`
       <div id="${this.sessionId}" class="myeventsessionsitemrepeater">
            <div class="myeventssessionitem">
               <div class="sessionnameandlinkTemplate"></div>       <!-- SessionName -->
               <div class="mspacer23"></div>
               <div class="sessiondatetimetooltipTemplate"></div>         <!-- SessionTime -->
               <div class="mspacer23"></div>
               <div class="mspacer6balancerpotrait"></div>
               <div class="sessionreportsTemplate"></div>                 <!-- SessionReport -->
               <div class="mspacer23"></div>
               <div class="brunchlink">View Recordings</div>
               <div class="mspacer23"></div>
               <div class="mspacer6balancerpotrait"></div>
               <div class="cellcontrolsTemplate"></div>                    <!-- CellControls -->
            </div>
            <div class="mspacer23"></div>
            <div class="mspacer6balancerpotrait"></div>
            <div class="optionline"></div>
            <div class="mspacer23"></div>
        </div>
       `
       let div=document.createElement('div')
       div.innerHTML=html
       div.getElementsByClassName('sessionnameandlinkTemplate')[0].append(this.sessionName.getTemplate({}))
       div.getElementsByClassName('sessiondatetimetooltipTemplate')[0].append(this.sessionTime.getTemplate({}))
       div.getElementsByClassName('sessionreportsTemplate')[0].append(this.sessionReports.getTemplate({}))
       div.getElementsByClassName('cellcontrolsTemplate')[0].append(this.cellControls.getTemplate({}))
       return div
    }
}