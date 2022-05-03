
export let hoverNavBuilder=(svgPoint:{x:number,y:number})=>{
    return `
    <svg version="1.1" id="hoverNav" x=${svgPoint.x+20} y=${svgPoint.y} style="opacity:.5;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 139 125"  width="196" height="130">
    <g id="nav---arrow" transform="matrix(1, 0, 0, 1, 28.047913, 55.21907)">
    <path id="border" d="M32.875,-0.469 C51.100,-0.469 65.875,14.306 65.875,32.531 C65.875,50.757 51.100,65.531 32.875,65.531 C14.650,65.531 -0.125,50.757 -0.125,32.531 C-0.125,14.306 14.650,-0.469 32.875,-0.469 z" fill="#FFFFFF" opacity="0.702"/>
    <path id="inner" d="M32.812,6.469 C47.724,6.469 59.813,18.557 59.813,33.469 C59.813,48.380 47.724,60.469 32.812,60.469 C17.901,60.469 5.812,48.380 5.812,33.469 C5.812,18.557 17.901,6.469 32.812,6.469 z" fill="#171A1B"/>
    <path id="arrow" d="M41.518,35.295 C41.518,35.295 31.694,45.119 31.694,45.119 C30.712,46.102 29.120,46.102 28.138,45.119 C27.155,44.137 27.155,42.545 28.138,41.563 C28.138,41.563 36.183,33.517 36.183,33.517 C36.183,33.517 28.138,25.471 28.138,25.471 C27.155,24.489 27.155,22.897 28.138,21.914 C29.120,20.932 30.712,20.932 31.694,21.914 C31.694,21.914 41.518,31.738 41.518,31.738 C42.501,32.721 42.501,34.313 41.518,35.295 z" fill="#FFFFFF"/>
  </g>
  <g id="button-rectangl" style="visibility: hidden;" transform="matrix(1, 0, 0, 1, -0.000504, -15.142)">
    <path id="Rounded-Rectangl" d="M 28.525 15.142 C 28.525 15.142 137.476 15.142 137.476 15.142 C 140.527 15.142 143.001 17.616 143.001 20.666 C 143.001 20.666 143.001 39.618 143.001 39.618 C 143.001 42.669 140.527 45.142 137.476 45.142 C 137.476 45.142 28.525 45.142 28.525 45.142 C 25.474 45.142 23 42.669 23 39.618 C 23 39.618 23 20.666 23 20.666 C 23 17.616 25.474 15.142 28.525 15.142 Z" fill="#171A1B"/>
    <text style="fill: rgb(255, 255, 255); font-size: 14px; white-space: pre;" x="35.933" y="35.764">Link to a Room</text>
  </g>
  </svg>`
}



