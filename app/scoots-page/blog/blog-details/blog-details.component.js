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
var blog_service_1 = require('../blog.service');
var BlogDetailsComponent = (function () {
    function BlogDetailsComponent(route, router, blogService) {
        this.route = route;
        this.router = router;
        this.blogService = blogService;
        this.viewingBlogPost = false;
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedBlogPost = {
            id: -1,
            title: "",
            img: "",
            body: "",
        };
        this.route.params.forEach(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.blogService.getPostById(_this.id).then(function (selectedBlogPost) { return _this.selectedBlogPost = selectedBlogPost; });
        });
    };
    BlogDetailsComponent = __decorate([
        core_1.Component({
            selector: 'blog-details',
            styleUrls: ['app/scoots-page/blog/blog-details/blog-details.component.css'],
            templateUrl: 'app/scoots-page/blog/blog-details/blog-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, blog_service_1.BlogService])
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());
exports.BlogDetailsComponent = BlogDetailsComponent;
//# sourceMappingURL=blog-details.component.js.map