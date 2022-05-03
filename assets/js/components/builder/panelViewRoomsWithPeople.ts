import { Panel } from "../panel"
import{peopleInRoomViewBuilder} from "./peopleInRoomView"
import{peopleInRoomViewCellBuilder} from "./peopleInRoomViewCell"
import{PanelSettingsBuilder} from "./panelSettings"


let exp={dispSettings:true,
rooms:[{title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:new Array(100).fill('')},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['','','','','','','','','','','','','','','','','','']},
       {title:"room", Pics:['','','','','','']},
       {title:"room", Pics:['']}
    ]
    }


    export var panelViewRoomsWithPeople = new Panel('Panel Title :dasdasdasdasdas', panelBuilder(exp),PanelSettingsBuilder('Broadcast to All Rooms',myFunction),exp.dispSettings,()=>{myFunction('UpdateTitleClicked')},()=>{myFunction('XcloceClicked')})

function panelBuilder(object:any){
   let peopleInRoomViewCell= peopleInRoomViewCellBuilder(object,myFunction,myFunction,myFunction)
   let peopleInRoomView=peopleInRoomViewBuilder(object.dispSettings,peopleInRoomViewCell,myFunction,myFunction)
    return(peopleInRoomView)  
}

//Just for testing
function myFunction (i:any){
          console.log(i)
}