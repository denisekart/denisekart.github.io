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
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/github/github.component */ "./src/app/components/github/github.component.ts");






var routes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "resume", component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: "github", component: _components_github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"] },
    { path: "**", pathMatch: "full", redirectTo: "/home" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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







// import {MatSidenavModule} from '@angular/material/sidenav';





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
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                // MatSidenavModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
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

module.exports = "\n<div class=\"container\">\n    <div class=\"item\">\n      <div id=\"timeline\">\n        <div>\n            <div class=\"title\">\n                <h1>Formal education</h1>\n            </div>\n          <section class=\"year\">\n            <h3>2017 - ongoing</h3>\n            <section>\n              <ul>\n                <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>\n              </ul>\n            </section>     \n          </section>\n          <section class=\"year\">\n            <h3>2010 - 2014</h3>\n            <section>\n              <h4>August</h4>\n              <ul>\n                <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>\n                <li>Bitcoin.org was registered at <a href=\"https://anonymousspeech.com/\">anonymousspeech.com</a>.</li>\n              </ul>\n            </section>\n            <section>\n              <h4>October</h4>\n              <ul>\n                <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>\n              </ul>\n            </section>\n            <section>\n              <h4>November</h4>\n              <ul>\n                <li>The Bitcoin project is registered on <a href=\"https://sourceforge.net/\">SourceForge.net</a>.</li>\n              </ul>\n            </section>\n          </section>\n          <section class=\"year\">\n            <h3>2006 - 2010</h3>\n            <section>\n              <h4>January</h4>\n              <ul>\n                <li>Block 0 is established.</li>\n                <li>Version 0.1 of Bitcoin is released.</li>\n                <li>The first Bitcoin transaction.</li>\n              </ul>\n            </section>\n            <section>\n              <h4>October</h4>\n              <ul>\n                <li>An exchange rate is established.</li>\n              </ul>\n            </section>\n            <section>\n              <h4>December</h4>\n              <ul>\n                <li>Version 0.2 is released.</li>\n                <li>The difficulty increases.</li>\n              </ul>\n            </section>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,400,500);\n@charset \"UTF-8\";\n* {\n  border: 0;\n  margin: 0;\n  padding: 0; }\nhtml {\n  height: 100%; }\nbody {\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #79838c; }\na {\n  color: #50585f;\n  text-decoration: none; }\na:hover {\n    color: #383e44; }\ndiv.container {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  max-height: 90%; }\ndiv.header {\n  height: auto;\n  text-align: center;\n  background: slategrey;\n  color: ghostwhite;\n  padding: 2.3rem 1rem 2.3rem 1rem;\n  position: relative; }\ndiv.header:after {\n    content: '';\n    position: absolute;\n    bottom: -5rem;\n    left: 0rem;\n    height: 5.1rem;\n    display: block;\n    width: 100%;\n    z-index: 300;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );\n    /* IE6-9 */ }\ndiv.header h1 {\n    margin-top: .8rem;\n    margin-bottom: .5rem;\n    font-weight: 200;\n    font-size: 1.6em;\n    letter-spacing: 0.1rem;\n    text-transform: uppercase; }\n@media (min-width: 62em) {\n      div.header h1 {\n        font-size: 1.9em;\n        letter-spacing: 0.2rem; } }\ndiv.header h2 {\n    font-size: 1.1em;\n    font-weight: 400;\n    color: #cfd7de;\n    max-width: 30rem;\n    margin: auto; }\ndiv.item {\n  display: flex;\n  flex: auto;\n  overflow-y: auto;\n  padding: 0rem 1rem 0rem 1rem; }\n#timeline {\n  position: relative;\n  display: table;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem; }\n#timeline div:after {\n    content: '';\n    width: 2px;\n    position: absolute;\n    top: .5rem;\n    bottom: 0rem;\n    left: 60px;\n    z-index: 1;\n    background: #C5C5C5; }\n#timeline h3 {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 5rem;\n    color: var(--color-accent);\n    margin: 0;\n    margin-left: -70px;\n    font-size: 1em;\n    font-weight: 400; }\n@media (min-width: 62em) {\n      #timeline h3 {\n        font-size: 1.1em; } }\n#timeline section.year {\n    position: relative; }\n#timeline section.year:first-child section {\n      margin-top: -1.3em;\n      padding-bottom: 0px; }\n#timeline section.year section {\n      position: relative;\n      padding-bottom: 1.25em;\n      margin-bottom: 2.2em; }\n#timeline section.year section h4 {\n        position: absolute;\n        bottom: 0;\n        font-size: .9em;\n        font-weight: 400;\n        line-height: 1.2em;\n        margin: 0;\n        padding: 0 0 0 89px;\n        color: var(--color-accent); }\n@media (min-width: 62em) {\n          #timeline section.year section h4 {\n            font-size: 1em; } }\n#timeline section.year section ul {\n        list-style-type: none;\n        padding: 0 0 0 75px;\n        margin: -1.35rem 0 1em;\n        max-width: 32rem;\n        font-size: 1em; }\n@media (min-width: 62em) {\n          #timeline section.year section ul {\n            font-size: 1.1em;\n            padding: 0 0 0 81px; } }\n#timeline section.year section ul:last-child {\n          margin-bottom: 0; }\n#timeline section.year section ul:first-of-type:after {\n          content: '';\n          width: 10px;\n          height: 10px;\n          background: #C5C5C5;\n          border: 2px solid #FFFFFF;\n          border-radius: 50%;\n          position: absolute;\n          left: 54px;\n          top: 3px;\n          z-index: 2; }\n#timeline section.year section ul li {\n          margin-left: .5rem; }\n#timeline section.year section ul li:before {\n            content: '·';\n            margin-left: -.5rem;\n            padding-right: .3rem; }\n#timeline section.year section ul li:not(:first-child) {\n            margin-top: .5rem; }\n#timeline section.year section ul li span.price {\n            color: mediumturquoise;\n            font-weight: 500; }\n#price {\n  display: inline; }\nsvg {\n  border: 3px solid white;\n  border-radius: 50%;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); }\n.title h1 {\n  font-weight: 500;\n  color: var(--color-accent);\n  font-size: 1.4em;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  margin-left: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvQzpcXERldk9wc1xcZGVuaXNla2FydC5naXRodWIuaW9cXHNyY1xccGVyc29uYWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VtZVxccmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUFZO0FDQVosZ0JBQWdCO0FEU2hCO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFFWjtFQUNFLFlBQVksRUFBQTtBQUVkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFFdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFGdkI7SUFJSSxjQUFjLEVBQUE7QUFJbEI7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7QUFFakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBO0FBTnBCO0lBUUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDOEUsYUFBQTtJQUNFLDRCQUFBO0lBQzVGLDhFQUF3RjtJQUFFLHFEQUFBO0lBQzFGLHFIQUFxSDtJQUFFLFVBQUEsRUFBVztBQW5CdEk7SUF1Qk0saUJBQVU7SUFDVixvQkFBYTtJQUdiLGdCQUFXO0lBQ1gsZ0JBQVc7SUFFYixzQkFBc0I7SUFDdEIseUJBQXlCLEVBQUE7QUFDekI7TUFoQ0o7UUFpQ00sZ0JBQWdCO1FBQ2hCLHNCQUFzQixFQUFBLEVBRXpCO0FBcENIO0lBdUNNLGdCQUFXO0lBQ1gsZ0JBQVc7SUFFYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtBQUloQjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBRVYsaUJBQVU7RUFDVixrQkFBVztFQUNYLGdCQUFTLEVBQUE7QUFQYjtJQVdNLFdBQVc7SUFDWCxVQUFVO0lBRVYsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtBQW5CekI7SUF1Qkksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxrQkFBa0I7SUFFaEIsY0FBUztJQUNULGdCQUFXLEVBQUE7QUFFYjtNQWpDSjtRQWtDTSxnQkFBZ0IsRUFBQSxFQUVuQjtBQXBDSDtJQXNDRSxrQkFBa0IsRUFBQTtBQXRDcEI7TUF3Q0ksa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0FBekN2QjtNQTRDSSxrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLG9CQUFvQixFQUFBO0FBOUN4QjtRQWdETSxrQkFBa0I7UUFDbEIsU0FBUztRQUVQLGVBQVU7UUFDVixnQkFBVztRQUViLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLDBCQUEwQixFQUFBO0FBQzFCO1VBMUROO1lBMkRRLGNBQWMsRUFBQSxFQUVqQjtBQTdETDtRQStETSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBO0FBQ2Q7VUFwRU47WUFxRVEsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBLEVBa0N0QjtBQXhHTDtVQTBFVSxnQkFBUyxFQUFBO0FBMUVuQjtVQThFUSxXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQVk7VUFDWixtQkFBbUI7VUFDbkIseUJBQXlCO1VBM0svQixrQkE0S2dDO1VBQzFCLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsUUFBUTtVQUNSLFVBQVUsRUFBQTtBQXZGbEI7VUEwRlEsa0JBQWtCLEVBQUE7QUExRjFCO1lBNEZVLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CLEVBQUE7QUE5RjlCO1lBaUdVLGlCQUFpQixFQUFBO0FBakczQjtZQW9HVSxzQkFBc0I7WUFDdEIsZ0JBQWdCLEVBQUE7QUFRMUI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJFQUFtRSxFQUFBO0FBR3JFO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6MjAwLDQwMCw1MDApO1xyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuKiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGNvbG9yOiAjNzk4MzhjO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjNTA1ODVmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzgzZTQ0O1xyXG4gIH1cclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG59XHJcbmRpdi5oZWFkZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogc2xhdGVncmV5O1xyXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIuM3JlbSAxcmVtIDIuM3JlbSAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01cmVtO1xyXG4gICAgbGVmdDogMHJlbTtcclxuICAgIGhlaWdodDogNS4xcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDIwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHRvcDogLjhyZW07XHJcbiAgICAgIGJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcbiAgICBmb250OiB7XHJcbiAgICAgIHdlaWdodDogMjAwO1xyXG4gICAgICBzaXplOiAxLjZlbTtcclxuICAgIH1cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxLjFlbTtcclxuICAgICAgd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBjb2xvcjogI2NmZDdkZTtcclxuICAgIG1heC13aWR0aDogMzByZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMHJlbSAxcmVtIDByZW0gMXJlbTtcclxufVxyXG5cclxuI3RpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogdGFibGU7IC8vKkZvciBGaXJlZm94XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgLy8gICAgb3BhY2l0eTogLjc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAuNXJlbTtcclxuICAgICAgYm90dG9tOiAwcmVtO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjQzVDNUM1Oy8vbGluZVxyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7IC8veWVhcnNcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNzBweDsgLy95ZWFyIG9mZnNldFxyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxZW07XHJcbiAgICAgIHdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VjdGlvbi55ZWFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjpmaXJzdC1jaGlsZCBzZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogLTEuM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi4yZW07XHJcbiAgICBoNCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBmb250OiB7XHJcbiAgICAgICAgc2l6ZTogLjllbTtcclxuICAgICAgICB3ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDAgODlweDtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7Ly9tb250aCBiZWxvdyAgICBcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDc1cHg7XHJcbiAgICAgIG1hcmdpbjogLTEuMzVyZW0gMCAxZW07XHJcbiAgICAgIG1heC13aWR0aDogMzJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgODFweDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGU6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQzVDNUM1Oy8vZG90XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDU0cHg7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfCtyc7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLS41cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ucHJpY2Uge1xyXG4gICAgICAgICAgY29sb3I6IG1lZGl1bXR1cnF1b2lzZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbiNwcmljZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCw1MCw5MywuMTEpLCAwIDFweCAzcHggcmdiYSgwLDAsMCwuMDgpO1xyXG59XHJcblxyXG4udGl0bGUgaDF7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6MjAwLDQwMCw1MDApO1xuKiB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGNvbG9yOiAjNzk4MzhjOyB9XG5cbmEge1xuICBjb2xvcjogIzUwNTg1ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzgzZTQ0OyB9XG5cbmRpdi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA5MCU7IH1cblxuZGl2LmhlYWRlciB7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWdyZXk7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICBwYWRkaW5nOiAyLjNyZW0gMXJlbSAyLjNyZW0gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIGRpdi5oZWFkZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC01cmVtO1xuICAgIGxlZnQ6IDByZW07XG4gICAgaGVpZ2h0OiA1LjFyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMzAwO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgIC8qIEZGMy42LTE1ICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApO1xuICAgIC8qIElFNi05ICovIH1cbiAgZGl2LmhlYWRlciBoMSB7XG4gICAgbWFyZ2luLXRvcDogLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gICAgICBkaXYuaGVhZGVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTsgfSB9XG4gIGRpdi5oZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI2NmZDdkZTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1hcmdpbjogYXV0bzsgfVxuXG5kaXYuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07IH1cblxuI3RpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cmVtOyB9XG4gICN0aW1lbGluZSBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVyZW07XG4gICAgYm90dG9tOiAwcmVtO1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiAjQzVDNUM1OyB9XG4gICN0aW1lbGluZSBoMyB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gICAgICAjdGltZWxpbmUgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMWVtOyB9IH1cbiAgI3RpbWVsaW5lIHNlY3Rpb24ueWVhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgI3RpbWVsaW5lIHNlY3Rpb24ueWVhcjpmaXJzdC1jaGlsZCBzZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xLjNlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cbiAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuMmVtOyB9XG4gICAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24gaDQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgODlweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgICAgICAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24gaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07IH0gfVxuICAgICAgI3RpbWVsaW5lIHNlY3Rpb24ueWVhciBzZWN0aW9uIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCA3NXB4O1xuICAgICAgICBtYXJnaW46IC0xLjM1cmVtIDAgMWVtO1xuICAgICAgICBtYXgtd2lkdGg6IDMycmVtO1xuICAgICAgICBmb250LXNpemU6IDFlbTsgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAgICAgICAgICN0aW1lbGluZSBzZWN0aW9uLnllYXIgc2VjdGlvbiB1bCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgODFweDsgfSB9XG4gICAgICAgICN0aW1lbGluZSBzZWN0aW9uLnllYXIgc2VjdGlvbiB1bDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgICAgICN0aW1lbGluZSBzZWN0aW9uLnllYXIgc2VjdGlvbiB1bDpmaXJzdC1vZi10eXBlOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0M1QzVDNTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1NHB4O1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgICAgI3RpbWVsaW5lIHNlY3Rpb24ueWVhciBzZWN0aW9uIHVsIGxpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07IH1cbiAgICAgICAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24gdWwgbGk6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfCtyc7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLS41cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjNyZW07IH1cbiAgICAgICAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24gdWwgbGk6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07IH1cbiAgICAgICAgICAjdGltZWxpbmUgc2VjdGlvbi55ZWFyIHNlY3Rpb24gdWwgbGkgc3Bhbi5wcmljZSB7XG4gICAgICAgICAgICBjb2xvcjogbWVkaXVtdHVycXVvaXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4jcHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmU7IH1cblxuc3ZnIHtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpOyB9XG5cbi50aXRsZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDsgfVxuIl19 */"

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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map