import { EditorInGrid } from "./editorInGrid"



export class EditorBar {
    editorInGrid: EditorInGrid
    constructor( editorInGrid: EditorInGrid) {
        this.editorInGrid = editorInGrid
    }

    getTemplate(object: object) {
        let html=`
        <div class="editorbarcontainer">
              <div class="editortopmovablearea">
                   <div class="editorbarttop darkglass5">
                      <div class="mspacer1"></div>
                   </div>
                   <div class="editorbartopinner darkglass4">
                       <div class="mspacer4"></div>
                       <div class="draggablearea"><img src="./assets/images/drag-traction-icon.svg" loading="lazy" alt="" class="draggableimage"></div>
                       <div class="mspacer4"></div>
                   </div>
              </div>
              <div class="editorbarcontainerin darkglass4">
                  <div class="editoringridleftspacercontainer">
                       <div class="mspacer4"></div>
                       <div class="editoringridTemplate"></div>
                  </div>
              </div>
        </div>`
     let div=document.createElement('div')
     div.innerHTML=html
     div.getElementsByClassName("editoringridTemplate")[0].append(this.editorInGrid.getTemplate({}))
     
    
     return div
        
    }

}