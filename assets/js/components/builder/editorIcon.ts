import { EditorIcon } from "../editorIcon"
import { BrunchToolTipUp } from "../brunchTooltip"


export let editorIconBuilder=function editorIconBuilder(icon:string,id:string,click:Function,tooltipMsg:string,dispTooltipIcon:Function){
    let editorIcon=new EditorIcon(icon,id,
    (e)=>{click(e)},
    (e:Event)=>{dispTooltipIcon(e,new BrunchToolTipUp(tooltipMsg))}
    ,tooltipMsg
    );
    return editorIcon
}
