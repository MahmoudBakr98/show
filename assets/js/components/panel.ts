import { BrunchComponent, ViewInterface } from "../interfaces/interfaces"
import { BrunchColor, ColorGobrunchEnum } from "../domain/brunchColor"
import { BrunchTextFormat, TextFormatGoBrunchEnum } from "../domain/brunchTextFormat"
import {ButtonCircle } from "./brunchButton"
import { XCloseButton } from "./xCloseButton"
import { PanelSettings } from "./panelSettings"



//Panel with title and panelview. No tabs in version 1. 
export class Panel {
    title: string
    panelView: ViewInterface //By using ViewInterface implies that the panel can have any template. For this job, the panelView view will be viewRoomWithPeople.
    PanelSettings:PanelSettings
    displayControlButtons: boolean
    clickUpdateTitle:()=>void
    clickXClose:()=>void
    titleFormat?: BrunchTextFormat
    titleColor?: BrunchColor
    constructor(
        title: string,
        panelView: ViewInterface,
        PanelSettings:PanelSettings,
        displayControlButtons: boolean,
        clickUpdateTitle:()=>void,
        clickXClose:()=>void,
        titleFormat?: BrunchTextFormat,
        titleColor?: BrunchColor,
    ) {
        this.title = title
        this.titleFormat = titleFormat
        this.titleColor = titleColor
        this.panelView = panelView
        this.PanelSettings=PanelSettings
        this.displayControlButtons=displayControlButtons
        this.clickUpdateTitle=clickUpdateTitle
        this.clickXClose=clickXClose

    }

    getTemplate(object: object) {

 

let html=`
<div  class="panelmaincontainerbg glass3">
    <div class="panelmaincontainer">
      <div class="mspacer23"></div>
      <div class="panelmainv">
        <div class="panelmain">
          <div class="panelcontent glass">
            <div class="mspacer23"></div>
            <div class="panelcontentv">
              <div class="mspacer23"></div>
              <div class="eventtilecontainer">
                <div class="eventtitlemainwithclose">
                  <div class="eventtillemain">
                    <div class="titlecontainer">
                      <div class="brunchtitle1">${this.title}</div>
                    </div>
                    <div class="mspacer23"></div>
                    <div class="changeTitleBtnTemplate"></div>              <!--Circle Btn-->        
                  </div>
                  <div class="xCloseBtnTemplate"></div>              <!--XClose Btn-->
                </div>
                <div class="mspacer23"></div>
              </div>
              <div class="mspacer23"></div>
              <div class="panelviewcontainer">
                   <div class="panelviewTemplate"></div>          <!--panelviewTemplate-->
                   <div class="mspacer23"></div>
              </div>
              <div class="mspacer23"></div>
              <div class="panelsettingsTemplate"></div>           <!--panelsettingsTemplate-->
              <div class="mspacer23"></div>
              <!--close panelcontentv-->
            </div>
          <!--close panelcontent glass-->
          </div>
          <!--close panelmain-->
        </div>
        <!--close panelmainv-->
      </div>
      <div class="mspacer23"></div>
      <!--close panelmaincontainer-->
    </div>
</div>`
let div=document.createElement('div')
div.innerHTML=html;
(this.displayControlButtons)&&div.getElementsByClassName("changeTitleBtnTemplate")[0].append(new ButtonCircle("✎",'ChangeTitle',this.clickUpdateTitle,7).getTemplate({}));
(this.displayControlButtons)&&div.getElementsByClassName("panelsettingsTemplate")[0].append(this.PanelSettings.getTemplate({}));
div.getElementsByClassName("xCloseBtnTemplate")[0].append(new XCloseButton('Xclose',this.clickXClose).getTemplate({}))
div.getElementsByClassName("panelviewTemplate")[0].append(this.panelView.getTemplate({}))
        return (
            div
        )
    }

}