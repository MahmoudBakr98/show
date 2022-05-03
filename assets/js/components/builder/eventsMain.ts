import { categories } from "../../use-case/getCategory"
import { ButtonRectangle } from "../brunchButton"
import { EventsCategory, EventsMain } from "../eventsMain"
import { tooltipContainerBuilder } from "./brunchTooltipContainer"





export let eventsMainBuilder=()=>{

    let eventsCategories=new Array
    for (let c of categories){
        let button=new ButtonRectangle('Get Started','',()=>{},c.bgColor)
        eventsCategories.push(new EventsCategory(c,tooltipContainerBuilder('tooltip'),button))
    }
    let eventsMain=new EventsMain(eventsCategories)
    return eventsMain
}

