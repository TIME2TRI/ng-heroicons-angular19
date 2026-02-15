import * as i0 from '@angular/core';
import { OnInit, OnChanges, SimpleChanges, InjectionToken, AfterViewInit, ElementRef, Renderer2, Provider } from '@angular/core';

declare class BaseOutlineIconComponent implements OnInit, OnChanges {
    size: number;
    stroke: number | string;
    color: string;
    class: string;
    svgClass: string;
    svgStyle: string;
    style: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    renderStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseOutlineIconComponent, "base-outline-icon", never, { "size": { "alias": "size"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; "color": { "alias": "color"; "required": false; }; "class": { "alias": "class"; "required": false; }; "svgClass": { "alias": "svgClass"; "required": false; }; "svgStyle": { "alias": "svgStyle"; "required": false; }; }, {}, never, never, true, never>;
}

declare class AcademicCapOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AcademicCapOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AcademicCapOutlineIconComponent, "academic-cap-outline-icon", never, {}, {}, never, never, true, never>;
}

declare class AdjustmentsHorizontalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdjustmentsHorizontalOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdjustmentsHorizontalOutlineIconComponent, "adjustments-horizontal-outline-icon", never, {}, {}, never, never, true, never>;
}

declare class AdjustmentsVerticalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdjustmentsVerticalOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdjustmentsVerticalOutlineIconComponent, "adjustments-vertical-outline-icon", never, {}, {}, never, never, true, never>;
}

declare class ArchiveBoxArrowDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ArchiveBoxArrowDownOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArchiveBoxArrowDownOutlineIconComponent, "archive-box-arrow-down-outline-icon", never, {}, {}, never, never, true, never>;
}

declare class ArchiveBoxXMarkOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ArchiveBoxXMarkOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArchiveBoxXMarkOutlineIconComponent, "archive-box-x-mark-outline-icon", never, {}, {}, never, never, true, never>;
}

type OUTLINE_ICONS_AcademicCapOutlineIconComponent = AcademicCapOutlineIconComponent;
declare const OUTLINE_ICONS_AcademicCapOutlineIconComponent: typeof AcademicCapOutlineIconComponent;
type OUTLINE_ICONS_AdjustmentsHorizontalOutlineIconComponent = AdjustmentsHorizontalOutlineIconComponent;
declare const OUTLINE_ICONS_AdjustmentsHorizontalOutlineIconComponent: typeof AdjustmentsHorizontalOutlineIconComponent;
type OUTLINE_ICONS_AdjustmentsVerticalOutlineIconComponent = AdjustmentsVerticalOutlineIconComponent;
declare const OUTLINE_ICONS_AdjustmentsVerticalOutlineIconComponent: typeof AdjustmentsVerticalOutlineIconComponent;
type OUTLINE_ICONS_ArchiveBoxArrowDownOutlineIconComponent = ArchiveBoxArrowDownOutlineIconComponent;
declare const OUTLINE_ICONS_ArchiveBoxArrowDownOutlineIconComponent: typeof ArchiveBoxArrowDownOutlineIconComponent;
type OUTLINE_ICONS_ArchiveBoxXMarkOutlineIconComponent = ArchiveBoxXMarkOutlineIconComponent;
declare const OUTLINE_ICONS_ArchiveBoxXMarkOutlineIconComponent: typeof ArchiveBoxXMarkOutlineIconComponent;
declare namespace OUTLINE_ICONS {
  export {
    OUTLINE_ICONS_AcademicCapOutlineIconComponent as AcademicCapOutlineIconComponent,
    OUTLINE_ICONS_AdjustmentsHorizontalOutlineIconComponent as AdjustmentsHorizontalOutlineIconComponent,
    OUTLINE_ICONS_AdjustmentsVerticalOutlineIconComponent as AdjustmentsVerticalOutlineIconComponent,
    OUTLINE_ICONS_ArchiveBoxArrowDownOutlineIconComponent as ArchiveBoxArrowDownOutlineIconComponent,
    OUTLINE_ICONS_ArchiveBoxXMarkOutlineIconComponent as ArchiveBoxXMarkOutlineIconComponent,
  };
}

declare class BaseSolidIconComponent implements OnInit, OnChanges {
    size: number;
    color: string;
    class: string;
    svgClass: string;
    svgStyle: string;
    style: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    renderStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseSolidIconComponent, "base-solid-icon", never, { "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "class": { "alias": "class"; "required": false; }; "svgClass": { "alias": "svgClass"; "required": false; }; "svgStyle": { "alias": "svgStyle"; "required": false; }; }, {}, never, never, true, never>;
}

declare class AcademicCapSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AcademicCapSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AcademicCapSolidIconComponent, "academic-cap-solid-icon", never, {}, {}, never, never, true, never>;
}

declare class AdjustmentsHorizontalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdjustmentsHorizontalSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdjustmentsHorizontalSolidIconComponent, "adjustments-horizontal-solid-icon", never, {}, {}, never, never, true, never>;
}

