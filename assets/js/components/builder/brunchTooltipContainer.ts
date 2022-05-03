import { BrunchTooltipContainer } from "../brunchTooltip";
import { BrunchToolTipUp } from "../brunchTooltip";


export let tooltipContainerBuilder=(tooltipLabel:string)=>{
    let tooltipContainer=new BrunchTooltipContainer(new BrunchToolTipUp(tooltipLabel))
    return tooltipContainer
}