import { Category } from "../types/category"

export let categories:Category[]=[{categoryID:111, name:'Meeting', bgColor:1,description:"A One to few setting",new:true},
         {categoryID:222, name:'Classroom', bgColor:2,description:"Highly interactive"},
         {categoryID:333, name:'Webinar', bgColor:3,description:"One to many"},
         {categoryID:444, name:'Event', bgColor:4,description:"From exhibitions to social experiences"},
         {categoryID:555, name:'Co-Working Space', bgColor:5,description:"Your 24/7 permanent office",new:true},
         {categoryID:666, name:'Showcase', bgColor:9,description:"Create and customize your metaverse",new:true}
]


export function getCategory(categoryID:number){ 
    for(let c of categories){
        if (categoryID===c.categoryID){ return c }
     }
     return {categoryID:0, name:'??????', bgColor:0,description:"?????"}
  }