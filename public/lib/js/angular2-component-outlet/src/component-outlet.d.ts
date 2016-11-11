import { Compiler, SimpleChanges, ViewContainerRef, OnDestroy } from '@angular/core';
/**
 * ComponentOutlet is a directive to create dynamic component.
 *
 * Example:
 *
 * ```ts
 * @Component({
 *   selector: 'my-app',
 *   template: `
 *     <div *componentOutlet="template; context: self; selector:'my-component'"></div>
 *   `
 * })
 * export class AppComponent {
 *   self = this;
 *
 *   template = `
 *   <div>
 *     <p>Dynamic Component</p>
 *   </div>`;
 * }
 * ```
 *
 * Result:
 *
 * ```html
 * <my-component>
 *    <div>
 *      <p>Dynamic Component</p>
 *    </div>
 * </my-component>
 * ```
 *
 */
export declare class ComponentOutlet implements OnDestroy {
    private moduleMeta;
    /** NgModule (workaround for AoT) */ private vcRef;
    private compiler;
    template: string;
    selector: string;
    context: any;
    private component;
    private moduleType;
    private cmpType;
    constructor(moduleMeta: any, /** NgModule (workaround for AoT) */ vcRef: ViewContainerRef, compiler: Compiler);
    private _createDynamicComponent();
    private _createDynamicModule(componentType);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
