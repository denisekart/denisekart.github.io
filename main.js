(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_github_github_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/github/github.component */ "./src/app/components/github/github.component.ts");
/* harmony import */ var _components_static_resume_static_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/static-resume/static-resume.component */ "./src/app/components/static-resume/static-resume.component.ts");






var routes = [
    { path: "home", pathMatch: "full", redirectTo: "" },
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "resume", component: _components_static_resume_static_resume_component__WEBPACK_IMPORTED_MODULE_5__["StaticResumeComponent"] },
    { path: "github", component: _components_github_github_component__WEBPACK_IMPORTED_MODULE_4__["GithubComponent"] },
    { path: "**", pathMatch: "full", redirectTo: "/home" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  button.expandible-accented span{\r\n   color: var(--color-contrast);\r\n  }\r\n\r\n  button.expandible-default span{\r\n   color: var(--color-accent);\r\n}\r\n\r\n  button.expandible-accented{\r\n   min-width: 140px;\r\n   text-align: start;\r\n}\r\n\r\n  button.expandible-default{\r\n   min-width: 60px;\r\n   text-align: start;\r\n}\r\n\r\n  button.expandible span{\r\n     max-width: 0;\r\n     padding: 0;\r\n     margin: 0;\r\n     display: inline-block;\r\n     overflow: hidden;\r\n  }\r\n\r\n  button.expandible:hover span{\r\n   max-width: 100px;\r\n   display: inline-block;\r\n   overflow: hidden;\r\n}\r\n\r\n  button.on-hover span{\r\n   transition: all 1.5s ease-in-out;\r\n  }\r\n\r\n  button.on-hover:hover span{\r\n   transition: all .5s ease-in-out;\r\n  }\r\n\r\n  .footer p{\r\n     padding-right: 20px;\r\n  }\r\n\r\n  .footer {\r\n   position: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   color: var(--color-contrast);\r\n   font-weight: lighter;\r\n   font-size: 90%;\r\n   text-align: right;\r\n }\r\n\r\n  .footer:hover {\r\n   position: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   color: var(--color-accent);\r\n   font-weight: lighter;\r\n   font-size: 100%;\r\n   text-align: right;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7RUFFQTtHQUNDLDRCQUE0QjtFQUM3Qjs7RUFDQTtHQUNDLDBCQUEwQjtBQUM3Qjs7RUFDQTtHQUNHLGdCQUFnQjtHQUNoQixpQkFBaUI7QUFDcEI7O0VBRUE7R0FDRyxlQUFlO0dBQ2YsaUJBQWlCO0FBQ3BCOztFQUdFO0tBQ0csWUFBWTtLQUNaLFVBQVU7S0FDVixTQUFTO0tBQ1QscUJBQXFCO0tBQ3JCLGdCQUFnQjtFQUNuQjs7RUFFQTtHQUNDLGdCQUFnQjtHQUNoQixxQkFBcUI7R0FDckIsZ0JBQWdCO0FBQ25COztFQUVFO0dBSUMsZ0NBQWdDO0VBQ2pDOztFQUVBO0dBSUMsK0JBQStCO0VBQ2hDOztFQUVBO0tBQ0csbUJBQW1CO0VBQ3RCOztFQUNBO0dBQ0MsZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLDRCQUE0QjtHQUM1QixvQkFBb0I7R0FDcEIsY0FBYztHQUNkLGlCQUFpQjtDQUNuQjs7RUFFQTtHQUNFLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCwwQkFBMEI7R0FDMUIsb0JBQW9CO0dBQ3BCLGVBQWU7R0FDZixpQkFBaUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmV4cGFuZGlibGUtYWNjZW50ZWQgc3BhbntcclxuICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcclxuICB9XHJcbiAgYnV0dG9uLmV4cGFuZGlibGUtZGVmYXVsdCBzcGFue1xyXG4gICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxufVxyXG5idXR0b24uZXhwYW5kaWJsZS1hY2NlbnRlZHtcclxuICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5leHBhbmRpYmxlLWRlZmF1bHR7XHJcbiAgIG1pbi13aWR0aDogNjBweDtcclxuICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcblxyXG4gIGJ1dHRvbi5leHBhbmRpYmxlIHNwYW57XHJcbiAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmV4cGFuZGlibGU6aG92ZXIgc3BhbntcclxuICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4gIGJ1dHRvbi5vbi1ob3ZlciBzcGFue1xyXG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAtbW96LXRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAtby10cmFuc2l0aW9uOiBhbGwgMS41cyBlYXNlLWluLW91dDtcclxuICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24ub24taG92ZXI6aG92ZXIgc3BhbntcclxuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHB7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgbGVmdDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcclxuICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuIH1cclxuXHJcbiAuZm9vdGVyOmhvdmVyIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBsZWZ0OiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container> -->\r\n  <mat-toolbar >\r\n    \r\n    <button mat-button routerLink=\"home\" class=\"expandible-accented\" color=\"accent\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n      D<span>enis</span> \r\n      E<span>kart</span>\r\n    </button>\r\n    \r\n    \r\n    <button mat-button routerLink=\"resume\" class=\"expandible on-hover expandible-default\" >\r\n        <mat-icon>school</mat-icon>\r\n      C<span>urriculum</span>\r\n      V<span>itae</span>\r\n    </button>\r\n\r\n    \r\n    <button mat-button routerLink=\"github\" class=\"expandible on-hover expandible-default\" >\r\n        <mat-icon>code</mat-icon>\r\n      Repos<span>itories</span>\r\n    </button>\r\n\r\n    <button mat-button routerLink=\"github\" class=\"expandible on-hover expandible-default\" >\r\n        <mat-icon>alternate_email</mat-icon>\r\n      Con<span>tact me</span>\r\n    </button>\r\n\r\n\r\n      <span class=\"fill-remaining-space\"></span>\r\n    \r\n      <span></span>\r\n  </mat-toolbar>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n<div class=\"footer on-hover\">\r\n  <p>Copyright &copy; 2019 Denis Ekart</p>\r\n</div>\r\n<!-- </mat-sidenav-container> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Denis Ekart';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _components_github_github_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/github/github.component */ "./src/app/components/github/github.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_static_resume_static_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/static-resume/static-resume.component */ "./src/app/components/static-resume/static-resume.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");







// import {MatSidenavModule} from '@angular/material/sidenav';








// import { saveAs } from 'file-saver';
// import {MatDividerModule} from '@angular/material/divider';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_github_github_component__WEBPACK_IMPORTED_MODULE_10__["GithubComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                _components_static_resume_static_resume_component__WEBPACK_IMPORTED_MODULE_12__["StaticResumeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                // MatSidenavModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"]
                // MatDividerModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/github/github.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/github/github.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/github/github.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/github/github.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  github works...well...not yet...under construction!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/github/github.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/github/github.component.ts ***!
  \*******************************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GithubComponent = /** @class */ (function () {
    function GithubComponent() {
    }
    GithubComponent.prototype.ngOnInit = function () {
    };
    GithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github',
            template: __webpack_require__(/*! ./github.component.html */ "./src/app/components/github/github.component.html"),
            styles: [__webpack_require__(/*! ./github.component.css */ "./src/app/components/github/github.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.relative-size{\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.wrapper-tight{\r\n    /* border: 1px solid black; */\r\n    max-width: 90%;\r\n    width:90%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    display: block;\r\n}\r\n\r\ndiv.focusable{\r\n    margin: auto;\r\n    padding-right: 60px;\r\n    float: right;\r\n    width: 30%;\r\n    max-width: 300px;\r\n}\r\n\r\n.focusable img{\r\n    display: block;\r\n    filter: gray; /* IE6-9 */\r\n  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */\r\n  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */\r\n  border-radius: 50%;\r\n  -webkit-transform: scale(1);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\r\n    transform: scale(1);  /* Firefox 16+, IE 10+, Opera */\r\n    \r\n}\r\n\r\n.focusable:hover img{\r\n    display: block;\r\n    -webkit-filter: grayscale(0);\r\n    filter: none;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1.2);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\r\n    transform: scale(1.2);  /* Firefox 16+, IE 10+, Opera */\r\n}\r\n\r\ndiv.table{\r\n    width: auto;\r\n    margin: auto;\r\n    margin-left: 40px;\r\n    display: inline-block;\r\n    margin-top:20px;\r\n}\r\n\r\ndiv.table-row{\r\n    margin-top:20px;\r\n    margin-bottom:20px;\r\n}\r\n\r\ndiv.table-header{\r\n    text-align: right;\r\n    display: inline-block;\r\n    min-width: 100px;\r\n    font-weight: 500;   \r\n}\r\n\r\ndiv.table-content{\r\n    text-align: left;\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n    max-width: 200px;\r\n}\r\n\r\n.focusable-content span{\r\n    filter: gray; /* IE6-9 */\r\n  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */\r\n  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */\r\n  -webkit-transform: scale(1);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\r\n    transform: scale(1);  /* Firefox 16+, IE 10+, Opera */\r\n    \r\n}\r\n\r\n.focusable-content:hover span{\r\n    -webkit-filter: grayscale(0);\r\n    filter: none;\r\n    -webkit-transform: scale(1.1);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\r\n    transform: scale(1.1);  /* Firefox 16+, IE 10+, Opera */\r\n    font-weight: 400;\r\n}\r\n\r\nspan.focusable-initials{\r\n    font-weight: normal;\r\n    color: var(--color-accent);\r\n}\r\n\r\nspan.focusable-text{\r\n    font-weight: normal;\r\n    color: var(--color-contrast);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZLEVBQUUsVUFBVTtFQUMxQiw0QkFBNEIsRUFBRSx5Q0FBeUM7RUFDdkUsb0JBQW9CLEVBQUUsbUNBQW1DO0VBQ3pELGtCQUFrQjtFQUNsQiwyQkFBMkIsR0FBRyxtQ0FBbUMsR0FDdkMsU0FBUztJQUNqQyxtQkFBbUIsR0FBRywrQkFBK0I7O0FBRXpEOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QixHQUFHLG1DQUFtQyxHQUN2QyxTQUFTO0lBQ3JDLHFCQUFxQixHQUFHLCtCQUErQjtBQUMzRDs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLFlBQVksRUFBRSxVQUFVO0VBQzFCLDRCQUE0QixFQUFFLHlDQUF5QztFQUN2RSxvQkFBb0IsRUFBRSxtQ0FBbUM7RUFDekQsMkJBQTJCLEdBQUcsbUNBQW1DLEdBQ3ZDLFNBQVM7SUFDakMsbUJBQW1CLEdBQUcsK0JBQStCOztBQUV6RDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osNkJBQTZCLEdBQUcsbUNBQW1DLEdBQ3ZDLFNBQVM7SUFDckMscUJBQXFCLEdBQUcsK0JBQStCO0lBQ3ZELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5yZWxhdGl2ZS1zaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLndyYXBwZXItdGlnaHR7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZGl2LmZvY3VzYWJsZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmZvY3VzYWJsZSBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZpbHRlcjogZ3JheTsgLyogSUU2LTkgKi9cclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpOyAvKiBHb29nbGUgQ2hyb21lLCBTYWZhcmkgNisgJiBPcGVyYSAxNSsgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTsgLyogTWljcm9zb2Z0IEVkZ2UgYW5kIEZpcmVmb3ggMzUrICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpOyAgLyogSUUgOSAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgIC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbiAgICBcclxufVxyXG5cclxuLmZvY3VzYWJsZTpob3ZlciBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTsgIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTsgIC8qIElFIDkgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgIC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbn1cclxuXHJcblxyXG5kaXYudGFibGV7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbmRpdi50YWJsZS1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuZGl2LnRhYmxlLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgXHJcbn1cclxuZGl2LnRhYmxlLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuLmZvY3VzYWJsZS1jb250ZW50IHNwYW57XHJcbiAgICBmaWx0ZXI6IGdyYXk7IC8qIElFNi05ICovXHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTsgLyogR29vZ2xlIENocm9tZSwgU2FmYXJpIDYrICYgT3BlcmEgMTUrICovXHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7IC8qIE1pY3Jvc29mdCBFZGdlIGFuZCBGaXJlZm94IDM1KyAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpOyAgLyogSUUgOSAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgIC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbiAgICBcclxufVxyXG5cclxuLmZvY3VzYWJsZS1jb250ZW50OmhvdmVyIHNwYW57XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgZmlsdGVyOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICAvKiBJRSA5ICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuc3Bhbi5mb2N1c2FibGUtaW5pdGlhbHN7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbn1cclxuXHJcblxyXG5zcGFuLmZvY3VzYWJsZS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb250cmFzdCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-tight offset-vertical\">\r\n  <div class=\"container container-left\">\r\n    <div class=\"on-hover table focusable-content\">\r\n      <p><span class=\"focusable-initials\">Hi!</span></p>\r\n      <p>\r\n        \r\n        Welcome to my  super awesome page. \r\n        My name is \r\n        <span class=\"focusable-initials\">D</span><span class=\"focusable-text\">enis </span>  \r\n        <span class=\"focusable-initials\">E</span><span class=\"focusable-text\">kart</span>.\r\n        \r\n        I come from a small country called the \r\n        <span class=\"focusable-initials\">R</span><span class=\"focusable-text\">epublic</span> of \r\n        <span class=\"focusable-initials\">S</span><span class=\"focusable-text\">lovenia</span> located in southern Central Europe.\r\n\r\n        <br/>\r\n\r\n        I'm a <span class=\"focusable-initials\">{{myAge}}</span> year old <span class=\"focusable-text\">technology</span> freak. \r\n        Having completed my <span class=\"focusable-text\">bachelor's</span> degree in computer science and engineering at the\r\n         <span class=\"focusable-initials\">U</span><span class=\"focusable-text\">niversity</span> of \r\n         <span class=\"focusable-initials\">M</span><span class=\"focusable-text\">aribor</span>, \r\n        I am currently earning my <span class=\"focusable-text\">master's</span> in the same field.\r\n        \r\n        <br/>\r\n\r\n        <span class=\"focusable-initials\">S</span><span class=\"focusable-text\">ailing</span>, \r\n        <span class=\"focusable-initials\">s</span><span class=\"focusable-text\">kiing</span>, \r\n        <span class=\"focusable-initials\">s</span><span class=\"focusable-text\">urfing</span> and \r\n        <span class=\"focusable-initials\">t</span><span class=\"focusable-text\">raveling</span> \r\n        are some of the things i love doing most with the people closest to me.\r\n\r\n        <br/>\r\n        <br/>\r\n\r\n        <span class=\"focusable-initials\">Hope you enjoy browsing my site!</span>\r\n\r\n      </p>\r\n    </div>\r\n    \r\n    </div>\r\n  <div class=\"focusable container container-right\">\r\n      <img class=\"relative-size on-hover\" src=\"./assets/me.png\"/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myAge = (new Date().getFullYear() - new Date(1991, 12, 31).getFullYear());
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"item\">\r\n        \r\n        <div id=\"timeline\">\r\n            <div>\r\n                <div class=\"title\">\r\n                    <h1>Profile</h1>\r\n                </div>\r\n              <section class=\"year\">\r\n                <h3>\r\n                  <div class=\"focusable container-left\">\r\n                    <img class=\"on-hover relative-size\" src=\"./assets/me.png\"/>\r\n                  </div>\r\n                </h3>\r\n                <section>\r\n                    <h4>updated on 24th of April, 2019</h4>\r\n                    <ul>\r\n                        <li>\r\n<p>An innovative programmer with close to 5 years of professional \r\nexperience in software design and development.</p>\r\n <p>Thrive in a team environment with the ability to lead\r\n  a team and follow leadership directives.</p>\r\n<p>Understanding intricate systems and solving complex problems\r\n in a dynamic and result-oriented way is one of my strong suits\r\n  (writing short sentences is not).</p>\r\n <p>Able to coordinate several projects simultaneously while\r\n  prioritizing tasks and operating proactively.</p>\r\n  <p>I aspire to be as language-agnostic as possible \r\n    and already have strong expertise in C#, C++, \r\n    Python, Java, TypeScript, Sass, SQL and other languages.</p>\r\n                        </li>\r\n                    </ul>\r\n                </section>     \r\n              </section>\r\n              \r\n              </div>\r\n\r\n              \r\n        <div id=\"timeline\">\r\n            <div>\r\n                <div class=\"title\">\r\n                    <h1>Qualifications</h1>\r\n                </div>\r\n              <section class=\"year\">\r\n                <h3>Programming <br/>languages</h3>\r\n                <section>\r\n                    <ul>\r\n                        <li>C#</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>ASP.NET, AspNet.Core, DevExpress, WPF, \r\n                            Windows Forms, Xamarin, Mono(Android), \r\n                            Windows IOT, Windows SDK (8.x, 10.x), COM+</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>C++</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>C++11, Embedded ARM Cortex</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>Java</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>Spring, Hadoop(mapreduce), Android</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>Kotlin</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>Android</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>Python</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>2.7.x, 3.x, sklearn, tensorflow, matplotlib</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>R</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>CARET, rpart, ROCR, nnet, CORElearn, mboost, party</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>Matlab</li>\r\n                      \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>SQL</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>MSSQL, MySql</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>HTML, JavaScript, CSS</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>Angular 7.x, SASS(scss), rx/js, jQuery, Razor</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                <section>\r\n                    <ul>\r\n                        <li>Lua</li>\r\n                        <br/>\r\n                      \r\n                      <ul class=\"nested\">\r\n                          <li>Redis</li>\r\n                         </ul>   \r\n                    </ul>\r\n                </section>\r\n                     \r\n              </section>\r\n              <section class=\"year\">\r\n                  <h3>Languages</h3>\r\n                  <section>\r\n                      <ul>\r\n                          <li>Slovenian</li>\r\n                          <br/>\r\n                        <ul class=\"nested\">\r\n                            <li>First language. Speak: excelent, write: excelent</li>\r\n                           </ul>   \r\n                      </ul>\r\n                  </section>\r\n                  <section>\r\n                      <ul>\r\n                          <li>English</li>\r\n                          <br/>\r\n                        <ul class=\"nested\">\r\n                            <li>Speak: excelent, write: excelent</li>\r\n                           </ul>   \r\n                      </ul>\r\n                  </section>\r\n                  <section>\r\n                      <ul>\r\n                          <li>Croatian</li>\r\n                          <br/>\r\n                        <ul class=\"nested\">\r\n                            <li>Speak: excelent, write: average</li>\r\n                           </ul>   \r\n                      </ul>\r\n                  </section>\r\n                  <section>\r\n                      <ul>\r\n                          <li>German</li>\r\n                          <br/>\r\n                        <ul class=\"nested\">\r\n                            <li>Speak: below average, write: average</li>\r\n                           </ul>   \r\n                      </ul>\r\n                  </section>\r\n                  </section>\r\n                  <section class=\"year\">\r\n                      <h3>Other<br/>qualifications</h3>\r\n                      <section>\r\n                          <ul>\r\n                              <li>Source control</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>GIT, Git LFS, SVN, TFVC</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                      <section>\r\n                          <ul>\r\n                              <li>Microsoft Azure management</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>Azure AD, WebApps, Container instances, VM's, resource management</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                      <section>\r\n                          <ul>\r\n                              <li>Azure DevOps</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>azure artifacts(nuget), build agent administration, continuous integration, continuous deployment, scrum administration, test planning</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                      <section>\r\n                          <ul>\r\n                              <li>Cake Build (C# scripting)</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>build automation using Cake build (make for c#)</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                      <section>\r\n                          <ul>\r\n                              <li>Docker</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>compose, kubernetes(helm)</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                      <section>\r\n                          <ul>\r\n                              <li>HL7 - Health Level Seven</li>\r\n                              <br/>\r\n                            <ul class=\"nested\">\r\n                                <li>basic understanding, parsing</li>\r\n                               </ul>   \r\n                          </ul>\r\n                      </section>\r\n                  </section>\r\n              </div>\r\n\r\n          <div>\r\n              <div class=\"title\">\r\n                  <h1>Professional history</h1>\r\n              </div>\r\n            <section class=\"year\">\r\n              <h3>2016 - ongoing</h3>\r\n              <section>\r\n                  <h4>Pinna d.o.o.</h4>\r\n                  <ul>\r\n                      <li>Full stack developer (ASP.NET, WPF, DevExpress, Xamarin, .NET FRAMEWORK, .NET CORE, Redis, MSSQL, Angular)</li>\r\n                      <br/>\r\n                    <br/>\r\n                    <ul class=\"nested\">\r\n                        <li>Colaborated with remote teams implementing products that target the healthcare system and are being used in healthcare provider systems and clinical centers in the country</li>\r\n                        <li>Utilized advanced development and programming techniques to ensure rapid development and deployment</li>\r\n                        <li>Developed software from the design to production phase including systems architecture design</li>\r\n                      </ul>\r\n                      <li>DevOps engineer (Azure DevOps, Cake Build)</li>\r\n                      <br/>\r\n                    <br/>\r\n                      <ul class=\"nested\">\r\n                          <li>Designed and improved CI and CD pipelines while ensuring code quality using automated testing on live build agents or in docker instances</li>\r\n                          <li>Used latest \"c# cake build\" tooling to automate every step of the build and deployment pipeline</li>\r\n                        </ul>\r\n                      <li>Systems engineer</li>\r\n                      <br/>\r\n                    <br/>\r\n                      <ul class=\"nested\">\r\n                          <li>Configured the infrastructure needed to deploy, communicate and run the products in a sandboxed development environment</li>\r\n                          <li>Leveraged the SAAS PAAS and IAAS provided as a part of the Azure stack including (but not limited to) docker containers, VM's, Azure Service Bus, Web Apps and Azure AD</li>\r\n                        </ul>\r\n                  </ul>\r\n              </section>     \r\n            </section>\r\n            <section class=\"year\">\r\n              <h3>2014 - 2016</h3>\r\n              <section>\r\n                <h4>Trivia, programske rešitve,Denis Ekart s.p.</h4>\r\n                <ul>\r\n                    <li><span>Full stack developer (ASP.NET, WCF, Cordova, MYSQL, Mono Android, Java)</span></li>\r\n                    <br/>\r\n                    <br/>\r\n                    <ul class=\"nested\">\r\n                        <li>Colaborated with teams to ensure communication across technology boundaries</li>\r\n                        <li>Developed software that communicated with the government's web services \"davčne blagajne\"</li>\r\n                        <li>Developed software from the design to production phase</li>\r\n                      </ul>\r\n                </ul>\r\n              </section>\r\n            </section>\r\n            </div>\r\n            <div>\r\n                <div class=\"title\">\r\n                    <h1>Education</h1>\r\n                </div>\r\n              <section class=\"year\">\r\n                <h3>2017 - ongoing</h3>\r\n                <section>\r\n                    <h4>mag. inž. rač. in inf. tehnol.</h4>\r\n                    <ul>\r\n                        <li>Master of Computer Science and Information Technologies, Faculty of Electrical Engineering and Computer Science, University of Maribor, Slovenia</li>\r\n                    </ul>\r\n                </section>     \r\n              </section>\r\n              <section class=\"year\">\r\n                <h3>2010 - 2014</h3>\r\n                <section>\r\n                  <h4>dipl. inž. rač. in inf. tehnol. (un)</h4>\r\n                  <ul>\r\n                      <li>Bachelor of Computer Science and Information Technologies, Faculty of Electrical Engineering and Computer Science, University of Maribor, Slovenia</li>\r\n                  </ul>\r\n                </section>\r\n              </section>\r\n              <section class=\"year\">\r\n                <h3>2006 - 2010</h3>\r\n                <section>\r\n                  <h4>high school graduate</h4>\r\n                  <ul>\r\n                    <li>High school diploma, Tretja Gimnazija Maribor, Slovenia</li>\r\n                  </ul>\r\n                </section>\r\n                \r\n              </section>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,400,500);\n* {\n  border: 0;\n  margin: 0;\n  padding: 0; }\nhtml {\n  height: 100%; }\nbody {\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #79838c; }\na {\n  color: #50585f;\n  text-decoration: none; }\na:hover {\n    color: #383e44; }\ndiv.container {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  max-height: 90%; }\ndiv.header {\n  height: auto;\n  text-align: center;\n  background: slategrey;\n  color: ghostwhite;\n  padding: 2.3rem 1rem 2.3rem 1rem;\n  position: relative; }\ndiv.header:after {\n    content: '';\n    position: absolute;\n    bottom: -5rem;\n    left: 0rem;\n    height: 5.1rem;\n    display: block;\n    width: 100%;\n    z-index: 300;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );\n    /* IE6-9 */ }\ndiv.header h1 {\n    margin-top: .8rem;\n    margin-bottom: .5rem;\n    font-weight: 200;\n    font-size: 1.6em;\n    letter-spacing: 0.1rem;\n    text-transform: uppercase; }\n@media (min-width: 62em) {\n      div.header h1 {\n        font-size: 1.9em;\n        letter-spacing: 0.2rem; } }\ndiv.header h2 {\n    font-size: 1.1em;\n    font-weight: 400;\n    color: #cfd7de;\n    max-width: 30rem;\n    margin: auto; }\ndiv.item {\n  display: flex;\n  flex: auto;\n  overflow-y: auto;\n  padding: 0rem 1rem 0rem 1rem; }\n#timeline {\n  position: relative;\n  display: table;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem; }\n#timeline div:after {\n    content: '';\n    width: 2px;\n    position: absolute;\n    top: .5rem;\n    bottom: 0rem;\n    left: 60px;\n    z-index: 1;\n    background: #C5C5C5; }\n#timeline h3 {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 5rem;\n    color: var(--color-accent);\n    margin: 0;\n    margin-left: -70px;\n    font-size: 1em;\n    font-weight: 400; }\n@media (min-width: 62em) {\n      #timeline h3 {\n        font-size: 1.1em; } }\n#timeline section.year {\n    position: relative; }\n#timeline section.year:first-child section {\n      margin-top: -1.3em;\n      padding-bottom: 0px; }\n#timeline section.year section {\n      position: relative;\n      padding-bottom: 1.25em;\n      margin-bottom: 2.2em; }\n#timeline section.year section h4 {\n        position: absolute;\n        bottom: 0;\n        font-size: .9em;\n        font-weight: 400;\n        line-height: 1.2em;\n        margin: 0;\n        padding: 0 0 0 89px;\n        color: var(--color-accent); }\n@media (min-width: 62em) {\n          #timeline section.year section h4 {\n            font-size: 1em; } }\n#timeline section.year section ul {\n        list-style-type: none;\n        padding: 0 0 0 75px;\n        margin: -1.35rem 0 1em;\n        max-width: 32rem;\n        font-size: 1em; }\n@media (min-width: 62em) {\n          #timeline section.year section ul {\n            font-size: 1.1em;\n            padding: 0 0 0 81px; } }\n#timeline section.year section ul:last-child {\n          margin-bottom: 0; }\n#timeline section.year section ul:first-of-type:after {\n          content: '';\n          width: 10px;\n          height: 10px;\n          background: #C5C5C5;\n          border: 2px solid #FFFFFF;\n          border-radius: 50%;\n          position: absolute;\n          left: 54px;\n          top: 3px;\n          z-index: 2; }\n#timeline section.year section ul li {\n          margin-left: .5rem; }\n#timeline section.year section ul li:before {\n            content: '';\n            margin-left: -.5rem;\n            padding-right: .3rem; }\n#timeline section.year section ul li:not(:first-child) {\n            margin-top: .5rem; }\n#timeline section.year section ul li span.price {\n            color: mediumturquoise;\n            font-weight: 500; }\n#price {\n  display: inline; }\nsvg {\n  border: 3px solid white;\n  border-radius: 50%;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n.title h1 {\n  font-weight: 400;\n  color: var(--color-accent);\n  font-size: 1.4em;\n  text-transform: capitalize;\n  margin-bottom: 30px;\n  margin-left: 70px; }\n.title h1:after {\n  content: ' ';\n  display: block;\n  border: 1px solid #d0d0d0;\n  border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n.nested li {\n  font-size: .9em;\n  font-style: italic; }\n.container-item {\n  display: block;\n  flex-direction: row;\n  width: 100%; }\ndiv.focusable {\n  margin: auto;\n  margin-left: -20px;\n  margin-top: -20px;\n  float: left;\n  width: 20%;\n  max-width: 300px; }\n.focusable img {\n  display: block;\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(1);\n  /* Google Chrome, Safari 6+ & Opera 15+ */\n  filter: grayscale(1);\n  /* Microsoft Edge and Firefox 35+ */\n  border-radius: 2%;\n  -webkit-transform: scale(1);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: scale(1);\n  /* Firefox 16+, IE 10+, Opera */ }\n.focusable:hover img {\n  display: block;\n  -webkit-filter: grayscale(0);\n  filter: none;\n  border-radius: 2%;\n  -webkit-transform: scale(1.25);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: scale(1.25);\n  /* Firefox 16+, IE 10+, Opera */ }\nimg.relative-size {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvQzpcXERldlxcUGVyc29uYWxcXGRlbmlzZWthcnQuZ2l0aHViLmlvXFxzcmNcXHBlcnNvbmFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXN1bWVcXHJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBWTtBQVNaO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFFWjtFQUNFLFlBQVksRUFBQTtBQUVkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFFdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFGdkI7SUFJSSxjQUFjLEVBQUE7QUFJbEI7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7QUFFakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBO0FBTnBCO0lBUUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDOEUsYUFBQTtJQUNFLDRCQUFBO0lBQzVGLDhFQUF3RjtJQUFFLHFEQUFBO0lBQzFGLHFIQUFxSDtJQUFFLFVBQUEsRUFBVztBQW5CdEk7SUF1Qk0saUJBQVU7SUFDVixvQkFBYTtJQUdiLGdCQUFXO0lBQ1gsZ0JBQVc7SUFFYixzQkFBc0I7SUFDdEIseUJBQXlCLEVBQUE7QUFDekI7TUFoQ0o7UUFpQ00sZ0JBQWdCO1FBQ2hCLHNCQUFzQixFQUFBLEVBRXpCO0FBcENIO0lBdUNNLGdCQUFXO0lBQ1gsZ0JBQVc7SUFFYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtBQUloQjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBRVYsaUJBQVU7RUFDVixrQkFBVztFQUNYLGdCQUFTLEVBQUE7QUFQYjtJQVdNLFdBQVc7SUFDWCxVQUFVO0lBRVYsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtBQW5CekI7SUF1Qkksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxrQkFBa0I7SUFFaEIsY0FBUztJQUNULGdCQUFXLEVBQUE7QUFFYjtNQWpDSjtRQWtDTSxnQkFBZ0IsRUFBQSxFQUVuQjtBQXBDSDtJQXNDRSxrQkFBa0IsRUFBQTtBQXRDcEI7TUF3Q0ksa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0FBekN2QjtNQTRDSSxrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLG9CQUFvQixFQUFBO0FBOUN4QjtRQWdETSxrQkFBa0I7UUFDbEIsU0FBUztRQUVQLGVBQVU7UUFDVixnQkFBVztRQUViLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLDBCQUEwQixFQUFBO0FBQzFCO1VBMUROO1lBMkRRLGNBQWMsRUFBQSxFQUVqQjtBQTdETDtRQStETSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBO0FBQ2Q7VUFwRU47WUFxRVEsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBLEVBa0N0QjtBQXhHTDtVQTBFVSxnQkFBUyxFQUFBO0FBMUVuQjtVQThFUSxXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQVk7VUFDWixtQkFBbUI7VUFDbkIseUJBQXlCO1VBM0svQixrQkE0S2dDO1VBQzFCLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsUUFBUTtVQUNSLFVBQVUsRUFBQTtBQXZGbEI7VUEwRlEsa0JBQWtCLEVBQUE7QUExRjFCO1lBNEZVLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsb0JBQW9CLEVBQUE7QUE5RjlCO1lBaUdVLGlCQUFpQixFQUFBO0FBakczQjtZQW9HVSxzQkFBc0I7WUFDdEIsZ0JBQWdCLEVBQUE7QUFRMUI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJFQUFtRSxFQUFBO0FBR3JFO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUVyQjtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2IseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLCtDQUE2QztFQUM3Qyx1REFBcUQ7RUFDckQsb0RBQWtELEVBQUE7QUFHcEQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtBQU1iO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQUUsVUFBQTtFQUNoQiw0QkFBNEI7RUFBRSx5Q0FBQTtFQUM5QixvQkFBb0I7RUFBRSxtQ0FBQTtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQUcsbUNBQUE7RUFDSixTQUFBO0VBQ3hCLG1CQUFtQjtFQUFHLCtCQUFBLEVBQWdDO0FBSXhEO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUFHLG1DQUFBO0VBQ0osU0FBQTtFQUM3QixzQkFBc0I7RUFBRywrQkFBQSxFQUFnQztBQUczRDtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6MjAwLDQwMCw1MDApO1xyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuKiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGNvbG9yOiAjNzk4MzhjO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjNTA1ODVmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzgzZTQ0O1xyXG4gIH1cclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG59XHJcbmRpdi5oZWFkZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogc2xhdGVncmV5O1xyXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIuM3JlbSAxcmVtIDIuM3JlbSAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01cmVtO1xyXG4gICAgbGVmdDogMHJlbTtcclxuICAgIGhlaWdodDogNS4xcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDIwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHRvcDogLjhyZW07XHJcbiAgICAgIGJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcbiAgICBmb250OiB7XHJcbiAgICAgIHdlaWdodDogMjAwO1xyXG4gICAgICBzaXplOiAxLjZlbTtcclxuICAgIH1cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxLjFlbTtcclxuICAgICAgd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBjb2xvcjogI2NmZDdkZTtcclxuICAgIG1heC13aWR0aDogMzByZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMHJlbSAxcmVtIDByZW0gMXJlbTtcclxufVxyXG5cclxuI3RpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogdGFibGU7IC8vKkZvciBGaXJlZm94XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgLy8gICAgb3BhY2l0eTogLjc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAuNXJlbTtcclxuICAgICAgYm90dG9tOiAwcmVtO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjQzVDNUM1Oy8vbGluZVxyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7IC8veWVhcnNcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNzBweDsgLy95ZWFyIG9mZnNldFxyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxZW07XHJcbiAgICAgIHdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VjdGlvbi55ZWFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjpmaXJzdC1jaGlsZCBzZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogLTEuM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi4yZW07XHJcbiAgICBoNCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBmb250OiB7XHJcbiAgICAgICAgc2l6ZTogLjllbTtcclxuICAgICAgICB3ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDAgODlweDtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7Ly9tb250aCBiZWxvdyAgICBcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDc1cHg7XHJcbiAgICAgIG1hcmdpbjogLTEuMzVyZW0gMCAxZW07XHJcbiAgICAgIG1heC13aWR0aDogMzJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgODFweDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGU6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQzVDNUM1Oy8vZG90XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDU0cHg7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0uNXJlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IC4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLnByaWNlIHtcclxuICAgICAgICAgIGNvbG9yOiBtZWRpdW10dXJxdW9pc2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG59XHJcblxyXG4jcHJpY2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuc3ZnIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsNTAsOTMsLjExKSwgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjA4KTtcclxufVxyXG5cclxuLnRpdGxlIGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcbi50aXRsZSBoMTphZnRlciB7XHJcbiAgY29udGVudDonICc7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBib3JkZXI6MXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6MnB4O1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuLm5lc3RlZCBsaXtcclxuICBmb250LXNpemU6IC45ZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG4uY29udGFpbmVyLWl0ZW17XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZGl2LmZvY3VzYWJsZXtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmZvY3VzYWJsZSBpbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmlsdGVyOiBncmF5OyAvKiBJRTYtOSAqL1xyXG4td2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpOyAvKiBHb29nbGUgQ2hyb21lLCBTYWZhcmkgNisgJiBPcGVyYSAxNSsgKi9cclxuZmlsdGVyOiBncmF5c2NhbGUoMSk7IC8qIE1pY3Jvc29mdCBFZGdlIGFuZCBGaXJlZm94IDM1KyAqL1xyXG5ib3JkZXItcmFkaXVzOiAyJTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXHJcbi1tcy10cmFuc2Zvcm06IHNjYWxlKDEpOyAgLyogSUUgOSAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xyXG4gIFxyXG59XHJcblxyXG4uZm9jdXNhYmxlOmhvdmVyIGltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gIGZpbHRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7ICAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTsgIC8qIElFIDkgKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cclxufVxyXG5cclxuaW1nLnJlbGF0aXZlLXNpemV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    //https://codepen.io/mathiesjanssen/pen/ggeBKm
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/components/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/static-resume/static-resume.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/static-resume/static-resume.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right{\r\n    width: auto;\r\n    margin: auto;\r\n    right: 0;\r\n}\r\n.span{\r\n    float: right;\r\n    margin: auto;\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.span mat-button-toggle{\r\n    margin-top:-10px;\r\n    margin-bottom:-10px;\r\n    margin-left: -0px;\r\n}\r\n.vertical-offset{\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aWMtcmVzdW1lL3N0YXRpYy1yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRpYy1yZXN1bWUvc3RhdGljLXJlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uc3BhbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5zcGFuIG1hdC1idXR0b24tdG9nZ2xle1xyXG4gICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206LTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTBweDtcclxufVxyXG5cclxuXHJcblxyXG4udmVydGljYWwtb2Zmc2V0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/static-resume/static-resume.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/static-resume/static-resume.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"span\">\r\n    <button mat-button (click)=\"transferFile()\">{{transferText}}</button>\r\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" (change)=\"onLanguageChange($event.value)\">\r\n    <mat-button-toggle value=\"eng\" checked>\r\n      English\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"slo\">\r\n      Slovenian\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n<div class=\"vertical-offset\">\r\n  <pdf-viewer [src]=\"pdfSrc\"></pdf-viewer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/static-resume/static-resume.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/static-resume/static-resume.component.ts ***!
  \*********************************************************************/
/*! exports provided: StaticResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticResumeComponent", function() { return StaticResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaticResumeComponent = /** @class */ (function () {
    function StaticResumeComponent() {
        this.pdfSrc = '/assets/resume.pdf';
        this.transferText = "Download Resume";
    }
    StaticResumeComponent.prototype.ngOnInit = function () {
    };
    StaticResumeComponent.prototype.onLanguageChange = function (value) {
        if (value == "slo") {
            this.pdfSrc = "/assets/resume-sl.pdf";
            this.transferText = "Prenesi življenjepis";
        }
        else {
            this.pdfSrc = "/assets/resume.pdf";
            this.transferText = "Download Resume";
        }
    };
    StaticResumeComponent.prototype.transferFile = function () {
        window.open(this.pdfSrc);
    };
    StaticResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-resume',
            template: __webpack_require__(/*! ./static-resume.component.html */ "./src/app/components/static-resume/static-resume.component.html"),
            styles: [__webpack_require__(/*! ./static-resume.component.css */ "./src/app/components/static-resume/static-resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaticResumeComponent);
    return StaticResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Personal\denisekart.github.io\src\personal\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map