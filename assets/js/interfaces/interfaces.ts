export interface BrunchComponent {
    getTemplate: (object:object) => Element
}

export interface ViewInterface extends BrunchComponent { }