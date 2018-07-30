"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var created_app_component_1 = require("./created-app.component");
var manage_app_component_1 = require("./manage-app/manage-app.component");
var edit_app_component_1 = require("./edit-app/edit-app.component");
var products_component_1 = require("./products/products.component");
var edit_product_category_component_1 = require("./edit-product-category/edit-product-category.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var customers_component_1 = require("./customers/customers.component");
var messages_component_1 = require("./messages/messages.component");
var chat_component_1 = require("./chat/chat.component");
var edit_owner_info_component_1 = require("./edit-owner-info/edit-owner-info.component");
var edit_business_images_component_1 = require("./edit-business-images/edit-business-images.component");
var report_component_1 = require("./report/report.component");
var routes = [
    { path: "details/:id", component: created_app_component_1.CreatedAppComponent },
    { path: "manage-app/:id", component: manage_app_component_1.ManageAppComponent },
    { path: "edit-app/:id", component: edit_app_component_1.EditAppComponent },
    { path: "products/:id", component: products_component_1.ProductsComponent },
    { path: "edit-product-category/:app_id/:id", component: edit_product_category_component_1.EditProductCategoyComponent },
    { path: "edit-product/:app_id/:id", component: edit_product_component_1.EditProductComponent },
    { path: "customers/:id", component: customers_component_1.CustomersComponent },
    { path: "messages/:id", component: messages_component_1.MessagesComponent },
    { path: "chat/:id/:user/:uri", component: chat_component_1.ChatComponent },
    { path: "edit-owner-info/:id", component: edit_owner_info_component_1.EditOwnerInfoComponent },
    { path: "edit-business-images/:id", component: edit_business_images_component_1.EditBusinessImagesComponent },
    { path: "report/:id", component: report_component_1.ReportComponent },
];
var CreatedAppRoutingModule = /** @class */ (function () {
    function CreatedAppRoutingModule() {
    }
    CreatedAppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CreatedAppRoutingModule);
    return CreatedAppRoutingModule;
}());
exports.CreatedAppRoutingModule = CreatedAppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCwwRUFBdUU7QUFDdkUsb0VBQWlFO0FBQ2pFLG9FQUFrRTtBQUNsRSwyR0FBc0c7QUFDdEcsZ0ZBQTZFO0FBRTdFLHVFQUFxRTtBQUNyRSxvRUFBa0U7QUFDbEUsd0RBQXNEO0FBQ3RELHlGQUFxRjtBQUNyRix3R0FBb0c7QUFDcEcsOERBQTREO0FBRTVELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQ3pELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxTQUFTLEVBQUUsNkRBQTJCLEVBQUU7SUFDckYsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsa0RBQXNCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFFLDREQUEyQixFQUFFO0lBQzVFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtDQUNyRCxDQUFDO0FBUUY7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUpuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlZEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZWQtYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5hZ2UtYXBwL21hbmFnZS1hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1wcm9kdWN0LWNhdGVnb3J5L2VkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdE93bmVySW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtb3duZXItaW5mby9lZGl0LW93bmVyLWluZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRCdXNpbmVzc0ltYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtYnVzaW5lc3MtaW1hZ2VzL2VkaXQtYnVzaW5lc3MtaW1hZ2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXBvcnRDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBDcmVhdGVkQXBwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWFuYWdlLWFwcC86aWRcIiwgY29tcG9uZW50OiBNYW5hZ2VBcHBDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJlZGl0LWFwcC86aWRcIiwgY29tcG9uZW50OiBFZGl0QXBwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicHJvZHVjdHMvOmlkXCIsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJlZGl0LXByb2R1Y3QtY2F0ZWdvcnkvOmFwcF9pZC86aWRcIiwgY29tcG9uZW50OiBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJlZGl0LXByb2R1Y3QvOmFwcF9pZC86aWRcIiwgY29tcG9uZW50OiBFZGl0UHJvZHVjdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImN1c3RvbWVycy86aWRcIiwgY29tcG9uZW50OiBDdXN0b21lcnNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtZXNzYWdlcy86aWRcIiwgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNoYXQvOmlkLzp1c2VyLzp1cmlcIiwgY29tcG9uZW50OiBDaGF0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZWRpdC1vd25lci1pbmZvLzppZFwiLCBjb21wb25lbnQ6IEVkaXRPd25lckluZm9Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJlZGl0LWJ1c2luZXNzLWltYWdlcy86aWRcIiwgY29tcG9uZW50OiBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJyZXBvcnQvOmlkXCIsIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZWRBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=