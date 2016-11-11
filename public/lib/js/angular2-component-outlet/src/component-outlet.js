"use strict";
var core_1 = require('@angular/core');
var provider_1 = require('./provider');
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
var ComponentOutlet = (function () {
    function ComponentOutlet(moduleMeta, /** NgModule (workaround for AoT) */ vcRef, compiler) {
        this.moduleMeta = moduleMeta;
        this.vcRef = vcRef;
        this.compiler = compiler;
    }
    ComponentOutlet.prototype._createDynamicComponent = function () {
        var metadata = new core_1.Component({
            selector: this.selector,
            template: this.template,
        });
        var cmpClass = (function () {
            function _() {
            }
            return _;
        }());
        return core_1.Component(metadata)(cmpClass);
    };
    ComponentOutlet.prototype._createDynamicModule = function (componentType) {
        var declarations = [].concat(this.moduleMeta.declarations || []);
        declarations.push(componentType);
        var moduleMeta = {
            imports: this.moduleMeta.imports,
            providers: this.moduleMeta.providers,
            schemas: this.moduleMeta.schemas,
            declarations: declarations
        };
        return core_1.NgModule(moduleMeta)((function () {
            function _() {
            }
            return _;
        }()));
    };
    ComponentOutlet.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.template)
            return;
        this.cmpType = this._createDynamicComponent();
        this.moduleType = this._createDynamicModule(this.cmpType);
        var injector = core_1.ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.compiler.compileModuleAndAllComponentsAsync(this.moduleType)
            .then(function (factory) {
            var cmpFactory;
            for (var i = factory.componentFactories.length - 1; i >= 0; i--) {
                if (factory.componentFactories[i].componentType === _this.cmpType) {
                    cmpFactory = factory.componentFactories[i];
                    break;
                }
            }
            return cmpFactory;
        })
            .then(function (cmpFactory) {
            if (cmpFactory) {
                _this.vcRef.clear();
                _this.component = _this.vcRef.createComponent(cmpFactory, 0, injector);
                Object.assign(_this.component.instance, _this.context);
                _this.component.changeDetectorRef.detectChanges();
            }
        });
    };
    ComponentOutlet.prototype.ngOnDestroy = function () {
        if (this.component) {
            this.component.destroy();
        }
        if (this.compiler) {
            if (this.cmpType) {
                this.compiler.clearCacheFor(this.cmpType);
            }
            if (this.moduleType) {
                this.compiler.clearCacheFor(this.moduleType);
            }
        }
    };
    ComponentOutlet.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[componentOutlet]',
                },] },
    ];
    /** @nocollapse */
    ComponentOutlet.ctorParameters = [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [provider_1.COMPONENT_OUTLET_MODULE,] },] },
        { type: core_1.ViewContainerRef, },
        { type: core_1.Compiler, },
    ];
    ComponentOutlet.propDecorators = {
        'template': [{ type: core_1.Input, args: ['componentOutlet',] },],
        'selector': [{ type: core_1.Input, args: ['componentOutletSelector',] },],
        'context': [{ type: core_1.Input, args: ['componentOutletContext',] },],
    };
    return ComponentOutlet;
}());
exports.ComponentOutlet = ComponentOutlet;
