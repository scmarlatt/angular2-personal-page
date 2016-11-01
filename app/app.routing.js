"use strict";
var router_1 = require('@angular/router');
var blog_component_1 = require('./scoots-page/blog/blog.component');
var blog_details_component_1 = require('./scoots-page/blog/blog-details/blog-details.component');
var about_component_1 = require('./scoots-page/about/about.component');
var list_component_1 = require('./scoots-page/list/list.component');
var list_details_component_1 = require('./scoots-page/list/list-details/list-details.component');
var appRoutes = [
    {
        path: 'scoot_v1/',
        component: list_component_1.ListComponent //replace this later with landing block
    },
    {
        path: 'scoot_v1/list',
        component: list_component_1.ListComponent
    },
    {
        path: 'scoot_v1/about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'scoot_v1/blog',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'scoot_v1/blog/:id',
        component: blog_details_component_1.BlogDetailsComponent
    },
    {
        path: 'scoot_v1/list/:id',
        component: list_details_component_1.ListDetailsComponent
    },
    {
        path: '',
        redirectTo: 'scoot_v1/',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map