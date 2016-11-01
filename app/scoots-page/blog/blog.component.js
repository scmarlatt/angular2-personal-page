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
var blog_service_1 = require('./blog.service');
var BlogComponent = (function () {
    function BlogComponent(router, blogService) {
        this.router = router;
        this.blogService = blogService;
        this.blogPostList = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getBlogPostList();
        //this.getBlogFromServer();
    };
    BlogComponent.prototype.onSelect = function (BlogPost) {
        this.router.navigate(['scoot_v1/blog/', BlogPost.id]);
    };
    ;
    BlogComponent.prototype.getBlogPostList = function () {
        var _this = this;
        this.blogService.getBlogPosts().then(function (blogPostList) { return _this.blogPostList = blogPostList; });
    };
    BlogComponent.prototype.getBlogFromServer = function () {
        var _this = this;
        this.blogService.getBlogFromServer().subscribe(function (blogPost) { return _this.blogPostList.push(blogPost); }, function (error) { return _this.errorMessage = error; });
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog-landing',
            styleUrls: ['app/scoots-page/blog/blog.component.css'],
            templateUrl: 'app/scoots-page/blog/blog.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, blog_service_1.BlogService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map