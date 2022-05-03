import { PanelViewSettings } from "../panelViewSettings";
import { BrunchCheckBox } from "../brunchCheckbox";
import {BrunchToolTipUp} from "../brunchTooltip"


export let PanelViewSettingsBuilder=function PanelViewSettingsBuilder(label:string,checkboxClick:Function){
    let ToolTipUpMsg='Everyone who joins this room will see this view right away. They won’t be able to close it. Use it as the front-door for your networking session.'
    let panelViewSettings= new PanelViewSettings(new BrunchCheckBox(label,new BrunchToolTipUp(ToolTipUpMsg),(e:any)=>{checkboxClick(e.target.checked)}));
    return panelViewSettings
}