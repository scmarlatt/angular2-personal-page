import { OpaqueToken, NgModule } from '@angular/core';
/**
 * @internal
 */
export declare const COMPONENT_OUTLET_MODULE: OpaqueToken;
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
export declare function provideComponentOutletModule(metadata: NgModule): any[];
