import * as i0 from '@angular/core';
import { Input, ChangeDetectionStrategy, Component, InjectionToken, ViewContainerRef, ViewChild, Optional, Inject } from '@angular/core';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

class BaseOutlineIconComponent {
    size = 24;
    stroke = 1;
    color = "";
    class = "";
    svgClass = "";
    svgStyle = "";
    style = "";
    constructor() { }
    ngOnChanges(changes) {
        const colorHasChanged = changes["color"]?.previousValue !== changes["color"]?.currentValue;
        const sizeHasChanged = changes["size"]?.previousValue !== changes["size"]?.currentValue;
        const strokeHasChanged = changes["stroke"]?.previousValue !== changes["stroke"]?.currentValue;
        if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
            this.style = "";
            this.renderStyle();
        }
    }
    ngOnInit() {
        this.renderStyle();
    }
    renderStyle() {
        let style = [];
        if (this.size) {
            style.push(`width: ${this.size}px; height: ${this.size}px;`);
        }
        if (this.color) {
            style.push(`color: ${this.color};`);
        }
        if (this.stroke) {
            style.push(`stroke-width: ${this.stroke}px;`);
        }
        this.style = this.svgStyle + style.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: BaseOutlineIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: BaseOutlineIconComponent, isStandalone: true, selector: "base-outline-icon", inputs: { size: "size", stroke: "stroke", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: `.`, isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: BaseOutlineIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-outline-icon', template: `.`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"] }]
        }], ctorParameters: () => [], propDecorators: { size: [{
                type: Input
            }], stroke: [{
                type: Input
            }], color: [{
                type: Input
            }], class: [{
                type: Input
            }], svgClass: [{
                type: Input
            }], svgStyle: [{
                type: Input
            }] } });

class AcademicCapOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AcademicCapOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AcademicCapOutlineIconComponent, isStandalone: true, selector: "academic-cap-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AcademicCapOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'academic-cap-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>',
                    standalone: true
                }]
        }] });

class AdjustmentsHorizontalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsHorizontalOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AdjustmentsHorizontalOutlineIconComponent, isStandalone: true, selector: "adjustments-horizontal-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsHorizontalOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-horizontal-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/></svg>',
                    standalone: true
                }]
        }] });

class AdjustmentsVerticalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsVerticalOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AdjustmentsVerticalOutlineIconComponent, isStandalone: true, selector: "adjustments-vertical-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsVerticalOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-vertical-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/></svg>',
                    standalone: true
                }]
        }] });

class ArchiveBoxArrowDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxArrowDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: ArchiveBoxArrowDownOutlineIconComponent, isStandalone: true, selector: "archive-box-arrow-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxArrowDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-arrow-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
                    standalone: true
                }]
        }] });

class ArchiveBoxXMarkOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxXMarkOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: ArchiveBoxXMarkOutlineIconComponent, isStandalone: true, selector: "archive-box-x-mark-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxXMarkOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-x-mark-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
                    standalone: true
                }]
        }] });

var OUTLINE_ICONS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AcademicCapOutlineIconComponent: AcademicCapOutlineIconComponent,
    AdjustmentsHorizontalOutlineIconComponent: AdjustmentsHorizontalOutlineIconComponent,
    AdjustmentsVerticalOutlineIconComponent: AdjustmentsVerticalOutlineIconComponent,
    ArchiveBoxArrowDownOutlineIconComponent: ArchiveBoxArrowDownOutlineIconComponent,
    ArchiveBoxXMarkOutlineIconComponent: ArchiveBoxXMarkOutlineIconComponent
});

class BaseSolidIconComponent {
    size = 24;
    color = "";
    class = "";
    svgClass = "";
    svgStyle = "";
    style = "";
    constructor() { }
    ngOnChanges(changes) {
        const colorHasChanged = changes["color"]?.previousValue !== changes["color"]?.currentValue;
        const sizeHasChanged = changes["size"]?.previousValue !== changes["size"]?.currentValue;
        if (colorHasChanged || sizeHasChanged) {
            this.style = "";
            this.renderStyle();
        }
    }
    ngOnInit() {
        this.renderStyle();
    }
    renderStyle() {
        let style = [];
        if (this.size) {
            style.push(`width: ${this.size}px; height: ${this.size}px;`);
        }
        if (this.color) {
            style.push(`color: ${this.color};`);
        }
        this.style = this.svgStyle + style.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: BaseSolidIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: BaseSolidIconComponent, isStandalone: true, selector: "base-solid-icon", inputs: { size: "size", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: '.', isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: BaseSolidIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-solid-icon', template: '.', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"] }]
        }], ctorParameters: () => [], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], class: [{
                type: Input
            }], svgClass: [{
                type: Input
            }], svgStyle: [{
                type: Input
            }] } });

class AcademicCapSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AcademicCapSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AcademicCapSolidIconComponent, isStandalone: true, selector: "academic-cap-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311 54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/><path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AcademicCapSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'academic-cap-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311 54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/><path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/></svg>',
                    standalone: true
                }]
        }] });

class AdjustmentsHorizontalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsHorizontalSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AdjustmentsHorizontalSolidIconComponent, isStandalone: true, selector: "adjustments-horizontal-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6Zm0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12Zm6-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsHorizontalSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-horizontal-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6Zm0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12Zm6-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/></svg>',
                    standalone: true
                }]
        }] });

class AdjustmentsVerticalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsVerticalSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: AdjustmentsVerticalSolidIconComponent, isStandalone: true, selector: "adjustments-vertical-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12Zm12 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0Zm12-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0Zm-6-13.5v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21Zm-8.25-6a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: AdjustmentsVerticalSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-vertical-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12Zm12 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0Zm12-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0Zm-6-13.5v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21Zm-8.25-6a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"/></svg>',
                    standalone: true
                }]
        }] });

class ArchiveBoxArrowDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxArrowDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: ArchiveBoxArrowDownSolidIconComponent, isStandalone: true, selector: "archive-box-arrow-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxArrowDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-arrow-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: true
                }]
        }] });

class ArchiveBoxXMarkSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxXMarkSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: ArchiveBoxXMarkSolidIconComponent, isStandalone: true, selector: "archive-box-x-mark-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: ArchiveBoxXMarkSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-x-mark-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: true
                }]
        }] });

var SOLID_ICONS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AcademicCapSolidIconComponent: AcademicCapSolidIconComponent,
    AdjustmentsHorizontalSolidIconComponent: AdjustmentsHorizontalSolidIconComponent,
    AdjustmentsVerticalSolidIconComponent: AdjustmentsVerticalSolidIconComponent,
    ArchiveBoxArrowDownSolidIconComponent: ArchiveBoxArrowDownSolidIconComponent,
    ArchiveBoxXMarkSolidIconComponent: ArchiveBoxXMarkSolidIconComponent
});

const DEFAULT_CONFIG = { stroke: 1, default: 'outline' };
const MODULE_CONFIG = new InjectionToken('config');

