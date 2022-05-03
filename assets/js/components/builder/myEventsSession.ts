import { Category } from "../../types/category";
import { CellCntrlBtn, SessionInfo } from "../../types/myEvent";
import { BrunchToolTipUp } from "../brunchTooltip";
import { CategoryIconSmall } from "../categoryIcon";
import { Session, SessionName, SessionReports, SessionTime } from "../myEventsSession";
import { tooltipContainerBuilder } from "./brunchTooltipContainer";
import { cellControlsBuilder } from "./myEventsCellControls";



export let sessionBuilder=(sessionInfo:SessionInfo,category:Category,copyLink:Function,cellCntrlBtn:CellCntrlBtn[])=>{
    let categoryIcon=new CategoryIconSmall(category.bgColor,new BrunchToolTipUp(category.name))
    let cellControls=cellControlsBuilder(cellCntrlBtn)
    let sessionName=new SessionName(sessionInfo.title,tooltipContainerBuilder('test'),categoryIcon,()=>{copyLink(sessionInfo.link)})
    let sessionTime=new SessionTime({date:sessionInfo.date,time:sessionInfo.time},tooltipContainerBuilder('test'))
    let sessionReports= new SessionReports(tooltipContainerBuilder('test'),tooltipContainerBuilder('test'))
    let session=new Session(sessionInfo.id,sessionName,sessionTime,sessionReports,cellControls)
    return session
}