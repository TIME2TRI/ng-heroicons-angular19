import * as i0 from '@angular/core';
import { Input, ChangeDetectionStrategy, Component, InjectionToken, NgModule, ViewContainerRef, ViewChild, Optional, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: BaseOutlineIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: BaseOutlineIconComponent, isStandalone: false, selector: "base-outline-icon", inputs: { size: "size", stroke: "stroke", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: `.`, isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: BaseOutlineIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-outline-icon', template: `.`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"] }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AcademicCapOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AcademicCapOutlineIconComponent, isStandalone: false, selector: "academic-cap-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AcademicCapOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'academic-cap-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>',
                    standalone: false
                }]
        }] });

class AdjustmentsHorizontalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsHorizontalOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AdjustmentsHorizontalOutlineIconComponent, isStandalone: false, selector: "adjustments-horizontal-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsHorizontalOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-horizontal-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/></svg>',
                    standalone: false
                }]
        }] });

class AdjustmentsVerticalOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsVerticalOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AdjustmentsVerticalOutlineIconComponent, isStandalone: false, selector: "adjustments-vertical-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsVerticalOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-vertical-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxArrowDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxArrowDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxArrowDownOutlineIconComponent, isStandalone: false, selector: "archive-box-arrow-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxArrowDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-arrow-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxXMarkOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxXMarkOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxXMarkOutlineIconComponent, isStandalone: false, selector: "archive-box-x-mark-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxXMarkOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-x-mark-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxOutlineIconComponent, isStandalone: false, selector: "archive-box-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownCircleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownCircleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownCircleOutlineIconComponent, isStandalone: false, selector: "arrow-down-circle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownCircleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-circle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownLeftOutlineIconComponent, isStandalone: false, selector: "arrow-down-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownOnSquareStackOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareStackOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownOnSquareStackOutlineIconComponent, isStandalone: false, selector: "arrow-down-on-square-stack-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareStackOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-on-square-stack-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownOnSquareOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownOnSquareOutlineIconComponent, isStandalone: false, selector: "arrow-down-on-square-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-on-square-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownRightOutlineIconComponent, isStandalone: false, selector: "arrow-down-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownTrayOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownTrayOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownTrayOutlineIconComponent, isStandalone: false, selector: "arrow-down-tray-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownTrayOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-tray-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownOutlineIconComponent, isStandalone: false, selector: "arrow-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftCircleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftCircleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftCircleOutlineIconComponent, isStandalone: false, selector: "arrow-left-circle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftCircleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-circle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftEndOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftEndOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftEndOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-left-end-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftEndOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-end-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-left-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftStartOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftStartOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftStartOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-left-start-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftStartOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-start-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftOutlineIconComponent, isStandalone: false, selector: "arrow-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongDownOutlineIconComponent, isStandalone: false, selector: "arrow-long-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongLeftOutlineIconComponent, isStandalone: false, selector: "arrow-long-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongRightOutlineIconComponent, isStandalone: false, selector: "arrow-long-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongUpOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongUpOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongUpOutlineIconComponent, isStandalone: false, selector: "arrow-long-up-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongUpOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-up-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowPathRoundedSquareOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathRoundedSquareOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowPathRoundedSquareOutlineIconComponent, isStandalone: false, selector: "arrow-path-rounded-square-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathRoundedSquareOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-path-rounded-square-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowPathOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowPathOutlineIconComponent, isStandalone: false, selector: "arrow-path-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-path-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightCircleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightCircleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightCircleOutlineIconComponent, isStandalone: false, selector: "arrow-right-circle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightCircleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-circle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightEndOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightEndOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightEndOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-right-end-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightEndOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-end-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-right-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightStartOnRectangleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightStartOnRectangleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightStartOnRectangleOutlineIconComponent, isStandalone: false, selector: "arrow-right-start-on-rectangle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightStartOnRectangleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-start-on-rectangle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightOutlineIconComponent, isStandalone: false, selector: "arrow-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallDownOutlineIconComponent, isStandalone: false, selector: "arrow-small-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallLeftOutlineIconComponent, isStandalone: false, selector: "arrow-small-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallRightOutlineIconComponent, isStandalone: false, selector: "arrow-small-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallUpOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallUpOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallUpOutlineIconComponent, isStandalone: false, selector: "arrow-small-up-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallUpOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-up-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTopRightOnSquareOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTopRightOnSquareOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTopRightOnSquareOutlineIconComponent, isStandalone: false, selector: "arrow-top-right-on-square-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTopRightOnSquareOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-top-right-on-square-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTrendingDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTrendingDownOutlineIconComponent, isStandalone: false, selector: "arrow-trending-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-trending-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTrendingUpOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingUpOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTrendingUpOutlineIconComponent, isStandalone: false, selector: "arrow-trending-up-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingUpOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-trending-up-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnDownLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnDownLeftOutlineIconComponent, isStandalone: false, selector: "arrow-turn-down-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-down-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnDownRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnDownRightOutlineIconComponent, isStandalone: false, selector: "arrow-turn-down-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-down-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnLeftDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnLeftDownOutlineIconComponent, isStandalone: false, selector: "arrow-turn-left-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-left-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnLeftUpOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftUpOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnLeftUpOutlineIconComponent, isStandalone: false, selector: "arrow-turn-left-up-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftUpOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-left-up-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnRightDownOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightDownOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnRightDownOutlineIconComponent, isStandalone: false, selector: "arrow-turn-right-down-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightDownOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-right-down-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnRightUpOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightUpOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnRightUpOutlineIconComponent, isStandalone: false, selector: "arrow-turn-right-up-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightUpOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-right-up-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnUpLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnUpLeftOutlineIconComponent, isStandalone: false, selector: "arrow-turn-up-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-up-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnUpRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnUpRightOutlineIconComponent, isStandalone: false, selector: "arrow-turn-up-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75-3.751m0 0-3.75-3.75m3.75 3.75H3.74V19.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-up-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75-3.751m0 0-3.75-3.75m3.75 3.75H3.74V19.5"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpCircleOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpCircleOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpCircleOutlineIconComponent, isStandalone: false, selector: "arrow-up-circle-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpCircleOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-circle-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpLeftOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpLeftOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpLeftOutlineIconComponent, isStandalone: false, selector: "arrow-up-left-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpLeftOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-left-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpOnSquareStackOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareStackOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpOnSquareStackOutlineIconComponent, isStandalone: false, selector: "arrow-up-on-square-stack-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareStackOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-on-square-stack-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpOnSquareOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpOnSquareOutlineIconComponent, isStandalone: false, selector: "arrow-up-on-square-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-on-square-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpRightOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpRightOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpRightOutlineIconComponent, isStandalone: false, selector: "arrow-up-right-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpRightOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-right-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpTrayOutlineIconComponent extends BaseOutlineIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpTrayOutlineIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpTrayOutlineIconComponent, isStandalone: false, selector: "arrow-up-tray-outline-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpTrayOutlineIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-tray-outline-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/></svg>',
                    standalone: false
                }]
        }] });

