export type CellCntrlBtn={label:string,id:string,click:Function,bgColor:number,tooltipLabel:string}
export type EventInfo={id:string,categoryID:number,title:string,date:string,link:string}
export type SessionInfo={id:string,title:string,date:string,time:string,link:string}
export type MyEvent={info:EventInfo,sessions:SessionInfo[]}
