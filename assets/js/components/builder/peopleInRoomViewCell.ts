import{PeopleInRoomViewCell } from "../viewRoomsWithPeople"
import { gridPicsWithTitleBuilder } from "./gridPicsWithTitle"
import { gridPicsBuilder } from "./gridPics"
import { smallAviBuilder } from "./smallAvi"
import { ButtonRectangle,ButtonCircle } from "../brunchButton"

export let peopleInRoomViewCellBuilder=function peopleInRoomViewCellBuilder(object:any,joinClick:Function,updateClick:Function,deleteClick:Function){
    let rooms=object.rooms;
    let peopleInRoomViewCell=[];  
    for (let i=0;i<rooms.length;i++){
        let r=rooms[i];
        let smallAvis=[];
         for (let j=0;j<r.Pics.length;j++){
             let p=r.Pics[j]
             let Uid=`r${i+1}-u${j+1}`;//Just for testing purpose
             let s=smallAviBuilder(p,Uid)
             smallAvis.push(s) 
         }
         
        let gridPics=gridPicsBuilder(smallAvis);
        let gridPicsWithTitle=gridPicsWithTitleBuilder(gridPics,`room ${i+1}`)
        peopleInRoomViewCell.push(new PeopleInRoomViewCell(gridPicsWithTitle,object.dispSettings,new ButtonRectangle("Join",'',()=>{joinClick(`J-r${i+1}`)},7),new ButtonCircle("✎",'',()=>{updateClick(`U-r${i+1}`)},7),new ButtonCircle("X",'',()=>{deleteClick(`D-r${i+1}`)},3) ))
    }
    return (peopleInRoomViewCell)
}