var OUTLINE_ICONS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AcademicCapOutlineIconComponent: AcademicCapOutlineIconComponent,
    AdjustmentsHorizontalOutlineIconComponent: AdjustmentsHorizontalOutlineIconComponent,
    AdjustmentsVerticalOutlineIconComponent: AdjustmentsVerticalOutlineIconComponent,
    ArchiveBoxArrowDownOutlineIconComponent: ArchiveBoxArrowDownOutlineIconComponent,
    ArchiveBoxOutlineIconComponent: ArchiveBoxOutlineIconComponent,
    ArchiveBoxXMarkOutlineIconComponent: ArchiveBoxXMarkOutlineIconComponent,
    ArrowDownCircleOutlineIconComponent: ArrowDownCircleOutlineIconComponent,
    ArrowDownLeftOutlineIconComponent: ArrowDownLeftOutlineIconComponent,
    ArrowDownOnSquareOutlineIconComponent: ArrowDownOnSquareOutlineIconComponent,
    ArrowDownOnSquareStackOutlineIconComponent: ArrowDownOnSquareStackOutlineIconComponent,
    ArrowDownOutlineIconComponent: ArrowDownOutlineIconComponent,
    ArrowDownRightOutlineIconComponent: ArrowDownRightOutlineIconComponent,
    ArrowDownTrayOutlineIconComponent: ArrowDownTrayOutlineIconComponent,
    ArrowLeftCircleOutlineIconComponent: ArrowLeftCircleOutlineIconComponent,
    ArrowLeftEndOnRectangleOutlineIconComponent: ArrowLeftEndOnRectangleOutlineIconComponent,
    ArrowLeftOnRectangleOutlineIconComponent: ArrowLeftOnRectangleOutlineIconComponent,
    ArrowLeftOutlineIconComponent: ArrowLeftOutlineIconComponent,
    ArrowLeftStartOnRectangleOutlineIconComponent: ArrowLeftStartOnRectangleOutlineIconComponent,
    ArrowLongDownOutlineIconComponent: ArrowLongDownOutlineIconComponent,
    ArrowLongLeftOutlineIconComponent: ArrowLongLeftOutlineIconComponent,
    ArrowLongRightOutlineIconComponent: ArrowLongRightOutlineIconComponent,
    ArrowLongUpOutlineIconComponent: ArrowLongUpOutlineIconComponent,
    ArrowPathOutlineIconComponent: ArrowPathOutlineIconComponent,
    ArrowPathRoundedSquareOutlineIconComponent: ArrowPathRoundedSquareOutlineIconComponent,
    ArrowRightCircleOutlineIconComponent: ArrowRightCircleOutlineIconComponent,
    ArrowRightEndOnRectangleOutlineIconComponent: ArrowRightEndOnRectangleOutlineIconComponent,
    ArrowRightOnRectangleOutlineIconComponent: ArrowRightOnRectangleOutlineIconComponent,
    ArrowRightOutlineIconComponent: ArrowRightOutlineIconComponent,
    ArrowRightStartOnRectangleOutlineIconComponent: ArrowRightStartOnRectangleOutlineIconComponent,
    ArrowSmallDownOutlineIconComponent: ArrowSmallDownOutlineIconComponent,
    ArrowSmallLeftOutlineIconComponent: ArrowSmallLeftOutlineIconComponent,
    ArrowSmallRightOutlineIconComponent: ArrowSmallRightOutlineIconComponent,
    ArrowSmallUpOutlineIconComponent: ArrowSmallUpOutlineIconComponent,
    ArrowTopRightOnSquareOutlineIconComponent: ArrowTopRightOnSquareOutlineIconComponent,
    ArrowTrendingDownOutlineIconComponent: ArrowTrendingDownOutlineIconComponent,
    ArrowTrendingUpOutlineIconComponent: ArrowTrendingUpOutlineIconComponent,
    ArrowTurnDownLeftOutlineIconComponent: ArrowTurnDownLeftOutlineIconComponent,
    ArrowTurnDownRightOutlineIconComponent: ArrowTurnDownRightOutlineIconComponent,
    ArrowTurnLeftDownOutlineIconComponent: ArrowTurnLeftDownOutlineIconComponent,
    ArrowTurnLeftUpOutlineIconComponent: ArrowTurnLeftUpOutlineIconComponent,
    ArrowTurnRightDownOutlineIconComponent: ArrowTurnRightDownOutlineIconComponent,
    ArrowTurnRightUpOutlineIconComponent: ArrowTurnRightUpOutlineIconComponent,
    ArrowTurnUpLeftOutlineIconComponent: ArrowTurnUpLeftOutlineIconComponent,
    ArrowTurnUpRightOutlineIconComponent: ArrowTurnUpRightOutlineIconComponent,
    ArrowUpCircleOutlineIconComponent: ArrowUpCircleOutlineIconComponent,
    ArrowUpLeftOutlineIconComponent: ArrowUpLeftOutlineIconComponent,
    ArrowUpOnSquareOutlineIconComponent: ArrowUpOnSquareOutlineIconComponent,
    ArrowUpOnSquareStackOutlineIconComponent: ArrowUpOnSquareStackOutlineIconComponent,
    ArrowUpRightOutlineIconComponent: ArrowUpRightOutlineIconComponent,
    ArrowUpTrayOutlineIconComponent: ArrowUpTrayOutlineIconComponent
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: BaseSolidIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: BaseSolidIconComponent, isStandalone: false, selector: "base-solid-icon", inputs: { size: "size", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: '.', isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: BaseSolidIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-solid-icon', template: '.', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"] }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AcademicCapSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AcademicCapSolidIconComponent, isStandalone: false, selector: "academic-cap-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311 54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/><path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AcademicCapSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'academic-cap-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311 54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/><path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/></svg>',
                    standalone: false
                }]
        }] });

class AdjustmentsHorizontalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsHorizontalSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AdjustmentsHorizontalSolidIconComponent, isStandalone: false, selector: "adjustments-horizontal-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6Zm0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12Zm6-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsHorizontalSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-horizontal-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6Zm0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12Zm6-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/></svg>',
                    standalone: false
                }]
        }] });

class AdjustmentsVerticalSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsVerticalSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: AdjustmentsVerticalSolidIconComponent, isStandalone: false, selector: "adjustments-vertical-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12Zm12 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0Zm12-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0Zm-6-13.5v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21Zm-8.25-6a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: AdjustmentsVerticalSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'adjustments-vertical-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12Zm12 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0Zm12-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0Zm-6-13.5v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21Zm-8.25-6a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxArrowDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxArrowDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxArrowDownSolidIconComponent, isStandalone: false, selector: "archive-box-arrow-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxArrowDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-arrow-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxXMarkSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxXMarkSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxXMarkSolidIconComponent, isStandalone: false, selector: "archive-box-x-mark-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxXMarkSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-x-mark-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArchiveBoxSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArchiveBoxSolidIconComponent, isStandalone: false, selector: "archive-box-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArchiveBoxSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'archive-box-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"/><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownCircleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownCircleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownCircleSolidIconComponent, isStandalone: false, selector: "arrow-down-circle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownCircleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-circle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownLeftSolidIconComponent, isStandalone: false, selector: "arrow-down-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownOnSquareStackSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareStackSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownOnSquareStackSolidIconComponent, isStandalone: false, selector: "arrow-down-on-square-stack-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd"/><path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareStackSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-on-square-stack-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd"/><path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownOnSquareSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownOnSquareSolidIconComponent, isStandalone: false, selector: "arrow-down-on-square-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5Zm-.75 6v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownOnSquareSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-on-square-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5Zm-.75 6v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownRightSolidIconComponent, isStandalone: false, selector: "arrow-down-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownTraySolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownTraySolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownTraySolidIconComponent, isStandalone: false, selector: "arrow-down-tray-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownTraySolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-tray-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowDownSolidIconComponent, isStandalone: false, selector: "arrow-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftCircleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftCircleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftCircleSolidIconComponent, isStandalone: false, selector: "arrow-left-circle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftCircleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-circle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftEndOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftEndOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftEndOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-left-end-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftEndOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-end-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-left-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftStartOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftStartOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftStartOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-left-start-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftStartOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-start-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLeftSolidIconComponent, isStandalone: false, selector: "arrow-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongDownSolidIconComponent, isStandalone: false, selector: "arrow-long-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongLeftSolidIconComponent, isStandalone: false, selector: "arrow-long-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongRightSolidIconComponent, isStandalone: false, selector: "arrow-long-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowLongUpSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongUpSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowLongUpSolidIconComponent, isStandalone: false, selector: "arrow-long-up-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowLongUpSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-long-up-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowPathRoundedSquareSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathRoundedSquareSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowPathRoundedSquareSolidIconComponent, isStandalone: false, selector: "arrow-path-rounded-square-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282a37.26 37.26 0 0 0-.046.672.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathRoundedSquareSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-path-rounded-square-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282a37.26 37.26 0 0 0-.046.672.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowPathSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowPathSolidIconComponent, isStandalone: false, selector: "arrow-path-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowPathSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-path-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightCircleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightCircleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightCircleSolidIconComponent, isStandalone: false, selector: "arrow-right-circle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightCircleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-circle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightEndOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightEndOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightEndOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-right-end-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightEndOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-end-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-right-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightStartOnRectangleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightStartOnRectangleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightStartOnRectangleSolidIconComponent, isStandalone: false, selector: "arrow-right-start-on-rectangle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightStartOnRectangleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-start-on-rectangle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowRightSolidIconComponent, isStandalone: false, selector: "arrow-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallDownSolidIconComponent, isStandalone: false, selector: "arrow-small-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v13.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 1 1 1.06-1.06l5.47 5.47V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v13.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 1 1 1.06-1.06l5.47 5.47V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallLeftSolidIconComponent, isStandalone: false, selector: "arrow-small-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallRightSolidIconComponent, isStandalone: false, selector: "arrow-small-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowSmallUpSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallUpSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowSmallUpSolidIconComponent, isStandalone: false, selector: "arrow-small-up-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowSmallUpSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-small-up-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTopRightOnSquareSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTopRightOnSquareSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTopRightOnSquareSolidIconComponent, isStandalone: false, selector: "arrow-top-right-on-square-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTopRightOnSquareSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-top-right-on-square-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTrendingDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTrendingDownSolidIconComponent, isStandalone: false, selector: "arrow-trending-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-trending-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTrendingUpSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingUpSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTrendingUpSolidIconComponent, isStandalone: false, selector: "arrow-trending-up-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTrendingUpSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-trending-up-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnDownLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnDownLeftSolidIconComponent, isStandalone: false, selector: "arrow-turn-down-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.239 3.749a.75.75 0 0 0-.75.75V15H5.549l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3.75 3.75a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L5.55 16.5h14.69a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.751Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-down-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.239 3.749a.75.75 0 0 0-.75.75V15H5.549l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3.75 3.75a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L5.55 16.5h14.69a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.751Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnDownRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnDownRightSolidIconComponent, isStandalone: false, selector: "arrow-turn-down-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.74 3.749a.75.75 0 0 1 .75.75V15h13.938l-2.47-2.47a.75.75 0 0 1 1.061-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H3.738a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.751Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnDownRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-down-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.74 3.749a.75.75 0 0 1 .75.75V15h13.938l-2.47-2.47a.75.75 0 0 1 1.061-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H3.738a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.751Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnLeftDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnLeftDownSolidIconComponent, isStandalone: false, selector: "arrow-turn-left-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.24 3.75a.75.75 0 0 1-.75.75H8.989v13.939l2.47-2.47a.75.75 0 1 1 1.06 1.061l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.751-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.469V3.75a.75.75 0 0 1 .75-.75H19.49a.75.75 0 0 1 .75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-left-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.24 3.75a.75.75 0 0 1-.75.75H8.989v13.939l2.47-2.47a.75.75 0 1 1 1.06 1.061l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.751-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.469V3.75a.75.75 0 0 1 .75-.75H19.49a.75.75 0 0 1 .75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnLeftUpSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftUpSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnLeftUpSolidIconComponent, isStandalone: false, selector: "arrow-turn-left-up-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469v14.69c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnLeftUpSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-left-up-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469v14.69c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnRightDownSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightDownSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnRightDownSolidIconComponent, isStandalone: false, selector: "arrow-turn-right-down-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.738 3.75c0 .414.336.75.75.75H14.99v13.939l-2.47-2.47a.75.75 0 0 0-1.06 1.061l3.75 3.75a.75.75 0 0 0 1.06 0l3.751-3.75a.75.75 0 0 0-1.06-1.06l-2.47 2.469V3.75a.75.75 0 0 0-.75-.75H4.487a.75.75 0 0 0-.75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightDownSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-right-down-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.738 3.75c0 .414.336.75.75.75H14.99v13.939l-2.47-2.47a.75.75 0 0 0-1.06 1.061l3.75 3.75a.75.75 0 0 0 1.06 0l3.751-3.75a.75.75 0 0 0-1.06-1.06l-2.47 2.469V3.75a.75.75 0 0 0-.75-.75H4.487a.75.75 0 0 0-.75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnRightUpSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightUpSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnRightUpSolidIconComponent, isStandalone: false, selector: "arrow-turn-right-up-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.738 20.249a.75.75 0 0 1 .75-.75H14.99V5.56l-2.47 2.47a.75.75 0 0 1-1.06-1.061l3.75-3.75a.75.75 0 0 1 1.06 0l3.751 3.75a.75.75 0 0 1-1.06 1.06L16.49 5.56v14.69a.75.75 0 0 1-.75.75H4.487a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnRightUpSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-right-up-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.738 20.249a.75.75 0 0 1 .75-.75H14.99V5.56l-2.47 2.47a.75.75 0 0 1-1.06-1.061l3.75-3.75a.75.75 0 0 1 1.06 0l3.751 3.75a.75.75 0 0 1-1.06 1.06L16.49 5.56v14.69a.75.75 0 0 1-.75.75H4.487a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnUpLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnUpLeftSolidIconComponent, isStandalone: false, selector: "arrow-turn-up-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.239 20.25a.75.75 0 0 1-.75-.75V8.999H5.549l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 1 1 1.06 1.06l-2.47 2.47h14.69a.75.75 0 0 1 .75.75V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-up-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.239 20.25a.75.75 0 0 1-.75-.75V8.999H5.549l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 1 1 1.06 1.06l-2.47 2.47h14.69a.75.75 0 0 1 .75.75V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowTurnUpRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowTurnUpRightSolidIconComponent, isStandalone: false, selector: "arrow-turn-up-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.74 20.25a.75.75 0 0 0 .75-.75V8.999h13.938l-2.47 2.47a.75.75 0 0 0 1.061 1.06l3.75-3.75a.75.75 0 0 0 0-1.06l-3.75-3.75a.75.75 0 0 0-1.06 1.06l2.47 2.47H3.738a.75.75 0 0 0-.75.75V19.5c0 .414.336.75.75.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowTurnUpRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-turn-up-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.74 20.25a.75.75 0 0 0 .75-.75V8.999h13.938l-2.47 2.47a.75.75 0 0 0 1.061 1.06l3.75-3.75a.75.75 0 0 0 0-1.06l-3.75-3.75a.75.75 0 0 0-1.06 1.06l2.47 2.47H3.738a.75.75 0 0 0-.75.75V19.5c0 .414.336.75.75.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpCircleSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpCircleSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpCircleSolidIconComponent, isStandalone: false, selector: "arrow-up-circle-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpCircleSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-circle-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpLeftSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpLeftSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpLeftSolidIconComponent, isStandalone: false, selector: "arrow-up-left-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpLeftSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-left-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpOnSquareStackSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareStackSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpOnSquareStackSolidIconComponent, isStandalone: false, selector: "arrow-up-on-square-stack-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3Zm-.22 5.78v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z"/><path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareStackSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-on-square-stack-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3Zm-.22 5.78v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z"/><path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpOnSquareSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpOnSquareSolidIconComponent, isStandalone: false, selector: "arrow-up-on-square-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3Zm-.22 5.78V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpOnSquareSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-on-square-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3Zm-.22 5.78V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpRightSolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpRightSolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpRightSolidIconComponent, isStandalone: false, selector: "arrow-up-right-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpRightSolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-right-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

