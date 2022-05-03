import { CategoryFilters } from "../myEventsCategoryFilters"
import { CategoryIcon } from "../categoryIcon"
import { containerCardBuilder, itemSessionsBuilder } from "./myEventsContainerCard";
import { BrunchToolTipUp } from "../brunchTooltip";
import { BrunchInput } from "../brunchInput";
import { MyEvent, SessionInfo } from "../../types/myEvent";
import { MyEvents } from "../myEvents";
import { categories, getCategory } from "../../use-case/getCategory";




let events:MyEvent[]=[
    {info:{id:'1111',categoryID:111,title:'MASTERS OF CAPITALISM',date:'27/09/2022',link:'https://es.gobrunch.com/land/number'},
     sessions:[
         {id:'11',title:'Master of Capitalism hrthtr - Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number1'},
         {id:'22',title:'Master of Capitalism  dgzdfez - Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number2'},
         {id:'33',title:'Master of Capitalism fzefz- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number3'},
         {id:'44',title:'Master of Capitalism fzqfzcgr - Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number4'}]   
    },
    {info:{id:'2222',categoryID:222,title:'discussion GoBrunch',date:'15/03/2022',link:'https://es.gobrunch.com/land/number'},
     sessions:[
         {id:'55',title:'Master of Capitalism nj,uyj- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number1'},
         {id:'66',title:'Master of Capitalism nnytny- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number2'},
         {id:'77',title:'Master of Capitalism ntynszzv- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number3'}]   
    },
    {info:{id:'3333',categoryID:333,title:'MASTERS OF CAPITALISM',date:'27/09/2022',link:'https://es.gobrunch.com/land/number'},
    sessions:[
        {id:'88',title:'Master of Capitalism vswvesf- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number1'},
        {id:'99',title:'Master of Capitalism 2752- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number0'},
        {id:'aa',title:'Master of Capitalism 228575- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number8'},
        {id:'bb',title:'Master of Capitalism ykukyk41- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number10'},
        {id:'cc',title:'Master of Capitalism heheh75- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number12'},
        {id:'dd',title:'Master of Capitalism jrjr-75- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number15'}]   
   },
   {info:{id:'4444',categoryID:333,title:'MASTERS OF CAPITALISM',date:'27/09/2022',link:'https://es.gobrunch.com/land/number'},
    sessions:[
        {id:'ee',title:'Master of Capitalism hthdthtdh87- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number1'},
        {id:'rr',title:'Master of Capitalism fegzeg- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number0'},
        {id:'gg',title:'Master of Capitalism gergs- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number8'},
        {id:'hh',title:'Master of Capitalism tèjt- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number10'},
        {id:'nn',title:'Master of Capitalism zad- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number12'},
        {id:'ll',title:'Master of Capitalism fsdf- Introduction and many single best options', date:'27/09/2022', time:'07:00 AM',link:'https://es.gobrunch.com/land/number15'}]   
   },
]

 

//myEvent Builder

export let myEventsBuilder=()=>{  
    let categoryIcons=new Array;
    for(let c of categories){
        categoryIcons.push(new CategoryIcon(c.bgColor,new BrunchToolTipUp(c.name),()=>{filterIconFunction(c.categoryID)}))
    }
    let categoryFilters=new CategoryFilters(categoryIcons)
    let containerCard=new Array
  for (let e of events){
       let category=getCategory(e.info.categoryID)!
       containerCard.push(containerCardBuilder(e,category,copyLink))
    }
   let myEvents=new MyEvents(categoryFilters,containerCard)
 return myEvents
 }
 


// copy link Function

function copyLink (Link: string){
 navigator.clipboard.writeText(Link);
}


//initialzer
function initialzer(){
  editEvent=new Array(events.length).fill(false);
  expended=new Array(events.length).fill(false);
 }



//filter By Category
let filter=false
let activeCategory=new Number
function filterByCategory(categoryID:number){
  initialzer()
  filter=true
  activeCategory=categoryID
  let containerCard=new Array
  for (let e of events){
    if(e.info.categoryID===categoryID){
       let category=getCategory(e.info.categoryID)!
       containerCard.push(containerCardBuilder(e,category,copyLink))
      }
  }
  let containerCardTemplate=document.getElementsByClassName("myeventscontainercardrepeaterTemplate")[0]
  containerCardTemplate.innerHTML=''
  for(let c of containerCard){
    containerCardTemplate.append(c.getTemplate({}))
    }

}

function displayEvents(events:MyEvent[]){
  let containerCardTemplate=document.getElementsByClassName("myeventscontainercardrepeaterTemplate")[0]
   containerCardTemplate.innerHTML=''
  for (let e of events){
    let category=getCategory(e.info.categoryID)!
    containerCardTemplate.append(containerCardBuilder(e,category,copyLink).getTemplate({}))
    } 
}

function filterIconFunction(categoryID:number){
  initialzer()
  if (filter&&categoryID===activeCategory){
        filter=false
       displayEvents(events)
  }
  else{filterByCategory(categoryID)}

}



