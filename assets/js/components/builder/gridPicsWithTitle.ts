import{GridPicsWithTitle} from "../gridPicsWithTitle"


export let gridPicsWithTitleBuilder= function gridPicsWithTitleBuilder(gridPics:any,roomTitle:string){

    let gridPicsWithTitle=new GridPicsWithTitle(gridPics,roomTitle)
    return gridPicsWithTitle
}
