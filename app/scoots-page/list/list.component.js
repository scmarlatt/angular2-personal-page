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
var list_service_1 = require('./list.service');
var ListComponent = (function () {
    function ListComponent(router, listService) {
        this.router = router;
        this.listService = listService;
        this.viewingListItem = false;
        this.wantList = [];
    }
    ListComponent.prototype.onSelect = function (ListPost) {
        this.router.navigate(['scoot_v1/list/', ListPost.id]);
    };
    ;
    ListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.listService.getPosts().then(function (wantList) { return _this.wantList = wantList; });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list-landing',
            styleUrls: ['app/scoots-page/list/list.component.css'],
            templateUrl: 'app/scoots-page/list/list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, list_service_1.ListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map