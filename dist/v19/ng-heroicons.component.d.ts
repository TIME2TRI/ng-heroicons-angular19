import { AfterViewInit, ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { T_OUTLINE_ICONS, NgHeroiconsModuleConfig, T_SOLID_ICONS } from './types';
import * as i0 from "@angular/core";
export declare class DynamicComponent implements AfterViewInit, OnChanges {
    private element;
    private renderer;
    private config;
    icon: T_SOLID_ICONS | T_OUTLINE_ICONS | undefined;
    size?: number;
    color?: string;
    stroke?: number | undefined;
    outline?: string | undefined | boolean;
    solid?: string | undefined | boolean;
    class?: string | undefined;
    style?: string;
    private container;
    constructor(element: ElementRef, renderer: Renderer2, config: NgHeroiconsModuleConfig);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    loadContent(icon: string, { outline, solid, size, color, stroke, class_, style, }: {
        outline: boolean | string | undefined;
        solid: boolean | string | undefined;
        color: string | undefined;
        size: number | undefined;
        stroke: number | undefined;
        class_: string;
        style: string | undefined;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicComponent, "ng-heroicons", never, { "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "solid": { "alias": "solid"; "required": false; }; "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_outline: string | undefined | boolean;
    static ngAcceptInputType_solid: string | undefined | boolean;
}
export declare class DynamicIconsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicIconsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DynamicIconsModule, [typeof DynamicComponent], never, [typeof DynamicComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DynamicIconsModule>;
}
