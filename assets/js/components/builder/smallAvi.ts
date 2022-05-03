import { SmallAvi } from "../brunchSmallAvi"
import { BrunchTooltip } from "../brunchTooltip"


export let smallAviBuilder=function smallAviBuilder(pic:string,id:string){
    let smallAvi=new SmallAvi(pic,id,new BrunchTooltip());
    return smallAvi
}