function getOutput(value) {
    if (typeof value === 'boolean') {
        return value;
    }
    return value !== undefined;
}
class DynamicComponent {
    element;
    renderer;
    config;
    icon = undefined;
    size = 24;
    color = '';
    stroke = undefined;
    outline = false;
    solid = false;
    class = undefined;
    style = '';
    container;
    constructor(element, renderer, config) {
        this.element = element;
        this.renderer = renderer;
        this.config = config;
        this.stroke = this.stroke || this.config.stroke;
        this.outline = this.config.default === 'outline';
        this.solid = this.config.default === 'solid';
    }
    ngOnChanges(changes) {
        const icon = changes['icon']?.currentValue || this.icon;
        if (!icon) {
            throw new Error("Is necessary the icon name");
        }
        let solid;
        let outline;
        if (!changes['solid']) {
            solid = this.solid;
        }
        else {
            solid = typeof changes['solid']?.currentValue === 'boolean' ? changes['solid']?.currentValue : changes['solid']?.currentValue !== undefined;
        }
        if (!changes['outline']) {
            outline = this.outline;
        }
        else {
            if (changes['outline'].firstChange) { }
            outline = typeof changes['outline']?.currentValue === 'boolean' ? changes['outline']?.currentValue : changes['outline']?.currentValue !== undefined;
        }
        if (this.config.default === 'outline') {
            outline = solid ? false : this.config.default === 'outline';
        }
        else if (this.config.default === 'solid') {
            solid = outline ? false : this.config.default === 'solid';
        }
        const stroke = solid
            ? undefined
            : (changes['stroke']?.currentValue || this.stroke || undefined);
        const size = changes['size']?.currentValue || this.size;
        const color = changes['color']?.currentValue || this.color;
        const class_ = changes['class']?.currentValue || this.class;
        const style = changes['style']?.currentValue || this.style;
        this.solid = solid;
        this.outline = outline;
        this.stroke = stroke;
        this.class = class_;
        this.style = style;
        this.loadContent(icon, {
            outline,
            solid,
            size,
            color,
            stroke,
            class_,
            style
        });
    }
    ngAfterViewInit() {
        const icon = this.icon;
        if (!icon) {
            throw new Error("Is necessary the icon name");
        }
        let solid = this.solid;
        let outline = this.outline;
        if (this.config.default === 'outline') {
            outline = solid ? false : this.config.default === 'outline';
        }
        else if (this.config.default === 'solid') {
            solid = outline ? false : this.config.default === 'solid';
        }
        this.solid = solid;
        this.outline = outline;
        this.loadContent(icon, {
            outline,
            solid,
            size: this.size,
            color: this.color,
            stroke: solid ? undefined : this.stroke || undefined,
            class_: this.class || '',
            style: this.style
        });
    }
    loadContent(icon, { outline, solid, size, color, stroke, class_, style, }) {
        let element;
        if (!this.container)
            return;
        this.container.clear();
        if (solid) {
            if (`${upperFirst(camelCase(icon))}SolidIconComponent` in SOLID_ICONS$1) {
                element = this.container.createComponent(SOLID_ICONS$1[`${upperFirst(camelCase(icon))}SolidIconComponent`]);
            }
        }
        else if (outline) {
            if (`${upperFirst(camelCase(icon))}OutlineIconComponent` in OUTLINE_ICONS$1) {
                element = this.container.createComponent(OUTLINE_ICONS$1[`${upperFirst(camelCase(icon))}OutlineIconComponent`]);
            }
        }
        if (!element) {
            throw new Error(`The icon name <${icon}> does not exists on ${solid ? 'solid' : 'outline'} icons.`);
        }
        element.instance.svgStyle = style;
        element.instance.stroke = stroke;
        element.instance.size = size;
        element.instance.color = color;
        this.renderer.setAttribute(element?.location.nativeElement, "class", this.element.nativeElement.className || class_ || '');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: DynamicComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: MODULE_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "21.1.4", type: DynamicComponent, isStandalone: true, selector: "ng-heroicons", inputs: { icon: "icon", size: "size", color: "color", stroke: "stroke", outline: ["outline", "outline", getOutput], solid: ["solid", "solid", getOutput], class: "class", style: "style" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: `<ng-container #container />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-heroicons',
                    template: `<ng-container #container />`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MODULE_CONFIG]
                }] }], propDecorators: { icon: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], stroke: [{
                type: Input
            }], outline: [{
                type: Input,
                args: [{ transform: getOutput }]
            }], solid: [{
                type: Input,
                args: [{ transform: getOutput }]
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }] } });

function provideNgHeroicons(config = {}) {
    return {
        provide: MODULE_CONFIG,
        useValue: { ...DEFAULT_CONFIG, ...config }
    };
}

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcademicCapOutlineIconComponent, AcademicCapSolidIconComponent, AdjustmentsHorizontalOutlineIconComponent, AdjustmentsHorizontalSolidIconComponent, AdjustmentsVerticalOutlineIconComponent, AdjustmentsVerticalSolidIconComponent, ArchiveBoxArrowDownOutlineIconComponent, ArchiveBoxArrowDownSolidIconComponent, ArchiveBoxXMarkOutlineIconComponent, ArchiveBoxXMarkSolidIconComponent, DEFAULT_CONFIG, DynamicComponent, MODULE_CONFIG, OUTLINE_ICONS$1 as OUTLINE_ICONS, SOLID_ICONS$1 as SOLID_ICONS, provideNgHeroicons };
//# sourceMappingURL=time2tri-ng-heroicons-standalone.mjs.map