declare class AdjustmentsVerticalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdjustmentsVerticalSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdjustmentsVerticalSolidIconComponent, "adjustments-vertical-solid-icon", never, {}, {}, never, never, true, never>;
}

declare class ArchiveBoxArrowDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ArchiveBoxArrowDownSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArchiveBoxArrowDownSolidIconComponent, "archive-box-arrow-down-solid-icon", never, {}, {}, never, never, true, never>;
}

declare class ArchiveBoxXMarkSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ArchiveBoxXMarkSolidIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArchiveBoxXMarkSolidIconComponent, "archive-box-x-mark-solid-icon", never, {}, {}, never, never, true, never>;
}

type SOLID_ICONS_AcademicCapSolidIconComponent = AcademicCapSolidIconComponent;
declare const SOLID_ICONS_AcademicCapSolidIconComponent: typeof AcademicCapSolidIconComponent;
type SOLID_ICONS_AdjustmentsHorizontalSolidIconComponent = AdjustmentsHorizontalSolidIconComponent;
declare const SOLID_ICONS_AdjustmentsHorizontalSolidIconComponent: typeof AdjustmentsHorizontalSolidIconComponent;
type SOLID_ICONS_AdjustmentsVerticalSolidIconComponent = AdjustmentsVerticalSolidIconComponent;
declare const SOLID_ICONS_AdjustmentsVerticalSolidIconComponent: typeof AdjustmentsVerticalSolidIconComponent;
type SOLID_ICONS_ArchiveBoxArrowDownSolidIconComponent = ArchiveBoxArrowDownSolidIconComponent;
declare const SOLID_ICONS_ArchiveBoxArrowDownSolidIconComponent: typeof ArchiveBoxArrowDownSolidIconComponent;
type SOLID_ICONS_ArchiveBoxXMarkSolidIconComponent = ArchiveBoxXMarkSolidIconComponent;
declare const SOLID_ICONS_ArchiveBoxXMarkSolidIconComponent: typeof ArchiveBoxXMarkSolidIconComponent;
declare namespace SOLID_ICONS {
  export {
    SOLID_ICONS_AcademicCapSolidIconComponent as AcademicCapSolidIconComponent,
    SOLID_ICONS_AdjustmentsHorizontalSolidIconComponent as AdjustmentsHorizontalSolidIconComponent,
    SOLID_ICONS_AdjustmentsVerticalSolidIconComponent as AdjustmentsVerticalSolidIconComponent,
    SOLID_ICONS_ArchiveBoxArrowDownSolidIconComponent as ArchiveBoxArrowDownSolidIconComponent,
    SOLID_ICONS_ArchiveBoxXMarkSolidIconComponent as ArchiveBoxXMarkSolidIconComponent,
  };
}

declare const DEFAULT_CONFIG: NgHeroiconsModuleConfig;
declare const MODULE_CONFIG: InjectionToken<NgHeroiconsModuleConfig>;

type Replace<T extends string, S extends string, D extends string, A extends string = ""> = T extends `${infer L}${S}${infer R}` ? Replace<R, S, D, `${A}${L}${D}`> : `${A}${T}`;
type Kebab<S extends string> = S extends `${infer T}${infer U}` ? U extends Uncapitalize<U> ? `${Uncapitalize<T>}${Kebab<U>}` : `${Uncapitalize<T>}-${Kebab<U>}` : '';
type T_SOLID_ICONS = Replace<Kebab<keyof typeof SOLID_ICONS>, "-solid-icon-component", "">;
type T_OUTLINE_ICONS = Replace<Kebab<keyof typeof OUTLINE_ICONS>, "-outline-icon-component", "">;
type NgHeroiconsModuleConfig = {
    stroke?: number;
    default?: 'outline' | 'solid';
};

declare class DynamicComponent implements AfterViewInit, OnChanges {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicComponent, "ng-heroicons", never, { "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "solid": { "alias": "solid"; "required": false; }; "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_outline: string | undefined | boolean;
    static ngAcceptInputType_solid: string | undefined | boolean;
}

declare function provideNgHeroicons(config?: NgHeroiconsModuleConfig): Provider;

export { AcademicCapOutlineIconComponent, AcademicCapSolidIconComponent, AdjustmentsHorizontalOutlineIconComponent, AdjustmentsHorizontalSolidIconComponent, AdjustmentsVerticalOutlineIconComponent, AdjustmentsVerticalSolidIconComponent, ArchiveBoxArrowDownOutlineIconComponent, ArchiveBoxArrowDownSolidIconComponent, ArchiveBoxXMarkOutlineIconComponent, ArchiveBoxXMarkSolidIconComponent, DEFAULT_CONFIG, DynamicComponent, MODULE_CONFIG, OUTLINE_ICONS, SOLID_ICONS, provideNgHeroicons };
export type { NgHeroiconsModuleConfig, T_OUTLINE_ICONS, T_SOLID_ICONS };