class ArrowUpTraySolidIconComponent extends BaseSolidIconComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpTraySolidIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.16", type: ArrowUpTraySolidIconComponent, isStandalone: false, selector: "arrow-up-tray-solid-icon", usesInheritance: true, ngImport: i0, template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: ArrowUpTraySolidIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arrow-up-tray-solid-icon',
                    template: '<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" data-slot="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>',
                    standalone: false
                }]
        }] });

var SOLID_ICONS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AcademicCapSolidIconComponent: AcademicCapSolidIconComponent,
    AdjustmentsHorizontalSolidIconComponent: AdjustmentsHorizontalSolidIconComponent,
    AdjustmentsVerticalSolidIconComponent: AdjustmentsVerticalSolidIconComponent,
    ArchiveBoxArrowDownSolidIconComponent: ArchiveBoxArrowDownSolidIconComponent,
    ArchiveBoxSolidIconComponent: ArchiveBoxSolidIconComponent,
    ArchiveBoxXMarkSolidIconComponent: ArchiveBoxXMarkSolidIconComponent,
    ArrowDownCircleSolidIconComponent: ArrowDownCircleSolidIconComponent,
    ArrowDownLeftSolidIconComponent: ArrowDownLeftSolidIconComponent,
    ArrowDownOnSquareSolidIconComponent: ArrowDownOnSquareSolidIconComponent,
    ArrowDownOnSquareStackSolidIconComponent: ArrowDownOnSquareStackSolidIconComponent,
    ArrowDownRightSolidIconComponent: ArrowDownRightSolidIconComponent,
    ArrowDownSolidIconComponent: ArrowDownSolidIconComponent,
    ArrowDownTraySolidIconComponent: ArrowDownTraySolidIconComponent,
    ArrowLeftCircleSolidIconComponent: ArrowLeftCircleSolidIconComponent,
    ArrowLeftEndOnRectangleSolidIconComponent: ArrowLeftEndOnRectangleSolidIconComponent,
    ArrowLeftOnRectangleSolidIconComponent: ArrowLeftOnRectangleSolidIconComponent,
    ArrowLeftSolidIconComponent: ArrowLeftSolidIconComponent,
    ArrowLeftStartOnRectangleSolidIconComponent: ArrowLeftStartOnRectangleSolidIconComponent,
    ArrowLongDownSolidIconComponent: ArrowLongDownSolidIconComponent,
    ArrowLongLeftSolidIconComponent: ArrowLongLeftSolidIconComponent,
    ArrowLongRightSolidIconComponent: ArrowLongRightSolidIconComponent,
    ArrowLongUpSolidIconComponent: ArrowLongUpSolidIconComponent,
    ArrowPathRoundedSquareSolidIconComponent: ArrowPathRoundedSquareSolidIconComponent,
    ArrowPathSolidIconComponent: ArrowPathSolidIconComponent,
    ArrowRightCircleSolidIconComponent: ArrowRightCircleSolidIconComponent,
    ArrowRightEndOnRectangleSolidIconComponent: ArrowRightEndOnRectangleSolidIconComponent,
    ArrowRightOnRectangleSolidIconComponent: ArrowRightOnRectangleSolidIconComponent,
    ArrowRightSolidIconComponent: ArrowRightSolidIconComponent,
    ArrowRightStartOnRectangleSolidIconComponent: ArrowRightStartOnRectangleSolidIconComponent,
    ArrowSmallDownSolidIconComponent: ArrowSmallDownSolidIconComponent,
    ArrowSmallLeftSolidIconComponent: ArrowSmallLeftSolidIconComponent,
    ArrowSmallRightSolidIconComponent: ArrowSmallRightSolidIconComponent,
    ArrowSmallUpSolidIconComponent: ArrowSmallUpSolidIconComponent,
    ArrowTopRightOnSquareSolidIconComponent: ArrowTopRightOnSquareSolidIconComponent,
    ArrowTrendingDownSolidIconComponent: ArrowTrendingDownSolidIconComponent,
    ArrowTrendingUpSolidIconComponent: ArrowTrendingUpSolidIconComponent,
    ArrowTurnDownLeftSolidIconComponent: ArrowTurnDownLeftSolidIconComponent,
    ArrowTurnDownRightSolidIconComponent: ArrowTurnDownRightSolidIconComponent,
    ArrowTurnLeftDownSolidIconComponent: ArrowTurnLeftDownSolidIconComponent,
    ArrowTurnLeftUpSolidIconComponent: ArrowTurnLeftUpSolidIconComponent,
    ArrowTurnRightDownSolidIconComponent: ArrowTurnRightDownSolidIconComponent,
    ArrowTurnRightUpSolidIconComponent: ArrowTurnRightUpSolidIconComponent,
    ArrowTurnUpLeftSolidIconComponent: ArrowTurnUpLeftSolidIconComponent,
    ArrowTurnUpRightSolidIconComponent: ArrowTurnUpRightSolidIconComponent,
    ArrowUpCircleSolidIconComponent: ArrowUpCircleSolidIconComponent,
    ArrowUpLeftSolidIconComponent: ArrowUpLeftSolidIconComponent,
    ArrowUpOnSquareSolidIconComponent: ArrowUpOnSquareSolidIconComponent,
    ArrowUpOnSquareStackSolidIconComponent: ArrowUpOnSquareStackSolidIconComponent,
    ArrowUpRightSolidIconComponent: ArrowUpRightSolidIconComponent,
    ArrowUpTraySolidIconComponent: ArrowUpTraySolidIconComponent
});

