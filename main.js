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

module.exports = "<p>\n  github works...well...not yet...under construction!\n</p>\n"

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

module.exports = "<div class=\"container\">\n    <div class=\"item\">\n        \n        <div id=\"timeline\">\n            <div>\n                <div class=\"title\">\n                    <h1>Profile</h1>\n                </div>\n              <section class=\"year\">\n                <h3>\n                  <div class=\"focusable container-left\">\n                    <img class=\"on-hover relative-size\" src=\"./assets/me.png\"/>\n                  </div>\n                </h3>\n                <section>\n                    <h4>updated on 24th of April, 2019</h4>\n                    <ul>\n                        <li>\n<p>An innovative programmer with close to 5 years of professional \nexperience in software design and development.</p>\n <p>Thrive in a team environment with the ability to lead\n  a team and follow leadership directives.</p>\n<p>Understanding intricate systems and solving complex problems\n in a dynamic and result-oriented way is one of my strong suits\n  (writing short sentences is not).</p>\n <p>Able to coordinate several projects simultaneously while\n  prioritizing tasks and operating proactively.</p>\n  <p>I aspire to be as language-agnostic as possible \n    and already have strong expertise in C#, C++, \n    Python, Java, TypeScript, Sass, SQL and other languages.</p>\n                        </li>\n                    </ul>\n                </section>     \n              </section>\n              \n              </div>\n\n              \n        <div id=\"timeline\">\n            <div>\n                <div class=\"title\">\n                    <h1>Qualifications</h1>\n                </div>\n              <section class=\"year\">\n                <h3>Programming <br/>languages</h3>\n                <section>\n                    <ul>\n                        <li>C#</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>ASP.NET, AspNet.Core, DevExpress, WPF, \n                            Windows Forms, Xamarin, Mono(Android), \n                            Windows IOT, Windows SDK (8.x, 10.x), COM+</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>C++</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>C++11, Embedded ARM Cortex</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>Java</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>Spring, Hadoop(mapreduce), Android</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>Kotlin</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>Android</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>Python</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>2.7.x, 3.x, sklearn, tensorflow, matplotlib</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>R</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>CARET, rpart, ROCR, nnet, CORElearn, mboost, party</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>Matlab</li>\n                      \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>SQL</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>MSSQL, MySql</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>HTML, JavaScript, CSS</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>Angular 7.x, SASS(scss), rx/js, jQuery, Razor</li>\n                         </ul>   \n                    </ul>\n                </section>\n                <section>\n                    <ul>\n                        <li>Lua</li>\n                        <br/>\n                      \n                      <ul class=\"nested\">\n                          <li>Redis</li>\n                         </ul>   \n                    </ul>\n                </section>\n                     \n              </section>\n              <section class=\"year\">\n                  <h3>Languages</h3>\n                  <section>\n                      <ul>\n                          <li>Slovenian</li>\n                          <br/>\n                        <ul class=\"nested\">\n                            <li>First language. Speak: excelent, write: excelent</li>\n                           </ul>   \n                      </ul>\n                  </section>\n                  <section>\n                      <ul>\n                          <li>English</li>\n                          <br/>\n                        <ul class=\"nested\">\n                            <li>Speak: excelent, write: excelent</li>\n                           </ul>   \n                      </ul>\n                  </section>\n                  <section>\n                      <ul>\n                          <li>Croatian</li>\n                          <br/>\n                        <ul class=\"nested\">\n                            <li>Speak: excelent, write: average</li>\n                           </ul>   \n                      </ul>\n                  </section>\n                  <section>\n                      <ul>\n                          <li>German</li>\n                          <br/>\n                        <ul class=\"nested\">\n                            <li>Speak: below average, write: average</li>\n                           </ul>   \n                      </ul>\n                  </section>\n                  </section>\n                  <section class=\"year\">\n                      <h3>Other<br/>qualifications</h3>\n                      <section>\n                          <ul>\n                              <li>Source control</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>GIT, Git LFS, SVN, TFVC</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                      <section>\n                          <ul>\n                              <li>Microsoft Azure management</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>Azure AD, WebApps, Container instances, VM's, resource management</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                      <section>\n                          <ul>\n                              <li>Azure DevOps</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>azure artifacts(nuget), build agent administration, continuous integration, continuous deployment, scrum administration, test planning</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                      <section>\n                          <ul>\n                              <li>Cake Build (C# scripting)</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>build automation using Cake build (make for c#)</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                      <section>\n                          <ul>\n                              <li>Docker</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>compose, kubernetes(helm)</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                      <section>\n                          <ul>\n                              <li>HL7 - Health Level Seven</li>\n                              <br/>\n                            <ul class=\"nested\">\n                                <li>basic understanding, parsing</li>\n                               </ul>   \n                          </ul>\n                      </section>\n                  </section>\n              </div>\n\n          <div>\n              <div class=\"title\">\n                  <h1>Professional history</h1>\n              </div>\n            <section class=\"year\">\n              <h3>2016 - ongoing</h3>\n              <section>\n                  <h4>Pinna d.o.o.</h4>\n                  <ul>\n                      <li>Full stack developer (ASP.NET, WPF, DevExpress, Xamarin, .NET FRAMEWORK, .NET CORE, Redis, MSSQL, Angular)</li>\n                      <br/>\n                    <br/>\n                    <ul class=\"nested\">\n                        <li>Colaborated with remote teams implementing products that target the healthcare system and are being used in healthcare provider systems and clinical centers in the country</li>\n                        <li>Utilized advanced development and programming techniques to ensure rapid development and deployment</li>\n                        <li>Developed software from the design to production phase including systems architecture design</li>\n                      </ul>\n                      <li>DevOps engineer (Azure DevOps, Cake Build)</li>\n                      <br/>\n                    <br/>\n                      <ul class=\"nested\">\n                          <li>Designed and improved CI and CD pipelines while ensuring code quality using automated testing on live build agents or in docker instances</li>\n                          <li>Used latest \"c# cake build\" tooling to automate every step of the build and deployment pipeline</li>\n                        </ul>\n                      <li>Systems engineer</li>\n                      <br/>\n                    <br/>\n                      <ul class=\"nested\">\n                          <li>Configured the infrastructure needed to deploy, communicate and run the products in a sandboxed development environment</li>\n                          <li>Leveraged the SAAS PAAS and IAAS provided as a part of the Azure stack including (but not limited to) docker containers, VM's, Azure Service Bus, Web Apps and Azure AD</li>\n                        </ul>\n                  </ul>\n              </section>     \n            </section>\n            <section class=\"year\">\n              <h3>2014 - 2016</h3>\n              <section>\n                <h4>Trivia, programske rešitve,Denis Ekart s.p.</h4>\n                <ul>\n                    <li><span>Full stack developer (ASP.NET, WCF, Cordova, MYSQL, Mono Android, Java)</span></li>\n                    <br/>\n                    <br/>\n                    <ul class=\"nested\">\n                        <li>Colaborated with teams to ensure communication across technology boundaries</li>\n                        <li>Developed software that communicated with the government's web services \"davčne blagajne\"</li>\n                        <li>Developed software from the design to production phase</li>\n                      </ul>\n                </ul>\n              </section>\n            </section>\n            </div>\n            <div>\n                <div class=\"title\">\n                    <h1>Education</h1>\n                </div>\n              <section class=\"year\">\n                <h3>2017 - ongoing</h3>\n                <section>\n                    <h4>mag. inž. rač. in inf. tehnol.</h4>\n                    <ul>\n                        <li>Master of Computer Science and Information Technologies, Faculty of Electrical Engineering and Computer Science, University of Maribor, Slovenia</li>\n                    </ul>\n                </section>     \n              </section>\n              <section class=\"year\">\n                <h3>2010 - 2014</h3>\n                <section>\n                  <h4>dipl. inž. rač. in inf. tehnol. (un)</h4>\n                  <ul>\n                      <li>Bachelor of Computer Science and Information Technologies, Faculty of Electrical Engineering and Computer Science, University of Maribor, Slovenia</li>\n                  </ul>\n                </section>\n              </section>\n              <section class=\"year\">\n                <h3>2006 - 2010</h3>\n                <section>\n                  <h4>high school graduate</h4>\n                  <ul>\n                    <li>High school diploma, Tretja Gimnazija Maribor, Slovenia</li>\n                  </ul>\n                </section>\n                \n              </section>\n            </div>\n        </div>\n      </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,400,500);\n* {\n  border: 0;\n  margin: 0;\n  padding: 0; }\nhtml {\n  height: 100%; }\nbody {\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #79838c; }\na {\n  color: #50585f;\n  text-decoration: none; }\na:hover {\n    color: #383e44; }\ndiv.container {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  max-height: 90%; }\ndiv.header {\n  height: auto;\n  text-align: center;\n  background: slategrey;\n  color: ghostwhite;\n  padding: 2.3rem 1rem 2.3rem 1rem;\n  position: relative; }\ndiv.header:after {\n    content: '';\n    position: absolute;\n    bottom: -5rem;\n    left: 0rem;\n    height: 5.1rem;\n    display: block;\n    width: 100%;\n    z-index: 300;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );\n    /* IE6-9 */ }\ndiv.header h1 {\n    margin-top: .8rem;\n    margin-bottom: .5rem;\n    font-weight: 200;\n    font-size: 1.6em;\n    letter-spacing: 0.1rem;\n    text-transform: uppercase; }\n@media (min-width: 62em) {\n      div.header h1 {\n        font-size: 1.9em;\n        letter-spacing: 0.2rem; } }\ndiv.header h2 {\n    font-size: 1.1em;\n    font-weight: 400;\n    color: #cfd7de;\n    max-width: 30rem;\n    margin: auto; }\ndiv.item {\n  display: flex;\n  flex: auto;\n  overflow-y: auto;\n  padding: 0rem 1rem 0rem 1rem; }\n#timeline {\n  position: relative;\n  display: table;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem; }\n#timeline div:after {\n    content: '';\n    width: 2px;\n    position: absolute;\n    top: .5rem;\n    bottom: 0rem;\n    left: 60px;\n    z-index: 1;\n    background: #C5C5C5; }\n#timeline h3 {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 5rem;\n    color: var(--color-accent);\n    margin: 0;\n    margin-left: -70px;\n    font-size: 1em;\n    font-weight: 400; }\n@media (min-width: 62em) {\n      #timeline h3 {\n        font-size: 1.1em; } }\n#timeline section.year {\n    position: relative; }\n#timeline section.year:first-child section {\n      margin-top: -1.3em;\n      padding-bottom: 0px; }\n#timeline section.year section {\n      position: relative;\n      padding-bottom: 1.25em;\n      margin-bottom: 2.2em; }\n#timeline section.year section h4 {\n        position: absolute;\n        bottom: 0;\n        font-size: .9em;\n        font-weight: 400;\n        line-height: 1.2em;\n        margin: 0;\n        padding: 0 0 0 89px;\n        color: var(--color-accent); }\n@media (min-width: 62em) {\n          #timeline section.year section h4 {\n            font-size: 1em; } }\n#timeline section.year section ul {\n        list-style-type: none;\n        padding: 0 0 0 75px;\n        margin: -1.35rem 0 1em;\n        max-width: 32rem;\n        font-size: 1em; }\n@media (min-width: 62em) {\n          #timeline section.year section ul {\n            font-size: 1.1em;\n            padding: 0 0 0 81px; } }\n#timeline section.year section ul:last-child {\n          margin-bottom: 0; }\n#timeline section.year section ul:first-of-type:after {\n          content: '';\n          width: 10px;\n          height: 10px;\n          background: #C5C5C5;\n          border: 2px solid #FFFFFF;\n          border-radius: 50%;\n          position: absolute;\n          left: 54px;\n          top: 3px;\n          z-index: 2; }\n#timeline section.year section ul li {\n          margin-left: .5rem; }\n#timeline section.year section ul li:before {\n            content: '';\n            margin-left: -.5rem;\n            padding-right: .3rem; }\n#timeline section.year section ul li:not(:first-child) {\n            margin-top: .5rem; }\n#timeline section.year section ul li span.price {\n            color: mediumturquoise;\n            font-weight: 500; }\n#price {\n  display: inline; }\nsvg {\n  border: 3px solid white;\n  border-radius: 50%;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n.title h1 {\n  font-weight: 400;\n  color: var(--color-accent);\n  font-size: 1.4em;\n  text-transform: capitalize;\n  margin-bottom: 30px;\n  margin-left: 70px; }\n.title h1:after {\n  content: ' ';\n  display: block;\n  border: 1px solid #d0d0d0;\n  border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n.nested li {\n  font-size: .9em;\n  font-style: italic; }\n.container-item {\n  display: block;\n  flex-direction: row;\n  width: 100%; }\ndiv.focusable {\n  margin: auto;\n  margin-left: -20px;\n  margin-top: -20px;\n  float: left;\n  width: 20%;\n  max-width: 300px; }\n.focusable img {\n  display: block;\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(1);\n  /* Google Chrome, Safari 6+ & Opera 15+ */\n  filter: grayscale(1);\n  /* Microsoft Edge and Firefox 35+ */\n  border-radius: 2%;\n  -webkit-transform: scale(1);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: scale(1);\n  /* Firefox 16+, IE 10+, Opera */ }\n.focusable:hover img {\n  display: block;\n  -webkit-filter: grayscale(0);\n  filter: none;\n  border-radius: 2%;\n  -webkit-transform: scale(1.25);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: scale(1.25);\n  /* Firefox 16+, IE 10+, Opera */ }\nimg.relative-size {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvQzpcXERldk9wc1xcZGVuaXNla2FydC5naXRodWIuaW9cXHNyY1xccGVyc29uYWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VtZVxccmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUFZO0FBU1o7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVUsRUFBQTtBQUVaO0VBQ0UsWUFBWSxFQUFBO0FBRWQ7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUZ2QjtJQUlJLGNBQWMsRUFBQTtBQUlsQjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTtBQUVqQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7QUFOcEI7SUFRSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUM4RSxhQUFBO0lBQ0UsNEJBQUE7SUFDNUYsOEVBQXdGO0lBQUUscURBQUE7SUFDMUYscUhBQXFIO0lBQUUsVUFBQSxFQUFXO0FBbkJ0STtJQXVCTSxpQkFBVTtJQUNWLG9CQUFhO0lBR2IsZ0JBQVc7SUFDWCxnQkFBVztJQUViLHNCQUFzQjtJQUN0Qix5QkFBeUIsRUFBQTtBQUN6QjtNQWhDSjtRQWlDTSxnQkFBZ0I7UUFDaEIsc0JBQXNCLEVBQUEsRUFFekI7QUFwQ0g7SUF1Q00sZ0JBQVc7SUFDWCxnQkFBVztJQUViLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0FBSWhCO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQTRCLEVBQUE7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFFVixpQkFBVTtFQUNWLGtCQUFXO0VBQ1gsZ0JBQVMsRUFBQTtBQVBiO0lBV00sV0FBVztJQUNYLFVBQVU7SUFFVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0FBbkJ6QjtJQXVCSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsU0FBUztJQUNULGtCQUFrQjtJQUVoQixjQUFTO0lBQ1QsZ0JBQVcsRUFBQTtBQUViO01BakNKO1FBa0NNLGdCQUFnQixFQUFBLEVBRW5CO0FBcENIO0lBc0NFLGtCQUFrQixFQUFBO0FBdENwQjtNQXdDSSxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7QUF6Q3ZCO01BNENJLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsb0JBQW9CLEVBQUE7QUE5Q3hCO1FBZ0RNLGtCQUFrQjtRQUNsQixTQUFTO1FBRVAsZUFBVTtRQUNWLGdCQUFXO1FBRWIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsMEJBQTBCLEVBQUE7QUFDMUI7VUExRE47WUEyRFEsY0FBYyxFQUFBLEVBRWpCO0FBN0RMO1FBK0RNLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7QUFDZDtVQXBFTjtZQXFFUSxnQkFBZ0I7WUFDaEIsbUJBQW1CLEVBQUEsRUFrQ3RCO0FBeEdMO1VBMEVVLGdCQUFTLEVBQUE7QUExRW5CO1VBOEVRLFdBQVc7VUFDWCxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQix5QkFBeUI7VUEzSy9CLGtCQTRLZ0M7VUFDMUIsa0JBQWtCO1VBQ2xCLFVBQVU7VUFDVixRQUFRO1VBQ1IsVUFBVSxFQUFBO0FBdkZsQjtVQTBGUSxrQkFBa0IsRUFBQTtBQTFGMUI7WUE0RlUsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixvQkFBb0IsRUFBQTtBQTlGOUI7WUFpR1UsaUJBQWlCLEVBQUE7QUFqRzNCO1lBb0dVLHNCQUFzQjtZQUN0QixnQkFBZ0IsRUFBQTtBQVExQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkVBQW1FLEVBQUE7QUFHckU7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBRXJCO0VBQ0UsWUFBVztFQUNYLGNBQWE7RUFDYix5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6Qix1QkFBc0I7RUFDdEIsK0NBQTZDO0VBQzdDLHVEQUFxRDtFQUNyRCxvREFBa0QsRUFBQTtBQUdwRDtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBTWI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFBRSxVQUFBO0VBQ2hCLDRCQUE0QjtFQUFFLHlDQUFBO0VBQzlCLG9CQUFvQjtFQUFFLG1DQUFBO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFBRyxtQ0FBQTtFQUNKLFNBQUE7RUFDeEIsbUJBQW1CO0VBQUcsK0JBQUEsRUFBZ0M7QUFJeEQ7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQUcsbUNBQUE7RUFDSixTQUFBO0VBQzdCLHNCQUFzQjtFQUFHLCtCQUFBLEVBQWdDO0FBRzNEO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2FuczoyMDAsNDAwLDUwMCk7XHJcblxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4qIHtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmJvZHkge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgY29sb3I6ICM3OTgzOGM7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICM1MDU4NWY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzODNlNDQ7XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiA5MCU7XHJcbn1cclxuZGl2LmhlYWRlciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBzbGF0ZWdyZXk7XHJcbiAgY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgcGFkZGluZzogMi4zcmVtIDFyZW0gMi4zcmVtIDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTVyZW07XHJcbiAgICBsZWZ0OiAwcmVtO1xyXG4gICAgaGVpZ2h0OiA1LjFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMzAwO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDIwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyMCUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgdG9wOiAuOHJlbTtcclxuICAgICAgYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuICAgIGZvbnQ6IHtcclxuICAgICAgd2VpZ2h0OiAyMDA7XHJcbiAgICAgIHNpemU6IDEuNmVtO1xyXG4gICAgfVxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgICBmb250LXNpemU6IDEuOWVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250OiB7XHJcbiAgICAgIHNpemU6IDEuMWVtO1xyXG4gICAgICB3ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIGNvbG9yOiAjY2ZkN2RlO1xyXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbmRpdi5pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAwcmVtIDFyZW0gMHJlbSAxcmVtO1xyXG59XHJcblxyXG4jdGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiB0YWJsZTsgLy8qRm9yIEZpcmVmb3hcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDVyZW07XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAvLyAgICBvcGFjaXR5OiAuNztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC41cmVtO1xyXG4gICAgICBib3R0b206IDByZW07XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNDNUM1QzU7Ly9saW5lXHJcbiAgICB9XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTsgLy95ZWFyc1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4OyAvL3llYXIgb2Zmc2V0XHJcbiAgICBmb250OiB7XHJcbiAgICAgIHNpemU6IDFlbTtcclxuICAgICAgd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZWN0aW9uLnllYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOmZpcnN0LWNoaWxkIHNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4zZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBzZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjJlbTtcclxuICAgIGg0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGZvbnQ6IHtcclxuICAgICAgICBzaXplOiAuOWVtO1xyXG4gICAgICAgIHdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMCA4OXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTsvL21vbnRoIGJlbG93ICAgIFxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMCAwIDAgNzVweDtcclxuICAgICAgbWFyZ2luOiAtMS4zNXJlbSAwIDFlbTtcclxuICAgICAgbWF4LXdpZHRoOiAzMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCA4MXB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDNUM1QzU7Ly9kb3RcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTRweDtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLS41cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ucHJpY2Uge1xyXG4gICAgICAgICAgY29sb3I6IG1lZGl1bXR1cnF1b2lzZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbiNwcmljZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCw1MCw5MywuMTEpLCAwIDFweCAzcHggcmdiYSgwLDAsMCwuMDgpO1xyXG59XHJcblxyXG4udGl0bGUgaDF7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn1cclxuLnRpdGxlIGgxOmFmdGVyIHtcclxuICBjb250ZW50OicgJztcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2QwZDBkMDtcclxuICBib3JkZXItcmFkaXVzOjJweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcblxyXG4ubmVzdGVkIGxpe1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG59XHJcbi5jb250YWluZXItaXRlbXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5kaXYuZm9jdXNhYmxle1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZm9jdXNhYmxlIGltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmaWx0ZXI6IGdyYXk7IC8qIElFNi05ICovXHJcbi13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7IC8qIEdvb2dsZSBDaHJvbWUsIFNhZmFyaSA2KyAmIE9wZXJhIDE1KyAqL1xyXG5maWx0ZXI6IGdyYXlzY2FsZSgxKTsgLyogTWljcm9zb2Z0IEVkZ2UgYW5kIEZpcmVmb3ggMzUrICovXHJcbmJvcmRlci1yYWRpdXM6IDIlO1xyXG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7ICAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cclxuLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7ICAvKiBJRSA5ICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgIC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbiAgXHJcbn1cclxuXHJcbi5mb2N1c2FibGU6aG92ZXIgaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgZmlsdGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTsgIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMjUpOyAgLyogSUUgOSAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xyXG59XHJcblxyXG5pbWcucmVsYXRpdmUtc2l6ZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG4iXX0= */"

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

module.exports = "<div class=\"span\">\n    <button mat-button (click)=\"transferFile()\">{{transferText}}</button>\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" (change)=\"onLanguageChange($event.value)\">\n    <mat-button-toggle value=\"eng\" checked>\n      English\n    </mat-button-toggle>\n    <mat-button-toggle value=\"slo\">\n      Slovenian\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n<div class=\"vertical-offset\">\n  <pdf-viewer [src]=\"pdfSrc\"></pdf-viewer>\n</div>"

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

module.exports = __webpack_require__(/*! C:\DevOps\denisekart.github.io\src\personal\src\main.ts */"./src/main.ts");


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