webpackJsonp(["documentation.module"],{

/***/ "./node_modules/jw-bootstrap-switch-ng2/dist/directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
var callback = function () {
};
var ɵ0 = callback;
exports.ɵ0 = ɵ0;
var CUSTOM_INPUT = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return JWBootstrapSwitchDirective; }),
    multi: true
};
var JWBootstrapSwitchDirective = /** @class */ (function () {
    function JWBootstrapSwitchDirective(ngZone) {
        this.ngZone = ngZone;
        // Defining Default Options for Switch
        this.handleWidth = 0;
        this.labelWidth = 0;
        this.labelText = "";
        this.inverse = false;
        this.baseClass = "bootstrap-switch";
        this.onText = "ON";
        this.offText = "OFF";
        this.disabled = false;
        this.readonly = false;
        this._focused = false;
        this._size = 'normal';
        this._animate = true;
        this._innerAnimate = true;
        this._indeterminate = false;
        this._onColor = "primary";
        this._offColor = "default";
        this._wrapperClass = "wrapper";
        this._innerState = false;
        this._innerHandleWidth = "auto";
        this._innerLabelWidth = "auto";
        this._dragStart = null;
        this._dragEnd = null;
        this._onTouchedCallback = callback;
        this._onChangeCallback = callback;
        this.onChangeState = new core_1.EventEmitter();
    }
    JWBootstrapSwitchDirective.prototype.$on = function () {
        return this.on.nativeElement;
    };
    JWBootstrapSwitchDirective.prototype.$off = function () {
        return this.off.nativeElement;
    };
    JWBootstrapSwitchDirective.prototype.$label = function () {
        return this.label.nativeElement;
    };
    JWBootstrapSwitchDirective.prototype.$container = function () {
        return this.container.nativeElement;
    };
    /**
     * @description:  Function to set the Classes for the Wrapper Div
     * @returns {string}
     */
    /**
         * @description:  Function to set the Classes for the Wrapper Div
         * @returns {string}
         */
    JWBootstrapSwitchDirective.prototype.getWrapperClasses = /**
         * @description:  Function to set the Classes for the Wrapper Div
         * @returns {string}
         */
    function () {
        var output = this.baseClass + " " + this.baseClass + "-" + this._wrapperClass;
        if (this._focused) {
            output += " " + this.baseClass + "-focused";
        }
        if (this.readonly) {
            output += " " + this.baseClass + "-readonly";
        }
        if (this._size != null) {
            output += " " + this.baseClass + "-" + this._size;
        }
        if (this._innerState) {
            output += " " + this.baseClass + "-on";
        }
        else {
            output += " " + this.baseClass + "-off";
        }
        if (this._animate) {
            output += " " + this.baseClass + "-animate";
        }
        if (this.disabled) {
            output += " " + this.baseClass + "-disabled";
        }
        if (this._indeterminate || this._innerState === null || typeof this._innerState === "undefined") {
            output += " " + this.baseClass + "-indeterminate";
        }
        if (this.inverse) {
            output += " " + this.baseClass + "-inverse";
        }
        return output;
    };
    /**
     * @description Function to set the css classes for #on
     * @returns {string}
     */
    /**
         * @description Function to set the css classes for #on
         * @returns {string}
         */
    JWBootstrapSwitchDirective.prototype.getOnClasses = /**
         * @description Function to set the css classes for #on
         * @returns {string}
         */
    function () {
        var output = this.baseClass + "-handle-on";
        if (this._onColor) {
            output += " " + this.baseClass + "-" + this._onColor;
        }
        return output;
    };
    /**
     * @description Function to set the css classes for #off
     * @returns {string}
     */
    /**
         * @description Function to set the css classes for #off
         * @returns {string}
         */
    JWBootstrapSwitchDirective.prototype.getOffClasses = /**
         * @description Function to set the css classes for #off
         * @returns {string}
         */
    function () {
        var output = this.baseClass + "-handle-off";
        if (this._offColor) {
            output += " " + this.baseClass + "-" + this._offColor;
        }
        return output;
    };
    /**
     * @description  Function set the marging of the #label when change the state
     * @returns {string}
     */
    /**
         * @description  Function set the marging of the #label when change the state
         * @returns {string}
         */
    JWBootstrapSwitchDirective.prototype.getLabelMarginLeft = /**
         * @description  Function set the marging of the #label when change the state
         * @returns {string}
         */
    function () {
        var width = (this.inverse) ? -this.handleWidth : 0;
        if (this._indeterminate || this._innerState === null || typeof this._innerState === "undefined") {
            width = -(this.handleWidth / 2);
        }
        else if (this._dragEnd) {
            width = this._dragEnd;
        }
        else if (!this._innerState) {
            if (!this.inverse) {
                width = -this.handleWidth;
            }
            else {
                width = 0;
            }
        }
        return width + "px";
    };
    JWBootstrapSwitchDirective.prototype.ngOnChanges = function (changes) {
        if (changes['setLabelText'] ||
            changes['setOnText'] ||
            changes['setHandleWidth'] ||
            changes['setLabelWidth'] ||
            changes['setOffText'] ||
            changes['setSize']) {
            this.calculateWith(true);
        }
    };
    JWBootstrapSwitchDirective.prototype.ngAfterViewInit = function () {
        this.calculateWith();
    };
    JWBootstrapSwitchDirective.prototype.onClick = function () {
        if (!this.disabled && !this.readonly && !this._dragEnd) {
            this.setStateValue(!this._innerState);
        }
        else if (this._dragEnd) {
            this._dragEnd = null;
        }
    };
    JWBootstrapSwitchDirective.prototype.onKeyDown = function (e) {
        if (!e.which || this.disabled || this.readonly) {
            return;
        }
        switch (e.which) {
            case 37:
                e.preventDefault();
                e.stopImmediatePropagation();
                this.setStateValue(false);
                break;
            case 39:
                e.preventDefault();
                e.stopImmediatePropagation();
                this.setStateValue(true);
                break;
        }
    };
    JWBootstrapSwitchDirective.prototype.onDragStart = function (e) {
        if (e.target === this.$label()) {
            if (this._dragStart || this.disabled || this.readonly) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this._dragStart = (e.pageX || e.touches[0].pageX) - parseInt(this.$container().style.marginLeft, 10);
            if (this._animate) {
                this._animate = !this._animate;
            }
        }
    };
    JWBootstrapSwitchDirective.prototype.onDragMove = function (e) {
        if (this._dragStart) {
            e.preventDefault();
            var difference = (e.pageX || e.touches[0].pageX) - this._dragStart;
            if (difference < -Number(this.handleWidth) || difference > 0) {
                return;
            }
            this._dragEnd = difference;
        }
    };
    JWBootstrapSwitchDirective.prototype.onDragEnd = function (e, removeDragEnd) {
        if (removeDragEnd === void 0) { removeDragEnd = false; }
        if (this._dragStart) {
            e.preventDefault();
            e.stopPropagation();
            if (this._dragEnd) {
                var state = this._dragEnd > -(Number(this.handleWidth) / 2);
                this.setStateValue((this.inverse) ? !state : state);
            }
            this._dragStart = null;
            if (removeDragEnd) {
                this._dragEnd = null;
            }
            if (this._innerAnimate) {
                this._animate = true;
            }
        }
    };
    JWBootstrapSwitchDirective.prototype.onTouchStart = function (e) {
        this.onDragStart(e);
    };
    JWBootstrapSwitchDirective.prototype.onMouseDown = function (e) {
        this.onDragStart(e);
    };
    JWBootstrapSwitchDirective.prototype.onTouchMove = function (e) {
        this.onDragMove(e);
    };
    JWBootstrapSwitchDirective.prototype.onMouseMove = function (e) {
        this.onDragMove(e);
    };
    JWBootstrapSwitchDirective.prototype.onMouseUp = function (e) {
        this.onDragEnd(e);
    };
    JWBootstrapSwitchDirective.prototype.onTouchEnd = function (e) {
        this.onDragEnd(e, true);
    };
    JWBootstrapSwitchDirective.prototype.onMouseLeave = function (e) {
        this.onDragEnd(e, true);
    };
    JWBootstrapSwitchDirective.prototype.onFocus = function () {
        this._focused = true;
    };
    JWBootstrapSwitchDirective.prototype.onBlur = function () {
        this._focused = false;
        this._onTouchedCallback();
    };
    /**
     * @description Function to make recalculate the size of the elements when options change
     * @param disableAnimation
     */
    /**
         * @description Function to make recalculate the size of the elements when options change
         * @param disableAnimation
         */
    JWBootstrapSwitchDirective.prototype.calculateWith = /**
         * @description Function to make recalculate the size of the elements when options change
         * @param disableAnimation
         */
    function (disableAnimation) {
        var _this = this;
        if (disableAnimation === void 0) { disableAnimation = false; }
        var self = this;
        if (disableAnimation && this._innerAnimate) {
            this._animate = false;
        }
        setTimeout(function () {
            self.$on().style.width = "auto";
            self.$off().style.width = "auto";
            self.$label().style.width = "auto";
            var width = (self._innerHandleWidth === "auto")
                ? Math.max(self.$on().offsetWidth, self.$off().offsetWidth)
                : self._innerHandleWidth;
            if (self.$label().offsetWidth < width) {
                if (self._innerLabelWidth === "auto") {
                    self.labelWidth = Number(width);
                }
                else {
                    self.labelWidth = Number(self._innerLabelWidth);
                }
            }
            else {
                if (self._innerLabelWidth === "auto") {
                    self.labelWidth = self.$label().offsetWidth;
                }
                else {
                    self.labelWidth = Number(self._innerLabelWidth);
                }
            }
            self.handleWidth = Number(width);
            self.ngZone.run(function () {
                self.$label().style.width = self.labelWidth + "px";
                self.$on().style.width = self.handleWidth + "px";
                self.$off().style.width = self.handleWidth + "px";
                setTimeout(function () {
                    if (disableAnimation && _this._innerAnimate) {
                        _this._animate = true;
                    }
                });
            });
        });
    };
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setBaseClass", {
        set: 
        //Functions to set inputs and the private variables of the Switch
        function (value) {
            this.baseClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setWrapperClass", {
        set: function (value) {
            this._wrapperClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setOffText", {
        set: function (value) {
            this.offText = (value) ? value : "OFF";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setLabelText", {
        set: function (value) {
            this.labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setOnText", {
        set: function (value) {
            this.onText = (value) ? value : "ON";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setSize", {
        set: function (value) {
            if (value)
                this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setAnimate", {
        set: function (value) {
            this._animate = value;
            this._innerAnimate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setOnColor", {
        set: function (value) {
            if (value)
                this._onColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setOffColor", {
        set: function (value) {
            if (value)
                this._offColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setDisabled", {
        set: function (value) {
            this.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setReadOnly", {
        set: function (value) {
            this.readonly = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setIndeterminate", {
        set: function (value) {
            this._indeterminate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setInverse", {
        set: function (value) {
            this.inverse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setHandleWidth", {
        set: function (value) {
            this._innerHandleWidth = (typeof (value) !== "undefined") ? value : "auto";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "setLabelWidth", {
        set: function (value) {
            this._innerLabelWidth = (typeof (value) !== "undefined") ? value : "auto";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JWBootstrapSwitchDirective.prototype, "value", {
        get: function () {
            return this._innerState;
        },
        set: function (v) {
            if (v === null || typeof v === "undefined")
                this._indeterminate = true;
            this.setStateValue(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    JWBootstrapSwitchDirective.prototype.setStateValue = function (v) {
        if (v !== this._innerState) {
            this._onChangeCallback(v);
            this.onChangeState.emit({
                previousValue: this._innerState,
                currentValue: v
            });
            this._innerState = v;
        }
    };
    JWBootstrapSwitchDirective.prototype.writeValue = function (value) {
        if (value !== this._innerState) {
            this._innerState = value;
        }
    };
    JWBootstrapSwitchDirective.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    JWBootstrapSwitchDirective.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    JWBootstrapSwitchDirective.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'bSwitch',
                    providers: [CUSTOM_INPUT],
                    template: "\n        <div class=\"{{ getWrapperClasses() }}\" [style.width]=\" (handleWidth  + labelWidth ) +'px'\">\n            <div #container class=\"{{ baseClass }}-container\"\n                 [style.width]=\" ((handleWidth * 2) + labelWidth) +'px'\"\n                 [style.margin-left]=\"getLabelMarginLeft()\"><!--\n                --><span #on [innerHTML]=\"(inverse) ? offText : onText\" class=\"{{ (inverse) ? getOffClasses() : getOnClasses() }}\"></span><!--\n                --><span #label class=\"{{ baseClass }}-label\">&nbsp;{{ labelText }}</span><!--\n                --><span #off [innerHTML]=\"(inverse) ? onText : offText\" class=\"{{ (inverse) ? getOnClasses() : getOffClasses() }}\"></span><!--\n                --><input type=\"checkbox\" [(ngModel)]=\"value\" [readonly]=\"readonly\" [disabled]=\"disabled\"\n                       (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    JWBootstrapSwitchDirective.ctorParameters = function () { return [
        { type: core_1.NgZone, },
    ]; };
    JWBootstrapSwitchDirective.propDecorators = {
        "onChangeState": [{ type: core_1.Output },],
        "container": [{ type: core_1.ViewChild, args: ["container",] },],
        "on": [{ type: core_1.ViewChild, args: ["on",] },],
        "label": [{ type: core_1.ViewChild, args: ["label",] },],
        "off": [{ type: core_1.ViewChild, args: ["off",] },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
        "onTouchStart": [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] },],
        "onMouseDown": [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        "onTouchMove": [{ type: core_1.HostListener, args: ['touchmove', ['$event'],] },],
        "onMouseMove": [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
        "onMouseUp": [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] },],
        "onTouchEnd": [{ type: core_1.HostListener, args: ['touchend', ['$event'],] },],
        "onMouseLeave": [{ type: core_1.HostListener, args: ['mouseleave', ['$event'],] },],
        "setBaseClass": [{ type: core_1.Input, args: ['switch-base-class',] },],
        "setWrapperClass": [{ type: core_1.Input, args: ['switch-wrapper-class',] },],
        "setOffText": [{ type: core_1.Input, args: ['switch-off-text',] },],
        "setLabelText": [{ type: core_1.Input, args: ['switch-label-text',] },],
        "setOnText": [{ type: core_1.Input, args: ['switch-on-text',] },],
        "setSize": [{ type: core_1.Input, args: ['switch-size',] },],
        "setAnimate": [{ type: core_1.Input, args: ['switch-animate',] },],
        "setOnColor": [{ type: core_1.Input, args: ['switch-on-color',] },],
        "setOffColor": [{ type: core_1.Input, args: ['switch-off-color',] },],
        "setDisabled": [{ type: core_1.Input, args: ['switch-disabled',] },],
        "setReadOnly": [{ type: core_1.Input, args: ['switch-readonly',] },],
        "setIndeterminate": [{ type: core_1.Input, args: ['switch-indeterminate',] },],
        "setInverse": [{ type: core_1.Input, args: ['switch-inverse',] },],
        "setHandleWidth": [{ type: core_1.Input, args: ['switch-handle-width',] },],
        "setLabelWidth": [{ type: core_1.Input, args: ['switch-label-width',] },],
    };
    return JWBootstrapSwitchDirective;
}());
exports.JWBootstrapSwitchDirective = JWBootstrapSwitchDirective;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var directive_1 = __webpack_require__("./node_modules/jw-bootstrap-switch-ng2/dist/directive.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
var JWBootstrapSwitchModule = /** @class */ (function () {
    function JWBootstrapSwitchModule() {
    }
    JWBootstrapSwitchModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        forms_1.FormsModule
                    ],
                    declarations: [directive_1.JWBootstrapSwitchDirective],
                    exports: [
                        directive_1.JWBootstrapSwitchDirective,
                        forms_1.FormsModule
                    ]
                },] },
    ];
    /** @nocollapse */
    JWBootstrapSwitchModule.ctorParameters = function () { return []; };
    return JWBootstrapSwitchModule;
}());
exports.JWBootstrapSwitchModule = JWBootstrapSwitchModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/documentation/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <h2> Breadcrumb</h2>\n        <legend></legend>\n        <p class=\"space-top\">\n        Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.</p>\n        <nav aria-label=\"breadcrumb\" role=\"navigation\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n          </ol>\n        </nav>\n\n        <nav aria-label=\"breadcrumb\" role=\"navigation\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n          </ol>\n        </nav>\n\n        <nav aria-label=\"breadcrumb\" role=\"navigation\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n          </ol>\n        </nav>\n\n<pre class=\"prettyprint\">\n&#x3C;nav aria-label=&#x22;breadcrumb&#x22; role=&#x22;navigation&#x22;&#x3E;\n  &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Home&#x3C;/li&#x3E;\n  &#x3C;/ol&#x3E;\n&#x3C;/nav&#x3E;\n\n&#x3C;nav aria-label=&#x22;breadcrumb&#x22; role=&#x22;navigation&#x22;&#x3E;\n  &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;\n  &#x3C;/ol&#x3E;\n&#x3C;/nav&#x3E;\n\n&#x3C;nav aria-label=&#x22;breadcrumb&#x22; role=&#x22;navigation&#x22;&#x3E;\n  &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;\n    &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;\n  &#x3C;/ol&#x3E;\n&#x3C;/nav&#x3E;</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("./src/app/documentation/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("./src/app/documentation/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Buttons </h2>\n    <legend></legend>\n    <h4>Colors</h4>\n        <p class=\"space-top\">We worked over the original Bootstrap classes, choosing a different color pallete. We opted for this beautiful scheme of pale colors:</p>\n        <br/>\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-neutral\">Neutral</button>\n        <br />\n        <div class=\"\">\n            <div id=\"buttonColor\" class=\"\">\n                <pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot;&gt;Default&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-neutral&quot;&gt;Neutral&lt;/button&gt;</pre>\n            </div>\n        </div>\n        <h4>Sizes</h4>\n        <p class=\"space-top\">Buttons come in all needed sizes:</p>\n        <button class=\"btn btn-primary btn-lg\">Large</button>\n        <button class=\"btn btn-primary\">Normal</button>\n        <button class=\"btn btn-primary btn-sm\">Small</button>\n        <div class=\"\">\n\n<div id=\"buttonSize\" >\n<pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg&quot;&gt;Small&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Regular&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot;&gt;Large&lt;/button&gt;</pre>\n</div>\n        </div>\n    <h4>Styles</h4>\n        <p class=\"space-top\">\n            We added extra classes that can help you better customise the look. You can use regular buttons, filled buttons or plain link buttons. Let's see some examples:\n        </p><br/>\n        <button class=\"btn btn-primary\">Default</button>\n        <button class=\"btn btn-primary btn-round\">Round</button>\n        <button class=\"btn btn-primary btn-round\">\n            <i class=\"now-ui-icons ui-2_favourite-286\"></i> With Icon\n        </button>\n        <button class=\"btn btn-primary btn-icon  btn-icon-mini btn-round\">\n            <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n        </button>\n        <button class=\"btn btn-primary btn-simple\">Simple</button>\n        <div class=\"\">\n\n            <div id=\"buttonStyle\" >\n                <pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Default&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-round&quot;&gt;Round&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-round&quot;&gt;&lt;i class=&quot;fa fa-heart&quot;&gt;&lt;/i&gt; With Icon&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-just-icon&quot;&gt;&lt;i class=&quot;fa fa-heart&quot;&gt;&lt;/i&gt;&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-link&quot;&gt;Simple&lt;/button&gt;</pre>\n            </div>\n        </div>\n        <p class=\"space-top\">\n            Button groups, toolbars, and disabled state all work like they are supposed to.\n        </p>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("./src/app/documentation/buttons/buttons.component.html"),
            styles: [__webpack_require__("./src/app/documentation/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <h1> Cards</h1>\n        <legend></legend>\n        <p class=\"space-top\">\n      Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.</p>\n      <h2>Example</h2>\n      <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.</p>\n      <div class=\"card\" style=\"width: 20rem;\">\n        <img class=\"card-img-top\" data-src=\"holder.js/100px180/\" alt=\"100%x180\" style=\"height: 180px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16362eac3a8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16362eac3a8%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.2%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n\n<pre class=\"prettyprint\">\n  &#x3C;div class=&#x22;card&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n    &#x3C;img class=&#x22;card-img-top&#x22; src=&#x22;...&#x22; alt=&#x22;Card image cap&#x22;&#x3E;\n    &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n      &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h4&#x3E;\n      &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;\n      &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n    &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n</pre>\n\n  <h2>Content types</h2>\n  <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.\n  </p>\n  <h3>Body</h3>\n  <p>The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.</p>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      This is some text within a card body.\n    </div>\n  </div>\n<pre class=\"prettyprint\">\n  &#x3C;div class=&#x22;card&#x22;&#x3E;\n    &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n      This is some text within a card body.\n    &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n</pre>\n  <h3>Titles, text, and links</h3>\n  <p>Card titles are used by adding <code>.card-title</code> to a <code>h*</code> tag. In the same way, links are added and placed next to each other by adding <code>.card-link</code> to an <code>a</code> tag.</p>\n  <p>Subtitles are used by adding a <code>.card-subtitle</code> to a <code>h*</code> tag. If the <code>.card-title</code> and the <code>.card-subtitle</code> items are placed in a <code>.card-body</code> item, the card title and subtitle are aligned nicely.</p>\n  <div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Card title</h4>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>\n  <pre class=\"prettyprint\">\n&#x3C;div class=&#x22;card&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n  &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n    &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h4&#x3E;\n    &#x3C;h6 class=&#x22;card-subtitle mb-2 text-muted&#x22;&#x3E;Card subtitle&#x3C;/h6&#x3E;\n    &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;\n    &#x3C;a href=&#x22;#&#x22; class=&#x22;card-link&#x22;&#x3E;Card link&#x3C;/a&#x3E;\n    &#x3C;a href=&#x22;#&#x22; class=&#x22;card-link&#x22;&#x3E;Another link&#x3C;/a&#x3E;\n  &#x3C;/div&#x3E;\n&#x3C;/div&#x3E;\n  </pre>\n\n  <h3>Images</h3>\n  <p><code>.card-img-top</code> places an image to the top of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.\n  </p>\n  <div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top\" data-src=\"holder.js/100px180/?text=Image cap\" alt=\"Image cap [100%x180]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16362eac3ab%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16362eac3ab%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.203125%22%20y%3D%2297.2%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"height: 180px; width: 100%; display: block;\">    <div class=\"card-body\">\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    </div>\n  </div>\n\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;card&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n        &#x3C;img class=&#x22;card-img-top&#x22; src=&#x22;...&#x22; alt=&#x22;Card image cap&#x22;&#x3E;\n        &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n          &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;\n        &#x3C;/div&#x3E;\n\n      &#x3C;/div&#x3E;\n  </pre>\n\n  <h3>List groups</h3>\n  <p>Create lists of content in a card with a flush list group.</p>\n  <div class=\"card\" style=\"width: 20rem;\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Cras justo odio</li>\n      <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n      <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n  </div>\n  <pre class=\"prettyprint\">\n  &#x3C;div class=&#x22;card&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n    &#x3C;ul class=&#x22;list-group list-group-flush&#x22;&#x3E;\n      &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;\n      &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;\n      &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;\n    &#x3C;/ul&#x3E;\n  &#x3C;/div&#x3E;\n  </pre>\n  <div class=\"card card-nav-tabs\" style=\"width: 20rem;\">\n    <div class=\"card-header card-header-danger\">\n      Featured\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Cras justo odio</li>\n      <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n      <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n  </div>\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;card card-nav-tabs&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n      &#x3C;div class=&#x22;card-header card-header-danger&#x22;&#x3E;\n        Featured\n      &#x3C;/div&#x3E;\n      &#x3C;ul class=&#x22;list-group list-group-flush&#x22;&#x3E;\n        &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;\n        &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;\n        &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;\n      &#x3C;/ul&#x3E;\n    &#x3C;/div&#x3E;\n  </pre>\n\n  <h3>Header and footer</h3>\n  <p>Add an optional header and/or footer within a card.</p>\n  <div class=\"card card-nav-tabs\">\n    <div class=\"card-header card-header-warning\">\n      Featured\n    </div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;card card-nav-tabs&#x22;&#x3E;\n      &#x3C;div class=&#x22;card-header card-header-warning&#x22;&#x3E;\n        Featured\n      &#x3C;/div&#x3E;\n      &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n        &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Special title treatment&#x3C;/h4&#x3E;\n        &#x3C;p class=&#x22;card-text&#x22;&#x3E;With supporting text below as a natural lead-in to additional content.&#x3C;/p&#x3E;\n        &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n    &#x3C;/div&#x3E;\n  </pre>\n\n  <p>Card headers can be styled by adding <code>.card-header</code> to <code>h*</code> elements.</p>\n\n  <div class=\"card card-nav-tabs\">\n    <h4 class=\"card-header card-header-info\">Featured</h4>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;card card-nav-tabs&#x22;&#x3E;\n      &#x3C;h4 class=&#x22;card-header card-header-info&#x22;&#x3E;Featured&#x3C;/h4&#x3E;\n      &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n        &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Special title treatment&#x3C;/h4&#x3E;\n        &#x3C;p class=&#x22;card-text&#x22;&#x3E;With supporting text below as a natural lead-in to additional content.&#x3C;/p&#x3E;\n        &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n    &#x3C;/div&#x3E;\n  </pre>\n\n  <h2>Text alignment</h2>\n  <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our text align classes.</p>\n\n  <div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n\n  <div class=\"card text-center\" style=\"width: 20rem;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n\n  <div class=\"card text-right\" style=\"width: 20rem;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;card&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n      &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n        &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Special title treatment&#x3C;/h4&#x3E;\n        &#x3C;p class=&#x22;card-text&#x22;&#x3E;With supporting text below as a natural lead-in to additional content.&#x3C;/p&#x3E;\n        &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n    &#x3C;/div&#x3E;\n\n    &#x3C;div class=&#x22;card text-center&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n      &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n        &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Special title treatment&#x3C;/h4&#x3E;\n        &#x3C;p class=&#x22;card-text&#x22;&#x3E;With supporting text below as a natural lead-in to additional content.&#x3C;/p&#x3E;\n        &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n    &#x3C;/div&#x3E;\n\n    &#x3C;div class=&#x22;card text-right&#x22; style=&#x22;width: 20rem;&#x22;&#x3E;\n      &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n        &#x3C;h4 class=&#x22;card-title&#x22;&#x3E;Special title treatment&#x3C;/h4&#x3E;\n        &#x3C;p class=&#x22;card-text&#x22;&#x3E;With supporting text below as a natural lead-in to additional content.&#x3C;/p&#x3E;\n        &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n    &#x3C;/div&#x3E;\n  </pre>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/cards/cards.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__("./src/app/documentation/cards/cards.component.html"),
            styles: [__webpack_require__("./src/app/documentation/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/changing-colors/changing-colors.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n   <h2>Changing Colors (SASS)</h2>\n   <legend></legend>\n   <p>You can change the default colors via variables from SASS:</p>\n  <ol>\n    <li>Download the project’s zip</li>\n    <li>Make sure you have <a href=\"https://nodejs.org/en/\">node.js</a> installed</li>\n    <li>Type <code class=\"highlighter-rouge\">npm install</code> in terminal/console in the source folder where <code class=\"highlighter-rouge\">package.json</code> is located</li>\n    <li>You can find the colors in <code class=\"highlighter-rouge\">assets/scss/now-ui-dashboard/_variables.scss</code> starting with line 51 where is the primary color set: <code class=\"highlighter-rouge\">$primary-color: #f96332 !default</code>.</li>\n  </ol>\n\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/changing-colors/changing-colors.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/changing-colors/changing-colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangingColorsComponent; });
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

var ChangingColorsComponent = /** @class */ (function () {
    function ChangingColorsComponent() {
    }
    ChangingColorsComponent.prototype.ngOnInit = function () {
    };
    ChangingColorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changing-colors',
            template: __webpack_require__("./src/app/documentation/changing-colors/changing-colors.component.html"),
            styles: [__webpack_require__("./src/app/documentation/changing-colors/changing-colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangingColorsComponent);
    return ChangingColorsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/chartjs/chartjs.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2> Chart.js v2.7.0 </h2>\n\t<legend></legend>\n\t<p class=\"space-top\">Simple yet flexible JavaScript charting for designers & developers. Made by our friends from <a href=\"http://www.chartjs.org/\">Charts.js</a>. Please check the <a href=\"http://www.chartjs.org/docs/latest/\">full documentation</a>.</p>\n  <!-- markup -->\n  <div class=\"chart-area\">\n    <canvas baseChart id=\"lineChartExample\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [colors]=\"lineChartColors\"\n                [options]=\"lineChartOptions\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n<pre class=\"prettyprint\">\n  HTML:\n  &#x3C;div class=&#x22;chart-area&#x22;&#x3E;\n    &#x3C;canvas baseChart id=&#x22;lineChartExample&#x22;\n                [datasets]=&#x22;lineChartData&#x22;\n                [labels]=&#x22;lineChartLabels&#x22;\n                [colors]=&#x22;lineChartColors&#x22;\n                [options]=&#x22;lineChartOptions&#x22;\n                [chartType]=&#x22;lineChartType&#x22;\n                (chartHover)=&#x22;chartHovered($event)&#x22;\n                (chartClick)=&#x22;chartClicked($event)&#x22;&#x3E;&#x3C;/canvas&#x3E;\n  &#x3C;/div&#x3E;\n\n  TYPESCRIPT:\n\nimport {{'{'}} Component, OnInit {{'}'}} from &#x27;@angular/core&#x27;;\nimport * as Chartist from &#x27;chartist&#x27;;\n\nexport class ChartjsComponent implements OnInit {{'{'}}\n  public gradientStroke;\n  public chartColor;\n  public canvas : any;\n  public ctx;\n  public gradientFill;\n  public lineChartType;\n  public lineChartData:Array&#x3C;any&#x3E;;\n  public lineChartOptions:any;\n  public lineChartLabels:Array&#x3C;any&#x3E;;\n  public lineChartColors:Array&#x3C;any&#x3E;\n  public gradientChartOptionsConfiguration: any;\n\n\n  public chartClicked(e:any):void {{'{'}}\n    console.log(e);\n{{'}'}}\n\n  public chartHovered(e:any):void {{'{'}}\n    console.log(e);\n{{'}'}}\n  public hexToRGB(hex, alpha) {{'{'}}\n    var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n    if (alpha) {{'{'}}\n      return &#x22;rgba(&#x22; + r + &#x22;, &#x22; + g + &#x22;, &#x22; + b + &#x22;, &#x22; + alpha + &#x22;)&#x22;;\n    {{'}'}} else {{'{'}}\n      return &#x22;rgb(&#x22; + r + &#x22;, &#x22; + g + &#x22;, &#x22; + b + &#x22;)&#x22;;\n    {{'}'}}\n  {{'}'}}\n  ngOnInit() {{'{'}}\n    this.gradientChartOptionsConfiguration = {{'{'}}\n        maintainAspectRatio: false,\n        legend: {{'{'}}\n            display: false\n        {{'}'}},\n        tooltips: {{'{'}}\n          bodySpacing: 4,\n          mode:&#x22;nearest&#x22;,\n          intersect: 0,\n          position:&#x22;nearest&#x22;,\n          xPadding:10,\n          yPadding:10,\n          caretPadding:10\n        {{'}'}},\n        responsive: 1,\n        scales: {{'{'}}\n            yAxes: [{{'{'}}\n              display:0,\n              ticks: {{'{'}}\n                  display: false\n            {{'}'}},\n              gridLines: {{'{'}}\n                  zeroLineColor: &#x22;transparent&#x22;,\n                  drawTicks: false,\n                  display: false,\n                  drawBorder: false\n              {{'}'}}\n            {{'}'}}],\n            xAxes: [{{'{'}}\n              display:0,\n              ticks: {{'{'}}\n                  display: false\n            {{'}'}},\n              gridLines: {{'{'}}\n                zeroLineColor: &#x22;transparent&#x22;,\n                drawTicks: false,\n                display: false,\n                drawBorder: false\n              {{'}'}}\n            {{'}'}}]\n        {{'}'}},\n        layout:{{'{'}}\n          padding:{{'{'}}left:0,right:0,top:15,bottom:15{{'}'}}\n        {{'}'}}\n    {{'}'}};\n    this.chartColor = &#x22;#FFFFFF&#x22;;\n\n    this.canvas = document.getElementById(&#x22;lineChartExample&#x22;);\n    this.ctx = this.canvas.getContext(&#x22;2d&#x22;);\n\n    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);\n    this.gradientStroke.addColorStop(0, &#x27;#80b6f4&#x27;);\n    this.gradientStroke.addColorStop(1, this.chartColor);\n\n    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);\n    this.gradientFill.addColorStop(0, &#x22;rgba(128, 182, 244, 0)&#x22;);\n    this.gradientFill.addColorStop(1, &#x22;rgba(249, 99, 59, 0.40)&#x22;);\n\n    this.lineChartData = [\n      {{'{'}}\n          label: &#x22;Active Users&#x22;,\n          pointBorderWidth: 2,\n          pointHoverRadius: 4,\n          pointHoverBorderWidth: 1,\n          pointRadius: 4,\n          fill: true,\n          borderWidth: 2,\n          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]\n        {{'}'}}\n      ];\n      this.lineChartColors = [\n       {{'{'}}\n         borderColor: &#x22;#f96332&#x22;,\n         pointBorderColor: &#x22;#FFF&#x22;,\n         pointBackgroundColor: &#x22;#f96332&#x22;,\n         backgroundColor: this.gradientFill\n       {{'}'}}\n     ];\n    this.lineChartLabels = [&#x22;Jan&#x22;, &#x22;Feb&#x22;, &#x22;Mar&#x22;, &#x22;Apr&#x22;, &#x22;May&#x22;, &#x22;Jun&#x22;, &#x22;Jul&#x22;, &#x22;Aug&#x22;, &#x22;Sep&#x22;, &#x22;Oct&#x22;, &#x22;Nov&#x22;, &#x22;Dec&#x22;];\n    this.lineChartOptions = this.gradientChartOptionsConfiguration;\n\n    this.lineChartType = &#x27;line&#x27;;\n  {{'}'}}\n\n{{'}'}}\n\n</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/chartjs/chartjs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/chartjs/chartjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsComponent; });
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

var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
    }
    ChartjsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartjsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartjsComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
        else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
    ChartjsComponent.prototype.ngOnInit = function () {
        this.gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: { left: 0, right: 0, top: 15, bottom: 15 }
            }
        };
        this.chartColor = "#FFFFFF";
        this.canvas = document.getElementById("lineChartExample");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.lineChartData = [
            {
                label: "Active Users",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
            }
        ];
        this.lineChartColors = [
            {
                borderColor: "#f96332",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#f96332",
                backgroundColor: this.gradientFill
            }
        ];
        this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.lineChartOptions = this.gradientChartOptionsConfiguration;
        this.lineChartType = 'line';
    };
    ChartjsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chartjs',
            template: __webpack_require__("./src/app/documentation/chartjs/chartjs.component.html"),
            styles: [__webpack_require__("./src/app/documentation/chartjs/chartjs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n       <h2> Checkboxes </h2>\n       <br/>\n       <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\">\n                <span class=\"form-check-sign\"></span>\n                Unchecked\n            </label>\n        </div>\n\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" checked=\"\">\n                <span class=\"form-check-sign\"></span>\n                Checked\n            </label>\n        </div>\n\n\n        <div class=\"form-check disabled\">\n            <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                <span class=\"form-check-sign\"></span>\n                Disabled Unchecked\n            </label>\n        </div>\n\n        <div class=\"form-check disabled\">\n            <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                <span class=\"form-check-sign\"></span>\n                Disabled Checked\n            </label>\n        </div>\n\n        <div id=\"checkboxDataAttribute\">\n            <pre class=\"prettyprint\">\n&lt;div class=&quot;form-check&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;\n        Unchecked\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=&quot;form-check&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; checked&gt;\n        Checked\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=&quot;form-check disabled&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; disabled&gt;\n        Disabled unchecked\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=&quot;form-check disabled&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; disabled checked&gt;\n        Disabled checked\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;</pre>\n    </div>\n</div>\n<!-- end row -->\n\n\n<!-- radio row -->\n<div>\n    <h2> Radio Buttons </h2>\n    <br/>\n    <div class=\"form-check form-check-radio\">\n        <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n            <span class=\"form-check-sign\"></span>\n            Radio is off\n        </label>\n    </div>\n\n    <div class=\"form-check form-check-radio\">\n        <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked=\"\">\n            <span class=\"form-check-sign\"></span>\n            Radio is on\n        </label>\n    </div>\n\n    <div class=\"form-check form-check-radio disabled\">\n        <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled=\"\">\n            <span class=\"form-check-sign\"></span>\n            Disabled radio is off\n        </label>\n    </div>\n\n    <div class=\"form-check form-check-radio disabled\">\n       <label class=\"form-check-label\">\n           <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled=\"\" checked=\"\">\n           <span class=\"form-check-sign\"></span>\n           Disabled radio is on\n       </label>\n    </div>\n    <div>\n        <pre class=\"prettyprint\">\n&lt;div class=&quot;form-check form-check-radio&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios1&quot; value=&quot;option1&quot; &gt;\n        Radio is off\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=&quot;form-check form-check-radio&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios2&quot; value=&quot;option2&quot; checked&gt;\n        Radio is on\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;form-check form-check-radio disabled&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios3&quot; value=&quot;option3&quot; disabled&gt;\n        Disabled radio is off\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;form-check form-check-radio disabled&quot;&gt;\n    &lt;label class=&quot;form-check-label&quot;&gt;\n        &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadioz&quot; id=&quot;exampleRadios4&quot; value=&quot;option4&quot; checked disabled&gt;\n        Disabled radio is on\n        &lt;span class=&quot;form-check-sign&quot;&gt;&lt;/span&gt;\n    &lt;/label&gt;\n&lt;/div&gt;</pre>\n    </div>\n\n</div>\n<div>\n    <h2> Switches</h2>\n    <legend></legend>\n    <p class=\"space-top\">\n    If you want to use something more special than a checkbox, we recommend the switch. You can use it with both text and with icons. For extra customisation we added colour classes.\n    <br />\n    For the original documentation, please go here: <a href=\"https://github.com/JulioWar/jw-bootstrap-switch-ng2\">JulioWar Bootstrap Switch</a>.\n    </p>\n    <div class=\"space-top\">\n        <bSwitch\n            [switch-on-color]=\"'default'\"\n            [switch-off-color]=\"'default'\"\n            [(ngModel)]=\"state_default\">\n        </bSwitch>\n        <bSwitch\n            [switch-on-color]=\"'default'\"\n            [switch-off-color]=\"'default'\">\n        </bSwitch>\n    </div>\n    <div>\n        <pre class=\"prettyprint\">\nThis is the code for HTML:\n\n&#x3C;div class=&#x22;space-top&#x22;&#x3E;\n    &#x3C;bSwitch\n        [switch-on-color]=&#x22;&#x27;default&#x27;&#x22;\n        [switch-off-color]=&#x22;&#x27;default&#x27;&#x22;\n        [(ngModel)]=&#x22;state_default&#x22;&#x3E;\n    &#x3C;/bSwitch&#x3E;\n    &#x3C;bSwitch\n        [switch-on-color]=&#x22;&#x27;default&#x27;&#x22;\n        [switch-off-color]=&#x22;&#x27;default&#x27;&#x22;&#x3E;\n    &#x3C;/bSwitch&#x3E;\n&#x3C;/div&#x3E;\n\nAnd in your component declare:\n\nstate_default = true;\n</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxRadioSwitchComponent; });
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

var CheckboxRadioSwitchComponent = /** @class */ (function () {
    function CheckboxRadioSwitchComponent() {
        this.state_default = true;
    }
    CheckboxRadioSwitchComponent.prototype.ngOnInit = function () { };
    CheckboxRadioSwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkbox-radio-switch',
            template: __webpack_require__("./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.html"),
            styles: [__webpack_require__("./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxRadioSwitchComponent);
    return CheckboxRadioSwitchComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_routing__ = __webpack_require__("./src/app/documentation/documentation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__ = __webpack_require__("./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial_component__ = __webpack_require__("./src/app/documentation/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buttons_buttons_component__ = __webpack_require__("./src/app/documentation/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_radio_switch_checkbox_radio_switch_component__ = __webpack_require__("./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inputs_inputs_component__ = __webpack_require__("./src/app/documentation/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__textarea_textarea_component__ = __webpack_require__("./src/app/documentation/textarea/textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dropdowns_dropdowns_component__ = __webpack_require__("./src/app/documentation/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__ = __webpack_require__("./src/app/documentation/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__ = __webpack_require__("./src/app/documentation/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__changing_colors_changing_colors_component__ = __webpack_require__("./src/app/documentation/changing-colors/changing-colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tables_tables_component__ = __webpack_require__("./src/app/documentation/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__breadcrumb_breadcrumb_component__ = __webpack_require__("./src/app/documentation/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ps_ps_component__ = __webpack_require__("./src/app/documentation/ps/ps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cards_cards_component__ = __webpack_require__("./src/app/documentation/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chartjs_chartjs_component__ = __webpack_require__("./src/app/documentation/chartjs/chartjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__documentation_routing__["a" /* DocumentationRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_20_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial_component__["a" /* TutorialComponent */],
                __WEBPACK_IMPORTED_MODULE_8__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__checkbox_radio_switch_checkbox_radio_switch_component__["a" /* CheckboxRadioSwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__inputs_inputs_component__["a" /* InputsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__textarea_textarea_component__["a" /* TextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dropdowns_dropdowns_component__["a" /* DropdownsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ps_ps_component__["a" /* PsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__tables_tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__changing_colors_changing_colors_component__["a" /* ChangingColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_19__cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__chartjs_chartjs_component__["a" /* ChartjsComponent */],
            ]
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tutorial_tutorial_component__ = __webpack_require__("./src/app/documentation/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons_buttons_component__ = __webpack_require__("./src/app/documentation/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_radio_switch_checkbox_radio_switch_component__ = __webpack_require__("./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputs_inputs_component__ = __webpack_require__("./src/app/documentation/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea_textarea_component__ = __webpack_require__("./src/app/documentation/textarea/textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdowns_dropdowns_component__ = __webpack_require__("./src/app/documentation/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("./src/app/documentation/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications_component__ = __webpack_require__("./src/app/documentation/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__changing_colors_changing_colors_component__ = __webpack_require__("./src/app/documentation/changing-colors/changing-colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tables_tables_component__ = __webpack_require__("./src/app/documentation/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__breadcrumb_breadcrumb_component__ = __webpack_require__("./src/app/documentation/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ps_ps_component__ = __webpack_require__("./src/app/documentation/ps/ps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cards_cards_component__ = __webpack_require__("./src/app/documentation/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chartjs_chartjs_component__ = __webpack_require__("./src/app/documentation/chartjs/chartjs.component.ts");














var DocumentationRoutes = [
    {
        path: 'breadcrumb',
        component: __WEBPACK_IMPORTED_MODULE_10__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */]
    }, {
        path: 'charts',
        component: __WEBPACK_IMPORTED_MODULE_13__chartjs_chartjs_component__["a" /* ChartjsComponent */]
    }, {
        path: 'cards',
        component: __WEBPACK_IMPORTED_MODULE_12__cards_cards_component__["a" /* CardsComponent */]
    }, {
        path: 'tutorial',
        component: __WEBPACK_IMPORTED_MODULE_0__tutorial_tutorial_component__["a" /* TutorialComponent */]
    }, {
        path: 'buttons',
        component: __WEBPACK_IMPORTED_MODULE_1__buttons_buttons_component__["a" /* ButtonsComponent */]
    }, {
        path: 'tables',
        component: __WEBPACK_IMPORTED_MODULE_9__tables_tables_component__["a" /* TablesComponent */]
    }, {
        path: 'crs',
        component: __WEBPACK_IMPORTED_MODULE_2__checkbox_radio_switch_checkbox_radio_switch_component__["a" /* CheckboxRadioSwitchComponent */]
    }, {
        path: 'inputs',
        component: __WEBPACK_IMPORTED_MODULE_3__inputs_inputs_component__["a" /* InputsComponent */]
    }, {
        path: 'textarea',
        component: __WEBPACK_IMPORTED_MODULE_4__textarea_textarea_component__["a" /* TextareaComponent */]
    }, {
        path: 'dropdown',
        component: __WEBPACK_IMPORTED_MODULE_5__dropdowns_dropdowns_component__["a" /* DropdownsComponent */]
    }, {
        path: 'navigation',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */]
    }, {
        path: 'perfectscrollbar',
        component: __WEBPACK_IMPORTED_MODULE_11__ps_ps_component__["a" /* PsComponent */]
    }, {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_7__notifications_notifications_component__["a" /* NotificationsComponent */]
    }, {
        path: 'changing-colors',
        component: __WEBPACK_IMPORTED_MODULE_8__changing_colors_changing_colors_component__["a" /* ChangingColorsComponent */]
    }
];


/***/ }),

/***/ "./src/app/documentation/dropdowns/dropdowns.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2> NgDropdown </h2>\n\t<legend></legend>\n\t<p class=\"space-top\">We are very proud to present the dropdown which has a subtle animation. We also thought of another use-case: dropdown with flags.<br><b> For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/dropdown/examples\" target=\"_blank\">link</a></b>.<br> Here is the examples and the code:</p>\n\t\t<div class=\"container\">\n      <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\n          <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>Regular</button>\n          <div ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n           <a class=\"dropdown-item\" href=\"#\">Another action</a>\n           <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n           <div class=\"dropdown-divider\"></div>\n           <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n           <div class=\"dropdown-divider\"></div>\n           <a class=\"dropdown-item\" href=\"#\">One more separated link</a>\n          </div>\n      </div>\n\t\t</div>\n\n\t<div class=\"\">\n\t\t<div>\n<pre class=\"prettyprint\">\n  &#x3C;div ngbDropdown class=&#x22;dropdown&#x22; placement=&#x22;bottom-right&#x22;&#x3E;\n      &#x3C;button class=&#x22;btn btn-default dropdown-toggle&#x22; ngbDropdownToggle&#x3E;Regular&#x3C;/button&#x3E;\n      &#x3C;div ngbDropdownMenu&#x3E;\n        &#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;\n       &#x3C;div class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;\n       &#x3C;div class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;One more separated link&#x3C;/a&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;</pre>\n</div>\n\t </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/dropdowns/dropdowns.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/dropdowns/dropdowns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent(config) {
        this.state_icon_primary = true;
        // customize default values of dropdowns used by this component tree
        config.placement = 'top-left';
        config.autoClose = true;
    }
    DropdownsComponent.prototype.ngOnInit = function () {
    };
    DropdownsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdowns',
            template: __webpack_require__("./src/app/documentation/dropdowns/dropdowns.component.html"),
            styles: [__webpack_require__("./src/app/documentation/dropdowns/dropdowns.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownConfig */]])
    ], DropdownsComponent);
    return DropdownsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Inputs </h2>\n\n    <p>\n      We restyled the Bootstrap input to give it a more flat, minimal look. You can use them with regular labels, states or input groups.\n    </p>\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-lg-4\">\n            <div class=\"form-group\">\n                <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-4\">\n            <div class=\"form-group has-success\">\n                <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-4\">\n            <div class=\"form-group has-danger\">\n                <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-4\">\n            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n              <div class=\"input-group-prepend\" >\n                  <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-4\">\n            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n              <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"now-ui-icons users_single-02\"></i></span>\n              </div>\n            </div>\n        </div>\n    </div>\n\t<div class=\"\">\n\t\t<div>\n\t\t\t<pre class=\"prettyprint\">\n&#x3C;div class=&#x22;row&#x22;&#x3E;\n  &#x3C;div class=&#x22;col-sm-6 col-lg-4&#x22;&#x3E;\n      &#x3C;div class=&#x22;form-group&#x22;&#x3E;\n          &#x3C;input type=&#x22;text&#x22; value=&#x22;&#x22; placeholder=&#x22;Regular&#x22; class=&#x22;form-control&#x22; /&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;col-sm-6 col-lg-4&#x22;&#x3E;\n      &#x3C;div class=&#x22;form-group has-success&#x22;&#x3E;\n          &#x3C;input type=&#x22;text&#x22; value=&#x22;Success&#x22; class=&#x22;form-control form-control-success&#x22; /&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;col-sm-6 col-lg-4&#x22;&#x3E;\n      &#x3C;div class=&#x22;form-group has-danger&#x22;&#x3E;\n          &#x3C;input type=&#x22;email&#x22; value=&#x22;Error Input&#x22; class=&#x22;form-control form-control-danger&#x22; /&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;col-sm-6 col-lg-4&#x22;&#x3E;\n      &#x3C;div class=&#x22;input-group&#x22; [ngClass]=&#x22;{{'{'}}&#x27;input-group-focus&#x27;:focus===true{{'}'}}&#x22;&#x3E;\n        &#x3C;div class=&#x22;input-group-prepend&#x22; &#x3E;\n            &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-user-circle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;\n        &#x3C;/div&#x3E;\n        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Left Font Awesome Icon&#x22; (focus)=&#x22;focus=true&#x22; (blur)=&#x22;focus=false&#x22; &#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;col-sm-6 col-lg-4&#x22;&#x3E;\n      &#x3C;div class=&#x22;input-group&#x22; [ngClass]=&#x22;{{'{'}}&#x27;input-group-focus&#x27;:focus1===true{{'}'}}&#x22;&#x3E;\n        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Right Nucleo Icon&#x22; (focus)=&#x22;focus1=true&#x22; (blur)=&#x22;focus1=false&#x22;&#x3E;\n        &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;\n            &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;&#x3C;i class=&#x22;now-ui-icons users_single-02&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;\n        &#x3C;/div&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n&#x3C;/div&#x3E;</pre>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
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

var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
    }
    InputsComponent.prototype.ngOnInit = function () {
    };
    InputsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__("./src/app/documentation/inputs/inputs.component.html"),
            styles: [__webpack_require__("./src/app/documentation/inputs/inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t\t<h2>Navbar </h2>\n\t\t<legend></legend>\n\t\t<p class=\"space-top\">\n\t\t\tWe restyled the classic Bootstrap Navbar:\n\t\t</p>\n\n    <nav class=\"navbar navbar-expand-lg bg-white\">\n      <div class=\"container\">\n          <div class=\"navbar-translate\">\n              <a class=\"navbar-brand\" href=\"#pablo\">\n                 Navbar\n              </a>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                     <span class=\"navbar-toggler-bar bar1\"></span>\n                  <span class=\"navbar-toggler-bar bar2\"></span>\n                  <span class=\"navbar-toggler-bar bar3\"></span>\n               </button>\n\n          </div>\n\n          <div class=\"collapse navbar-collapse\" id=\"navigation\">\n              <ul class=\"navbar-nav\">\n                  <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"#pablo\">\n                          Home\n                      </a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#pablo\">Link</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n\n\t\t<div class=\"\">\n\n<div id=\"navbarCode\">\n<pre class=\"prettyprint\">\n  nav class=&#x22;navbar navbar-expand-lg bg-white&#x22;&#x3E;\n        &#x3C;div class=&#x22;container&#x22;&#x3E;\n            &#x3C;div class=&#x22;navbar-translate&#x22;&#x3E;\n                &#x3C;a class=&#x22;navbar-brand&#x22; href=&#x22;#pablo&#x22;&#x3E;\n                   Navbar\n                &#x3C;/a&#x3E;\n                &#x3C;button class=&#x22;navbar-toggler&#x22; type=&#x22;button&#x22; data-toggle=&#x22;collapse&#x22; data-target=&#x22;#navigation&#x22; aria-controls=&#x22;navigation-index&#x22; aria-expanded=&#x22;false&#x22; aria-label=&#x22;Toggle navigation&#x22;&#x3E;\n                       &#x3C;span class=&#x22;navbar-toggler-bar bar1&#x22;&#x3E;&#x3C;/span&#x3E;\n                    &#x3C;span class=&#x22;navbar-toggler-bar bar2&#x22;&#x3E;&#x3C;/span&#x3E;\n                    &#x3C;span class=&#x22;navbar-toggler-bar bar3&#x22;&#x3E;&#x3C;/span&#x3E;\n                 &#x3C;/button&#x3E;\n\n            &#x3C;/div&#x3E;\n\n            &#x3C;div class=&#x22;collapse navbar-collapse&#x22; id=&#x22;navigation&#x22;&#x3E;\n                &#x3C;ul class=&#x22;navbar-nav&#x22;&#x3E;\n                    &#x3C;li class=&#x22;nav-item active&#x22;&#x3E;\n                        &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#pablo&#x22;&#x3E;\n                            Home\n                        &#x3C;/a&#x3E;\n                    &#x3C;/li&#x3E;\n                    &#x3C;li class=&#x22;nav-item&#x22;&#x3E;\n                        &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#pablo&#x22;&#x3E;Link&#x3C;/a&#x3E;\n                    &#x3C;/li&#x3E;\n                    &#x3C;li class=&#x22;nav-item&#x22;&#x3E;\n                        &#x3C;a class=&#x22;nav-link disabled&#x22; href=&#x22;#pablo&#x22;&#x3E;Disabled&#x3C;/a&#x3E;\n                    &#x3C;/li&#x3E;\n                &#x3C;/ul&#x3E;\n            &#x3C;/div&#x3E;\n        &#x3C;/div&#x3E;\n    &#x3C;/nav&#x3E;</pre>\n</div>\n\t\t</div>\n\n\t\t<p>Besides the white navbar, we added 6 new colors: grey, blue, green, yellow, red, black. If you want to use one of them, you have to replace the .bg-white with the class for the chosen color <code>.bg-info</code>, <code>.bg-success</code>, <code>.bg-warning</code>, <code>.bg-danger</code>, <code>.bg-default</code>,  <code>.bg-dark</code>.</p>\n\n<br/>\n<nav class=\"navbar navbar-expand-lg bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg bg-success\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg bg-danger\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg bg-warning\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n\n<nav class=\"navbar navbar-expand-lg bg-primary\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg bg-info\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#pablo\">\n              Navbar\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                      Home\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">Link</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#pablo\">Disabled</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/documentation/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/documentation/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2> Notifications </h2>\n  <legend></legend>\n  <p class=\"space-top\">\n    The new Now UI Dashboard Pro notifications are looking fresh and clean. They go great with the navbar.\n  </p>\n  <b> For full documentation, see this <a href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\">link</a></b>\n<br><br>\n  <h3>Notifications Style</h3>\n  <div class=\"alert alert-info\">\n    <span>This is a plain notification</span>\n  </div>\n  <div class=\"alert alert-info\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>This is a notification with close button.</span>\n  </div>\n  <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n    <span data-notify=\"message\">This is a notification with close button and icon.</span>\n  </div>\n  <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n    <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n  </div>\n\n\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;alert alert-info&#x22;&#x3E;\n      &#x3C;span&#x3E;This is a plain notification&#x3C;/span&#x3E;\n    &#x3C;/div&#x3E;\n    &#x3C;div class=&#x22;alert alert-info&#x22;&#x3E;\n      &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n        &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n      &#x3C;/button&#x3E;\n      &#x3C;span&#x3E;This is a notification with close button.&#x3C;/span&#x3E;\n    &#x3C;/div&#x3E;\n    &#x3C;div class=&#x22;alert alert-info alert-with-icon&#x22; data-notify=&#x22;container&#x22;&#x3E;\n      &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n        &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n      &#x3C;/button&#x3E;\n      &#x3C;span data-notify=&#x22;icon&#x22; class=&#x22;now-ui-icons ui-1_bell-53&#x22;&#x3E;&#x3C;/span&#x3E;\n      &#x3C;span data-notify=&#x22;message&#x22;&#x3E;This is a notification with close button and icon.&#x3C;/span&#x3E;\n    &#x3C;/div&#x3E;\n    &#x3C;div class=&#x22;alert alert-info alert-with-icon&#x22; data-notify=&#x22;container&#x22;&#x3E;\n      &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n        &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n      &#x3C;/button&#x3E;\n      &#x3C;span data-notify=&#x22;icon&#x22; class=&#x22;now-ui-icons ui-1_bell-53&#x22;&#x3E;&#x3C;/span&#x3E;\n      &#x3C;span data-notify=&#x22;message&#x22;&#x3E;This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don&#x27;t have to worry about the style.&#x3C;/span&#x3E;\n    &#x3C;/div&#x3E;\n  </pre>\n  <br><br>\n  <h3>Notifications States</h3>\n\n  <div class=\"alert alert-primary\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>\n      <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n  </div>\n  <div class=\"alert alert-info\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>\n      <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n  </div>\n  <div class=\"alert alert-success\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>\n      <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n  </div>\n  <div class=\"alert alert-warning\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>\n      <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n  </div>\n  <div class=\"alert alert-danger\">\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n    </button>\n    <span>\n      <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n  </div>\n\n  <pre class=\"prettyprint\">\n    &#x3C;div class=&#x22;alert alert-primary&#x22;&#x3E;\n    &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n      &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;span&#x3E;\n      &#x3C;b&#x3E; Primary - &#x3C;/b&#x3E; This is a regular notification made with &#x22;.alert-primary&#x22;&#x3C;/span&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;alert alert-info&#x22;&#x3E;\n    &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n      &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;span&#x3E;\n      &#x3C;b&#x3E; Info - &#x3C;/b&#x3E; This is a regular notification made with &#x22;.alert-info&#x22;&#x3C;/span&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;alert alert-success&#x22;&#x3E;\n    &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n      &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;span&#x3E;\n      &#x3C;b&#x3E; Success - &#x3C;/b&#x3E; This is a regular notification made with &#x22;.alert-success&#x22;&#x3C;/span&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;alert alert-warning&#x22;&#x3E;\n    &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n      &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;span&#x3E;\n      &#x3C;b&#x3E; Warning - &#x3C;/b&#x3E; This is a regular notification made with &#x22;.alert-warning&#x22;&#x3C;/span&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;alert alert-danger&#x22;&#x3E;\n    &#x3C;button type=&#x22;button&#x22; aria-hidden=&#x22;true&#x22; class=&#x22;close&#x22;&#x3E;\n      &#x3C;i class=&#x22;now-ui-icons ui-1_simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;span&#x3E;\n      &#x3C;b&#x3E; Danger - &#x3C;/b&#x3E; This is a regular notification made with &#x22;.alert-danger&#x22;&#x3C;/span&#x3E;\n  &#x3C;/div&#x3E;\n  </pre>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"places-buttons\">\n            <div class=\"row\">\n              <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                <h4 class=\"card-title\">\n                  Notifications Places\n                  <p class=\"category\">Click to view notifications</p>\n                </h4>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/notifications/notifications.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor((Math.random() * 5) + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 2:
                this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 3:
                this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 4:
                this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 5:
                this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/documentation/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/documentation/notifications/notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/ps/ps.component.css":
/***/ (function(module, exports) {

module.exports = "pre.prettyprint {\n    background-color: #eee;\n    border: 0px;\n    margin-bottom: 60px;\n    margin-top: 30px;\n    padding: 20px;\n    text-align: left;\n}\n\n.atv,\n.str {\n    color: #05AE0E;\n}\n\n.tag,\n.pln,\n.kwd {\n    color: #3472F7;\n}\n\n.atn {\n    color: #2C93FF;\n}\n\n.pln {\n    color: #333;\n}\n\n.com {\n    color: #999;\n}\n\n.space-top {\n    margin-top: 50px;\n}\n\n.area-line {\n    border: 1px solid #999;\n    border-left: 0;\n    border-right: 0;\n    color: #666;\n    display: block;\n    margin-top: 20px;\n    padding: 8px 0;\n    text-align: center;\n}\n\n.area-line a {\n    color: #666;\n}\n\n.container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/documentation/ps/ps.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n    <h2> Perfect Scrollbar</h2>\n    <legend></legend>\n    <p>\n        \"Minimalistic but perfect custom scrollbar plugin.\"\n        <br>\n        <br>\n        <b>!IMPORTANT</b> Perfect Scrollbar is applied on the\n        <code>.main-panel</code> and\n        <code>.sidebar .sidebar-wrapper</code> so we will have a nice scrollbar that is visible only when you actually scroll. Since it is changing the overflows of the CSS it is also affecting the child elements which have a scroll so please make sure that you add the class\n        <code>.ps-child</code> to any element that should have scroll.\n        <br><br> For more information please check\n        <b>\n            <a href=\"https://github.com/noraesae/perfect-scrollbar\" target=\"_blank\">Full Github Documentation</a>\n        </b>.\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/ps/ps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsComponent; });
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

var PsComponent = /** @class */ (function () {
    function PsComponent() {
    }
    PsComponent.prototype.ngOnInit = function () {
    };
    PsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ps',
            template: __webpack_require__("./src/app/documentation/ps/ps.component.html"),
            styles: [__webpack_require__("./src/app/documentation/ps/ps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PsComponent);
    return PsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/tables/tables.component.css":
/***/ (function(module, exports) {

module.exports = "pre.prettyprint {\n    background-color: #eee;\n    border: 0px;\n    margin-bottom: 60px;\n    margin-top: 30px;\n    padding: 20px;\n    text-align: left;\n}\n\n.atv,\n.str {\n    color: #05AE0E;\n}\n\n.tag,\n.pln,\n.kwd {\n    color: #3472F7;\n}\n\n.atn {\n    color: #2C93FF;\n}\n\n.pln {\n    color: #333;\n}\n\n.com {\n    color: #999;\n}\n\n.space-top {\n    margin-top: 50px;\n}\n\n.area-line {\n    border: 1px solid #999;\n    border-left: 0;\n    border-right: 0;\n    color: #666;\n    display: block;\n    margin-top: 20px;\n    padding: 8px 0;\n    text-align: center;\n}\n\n.area-line a {\n    color: #666;\n}\n\n.container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/documentation/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n    <h2>Tables\n    </h2>\n    <legend></legend>\n    <p>All Boostrap classes for tables are supported and improved.</p>\n    <h4>Simple Table inside a card</h4>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\"> Simple Table</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Name\n                  </th>\n                  <th>\n                    Country\n                  </th>\n                  <th>\n                    City\n                  </th>\n                  <th class=\"text-right\">\n                    Salary\n                  </th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Dakota Rice\n                    </td>\n                    <td>\n                      Niger\n                    </td>\n                    <td>\n                      Oud-Turnhout\n                    </td>\n                    <td class=\"text-right\">\n                      $36,738\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Minerva Hooper\n                    </td>\n                    <td>\n                      Curaçao\n                    </td>\n                    <td>\n                      Sinaai-Waas\n                    </td>\n                    <td class=\"text-right\">\n                      $23,789\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Sage Rodriguez\n                    </td>\n                    <td>\n                      Netherlands\n                    </td>\n                    <td>\n                      Baileux\n                    </td>\n                    <td class=\"text-right\">\n                      $56,142\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Philip Chaney\n                    </td>\n                    <td>\n                      Korea, South\n                    </td>\n                    <td>\n                      Overland Park\n                    </td>\n                    <td class=\"text-right\">\n                      $38,735\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Doris Greene\n                    </td>\n                    <td>\n                      Malawi\n                    </td>\n                    <td>\n                      Feldkirchen in Kärnten\n                    </td>\n                    <td class=\"text-right\">\n                      $63,542\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Mason Porter\n                    </td>\n                    <td>\n                      Chile\n                    </td>\n                    <td>\n                      Gloucester\n                    </td>\n                    <td class=\"text-right\">\n                      $78,615\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Jon Porter\n                    </td>\n                    <td>\n                      Portugal\n                    </td>\n                    <td>\n                      Gloucester\n                    </td>\n                    <td class=\"text-right\">\n                      $98,615\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n      <pre class=\"prettyprint\">\n\n&#x3C;div class=&#x22;card&#x22;&#x3E;\n  &#x3C;div class=&#x22;card-header&#x22;&#x3E;\n    &#x3C;h4 class=&#x22;card-title&#x22;&#x3E; Simple Table&#x3C;/h4&#x3E;\n  &#x3C;/div&#x3E;\n  &#x3C;div class=&#x22;card-body&#x22;&#x3E;\n    &#x3C;div class=&#x22;table-responsive&#x22;&#x3E;\n      &#x3C;table class=&#x22;table&#x22;&#x3E;\n        &#x3C;thead class=&#x22; text-primary&#x22;&#x3E;\n          &#x3C;th&#x3E;\n            Name\n          &#x3C;/th&#x3E;\n          &#x3C;th&#x3E;\n            Country\n          &#x3C;/th&#x3E;\n          &#x3C;th&#x3E;\n            City\n          &#x3C;/th&#x3E;\n          &#x3C;th class=&#x22;text-right&#x22;&#x3E;\n            Salary\n          &#x3C;/th&#x3E;\n        &#x3C;/thead&#x3E;\n        &#x3C;tbody&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Dakota Rice\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Niger\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Oud-Turnhout\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $36,738\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Minerva Hooper\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Cura&#xE7;ao\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Sinaai-Waas\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $23,789\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Sage Rodriguez\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Netherlands\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Baileux\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $56,142\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Philip Chaney\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Korea, South\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Overland Park\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $38,735\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Doris Greene\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Malawi\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Feldkirchen in K&#xE4;rnten\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $63,542\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Mason Porter\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Chile\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Gloucester\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $78,615\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n          &#x3C;tr&#x3E;\n            &#x3C;td&#x3E;\n              Jon Porter\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Portugal\n            &#x3C;/td&#x3E;\n            &#x3C;td&#x3E;\n              Gloucester\n            &#x3C;/td&#x3E;\n            &#x3C;td class=&#x22;text-right&#x22;&#x3E;\n              $98,615\n            &#x3C;/td&#x3E;\n          &#x3C;/tr&#x3E;\n        &#x3C;/tbody&#x3E;\n      &#x3C;/table&#x3E;\n    &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n&#x3C;/div&#x3E;\n    </pre>\n\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
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

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__("./src/app/documentation/tables/tables.component.html"),
            styles: [__webpack_require__("./src/app/documentation/tables/tables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2>Textarea</h2>\n\n\t<p class=\"space-top\">The textarea has a new style, so it looks similar to all other inputs.</p>\n\n\t<textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"You can write your text here...\"></textarea>\n\n\t<div class=\"\">\n<div>\n<pre class=\"prettyprint\">\n  &#x9;&#x3C;textarea class=&#x22;form-control&#x22; name=&#x22;name&#x22; rows=&#x22;4&#x22; cols=&#x22;80&#x22; placeholder=&#x22;You can write your text here...&#x22;&#x3E;&#x3C;/textarea&#x3E;\n</pre>\n</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaComponent; });
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

var TextareaComponent = /** @class */ (function () {
    function TextareaComponent() {
    }
    TextareaComponent.prototype.ngOnInit = function () {
    };
    TextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-textarea',
            template: __webpack_require__("./src/app/documentation/textarea/textarea.component.html"),
            styles: [__webpack_require__("./src/app/documentation/textarea/textarea.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextareaComponent);
    return TextareaComponent;
}());



/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"text-center\">License</h2>\n    <p class=\"space-top\">\n      License MIT License Copyright (c) 2018 Creative Tim  </p>\n  <p>\n      Coded by Creative Tim\n  </p>\n    <p>\n      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n  </p>\n    <p>\n      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n  </p>\n    <p>\n      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n    </p>\n</div>\n<div>\n    <h2 class=\"space-top text-center\">Getting Started</h2>\n    <br />\n    <p>\n    The Now UI Dashboard is built on top of Bootstrap 4, so you can safely use it on your existing or a new Bootstrap project. No line of code from Bootstrap 4 was changed, so you don't have to worry about undesired effects in your work.\n    </p>\n    <br><br>\n    <h4>How to start the project</h4><br>\n    <ul>\n        <li>Install NodeJs from <a href=\"https://nodejs.org/en/\" target=\"_blank\" rel=\"noopener noreferrer\">NodeJs Official Page</a></li>\n        <li>Open Terminal</li>\n        <li>Go to your file project</li>\n        <li>Run in terminal <code>npm install -g @angular/cli</code></li>\n        <li>Then run <code>npm install</code></li>\n        <li>And <code>npm start</code></li>\n        <li>Navigate to <a href=\"http://localhost:4200\" target=\"_blank\" rel=\"noopener noreferrer\">http://localhost:4200</a></li>\n    </ul>\n</div>\n<div class=\"row tim-row\">\n    <h3 class=\"text-center\">File Structure</h3>\n        <legend></legend>\n<p>\nOnce you have downloaded the archive and opened it, you will find the following structure:\n</p>\n\n<pre class=\"prettyprint\">\n  Now Ui Dashboard Angular\n  ├── CHANGELOG.md\n  ├── LICENSE.md\n  ├── README.md\n  ├── angular-cli.json\n  ├── documentation\n  ├── e2e\n  ├── karma.conf.js\n  ├── package.json\n  ├── protractor.conf.js\n  ├── src\n  │   ├── app\n  │   │   ├── app.component.css\n  │   │   ├── app.component.html\n  │   │   ├── app.component.spec.ts\n  │   │   ├── app.component.ts\n  │   │   ├── app.module.ts\n  │   │   ├── app.routing.ts\n  │   │   ├── components\n  │   │   │   ├── components.module.ts\n  │   │   │   ├── footer\n  │   │   │   │   ├── footer.component.css\n  │   │   │   │   ├── footer.component.html\n  │   │   │   │   ├── footer.component.spec.ts\n  │   │   │   │   └── footer.component.ts\n  │   │   │   ├── navbar\n  │   │   │   │   ├── navbar.component.css\n  │   │   │   │   ├── navbar.component.html\n  │   │   │   │   ├── navbar.component.spec.ts\n  │   │   │   │   └── navbar.component.ts\n  │   │   │   └── sidebar\n  │   │   │       ├── sidebar.component.css\n  │   │   │       ├── sidebar.component.html\n  │   │   │       ├── sidebar.component.spec.ts\n  │   │   │       └── sidebar.component.ts\n  │   │   ├── dashboard\n  │   │   │   ├── dashboard.component.css\n  │   │   │   ├── dashboard.component.html\n  │   │   │   ├── dashboard.component.spec.ts\n  │   │   │   └── dashboard.component.ts\n  │   │   ├── icons\n  │   │   │   ├── icons.component.css\n  │   │   │   ├── icons.component.html\n  │   │   │   ├── icons.component.spec.ts\n  │   │   │   └── icons.component.ts\n  │   │   ├── layouts\n  │   │   │   └── admin-layout\n  │   │   │       ├── admin-layout.component.html\n  │   │   │       ├── admin-layout.component.scss\n  │   │   │       ├── admin-layout.component.spec.ts\n  │   │   │       ├── admin-layout.component.ts\n  │   │   │       ├── admin-layout.module.ts\n  │   │   │       └── admin-layout.routing.ts\n  │   │   ├── maps\n  │   │   │   ├── maps.component.css\n  │   │   │   ├── maps.component.html\n  │   │   │   ├── maps.component.spec.ts\n  │   │   │   └── maps.component.ts\n  │   │   ├── notifications\n  │   │   │   ├── notifications.component.css\n  │   │   │   ├── notifications.component.html\n  │   │   │   ├── notifications.component.spec.ts\n  │   │   │   └── notifications.component.ts\n  │   │   ├── table-list\n  │   │   │   ├── table-list.component.css\n  │   │   │   ├── table-list.component.html\n  │   │   │   ├── table-list.component.spec.ts\n  │   │   │   └── table-list.component.ts\n  │   │   ├── typography\n  │   │   │   ├── typography.component.css\n  │   │   │   ├── typography.component.html\n  │   │   │   ├── typography.component.spec.ts\n  │   │   │   └── typography.component.ts\n  │   │   └── user-profile\n  │   │       ├── user-profile.component.css\n  │   │       ├── user-profile.component.html\n  │   │       ├── user-profile.component.spec.ts\n  │   │       └── user-profile.component.ts\n  │   ├── assets\n  │   │   ├── demo\n  │   │   ├── fonts\n  │   │   ├── img\n  │   │   └── scss\n  │   │       ├── now-ui-dashboard\n  │   │       └── now-ui-dashboard.scss\n  │   ├── environments\n  │   ├── favicon.ico\n  │   ├── index.html\n  │   ├── main.ts\n  │   ├── polyfills.ts\n  │   ├── styles.css\n  │   ├── test.ts\n  │   ├── tsconfig.app.json\n  │   ├── tsconfig.spec.json\n  │   └── typings.d.ts\n  ├── tsconfig.json\n  ├── tslint.json\n  └── typings\n</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
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

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__("./src/app/documentation/tutorial/tutorial.component.html"),
            styles: [__webpack_require__("./src/app/documentation/tutorial/tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ })

});
//# sourceMappingURL=documentation.module.chunk.js.map