const DEFAULT_CONFIG = { stroke: 1, default: 'outline' };
const MODULE_CONFIG = new InjectionToken('config');

const COMPONENTS$1 = [
    AcademicCapOutlineIconComponent,
    AdjustmentsHorizontalOutlineIconComponent,
    AdjustmentsVerticalOutlineIconComponent,
    ArchiveBoxArrowDownOutlineIconComponent,
    ArchiveBoxXMarkOutlineIconComponent,
    ArchiveBoxOutlineIconComponent,
    ArrowDownCircleOutlineIconComponent,
    ArrowDownLeftOutlineIconComponent,
    ArrowDownOnSquareStackOutlineIconComponent,
    ArrowDownOnSquareOutlineIconComponent,
    ArrowDownRightOutlineIconComponent,
    ArrowDownTrayOutlineIconComponent,
    ArrowDownOutlineIconComponent,
    ArrowLeftCircleOutlineIconComponent,
    ArrowLeftEndOnRectangleOutlineIconComponent,
    ArrowLeftOnRectangleOutlineIconComponent,
    ArrowLeftStartOnRectangleOutlineIconComponent,
    ArrowLeftOutlineIconComponent,
    ArrowLongDownOutlineIconComponent,
    ArrowLongLeftOutlineIconComponent,
    ArrowLongRightOutlineIconComponent,
    ArrowLongUpOutlineIconComponent,
    ArrowPathRoundedSquareOutlineIconComponent,
    ArrowPathOutlineIconComponent,
    ArrowRightCircleOutlineIconComponent,
    ArrowRightEndOnRectangleOutlineIconComponent,
    ArrowRightOnRectangleOutlineIconComponent,
    ArrowRightStartOnRectangleOutlineIconComponent,
    ArrowRightOutlineIconComponent,
    ArrowSmallDownOutlineIconComponent,
    ArrowSmallLeftOutlineIconComponent,
    ArrowSmallRightOutlineIconComponent,
    ArrowSmallUpOutlineIconComponent,
    ArrowTopRightOnSquareOutlineIconComponent,
    ArrowTrendingDownOutlineIconComponent,
    ArrowTrendingUpOutlineIconComponent,
    ArrowTurnDownLeftOutlineIconComponent,
    ArrowTurnDownRightOutlineIconComponent,
    ArrowTurnLeftDownOutlineIconComponent,
    ArrowTurnLeftUpOutlineIconComponent,
    ArrowTurnRightDownOutlineIconComponent,
    ArrowTurnRightUpOutlineIconComponent,
    ArrowTurnUpLeftOutlineIconComponent,
    ArrowTurnUpRightOutlineIconComponent,
    ArrowUpCircleOutlineIconComponent,
    ArrowUpLeftOutlineIconComponent,
    ArrowUpOnSquareStackOutlineIconComponent,
    ArrowUpOnSquareOutlineIconComponent,
    ArrowUpRightOutlineIconComponent,
    ArrowUpTrayOutlineIconComponent
];
class OutlineIconsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: OutlineIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: i0, type: OutlineIconsModule, declarations: [AcademicCapOutlineIconComponent,
            AdjustmentsHorizontalOutlineIconComponent,
            AdjustmentsVerticalOutlineIconComponent,
            ArchiveBoxArrowDownOutlineIconComponent,
            ArchiveBoxXMarkOutlineIconComponent,
            ArchiveBoxOutlineIconComponent,
            ArrowDownCircleOutlineIconComponent,
            ArrowDownLeftOutlineIconComponent,
            ArrowDownOnSquareStackOutlineIconComponent,
            ArrowDownOnSquareOutlineIconComponent,
            ArrowDownRightOutlineIconComponent,
            ArrowDownTrayOutlineIconComponent,
            ArrowDownOutlineIconComponent,
            ArrowLeftCircleOutlineIconComponent,
            ArrowLeftEndOnRectangleOutlineIconComponent,
            ArrowLeftOnRectangleOutlineIconComponent,
            ArrowLeftStartOnRectangleOutlineIconComponent,
            ArrowLeftOutlineIconComponent,
            ArrowLongDownOutlineIconComponent,
            ArrowLongLeftOutlineIconComponent,
            ArrowLongRightOutlineIconComponent,
            ArrowLongUpOutlineIconComponent,
            ArrowPathRoundedSquareOutlineIconComponent,
            ArrowPathOutlineIconComponent,
            ArrowRightCircleOutlineIconComponent,
            ArrowRightEndOnRectangleOutlineIconComponent,
            ArrowRightOnRectangleOutlineIconComponent,
            ArrowRightStartOnRectangleOutlineIconComponent,
            ArrowRightOutlineIconComponent,
            ArrowSmallDownOutlineIconComponent,
            ArrowSmallLeftOutlineIconComponent,
            ArrowSmallRightOutlineIconComponent,
            ArrowSmallUpOutlineIconComponent,
            ArrowTopRightOnSquareOutlineIconComponent,
            ArrowTrendingDownOutlineIconComponent,
            ArrowTrendingUpOutlineIconComponent,
            ArrowTurnDownLeftOutlineIconComponent,
            ArrowTurnDownRightOutlineIconComponent,
            ArrowTurnLeftDownOutlineIconComponent,
            ArrowTurnLeftUpOutlineIconComponent,
            ArrowTurnRightDownOutlineIconComponent,
            ArrowTurnRightUpOutlineIconComponent,
            ArrowTurnUpLeftOutlineIconComponent,
            ArrowTurnUpRightOutlineIconComponent,
            ArrowUpCircleOutlineIconComponent,
            ArrowUpLeftOutlineIconComponent,
            ArrowUpOnSquareStackOutlineIconComponent,
            ArrowUpOnSquareOutlineIconComponent,
            ArrowUpRightOutlineIconComponent,
            ArrowUpTrayOutlineIconComponent], imports: [CommonModule], exports: [AcademicCapOutlineIconComponent,
            AdjustmentsHorizontalOutlineIconComponent,
            AdjustmentsVerticalOutlineIconComponent,
            ArchiveBoxArrowDownOutlineIconComponent,
            ArchiveBoxXMarkOutlineIconComponent,
            ArchiveBoxOutlineIconComponent,
            ArrowDownCircleOutlineIconComponent,
            ArrowDownLeftOutlineIconComponent,
            ArrowDownOnSquareStackOutlineIconComponent,
            ArrowDownOnSquareOutlineIconComponent,
            ArrowDownRightOutlineIconComponent,
            ArrowDownTrayOutlineIconComponent,
            ArrowDownOutlineIconComponent,
            ArrowLeftCircleOutlineIconComponent,
            ArrowLeftEndOnRectangleOutlineIconComponent,
            ArrowLeftOnRectangleOutlineIconComponent,
            ArrowLeftStartOnRectangleOutlineIconComponent,
            ArrowLeftOutlineIconComponent,
            ArrowLongDownOutlineIconComponent,
            ArrowLongLeftOutlineIconComponent,
            ArrowLongRightOutlineIconComponent,
            ArrowLongUpOutlineIconComponent,
            ArrowPathRoundedSquareOutlineIconComponent,
            ArrowPathOutlineIconComponent,
            ArrowRightCircleOutlineIconComponent,
            ArrowRightEndOnRectangleOutlineIconComponent,
            ArrowRightOnRectangleOutlineIconComponent,
            ArrowRightStartOnRectangleOutlineIconComponent,
            ArrowRightOutlineIconComponent,
            ArrowSmallDownOutlineIconComponent,
            ArrowSmallLeftOutlineIconComponent,
            ArrowSmallRightOutlineIconComponent,
            ArrowSmallUpOutlineIconComponent,
            ArrowTopRightOnSquareOutlineIconComponent,
            ArrowTrendingDownOutlineIconComponent,
            ArrowTrendingUpOutlineIconComponent,
            ArrowTurnDownLeftOutlineIconComponent,
            ArrowTurnDownRightOutlineIconComponent,
            ArrowTurnLeftDownOutlineIconComponent,
            ArrowTurnLeftUpOutlineIconComponent,
            ArrowTurnRightDownOutlineIconComponent,
            ArrowTurnRightUpOutlineIconComponent,
            ArrowTurnUpLeftOutlineIconComponent,
            ArrowTurnUpRightOutlineIconComponent,
            ArrowUpCircleOutlineIconComponent,
            ArrowUpLeftOutlineIconComponent,
            ArrowUpOnSquareStackOutlineIconComponent,
            ArrowUpOnSquareOutlineIconComponent,
            ArrowUpRightOutlineIconComponent,
            ArrowUpTrayOutlineIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: OutlineIconsModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: OutlineIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...COMPONENTS$1,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ...COMPONENTS$1,
                    ]
                }]
        }] });

