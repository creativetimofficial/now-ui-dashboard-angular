webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./documentation/documentation.module": [
		"./src/app/documentation/documentation.module.ts",
		"common",
		"documentation.module"
	],
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"common",
		"admin-layout.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this._location = location;
        router.events.subscribe(function (event) {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                // When the route is '/', location.path actually returns ''.
                var newRoute = location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (_this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    fbq('track', 'PageView');
                    _this.currentRoute = newRoute;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_share_buttons__ = __webpack_require__("./node_modules/@ngx-share/buttons/esm5/ngx-share-buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_documentation_documentation_component__ = __webpack_require__("./src/app/layouts/documentation/documentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_share_buttons__["a" /* ShareButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_documentation_documentation_component__["a" /* DocumentationComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_documentation_documentation_component__ = __webpack_require__("./src/app/layouts/documentation/documentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'documentation', redirectTo: 'documentation/tutorial', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }
        ]
    }, { path: '', component: __WEBPACK_IMPORTED_MODULE_5__layouts_documentation_documentation_component__["a" /* DocumentationComponent */],
        children: [
            { path: 'documentation', loadChildren: './documentation/documentation.module#DocumentationModule'
            }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n                <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\" href=\"#pablo\">{{getTitle()}}</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <form>\n            <div class=\"input-group no-border\">\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-append\">\n                <div class=\"input-group-text\">\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                </div>\n              </div>\n            </div>\n          </form>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n              </a>\n            </li>\n            <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons location_world\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n              </a>\n            </li>\n          </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        var html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"./assets/img/angular2-logo-white.png\"/>\n      </div>\n    </a>\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n        Creative Tim\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"now-ui-icons {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\">\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n    </div>\n</div>\n<div class=\"fixed-plugin\">\n  <div ngbDropdown>\n    <a ngbDropdownToggle id=\"dropdownConfig\">\n      <i class=\"fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul style=\"position: absolute; transform: translate3d(-231px, 38px, 0px); top: 0px; left: 0px; will-change: transform;\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n      <li class=\"header-title\"> Sidebar Background</li>\n      <li class=\"adjustments-line\">\n          <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n              <div class=\"badge-colors text-center\">\n                  <span class=\"badge filter badge-yellow\" [ngClass]=\"{'active':sidebarColor==='yellow'}\" (click)=\"changeSidebarColor('yellow')\"></span>\n                  <span class=\"badge filter badge-blue\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"></span>\n                  <span class=\"badge filter badge-green\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\"></span>\n                  <span class=\"badge filter badge-orange\" [ngClass]=\"{'active':sidebarColor==='orange'}\" (click)=\"changeSidebarColor('orange')\"></span>\n                  <span class=\"badge filter badge-red\" [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"></span>\n              </div>\n              <div class=\"clearfix\"></div>\n          </a>\n      </li>\n\n      <li class=\"button-container\" routerLinkActive=\"active\">\n          <a href=\"https://www.creative-tim.com/product/now-ui-dashboard-angular\" target=\"_blank\" class=\"btn btn-primary btn-block btn-round\">Download Now</a>\n          <a [routerLink]=\"['/documentation/tutorial']\" target=\"_blank\" class=\"btn btn-default btn-block btn-round\">\n              <i class=\"now-ui-icons files_single-copy-04\"></i>\n              Documentation\n          </a>\n      </li>\n\n      <li class=\"header-title\">Thank you for 95 shares!</li>\n      <li class=\"button-container text-center\">\n        <share-buttons [theme]=\"'modern-dark'\"\n [include]=\"['facebook','twitter']\"\n [show]=\"5\"\n [url]=\"'https://creativetimofficial.github.io/now-ui-dashboard-angular/dashboard'\"\n></share-buttons>\n          <br>\n          <br>\n          <iframe allowtransparency=\"true\" scrolling=\"no\" frameborder=\"0\" src=\"https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fcreativetimofficial%2Fnow-ui-dashboard-angular&amp;title=&amp;aria-label=Star%20ntkme%2Fgithub-buttons%20on%20GitHub&amp;data-icon=octicon-star&amp;data-text=Star&amp;data-size=large&amp;data-show-count=true\" style=\"width: 102px; height: 28px; border: none;\"></iframe>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(config, location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
        this.sidebarColor = "red";
        // customize default values of dropdowns used by this component tree
        config.placement = 'bottom-left';
        config.autoClose = false;
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row nav-fixed-top\">\n  <a class=\"navbar-brand mr-0 mr-md-2 navbar-absolute-logo\" href=\"https://www.creative-tim.com/product/now-ui-dashboard-angular\" target=\"_blank\">\n    <div class=\"image-container\">\n        <img src=\"./assets/img/angular2-logo-white.png\" alt=\"Angular2 Logo\">\n    </div>\n    Now UI Dashboard Angular\n  </a>\n\n  <ul class=\"navbar-nav flex-row d-none d-md-flex\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a class=\"nav-link p-2\" [routerLink]=\"['/documentation/tutorial']\">\n        1.0.0\n      </a>\n    </li>\n    <li class=\"nav-item\">\n          <a class=\"nav-link p-2\" href=\"https://github.com/creativetimofficial/now-ui-dashboard-angular\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\">\n            <svg class=\"navbar-nav-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 499.36\" focusable=\"false\"><title>GitHub</title><path d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\n\n          </a>\n        </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\" rel=\"noopener\" aria-label=\"Twitter\">\n        <svg class=\"navbar-nav-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 416.32\" focusable=\"false\"><title>Twitter</title><path d=\"M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92\" fill=\"currentColor\"></path></svg>\n\n      </a>\n    </li>\n\n  </ul>\n\n  <div class=\"navbar-nav-scroll ml-md-auto \">\n    <ul class=\"navbar-nav flex-row\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\"><i class=\"now-ui-icons tech_tv\"></i>Back to Dashboard</a>\n        </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/creativetimofficial/now-ui-dashboard-angular/issues\" target=\"_blank\" rel=\"noopener\"><i class=\"now-ui-icons ui-2_settings-90\"></i> Report Issue</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n<div class=\"container-fluid\">\n    <div class=\"row flex-xl-nowrap\">\n        <div class=\"col-12 col-md-3 col-xl-2 bd-sidebar\">\n            <div class=\"fixed-section affix-top\" data-spy=\"affix\" data-offset-top=\"600\">\n                <ul>\n\t\t\t\t             <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/tutorial']\">License and Tutorial</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/buttons']\">Buttons</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/breadcrumb']\">Breadcrumb</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/crs']\">Checkbox/Radio/Toggle</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/dropdown']\">Dropdown</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/inputs']\">Inputs</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/textarea']\">Textarea</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/navigation']\">Navigation</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/tables']\">Tables</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/notifications']\">Notifications</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/perfectscrollbar']\">Perfect Scrollbar</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/charts']\">Chart.js</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/cards']\">Cards</a></li>\n                    <li><a routerLinkActive = \"active\" [routerLink]=\"['/documentation/changing-colors']\">Changing Colors</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content\">\n          <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/documentation/documentation.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav-fixed-top {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 4;\n  top: 0;\n  padding-right: .5rem;\n  padding-left: .5rem;\n  border-radius: 0; }\n\n.navbar .nav-item .nav-link,\n.navbar .nav-item .nav-link:hover,\n.navbar .nav-item .nav-link:focus,\n.navbar .nav-item .nav-link:active {\n  color: #ffffff !important; }\n\n.navbar-absolute-logo {\n  padding-left: 45px; }\n\n.navbar-absolute-logo img {\n  position: relative;\n  left: 0;\n  top: 0; }\n\nbody {\n  background: white; }\n\n.navbar-nav-svg {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: text-top; }\n\n.navbar-brand .image-container {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  top: -3px;\n  position: relative; }\n\n.fixed-section {\n  top: 90px;\n  max-height: 80vh;\n  overflow: scroll; }\n\n.fixed-section ul li {\n  list-style: none; }\n\n.fixed-section li a {\n  font-size: 14px;\n  padding: 2px;\n  display: block;\n  color: #666666; }\n\n.fixed-section li a.active {\n  color: maroon; }\n\n.fixed-section.float {\n  position: fixed;\n  top: 100px;\n  width: 200px;\n  margin-top: 0; }\n\n.navbar .navbar-brand {\n  position: relative;\n  height: 50px;\n  line-height: 30px;\n  color: #ffffff;\n  padding: 6px 0px 0px 43px; }\n\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n  color: #ffffff;\n  background-color: transparent; }\n\n.navbar-fixed-top {\n  border-radius: 0; }\n\n.navbar .navbar-nav > li > a:hover,\n.navbar .navbar-nav > li > a:focus {\n  color: inherit;\n  background-color: transparent; }\n\n/*!\n * Bootstrap Docs (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see https://creativecommons.org/licenses/by/3.0/.\n */\n\n.bd-navbar {\n  min-height: 4rem;\n  background-color: #3f51b5;\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n  padding-right: .5rem;\n  padding-left: .5rem;\n  border-radius: 0; }\n\n@media (max-width: 991px) {\n  .bd-navbar {\n    padding-right: .5rem;\n    padding-left: .5rem; }\n  .bd-navbar .navbar-nav-scroll {\n    max-width: 100%;\n    height: 2.5rem;\n    margin-top: .25rem;\n    overflow: hidden;\n    font-size: .875rem; }\n  .bd-navbar .navbar-nav-scroll .navbar-nav {\n    padding-bottom: 2rem;\n    overflow-x: auto;\n    white-space: nowrap;\n    -webkit-overflow-scrolling: touch; } }\n\n@media (min-width: 768px) {\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .bd-navbar {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 4; } } }\n\n.bd-navbar .navbar-nav .nav-link {\n  padding-right: .5rem;\n  padding-left: .5rem;\n  color: #cdbfe3; }\n\n.bd-navbar .navbar-nav .nav-link.active, .bd-navbar .navbar-nav .nav-link:hover {\n  color: #fff;\n  background-color: transparent; }\n\n.bd-navbar .navbar-nav .nav-link.active {\n  font-weight: 500; }\n\n.bd-navbar .navbar-nav-svg {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: text-top; }\n\n.bd-navbar .dropdown-menu {\n  font-size: .875rem; }\n\n.bd-navbar .dropdown-item.active {\n  font-weight: 500;\n  color: #212529;\n  background-color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23292b2c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: .4rem .8rem;\n  background-size: .75rem .75rem; }\n\n.bd-navbar .dropdown-item.active:hover {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"); }\n\n.bd-navbar .nav-item {\n  position: relative; }\n\n.bd-docs .navbar-absolute-logo {\n  padding-left: 0; }\n\n.bd-docs .bd-navbar .navbar-nav-scroll {\n  overflow: visible;\n  margin-top: 0; }\n\n@media screen and (max-width: 991px) {\n  .bd-docs .navbar .navbar-nav .nav-item:not(:last-child) {\n    margin-bottom: 0; }\n  .bd-docs .navbar .navbar-nav .nav-item:first-child {\n    margin-top: 0; } }\n\n.bd-example .btn {\n  margin: 0; }\n\n.bd-masthead {\n  position: relative;\n  padding: 3rem 15px; }\n\n.bd-masthead h1 {\n  line-height: 1; }\n\n.bd-masthead .btn {\n  width: 100%;\n  padding: .8rem 2rem;\n  font-size: 1.25rem;\n  font-weight: 500; }\n\n.bd-masthead .carbonad {\n  margin-top: 0 !important;\n  margin-bottom: -3rem !important; }\n\n@media (min-width: 576px) {\n  .bd-masthead {\n    padding-top: 5rem;\n    padding-bottom: 5rem; }\n  .bd-masthead .carbonad {\n    margin-bottom: 0 !important; } }\n\n@media (min-width: 768px) {\n  .bd-masthead h1 {\n    font-size: 4rem; }\n  .bd-masthead .carbonad {\n    margin-top: 3rem !important; } }\n\n.bd-pretext {\n  overflow: hidden;\n  resize: none; }\n\n.half-rule {\n  width: 6rem;\n  margin: 2.5rem 0; }\n\n.masthead-followup .bd-clipboard {\n  display: none; }\n\n.masthead-followup .highlight {\n  padding: .5rem 0;\n  background-color: transparent; }\n\n.bd-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px; }\n\n.bd-featured-sites .col-6 {\n  padding: 1px; }\n\n.bd-featured-sites .img-fluid {\n  margin-top: 0; }\n\n@media (min-width: 768px) {\n  .bd-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem; }\n  .bd-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem; } }\n\n#carbonads {\n  position: static;\n  display: block;\n  max-width: 400px;\n  padding: 15px 15px 15px 160px;\n  margin: 2rem 0;\n  overflow: hidden;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  background-color: rgba(0, 0, 0, 0.05); }\n\n#carbonads a {\n  color: #333;\n  text-decoration: none; }\n\n@media (min-width: 576px) {\n  #carbonads {\n    max-width: 330px;\n    border-radius: 4px; } }\n\n.carbon-img {\n  float: left;\n  margin-left: -145px; }\n\n.carbon-poweredby {\n  display: block;\n  color: #777 !important; }\n\nbody.creativetim .partner.mdbootstrap, body.mdbootstrap .partner.creativetim, body:not(.creativetim):not(.mdbootstrap) .partner.mdbootstrap {\n  display: none; }\n\n.bd-content {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.bd-content > h2[id], .bd-content > h3[id], .bd-content > h4[id] {\n  pointer-events: none; }\n\n.bd-content > h2[id] > a, .bd-content > h2[id] > div, .bd-content > h3[id] > a, .bd-content > h3[id] > div, .bd-content > h4[id] > a, .bd-content > h4[id] > div {\n  pointer-events: auto; }\n\n.bd-content > h2[id]:before, .bd-content > h3[id]:before, .bd-content > h4[id]:before {\n  display: block;\n  height: 6rem;\n  margin-top: -6rem;\n  visibility: hidden;\n  content: \"\"; }\n\n.bd-content > table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  .bd-content > table {\n    display: block;\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar; } }\n\n.bd-content > table > tbody > tr > td, .bd-content > table > tbody > tr > th, .bd-content > table > tfoot > tr > td, .bd-content > table > tfoot > tr > th, .bd-content > table > thead > tr > td, .bd-content > table > thead > tr > th {\n  padding: .75rem;\n  vertical-align: top;\n  border: 1px solid rgba(0, 0, 0, 0.06); }\n\n.bd-content > table > tbody > tr > td > p:last-child, .bd-content > table > tbody > tr > th > p:last-child, .bd-content > table > tfoot > tr > td > p:last-child, .bd-content > table > tfoot > tr > th > p:last-child, .bd-content > table > thead > tr > td > p:last-child, .bd-content > table > thead > tr > th > p:last-child {\n  margin-bottom: 0; }\n\n.bd-content > table td:first-child > code {\n  white-space: nowrap; }\n\n.bd-content > h2:not(:first-child) {\n  margin-top: 3rem; }\n\n.bd-content > h3 {\n  margin-top: 1.5rem; }\n\n.bd-content > ol li, .bd-content > ul li {\n  margin-bottom: .25rem; }\n\n@media (min-width: 992px) {\n  .bd-content > ol, .bd-content > p, .bd-content > ul {\n    max-width: 80%; } }\n\n.bd-title {\n  margin-top: 1rem;\n  margin-bottom: .5rem;\n  font-weight: 300; }\n\n@media (min-width: 576px) {\n  .bd-title {\n    font-size: 3rem; } }\n\n.bd-lead {\n  font-size: 1.125rem;\n  font-weight: 300;\n  line-height: 2rem; }\n\n@media (min-width: 576px) {\n  .bd-lead {\n    max-width: 80%;\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n    line-height: 2.2rem; } }\n\n.bd-text-purple {\n  color: #3f51b5; }\n\n.bd-text-purple-bright {\n  color: #6e7dd3; }\n\n.bd-pageheader {\n  padding: 2rem 15px;\n  margin-bottom: 1.5rem;\n  color: #cdbfe3;\n  text-align: center;\n  background-color: #3f51b5; }\n\n.bd-pageheader .container {\n  position: relative; }\n\n.bd-pageheader h1 {\n  font-size: 3rem;\n  font-weight: 400;\n  color: #fff; }\n\n.bd-pageheader p {\n  margin-bottom: 0;\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n@media (min-width: 576px) {\n  .bd-pageheader {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n    margin-bottom: 3rem;\n    text-align: left; }\n  .bd-pageheader .carbonad {\n    margin: 2rem 0 0 !important; } }\n\n@media (min-width: 768px) {\n  .bd-pageheader h1 {\n    font-size: 4rem; }\n  .bd-pageheader p {\n    font-size: 1.5rem; } }\n\n@media (min-width: 992px) {\n  .bd-pageheader h1, .bd-pageheader p {\n    margin-right: 380px; }\n  .bd-pageheader .carbonad {\n    position: absolute;\n    top: 0;\n    right: .75rem;\n    margin: 0 !important; } }\n\n#skippy {\n  display: block;\n  padding: 1em;\n  color: #fff;\n  background-color: #3f51b5;\n  outline: 0; }\n\n#skippy .skiplink-text {\n  padding: .5em;\n  outline: 1px dotted; }\n\n.bd-toc {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  font-size: .875rem; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .bd-toc {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 4rem;\n    max-height: calc(100vh - 4rem);\n    overflow-y: auto; } }\n\n.section-nav {\n  padding-left: 0;\n  border-left: 1px solid #eee; }\n\n.section-nav ul {\n  padding-left: 1rem; }\n\n.section-nav ul ul {\n  display: none; }\n\n.toc-entry, .toc-entry a {\n  display: block; }\n\n.toc-entry a {\n  padding: .125rem 1.5rem;\n  color: #99979c; }\n\n.toc-entry a:hover {\n  color: #2196f3;\n  text-decoration: none; }\n\n.bd-sidebar {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n@media (min-width: 768px) {\n  .bd-sidebar {\n    border-right: 1px solid rgba(0, 0, 0, 0.1); }\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .bd-sidebar {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 4rem;\n      z-index: 3;\n      max-height: calc(100vh - 4rem); } } }\n\n@media (min-width: 1200px) {\n  .bd-sidebar {\n    max-width: 320px; } }\n\n.bd-links {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n@media (min-width: 768px) {\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .bd-links {\n      max-height: calc(100vh - 4rem);\n      overflow-y: auto; } } }\n\n.bd-links {\n  display: block !important; }\n\n.bd-search {\n  position: relative;\n  padding: 1rem 15px;\n  margin-right: -15px;\n  margin-left: -15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n\n.bd-search-docs-toggle {\n  line-height: 1;\n  color: #212529; }\n\n.bd-sidenav {\n  display: none; }\n\n.bd-toc-link {\n  display: block;\n  padding: .25rem 1.5rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.65); }\n\n.bd-toc-link:hover {\n  color: rgba(0, 0, 0, 0.85);\n  text-decoration: none; }\n\n.bd-toc-item.active {\n  margin-bottom: 1rem; }\n\n.bd-toc-item.active:not(:first-child) {\n  margin-top: 1rem; }\n\n.bd-toc-item.active > .bd-toc-link {\n  color: rgba(0, 0, 0, 0.85); }\n\n.bd-toc-item.active > .bd-toc-link:hover {\n  background-color: transparent; }\n\n.bd-toc-item.active > .bd-sidenav {\n  display: block; }\n\n.bd-sidebar .nav > li > a {\n  display: block;\n  padding: .25rem 1.5rem;\n  font-size: 90%;\n  color: rgba(0, 0, 0, 0.65); }\n\n.bd-sidebar .nav > li > a:hover {\n  color: rgba(0, 0, 0, 0.85);\n  text-decoration: none;\n  background-color: transparent; }\n\n.bd-sidebar .nav > .active:hover > a, .bd-sidebar .nav > .active > a {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  background-color: transparent; }\n\n.bd-footer {\n  font-size: 85%;\n  text-align: center;\n  background-color: #f7f7f7; }\n\n.bd-footer a {\n  font-weight: 500;\n  color: #495057; }\n\n.bd-footer a:focus, .bd-footer a:hover {\n  color: #9c27b0; }\n\n.bd-footer p {\n  margin-bottom: 0; }\n\n@media (min-width: 576px) {\n  .bd-footer {\n    text-align: left; } }\n\n.bd-footer-links {\n  padding-left: 0;\n  margin-bottom: 1rem; }\n\n.bd-footer-links li {\n  display: inline-block; }\n\n.bd-footer-links li + li {\n  margin-left: 1rem; }\n\n.bd-example-row .row + .row {\n  margin-top: 1rem; }\n\n.bd-example-row .row > .col, .bd-example-row .row > [class^=col-] {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  background-color: rgba(86, 61, 124, 0.15);\n  border: 1px solid rgba(86, 61, 124, 0.2); }\n\n.bd-example-row .flex-items-bottom, .bd-example-row .flex-items-middle, .bd-example-row .flex-items-top {\n  min-height: 6rem;\n  background-color: rgba(255, 0, 0, 0.1); }\n\n.bd-example-row-flex-cols .row {\n  min-height: 10rem;\n  background-color: rgba(255, 0, 0, 0.1); }\n\n.bd-highlight {\n  background-color: rgba(63, 81, 181, 0.15);\n  border: 1px solid rgba(63, 81, 181, 0.15); }\n\n.example-container {\n  width: 800px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%; }\n\n.example-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.example-content-main {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n@media (min-width: 576px) {\n  .example-content-main {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; } }\n\n@media (min-width: 992px) {\n  .example-content-main {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; } }\n\n.example-content-secondary {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n@media (min-width: 576px) {\n  .example-content-secondary {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; } }\n\n@media (min-width: 992px) {\n  .example-content-secondary {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; } }\n\n.bd-example-container {\n  min-width: 16rem;\n  max-width: 25rem;\n  margin-right: auto;\n  margin-left: auto; }\n\n.bd-example-container-header {\n  height: 3rem;\n  margin-bottom: .5rem;\n  background-color: #fff;\n  border-radius: .25rem; }\n\n.bd-example-container-sidebar {\n  float: right;\n  width: 4rem;\n  height: 8rem;\n  background-color: #9acffa;\n  border-radius: .25rem; }\n\n.bd-example-container-body {\n  height: 8rem;\n  margin-right: 4.5rem;\n  background-color: #98a2db;\n  border-radius: .25rem; }\n\n.bd-example-container-fluid {\n  max-width: none; }\n\n.bd-example {\n  position: relative;\n  padding: 1rem;\n  margin: 1rem -15px;\n  border: solid #f7f7f9;\n  border-width: .2rem 0 0; }\n\n.bd-example:after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n@media (min-width: 576px) {\n  .bd-example {\n    padding: 1.5rem;\n    margin-right: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    border-width: .2rem; } }\n\n.bd-example + .clipboard + .highlight, .bd-example + .highlight {\n  margin-top: 0; }\n\n.bd-example + p {\n  margin-top: 2rem; }\n\n.bd-example .pos-f-t {\n  position: relative;\n  margin: -1rem; }\n\n@media (min-width: 576px) {\n  .bd-example .pos-f-t {\n    margin: -1.5rem; } }\n\n.bd-example > .form-control + .form-control {\n  margin-top: .5rem; }\n\n.bd-example > .alert + .alert, .bd-example > .nav + .nav, .bd-example > .navbar + .navbar, .bd-example > .progress + .btn, .bd-example > .progress + .progress {\n  margin-top: 1rem; }\n\n.bd-example > .dropdown-menu:first-child {\n  position: static;\n  display: block; }\n\n.bd-example > .form-group:last-child {\n  margin-bottom: 0; }\n\n.bd-example > .close {\n  float: none; }\n\n.bd-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle; }\n\n.bd-example-type .table td {\n  padding: 1rem 0;\n  border-color: #eee; }\n\n.bd-example-type .table tr:first-child td {\n  border-top: 0; }\n\n.bd-example-type h1, .bd-example-type h2, .bd-example-type h3, .bd-example-type h4, .bd-example-type h5, .bd-example-type h6 {\n  margin: 0; }\n\n.bd-example-bg-classes p {\n  padding: 1rem; }\n\n.bd-example > img + img {\n  margin-left: .5rem; }\n\n.bd-example > .btn-group {\n  margin-top: .25rem;\n  margin-bottom: .25rem; }\n\n.bd-example-control-sizing input[type=text] + input[type=text], .bd-example-control-sizing select, .bd-example > .btn-toolbar + .btn-toolbar {\n  margin-top: .5rem; }\n\n.bd-example-form .input-group {\n  margin-bottom: .5rem; }\n\n.bd-example > textarea.form-control {\n  resize: vertical; }\n\n.bd-example > .list-group {\n  max-width: 400px; }\n\n.bd-example .fixed-top, .bd-example .sticky-top {\n  position: static;\n  margin: -1rem -1rem 1rem; }\n\n.bd-example .fixed-bottom {\n  position: static;\n  margin: 1rem -1rem -1rem; }\n\n@media (min-width: 576px) {\n  .bd-example .fixed-top, .bd-example .sticky-top {\n    margin: -1.5rem -1.5rem 1rem; }\n  .bd-example .fixed-bottom {\n    margin: 1rem -1.5rem -1.5rem; } }\n\n.bd-example .pagination {\n  margin-top: .5rem;\n  margin-bottom: .5rem; }\n\n.bd-example-modal {\n  background-color: #fafafa; }\n\n.bd-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block; }\n\n.bd-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto; }\n\n.modal.show {\n  z-index: 5; }\n\n.modal.show .popover, .modal.show .tooltip {\n  z-index: 6; }\n\n.modal-backdrop {\n  z-index: 4; }\n\n.bd-example-tabs .nav-tabs {\n  margin-bottom: 1rem; }\n\n.bd-example-tooltips {\n  text-align: center; }\n\n.bd-example-tooltips > .btn {\n  margin-top: .25rem;\n  margin-bottom: .25rem; }\n\n.bs-tooltip-bottom-docs .arrow, .bs-tooltip-top-docs .arrow {\n  left: 50%; }\n\n.bs-tooltip-left-docs .arrow, .bs-tooltip-right-docs .arrow {\n  top: 50%; }\n\n.bd-example-popover-static {\n  padding-bottom: 1.5rem;\n  background-color: #f9f9f9; }\n\n.bd-example-popover-static .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 1.25rem; }\n\n.bs-popover-bottom-docs .arrow, .bs-popover-top-docs .arrow {\n  left: 50%; }\n\n.bs-popover-left-docs .arrow, .bs-popover-right-docs .arrow {\n  top: 50%; }\n\n.tooltip-demo a {\n  white-space: nowrap; }\n\n.bd-example-tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 10px 20px;\n  opacity: 1; }\n\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: .5rem;\n  overflow: auto; }\n\n.scrollspy-example-2 {\n  position: relative;\n  height: 350px;\n  overflow: auto; }\n\n.bd-example-border-utils [class^=border] {\n  display: inline-block;\n  width: 5rem;\n  height: 5rem;\n  margin: .25rem;\n  background-color: #f5f5f5;\n  border: 1px solid; }\n\n.highlight {\n  padding: 1rem;\n  margin: 1rem -15px;\n  background-color: #f7f7f9;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n\n@media (min-width: 576px) {\n  .highlight {\n    padding: 1.5rem;\n    margin-right: 0;\n    margin-left: 0; } }\n\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: transparent;\n  border: 0; }\n\n.highlight pre code {\n  font-size: inherit;\n  color: #212529; }\n\n.table-responsive .highlight pre {\n  white-space: normal; }\n\n.bd-table th small {\n  display: block;\n  font-weight: 400;\n  color: #999; }\n\n.btn-bd-purple {\n  font-weight: 500;\n  color: #6e7dd3;\n  border-color: #6e7dd3; }\n\n.btn-bd-purple:active, .btn-bd-purple:hover {\n  color: #fff;\n  background-color: #6e7dd3;\n  border-color: #6e7dd3; }\n\n.btn-bd-yellow {\n  font-weight: 500;\n  color: #ffe484;\n  border-color: #ffe484; }\n\n.btn-bd-yellow:active, .btn-bd-yellow:hover {\n  color: #2a2730;\n  background-color: #ffe484;\n  border-color: #ffe484; }\n\n.bd-callout {\n  padding: 1.25rem;\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  border: 1px solid #eee;\n  border-left-width: .25rem;\n  border-radius: .25rem; }\n\n.bd-callout h4 {\n  margin-top: 0;\n  margin-bottom: .25rem; }\n\n.bd-callout p:last-child {\n  margin-bottom: 0; }\n\n.bd-callout code {\n  border-radius: .25rem; }\n\n.bd-callout + .bd-callout {\n  margin-top: -.25rem; }\n\n.bd-callout-info {\n  border-left-color: #5bc0de; }\n\n.bd-callout-info h4 {\n  color: #5bc0de; }\n\n.bd-callout-warning {\n  border-left-color: #f0ad4e; }\n\n.bd-callout-warning h4 {\n  color: #f0ad4e; }\n\n.bd-callout-danger {\n  border-left-color: #d9534f; }\n\n.bd-callout-danger h4 {\n  color: #d9534f; }\n\n.bd-examples .img-thumbnail {\n  margin-bottom: .75rem; }\n\n.bd-examples h4 {\n  margin-bottom: .25rem; }\n\n.bd-examples p {\n  margin-bottom: 1.25rem; }\n\n@media (max-width: 480px) {\n  .bd-examples {\n    margin-right: -.75rem;\n    margin-left: -.75rem; }\n  .bd-examples > [class^=col-] {\n    padding-right: .75rem;\n    padding-left: .75rem; } }\n\n.bd-team {\n  margin-bottom: 1.5rem; }\n\n.bd-team .team-member {\n  line-height: 2rem;\n  color: #555; }\n\n.bd-team .team-member:focus, .bd-team .team-member:hover {\n  color: #333; }\n\n.bd-team .team-member:hover {\n  text-decoration: none; }\n\n.bd-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 1.25rem;\n  margin-top: .25rem;\n  border: 0; }\n\n.bd-team img {\n  float: left;\n  width: 2rem;\n  margin-right: .5rem;\n  border-radius: .25rem; }\n\n.bd-browser-bugs td p {\n  margin-bottom: 0; }\n\n.bd-browser-bugs th:first-child {\n  width: 18%; }\n\n.bd-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  color: #3f51b5;\n  background-color: #f9f9f9;\n  border-radius: .25rem; }\n\n.bd-brand-item {\n  padding: 4rem 0;\n  text-align: center; }\n\n.bd-brand-item + .bd-brand-item {\n  border-top: 1px solid #fff; }\n\n.bd-brand-logos .inverse {\n  color: #fff;\n  background-color: #3f51b5; }\n\n.bd-brand-item h1, .bd-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.bd-brand-item .bd-booticon {\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 768px) {\n  .bd-brand-item {\n    display: table-cell;\n    width: 1%; }\n  .bd-brand-item + .bd-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff; }\n  .bd-brand-item h1 {\n    font-size: 4rem; } }\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; }\n\n.color-swatch {\n  float: left;\n  width: 4rem;\n  height: 4rem;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  border-radius: .25rem; }\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 6rem;\n    height: 6rem; } }\n\n.color-swatches .bd-purple {\n  background-color: #3f51b5; }\n\n.color-swatches .bd-purple-light {\n  background-color: #cdbfe3; }\n\n.color-swatches .bd-purple-lighter {\n  background-color: #e5e1ea; }\n\n.color-swatches .bd-gray {\n  background-color: #f9f9f9; }\n\n.swatch-blue {\n  background-color: #2196f3;\n  color: #fff; }\n\n.swatch-indigo {\n  background-color: #3f51b5;\n  color: #fff; }\n\n.swatch-purple {\n  background-color: #9c27b0;\n  color: #fff; }\n\n.swatch-pink {\n  background-color: #e91e63;\n  color: #fff; }\n\n.swatch-red {\n  background-color: #f44336;\n  color: #fff; }\n\n.swatch-orange {\n  background-color: #ff9800;\n  color: #111; }\n\n.swatch-yellow {\n  background-color: #ffeb3b;\n  color: #111; }\n\n.swatch-green {\n  background-color: #4caf50;\n  color: #fff; }\n\n.swatch-teal {\n  background-color: #009688;\n  color: #fff; }\n\n.swatch-cyan {\n  background-color: #00bcd4;\n  color: #fff; }\n\n.swatch-white {\n  background-color: #fff;\n  color: #111; }\n\n.swatch-gray {\n  background-color: #868e96;\n  color: #fff; }\n\n.swatch-gray-dark {\n  background-color: #343a40;\n  color: #fff; }\n\n.swatch-primary {\n  background-color: #2196f3;\n  color: #fff; }\n\n.swatch-secondary {\n  background-color: #868e96;\n  color: #fff; }\n\n.swatch-success {\n  background-color: #4caf50;\n  color: #fff; }\n\n.swatch-info {\n  background-color: #00bcd4;\n  color: #fff; }\n\n.swatch-warning {\n  background-color: #ffeb3b;\n  color: #111; }\n\n.swatch-danger {\n  background-color: #f44336;\n  color: #fff; }\n\n.swatch-light {\n  background-color: #f8f9fa;\n  color: #111; }\n\n.swatch-dark {\n  background-color: #343a40;\n  color: #fff; }\n\n.swatch-100 {\n  background-color: #f8f9fa;\n  color: #111; }\n\n.swatch-200 {\n  background-color: #e9ecef;\n  color: #111; }\n\n.swatch-300 {\n  background-color: #dee2e6;\n  color: #111; }\n\n.swatch-400 {\n  background-color: #ced4da;\n  color: #111; }\n\n.swatch-500 {\n  background-color: #adb5bd;\n  color: #111; }\n\n.swatch-600 {\n  background-color: #868e96;\n  color: #fff; }\n\n.swatch-700 {\n  background-color: #495057;\n  color: #fff; }\n\n.swatch-800 {\n  background-color: #343a40;\n  color: #fff; }\n\n.swatch-900 {\n  background-color: #212529;\n  color: #fff; }\n\n.bd-clipboard {\n  position: relative;\n  display: none;\n  float: right; }\n\n.bd-clipboard + .highlight {\n  margin-top: 0; }\n\n.btn-clipboard {\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  z-index: 2;\n  display: block;\n  padding: .25rem .5rem;\n  font-size: 75%;\n  color: #818a91;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  border-radius: .25rem; }\n\n.btn-clipboard:hover {\n  color: #fff;\n  background-color: #027de7; }\n\n@media (min-width: 768px) {\n  .bd-clipboard {\n    display: block; } }\n\n.hll {\n  background-color: #ffc; }\n\n.c {\n  color: #999; }\n\n.k {\n  color: #069; }\n\n.o {\n  color: #555; }\n\n.cm {\n  color: #999; }\n\n.cp {\n  color: #099; }\n\n.c1, .cs {\n  color: #999; }\n\n.gd {\n  background-color: #fcc;\n  border: 1px solid #c00; }\n\n.ge {\n  font-style: italic; }\n\n.gr {\n  color: red; }\n\n.gh {\n  color: #030; }\n\n.gi {\n  background-color: #cfc;\n  border: 1px solid #0c0; }\n\n.go {\n  color: #aaa; }\n\n.gp {\n  color: #009; }\n\n.gu {\n  color: #030; }\n\n.gt {\n  color: #9c6; }\n\n.kc, .kd, .kn, .kp, .kr {\n  color: #069; }\n\n.kt {\n  color: #078; }\n\n.m {\n  color: #f60; }\n\n.s {\n  color: #d44950; }\n\n.na {\n  color: #4f9fcf; }\n\n.nb {\n  color: #366; }\n\n.nc {\n  color: #0a8; }\n\n.no {\n  color: #360; }\n\n.nd {\n  color: #99f; }\n\n.ni {\n  color: #999; }\n\n.ne {\n  color: #c00; }\n\n.nf {\n  color: #c0f; }\n\n.nl {\n  color: #99f; }\n\n.nn {\n  color: #0cf; }\n\n.nt {\n  color: #2f6f9f; }\n\n.nv {\n  color: #033; }\n\n.ow {\n  color: #000; }\n\n.w {\n  color: #bbb; }\n\n.mf, .mh, .mi, .mo {\n  color: #f60; }\n\n.sb, .sc, .sd {\n  color: #c30; }\n\n.sd {\n  font-style: italic; }\n\n.s2, .se, .sh {\n  color: #c30; }\n\n.si {\n  color: #a00; }\n\n.sx {\n  color: #c30; }\n\n.sr {\n  color: #3aa; }\n\n.s1 {\n  color: #c30; }\n\n.ss {\n  color: #fc3; }\n\n.bp {\n  color: #366; }\n\n.vc, .vg, .vi {\n  color: #033; }\n\n.il {\n  color: #f60; }\n\n.css .nt + .nt, .css .o, .css .o + .nt {\n  color: #999; }\n\n.language-bash:before {\n  color: #009;\n  content: \"$ \";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.language-powershell:before {\n  color: #009;\n  content: \"PM> \";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.anchorjs-link {\n  font-weight: 400;\n  color: rgba(156, 39, 176, 0.5);\n  -webkit-transition: color .16s linear;\n  transition: color .16s linear; }\n\n.anchorjs-link:hover {\n  color: #9c27b0;\n  text-decoration: none; }\n\n.algolia-autocomplete {\n  display: block !important;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.algolia-autocomplete .ds-dropdown-menu {\n  width: 100%;\n  min-width: 0 !important;\n  max-width: none !important;\n  padding: 0.75rem 0 !important;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175); }\n\n@media (min-width: 768px) {\n  .algolia-autocomplete .ds-dropdown-menu {\n    width: 175%; } }\n\n.algolia-autocomplete .ds-dropdown-menu:before {\n  display: none !important; }\n\n.algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-] {\n  padding: 0 !important;\n  overflow: visible !important;\n  background-color: transparent !important;\n  border: 0 !important; }\n\n.algolia-autocomplete .ds-dropdown-menu .ds-suggestions {\n  margin-top: 0 !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion {\n  padding: 0 !important;\n  overflow: visible !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--category-header {\n  padding: 0.125rem 1rem !important;\n  margin-top: 0 !important;\n  font-size: 0.875rem !important;\n  font-weight: 500 !important;\n  color: #6e7dd3 !important;\n  border-bottom: 0 !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--wrapper {\n  float: none !important;\n  padding-top: 0 !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {\n  float: none !important;\n  width: auto !important;\n  padding: 0 !important;\n  text-align: left !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--content {\n  float: none !important;\n  width: auto !important;\n  padding: 0 !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--content:before {\n  display: none !important; }\n\n.algolia-autocomplete .ds-suggestion:not(:first-child) .algolia-docsearch-suggestion--category-header {\n  padding-top: 0.75rem !important;\n  margin-top: 0.75rem !important;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.algolia-autocomplete .ds-suggestion .algolia-docsearch-suggestion--subcategory-column {\n  display: none !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--title {\n  display: block;\n  padding: 0.25rem 1rem !important;\n  margin-bottom: 0 !important;\n  font-size: 0.875rem !important;\n  font-weight: 400 !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--text {\n  padding: 0 1rem 0.5rem !important;\n  margin-top: -.25rem;\n  font-size: 0.875rem !important;\n  font-weight: 400;\n  line-height: 1.25 !important; }\n\n.algolia-autocomplete .algolia-docsearch-footer {\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  padding: .75rem 1rem 0;\n  font-size: 0.75rem !important;\n  line-height: 1 !important;\n  color: #767676 !important;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.algolia-autocomplete .algolia-docsearch-footer--logo {\n  display: inline !important;\n  overflow: visible !important;\n  color: inherit !important;\n  text-indent: 0 !important;\n  background: none !important; }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--highlight {\n  color: #5f2dab;\n  background-color: rgba(154, 132, 187, 0.12); }\n\n.algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight {\n  -webkit-box-shadow: inset 0 -2px 0 0 rgba(95, 45, 171, 0.5) !important;\n          box-shadow: inset 0 -2px 0 0 rgba(95, 45, 171, 0.5) !important; }\n\n.algolia-autocomplete .ds-suggestion.ds-cursor .algolia-docsearch-suggestion--content {\n  background-color: rgba(208, 189, 236, 0.15) !important; }\n"

/***/ }),

/***/ "./src/app/layouts/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.date = new Date();
    }
    DocumentationComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('docs-body');
    };
    DocumentationComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('docs-body');
    };
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layouts/documentation/documentation.component.html"),
            styles: [__webpack_require__("./src/app/layouts/documentation/documentation.component.scss")]
        })
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map