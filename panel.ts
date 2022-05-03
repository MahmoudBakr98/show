import { panelViewRoomsWithPeople } from "./assets/js/components/builder/panelViewRoomsWithPeople";


let container=document.getElementsByClassName("container")[0];

document.getElementById("dispPanel")?.addEventListener('click',()=>{
    // document.getElementsByClassName('editorbarcontainer')[0].parentElement!.remove()
     let html=panelViewRoomsWithPeople.getTemplate({});
     container.prepend(html);
     document.body.classList.add('hideOverflow')
     document.getElementsByClassName('xCloseBtnTemplate')[0].addEventListener('click',()=>{
         document.getElementsByClassName('panelmaincontainerbg')[0].parentElement!.remove();
         document.body.classList.remove('hideOverflow');
        // container.prepend(editorHTML)
     })
 })