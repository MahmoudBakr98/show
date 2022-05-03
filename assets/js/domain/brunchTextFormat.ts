export enum TextFormatGoBrunchEnum {
    Title1,
    Title2,
    Label
}

export class BrunchTextFormat {
    gobrunchtext = {
        0: {
            size: 27,
            font: "oswald",
            texttransform: "uppercase",
            fontweigth: 400,
            lineheight: 30, medium: { size: 17, lineheight: 22 }
        },
        1: {
            size: 14,
            font: "open-sans",
            fontweigth: 700,
            lineheight: 30, medium: { size: 17, lineheight: 22 }
        },
        2: {
            size: 14,
            font: "open-sans",
            fontweigth: 399
        }
    }
}
