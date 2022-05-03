import { EditorInGrid } from "../editorInGrid"
import { EditorIcon } from "../editorIcon"
import {ButtonRectangle2} from "../brunchButton"

export let editorInGridBuilder=function editorInGridBuilder(editorIcon:EditorIcon[],clicks:Array<Function>){
    let buttons=[];
    let len = clicks.length-1
    buttons.push(new ButtonRectangle2('Save','SaveId',()=>{clicks[len-1]('Save')}))
    buttons.push(new ButtonRectangle2('Close','CloseId',()=>{clicks[len]('Close')}))
    let editorInGrid=new EditorInGrid(editorIcon, buttons);
    return editorInGrid
} 