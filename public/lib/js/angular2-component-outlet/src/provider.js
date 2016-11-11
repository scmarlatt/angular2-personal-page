"use strict";
var core_1 = require('@angular/core');
/**
 * @internal
 */
exports.COMPONENT_OUTLET_MODULE = new core_1.OpaqueToken('COMPONENT_OUTLET_MODULE');
/**
 * Setup for ComponentOutlet
 *
 * ```ts
 * @NgModule({
 *   providers: [
 *     provideComponentOutletModule({
 *       imports: [CommonModule]
 *     })
 *   ],
 *   declarations: [ComponentOutlet]
 * })
 * class AppModule {}
 * ```
 */
function provideComponentOutletModule(metadata) {
    return [
        { provide: exports.COMPONENT_OUTLET_MODULE, useValue: metadata }
    ];
}
exports.provideComponentOutletModule = provideComponentOutletModule;