export let navBuilder=(navid:any,svgPoint:{x:number,y:number})=>{
    return `
    <g class ="navigation" id="navNum${navid}" navidsession="session"  
    xmlns="http://www.w3.org/2000/svg" transform="translate(${svgPoint.x-80}, ${svgPoint.y-80})"  >
     <g id="nav---arrow" transform="matrix(1, 0, 0, 1, 28.047913, 55.21907)">
     <g id="nav---container"">
       <path id="border" d="M32.875,-0.469 C51.100,-0.469 65.875,14.306 65.875,32.531 C65.875,50.757 51.100,65.531 32.875,65.531 C14.650,65.531 -0.125,50.757 -0.125,32.531 C-0.125,14.306 14.650,-0.469 32.875,-0.469 z" fill="#FFFFFF" opacity="0.702"/>
       <path id="inner" d="M32.812,6.469 C47.724,6.469 59.813,18.557 59.813,33.469 C59.813,48.380 47.724,60.469 32.812,60.469 C17.901,60.469 5.812,48.380 5.812,33.469 C5.812,18.557 17.901,6.469 32.812,6.469 z" fill="#171A1B"/>
       <path id="arrow" d="M41.518,35.295 C41.518,35.295 31.694,45.119 31.694,45.119 C30.712,46.102 29.120,46.102 28.138,45.119 C27.155,44.137 27.155,42.545 28.138,41.563 C28.138,41.563 36.183,33.517 36.183,33.517 C36.183,33.517 28.138,25.471 28.138,25.471 C27.155,24.489 27.155,22.897 28.138,21.914 C29.120,20.932 30.712,20.932 31.694,21.914 C31.694,21.914 41.518,31.738 41.518,31.738 C42.501,32.721 42.501,34.313 41.518,35.295 z" fill="#FFFFFF"/>
     </g>
     </g>
    
     <foreignObject id="test"  width="160" height="160">
     
      <div id="button-rectangle" class="brunchbuttontooltip">
           <div class="buttontooltiplabel" id="text">This is a button with content</div>
      </div>
    </foreignObject>
    
     </style=>`
}
// export let navBuilder=(navid:any,svgPoint:{x:number,y:number})=>{
//     return `
//     <svg version="1.1" class ="navigation" navid=${navid} navidsession="session" x=${svgPoint.x-50} y=${svgPoint.y-60}
//     viewBox="22.999 0 120.002 107.75" xmlns="http://www.w3.org/2000/svg" width="166" height="110" >
//     <style>
//     #containerrr div{display:inline-block;}
//     #button-rectangle {visibility:hidden;}
//     #containerrr{text-align: center;width: 80%;font-size: 12px;margin-left:12px;
//       font-family: sans-serif;border-radius: 7px;color:white;background-color:black;
//       width:125px;cursor:pointer;min-height:80%}
//     #text{text-align: left;vertical-align: bottom;white-space: nowrap;
//       max-width: 85px;overflow: hidden;padding: 0 2px;text-overflow: ellipsis;}
//       #test:hover>#button-rectangle{visibility:visible;height:25%}
//     </style> 
//      <g id="nav---arrow" transform="matrix(1, 0, 0, 1, 41.047913, 42.21907)">
//      <g id="nav---container"">
//        <path id="border" d="M32.875,-0.469 C51.100,-0.469 65.875,14.306 65.875,32.531 C65.875,50.757 51.100,65.531 32.875,65.531 C14.650,65.531 -0.125,50.757 -0.125,32.531 C-0.125,14.306 14.650,-0.469 32.875,-0.469 z" fill="#FFFFFF" opacity="0.702"/>
//        <path id="inner" d="M32.812,6.469 C47.724,6.469 59.813,18.557 59.813,33.469 C59.813,48.380 47.724,60.469 32.812,60.469 C17.901,60.469 5.812,48.380 5.812,33.469 C5.812,18.557 17.901,6.469 32.812,6.469 z" fill="#171A1B"/>
//        <path id="arrow" d="M41.518,35.295 C41.518,35.295 31.694,45.119 31.694,45.119 C30.712,46.102 29.120,46.102 28.138,45.119 C27.155,44.137 27.155,42.545 28.138,41.563 C28.138,41.563 36.183,33.517 36.183,33.517 C36.183,33.517 28.138,25.471 28.138,25.471 C27.155,24.489 27.155,22.897 28.138,21.914 C29.120,20.932 30.712,20.932 31.694,21.914 C31.694,21.914 41.518,31.738 41.518,31.738 C42.501,32.721 42.501,34.313 41.518,35.295 z" fill="#FFFFFF"/>
//      </g>
//      </g>
    
//      <foreignObject id="test"  width="160" height="160">
//       <div id="button-rectangle" xmlns="http://www.w3.org/1999/xhtml">
//         <div id="containerrr"><span id="dd">Link to a</span><div id="text"></div> Room</div>
//       </div>
//     </foreignObject>
//      </svg>`
// }

// export let reseizeHeightPopup=(click:Function)=>{

//   let ReseizeHeightPopup=new BrunchActionPopup(new ReseizeHeight(()=>{click()}),new XCloseButtonTiny('',()=>{xCLose()})).getTemplate({})
//   return ReseizeHeightPopup
// }