const COMPONENTS = [
    AcademicCapSolidIconComponent,
    AdjustmentsHorizontalSolidIconComponent,
    AdjustmentsVerticalSolidIconComponent,
    ArchiveBoxArrowDownSolidIconComponent,
    ArchiveBoxXMarkSolidIconComponent,
    ArchiveBoxSolidIconComponent,
    ArrowDownCircleSolidIconComponent,
    ArrowDownLeftSolidIconComponent,
    ArrowDownOnSquareStackSolidIconComponent,
    ArrowDownOnSquareSolidIconComponent,
    ArrowDownRightSolidIconComponent,
    ArrowDownTraySolidIconComponent,
    ArrowDownSolidIconComponent,
    ArrowLeftCircleSolidIconComponent,
    ArrowLeftEndOnRectangleSolidIconComponent,
    ArrowLeftOnRectangleSolidIconComponent,
    ArrowLeftStartOnRectangleSolidIconComponent,
    ArrowLeftSolidIconComponent,
    ArrowLongDownSolidIconComponent,
    ArrowLongLeftSolidIconComponent,
    ArrowLongRightSolidIconComponent,
    ArrowLongUpSolidIconComponent,
    ArrowPathRoundedSquareSolidIconComponent,
    ArrowPathSolidIconComponent,
    ArrowRightCircleSolidIconComponent,
    ArrowRightEndOnRectangleSolidIconComponent,
    ArrowRightOnRectangleSolidIconComponent,
    ArrowRightStartOnRectangleSolidIconComponent,
    ArrowRightSolidIconComponent,
    ArrowSmallDownSolidIconComponent,
    ArrowSmallLeftSolidIconComponent,
    ArrowSmallRightSolidIconComponent,
    ArrowSmallUpSolidIconComponent,
    ArrowTopRightOnSquareSolidIconComponent,
    ArrowTrendingDownSolidIconComponent,
    ArrowTrendingUpSolidIconComponent,
    ArrowTurnDownLeftSolidIconComponent,
    ArrowTurnDownRightSolidIconComponent,
    ArrowTurnLeftDownSolidIconComponent,
    ArrowTurnLeftUpSolidIconComponent,
    ArrowTurnRightDownSolidIconComponent,
    ArrowTurnRightUpSolidIconComponent,
    ArrowTurnUpLeftSolidIconComponent,
    ArrowTurnUpRightSolidIconComponent,
    ArrowUpCircleSolidIconComponent,
    ArrowUpLeftSolidIconComponent,
    ArrowUpOnSquareStackSolidIconComponent,
    ArrowUpOnSquareSolidIconComponent,
    ArrowUpRightSolidIconComponent,
    ArrowUpTraySolidIconComponent
];
class SolidIconsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: SolidIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: i0, type: SolidIconsModule, declarations: [AcademicCapSolidIconComponent,
            AdjustmentsHorizontalSolidIconComponent,
            AdjustmentsVerticalSolidIconComponent,
            ArchiveBoxArrowDownSolidIconComponent,
            ArchiveBoxXMarkSolidIconComponent,
            ArchiveBoxSolidIconComponent,
            ArrowDownCircleSolidIconComponent,
            ArrowDownLeftSolidIconComponent,
            ArrowDownOnSquareStackSolidIconComponent,
            ArrowDownOnSquareSolidIconComponent,
            ArrowDownRightSolidIconComponent,
            ArrowDownTraySolidIconComponent,
            ArrowDownSolidIconComponent,
            ArrowLeftCircleSolidIconComponent,
            ArrowLeftEndOnRectangleSolidIconComponent,
            ArrowLeftOnRectangleSolidIconComponent,
            ArrowLeftStartOnRectangleSolidIconComponent,
            ArrowLeftSolidIconComponent,
            ArrowLongDownSolidIconComponent,
            ArrowLongLeftSolidIconComponent,
            ArrowLongRightSolidIconComponent,
            ArrowLongUpSolidIconComponent,
            ArrowPathRoundedSquareSolidIconComponent,
            ArrowPathSolidIconComponent,
            ArrowRightCircleSolidIconComponent,
            ArrowRightEndOnRectangleSolidIconComponent,
            ArrowRightOnRectangleSolidIconComponent,
            ArrowRightStartOnRectangleSolidIconComponent,
            ArrowRightSolidIconComponent,
            ArrowSmallDownSolidIconComponent,
            ArrowSmallLeftSolidIconComponent,
            ArrowSmallRightSolidIconComponent,
            ArrowSmallUpSolidIconComponent,
            ArrowTopRightOnSquareSolidIconComponent,
            ArrowTrendingDownSolidIconComponent,
            ArrowTrendingUpSolidIconComponent,
            ArrowTurnDownLeftSolidIconComponent,
            ArrowTurnDownRightSolidIconComponent,
            ArrowTurnLeftDownSolidIconComponent,
            ArrowTurnLeftUpSolidIconComponent,
            ArrowTurnRightDownSolidIconComponent,
            ArrowTurnRightUpSolidIconComponent,
            ArrowTurnUpLeftSolidIconComponent,
            ArrowTurnUpRightSolidIconComponent,
            ArrowUpCircleSolidIconComponent,
            ArrowUpLeftSolidIconComponent,
            ArrowUpOnSquareStackSolidIconComponent,
            ArrowUpOnSquareSolidIconComponent,
            ArrowUpRightSolidIconComponent,
            ArrowUpTraySolidIconComponent], imports: [CommonModule], exports: [AcademicCapSolidIconComponent,
            AdjustmentsHorizontalSolidIconComponent,
            AdjustmentsVerticalSolidIconComponent,
            ArchiveBoxArrowDownSolidIconComponent,
            ArchiveBoxXMarkSolidIconComponent,
            ArchiveBoxSolidIconComponent,
            ArrowDownCircleSolidIconComponent,
            ArrowDownLeftSolidIconComponent,
            ArrowDownOnSquareStackSolidIconComponent,
            ArrowDownOnSquareSolidIconComponent,
            ArrowDownRightSolidIconComponent,
            ArrowDownTraySolidIconComponent,
            ArrowDownSolidIconComponent,
            ArrowLeftCircleSolidIconComponent,
            ArrowLeftEndOnRectangleSolidIconComponent,
            ArrowLeftOnRectangleSolidIconComponent,
            ArrowLeftStartOnRectangleSolidIconComponent,
            ArrowLeftSolidIconComponent,
            ArrowLongDownSolidIconComponent,
            ArrowLongLeftSolidIconComponent,
            ArrowLongRightSolidIconComponent,
            ArrowLongUpSolidIconComponent,
            ArrowPathRoundedSquareSolidIconComponent,
            ArrowPathSolidIconComponent,
            ArrowRightCircleSolidIconComponent,
            ArrowRightEndOnRectangleSolidIconComponent,
            ArrowRightOnRectangleSolidIconComponent,
            ArrowRightStartOnRectangleSolidIconComponent,
            ArrowRightSolidIconComponent,
            ArrowSmallDownSolidIconComponent,
            ArrowSmallLeftSolidIconComponent,
            ArrowSmallRightSolidIconComponent,
            ArrowSmallUpSolidIconComponent,
            ArrowTopRightOnSquareSolidIconComponent,
            ArrowTrendingDownSolidIconComponent,
            ArrowTrendingUpSolidIconComponent,
            ArrowTurnDownLeftSolidIconComponent,
            ArrowTurnDownRightSolidIconComponent,
            ArrowTurnLeftDownSolidIconComponent,
            ArrowTurnLeftUpSolidIconComponent,
            ArrowTurnRightDownSolidIconComponent,
            ArrowTurnRightUpSolidIconComponent,
            ArrowTurnUpLeftSolidIconComponent,
            ArrowTurnUpRightSolidIconComponent,
            ArrowUpCircleSolidIconComponent,
            ArrowUpLeftSolidIconComponent,
            ArrowUpOnSquareStackSolidIconComponent,
            ArrowUpOnSquareSolidIconComponent,
            ArrowUpRightSolidIconComponent,
            ArrowUpTraySolidIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: SolidIconsModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: SolidIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...COMPONENTS,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ...COMPONENTS,
                    ]
                }]
        }] });

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: DynamicComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: MODULE_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.3.16", type: DynamicComponent, isStandalone: false, selector: "ng-heroicons", inputs: { icon: "icon", size: "size", color: "color", stroke: "stroke", outline: ["outline", "outline", getOutput], solid: ["solid", "solid", getOutput], class: "class", style: "style" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: `<ng-container #container />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-heroicons',
                    template: `<ng-container #container />`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: false
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
class DynamicIconsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: DynamicIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: i0, type: DynamicIconsModule, declarations: [DynamicComponent], exports: [DynamicComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: DynamicIconsModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: DynamicIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicComponent],
                    exports: [DynamicComponent],
                }]
        }] });

