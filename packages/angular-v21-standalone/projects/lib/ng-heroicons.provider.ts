import { Provider } from '@angular/core';
import { NgHeroiconsModuleConfig } from './types';
import { DEFAULT_CONFIG, MODULE_CONFIG } from './constants';

export function provideNgHeroicons(config: NgHeroiconsModuleConfig = {}): Provider {
	return {
		provide: MODULE_CONFIG,
		useValue: { ...DEFAULT_CONFIG, ...config }
	};
}
