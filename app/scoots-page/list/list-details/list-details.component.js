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
var list_service_1 = require('../list.service');
var ListDetailsComponent = (function () {
    function ListDetailsComponent(route, router, listService) {
        this.route = route;
        this.router = router;
        this.listService = listService;
        this.viewingListItem = false;
    }
    ListDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedListItem = {
            id: -1,
            title: "",
            img: "",
            body: "",
            url: "",
            price: ""
        };
        this.route.params.forEach(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.listService.getPostById(_this.id).then(function (selectedListItem) { return _this.selectedListItem = selectedListItem; });
        });
    };
    ListDetailsComponent = __decorate([
        core_1.Component({
            selector: 'list-details',
            styleUrls: ['app/scoots-page/list/list-details/list-details.component.css'],
            templateUrl: 'app/scoots-page/list/list-details/list-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, list_service_1.ListService])
    ], ListDetailsComponent);
    return ListDetailsComponent;
}());
exports.ListDetailsComponent = ListDetailsComponent;
//# sourceMappingURL=list-details.component.js.map