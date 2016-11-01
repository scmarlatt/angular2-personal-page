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
var router_1 = require('@angular/router');
//need simplepost service
var ScootsPageComponent = (function () {
    function ScootsPageComponent(router) {
        this.router = router;
        this.title = 'scoot_v.1';
        this.blog = false;
        this.about = false;
        this.list = false;
        this.folio = false;
        this.aboutMe = "bay area inhabitant with midwest roots. born and raised in ann arbor, mi. proud michigan alumni. resume available upon request - scmarlatt15@gmail.com";
        this.folioText = "if you're here looking at my portfolio this is about it. this right here is extent to what you seek.. well at least in terms of personal work. i'm sure you're wondering gee scoot, why bother using such a complex framework for a simple webpage? and yeah, thats probably more powerful than i need for a simple personal webpage, but who knows where this journey will lead. for the time being the journey i'm on is to learn angular2.";
    }
    ScootsPageComponent.prototype.onSelect = function (navSelection) {
        if (navSelection === "about") {
            this.about = true;
            this.list = false;
            this.folio = false;
            this.blog = false;
        }
        else if (navSelection === "list") {
            this.about = false;
            this.list = true;
            this.folio = false;
            this.blog = false;
        }
        else if (navSelection === "blog") {
            this.about = false;
            this.list = false;
            this.folio = false;
            this.blog = true;
        }
        else {
            this.about = false;
            this.list = false;
            this.folio = true;
            this.blog = false;
        }
    };
    ScootsPageComponent = __decorate([
        core_1.Component({
            selector: 'scoots-page',
            styleUrls: ['app/scoots-page/scoots-page.component.css'],
            templateUrl: 'app/scoots-page/scoots-page.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ScootsPageComponent);
    return ScootsPageComponent;
}());
exports.ScootsPageComponent = ScootsPageComponent;
//# sourceMappingURL=scoots-page.component.js.map