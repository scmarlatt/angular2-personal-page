"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var about_component_1 = require('./scoots-page/about/about.component');
var list_component_1 = require('./scoots-page/list/list.component');
var list_service_1 = require('./scoots-page/list/list.service');
var list_details_component_1 = require('./scoots-page/list/list-details/list-details.component');
var blog_details_component_1 = require('./scoots-page/blog/blog-details/blog-details.component');
var scoots_page_component_1 = require('./scoots-page/scoots-page.component');
var blog_component_1 = require('./scoots-page/blog/blog.component');
var blog_service_1 = require('./scoots-page/blog/blog.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, http_1.JsonpModule],
            declarations: [about_component_1.AboutComponent,
                scoots_page_component_1.ScootsPageComponent,
                blog_component_1.BlogComponent,
                list_component_1.ListComponent,
                list_details_component_1.ListDetailsComponent,
                blog_details_component_1.BlogDetailsComponent
            ],
            providers: [list_service_1.ListService, blog_service_1.BlogService],
            bootstrap: [scoots_page_component_1.ScootsPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map