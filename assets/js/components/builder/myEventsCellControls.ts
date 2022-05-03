import { ButtonCircle } from "../brunchButton";
import { CellControls } from "../myEventsCellControls";
import { BrunchToolTipUp } from "../brunchTooltip";

export let cellControlsBuilder=(cellCntrlBtn:{label:string,id:string,click:any,bgColor:number,tooltipLabel:string}[])=>{
    let buttons=new Array;
    for (let b of cellCntrlBtn){
       buttons.push(new ButtonCircle(b.label,b.id,b.click,b.bgColor,new BrunchToolTipUp(b.tooltipLabel)))
    }
    let cellControls=new CellControls(buttons)
    return cellControls
}