class NgHeroiconsModule {
    static config = DEFAULT_CONFIG;
    static forRoot(config = {}) {
        this.config = { ...this.config, ...config };
        return {
            ngModule: NgHeroiconsModule,
            providers: [
                {
                    provide: MODULE_CONFIG,
                    useValue: this.config
                }
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: NgHeroiconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: i0, type: NgHeroiconsModule, imports: [CommonModule], exports: [OutlineIconsModule,
            SolidIconsModule,
            DynamicIconsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: NgHeroiconsModule, imports: [CommonModule, OutlineIconsModule,
            SolidIconsModule,
            DynamicIconsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: i0, type: NgHeroiconsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        OutlineIconsModule,
                        SolidIconsModule,
                        DynamicIconsModule,
                    ],
                }]
        }] });

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AcademicCapOutlineIconComponent, AcademicCapSolidIconComponent, AdjustmentsHorizontalOutlineIconComponent, AdjustmentsHorizontalSolidIconComponent, AdjustmentsVerticalOutlineIconComponent, AdjustmentsVerticalSolidIconComponent, ArchiveBoxArrowDownOutlineIconComponent, ArchiveBoxArrowDownSolidIconComponent, ArchiveBoxOutlineIconComponent, ArchiveBoxSolidIconComponent, ArchiveBoxXMarkOutlineIconComponent, ArchiveBoxXMarkSolidIconComponent, ArrowDownCircleOutlineIconComponent, ArrowDownCircleSolidIconComponent, ArrowDownLeftOutlineIconComponent, ArrowDownLeftSolidIconComponent, ArrowDownOnSquareOutlineIconComponent, ArrowDownOnSquareSolidIconComponent, ArrowDownOnSquareStackOutlineIconComponent, ArrowDownOnSquareStackSolidIconComponent, ArrowDownOutlineIconComponent, ArrowDownRightOutlineIconComponent, ArrowDownRightSolidIconComponent, ArrowDownSolidIconComponent, ArrowDownTrayOutlineIconComponent, ArrowDownTraySolidIconComponent, ArrowLeftCircleOutlineIconComponent, ArrowLeftCircleSolidIconComponent, ArrowLeftEndOnRectangleOutlineIconComponent, ArrowLeftEndOnRectangleSolidIconComponent, ArrowLeftOnRectangleOutlineIconComponent, ArrowLeftOnRectangleSolidIconComponent, ArrowLeftOutlineIconComponent, ArrowLeftSolidIconComponent, ArrowLeftStartOnRectangleOutlineIconComponent, ArrowLeftStartOnRectangleSolidIconComponent, ArrowLongDownOutlineIconComponent, ArrowLongDownSolidIconComponent, ArrowLongLeftOutlineIconComponent, ArrowLongLeftSolidIconComponent, ArrowLongRightOutlineIconComponent, ArrowLongRightSolidIconComponent, ArrowLongUpOutlineIconComponent, ArrowLongUpSolidIconComponent, ArrowPathOutlineIconComponent, ArrowPathRoundedSquareOutlineIconComponent, ArrowPathRoundedSquareSolidIconComponent, ArrowPathSolidIconComponent, ArrowRightCircleOutlineIconComponent, ArrowRightCircleSolidIconComponent, ArrowRightEndOnRectangleOutlineIconComponent, ArrowRightEndOnRectangleSolidIconComponent, ArrowRightOnRectangleOutlineIconComponent, ArrowRightOnRectangleSolidIconComponent, ArrowRightOutlineIconComponent, ArrowRightSolidIconComponent, ArrowRightStartOnRectangleOutlineIconComponent, ArrowRightStartOnRectangleSolidIconComponent, ArrowSmallDownOutlineIconComponent, ArrowSmallDownSolidIconComponent, ArrowSmallLeftOutlineIconComponent, ArrowSmallLeftSolidIconComponent, ArrowSmallRightOutlineIconComponent, ArrowSmallRightSolidIconComponent, ArrowSmallUpOutlineIconComponent, ArrowSmallUpSolidIconComponent, ArrowTopRightOnSquareOutlineIconComponent, ArrowTopRightOnSquareSolidIconComponent, ArrowTrendingDownOutlineIconComponent, ArrowTrendingDownSolidIconComponent, ArrowTrendingUpOutlineIconComponent, ArrowTrendingUpSolidIconComponent, ArrowTurnDownLeftOutlineIconComponent, ArrowTurnDownLeftSolidIconComponent, ArrowTurnDownRightOutlineIconComponent, ArrowTurnDownRightSolidIconComponent, ArrowTurnLeftDownOutlineIconComponent, ArrowTurnLeftDownSolidIconComponent, ArrowTurnLeftUpOutlineIconComponent, ArrowTurnLeftUpSolidIconComponent, ArrowTurnRightDownOutlineIconComponent, ArrowTurnRightDownSolidIconComponent, ArrowTurnRightUpOutlineIconComponent, ArrowTurnRightUpSolidIconComponent, ArrowTurnUpLeftOutlineIconComponent, ArrowTurnUpLeftSolidIconComponent, ArrowTurnUpRightOutlineIconComponent, ArrowTurnUpRightSolidIconComponent, ArrowUpCircleOutlineIconComponent, ArrowUpCircleSolidIconComponent, ArrowUpLeftOutlineIconComponent, ArrowUpLeftSolidIconComponent, ArrowUpOnSquareOutlineIconComponent, ArrowUpOnSquareSolidIconComponent, ArrowUpOnSquareStackOutlineIconComponent, ArrowUpOnSquareStackSolidIconComponent, ArrowUpRightOutlineIconComponent, ArrowUpRightSolidIconComponent, ArrowUpTrayOutlineIconComponent, ArrowUpTraySolidIconComponent, DEFAULT_CONFIG, DynamicComponent, DynamicIconsModule, MODULE_CONFIG, NgHeroiconsModule, OUTLINE_ICONS$1 as OUTLINE_ICONS, OutlineIconsModule, SOLID_ICONS$1 as SOLID_ICONS, SolidIconsModule };
//# sourceMappingURL=time2tri-ng-heroicons.mjs.map