//Event Functions 

//Edit Event
let editEvent=new Array(events.length).fill(false);
function getEventIndex(eventId:string){
  for (let i=0;i<events.length;i++){
    if (events[i].info.id===eventId){
      return i
    }
  }
}

export function editEventTitle(eventId:string){
let index=getEventIndex(eventId)!;
if(!editEvent[index]) {
    editEvent[index]=true
    let title=document.getElementById(eventId)!.getElementsByClassName('brunchtitle1')[0];
    let t=title.innerHTML
    title.innerHTML='';
    title.append(new BrunchInput({id:`editTitle${eventId}`,type:'text',placeholder:'Event Title',value:t!}).getTemplate({}))
    let input=document.getElementById(`editTitle${eventId}`) as HTMLInputElement
    input.setAttribute("class","editEventInput")
    input.focus()
    input.addEventListener('keypress',(e)=>{
      if(e.key==='Enter'){
        let newTitle=input.value
        // http put request to change the title in the database
             for (let i=0;i<events.length;i++){
                     if (events[i].info.id===eventId){
                                events[i].info.title=newTitle
                                editEvent[index]=false  
                         }
                    }
        title.innerHTML=newTitle
      }
    })
}
    
}

//Delete Event

export function deleteEvent(eventId:string){
  let index=getEventIndex(eventId)!
    // http delete request to delete event from the database
     events.splice(index,1)
     document.getElementById(eventId)?.parentElement!.remove()
     
}


//Duplicate Event

export function duplicateEvent(eventId:string){
  
  let index=getEventIndex(eventId)!;
  // new IDs should be received from the database after we succefully save the duplicated event
    //for testing **
    let newEvent=JSON.parse(JSON.stringify(events[index]));
       newEvent.info.id=`${Math.random() * (9999 - 1000) + 1000}`
       for (let s of newEvent.sessions){
         s.id=`${Math.random() * (9999 - 1000) + 1000}`
       }
    //** 
   events.splice(index+1,0,newEvent);
   let containerCardTemplate=document.getElementsByClassName("myeventscontainercardrepeaterTemplate")[0]
   containerCardTemplate.innerHTML=''
   if (filter){
     filterByCategory(getCategory(events[index].info.categoryID).categoryID)
   }
   else{ displayEvents(events) }
   initialzer() 

}




// Session Functions

//Delete Session
export function deleteSession(sessionId:string,eventId:string){
  let index=getEventIndex(eventId)!
  for (let i=0;i<events[index].sessions.length;i++) {
    // http delete request to delete event from the database
      if(events[index].sessions[i].id===sessionId)   {
              events[index].sessions.splice(i,1)
             document.getElementById(sessionId)?.parentElement!.remove()
        }
   }
}

// Duplicate Session

export function duplicateSession(sessionId:string,eventId:string){
  let index=getEventIndex(eventId)!
  let newSession:SessionInfo
  let sessionIndex=events[index].sessions.length
     for (let i=0;i<events[index].sessions.length;i++) {
          if(events[index].sessions[i].id===sessionId)   {
                newSession=JSON.parse(JSON.stringify(events[index].sessions[i]))
                newSession.id+=`${Math.random() * (9999 - 1000) + 1000}`
                sessionIndex=i
            }
      }
  events[index].sessions.splice(sessionIndex,0,newSession!)
  let eventTemplate=document.getElementById(eventId)!
  let sessions=itemSessionsBuilder(events[index],getCategory(events[index].info.categoryID),copyLink)
  let sessionsTemplate=eventTemplate.getElementsByClassName("myeventsessionsitemrepeaterTemplate")[0]
  sessionsTemplate.innerHTML=''
  for (let s of sessions){
      sessionsTemplate.append(s.getTemplate({}))
      } 
}




// expandCollapse sessions Function 


let expended=new Array(events.length).fill(false);

export function expandCollapse(eventId:string){
  let index=getEventIndex(eventId)!
  let eventTemplate=document.getElementById(eventId)!
  let sessionsTemplate=eventTemplate.getElementsByClassName("myeventsessionsitemrepeaterTemplate")[0] as HTMLElement
  if (!expended[index]){
    eventTemplate.getElementsByClassName("expandarrow")[0].classList.add('rotate180')
    let sessions=itemSessionsBuilder(events[index],getCategory(events[index].info.categoryID),copyLink)
    sessionsTemplate.innerHTML=''
     for (let s of sessions){
      sessionsTemplate.append(s.getTemplate({}))
     } 
    window.scroll(window.scrollX,eventTemplate.offsetTop)
    expended[index]=true
}
else {expended[index]=false  
  eventTemplate.getElementsByClassName("expandarrow")[0].classList.remove('rotate180') 
  eventTemplate.getElementsByClassName("myeventsessionsitemrepeaterTemplate")[0].innerHTML=''
}
}