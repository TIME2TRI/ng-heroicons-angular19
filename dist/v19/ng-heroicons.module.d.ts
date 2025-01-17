import { ModuleWithProviders } from "@angular/core";
import { NgHeroiconsModuleConfig } from "./types";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/outline/module";
import * as i3 from "./components/solid/module";
import * as i4 from "./ng-heroicons.component";
export declare class NgHeroiconsModule {
    static config: NgHeroiconsModuleConfig;
    static forRoot(config?: NgHeroiconsModuleConfig): ModuleWithProviders<NgHeroiconsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgHeroiconsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgHeroiconsModule, never, [typeof i1.CommonModule], [typeof i2.OutlineIconsModule, typeof i3.SolidIconsModule, typeof i4.DynamicIconsModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgHeroiconsModule>;
}
