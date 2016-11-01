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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var blog_posts_1 = require('../mock-resources/blog-posts');
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.blogPostInfoUrl = 'http://127.0.0.1:8081/content/blog/blog-posts.json';
    }
    BlogService.prototype.getBlogPosts = function () {
        console.log("getting blog posts");
        return Promise.resolve(blog_posts_1.BLOGPOSTS);
    };
    BlogService.prototype.getPostById = function (id) {
        return Promise.resolve(blog_posts_1.BLOGPOSTS).then(function (blogPostList) { return blogPostList.find(function (selectedBlogPost) { return selectedBlogPost.id === +id; }); });
    };
    BlogService.prototype.getBlogFromServer = function () {
        console.log("requesting server");
        return this.http.get(this.blogPostInfoUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BlogService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body.data || {};
    };
    BlogService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map