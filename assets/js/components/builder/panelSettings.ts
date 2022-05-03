import { PanelSettings } from "../panelSettings";
import { BrunchCheckBox } from "../brunchCheckbox";
import {BrunchToolTipUp} from "../brunchTooltip"


export let PanelSettingsBuilder=function PanelSettingsBuilder(label:string,checkboxClick:Function){
    let ToolTipUpMsg='Just a Tooltip'
    let panelViewSettings= new PanelSettings(new BrunchCheckBox(label,new BrunchToolTipUp(ToolTipUpMsg),(e:any)=>{checkboxClick(e.target.checked)}));
    return panelViewSettings
}