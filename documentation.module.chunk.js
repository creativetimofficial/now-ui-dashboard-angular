webpackJsonp(["documentation.module"],{

/***/ "./node_modules/jw-bootstrap-switch-ng2/dist/directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var directive_1 = __webpack_require__("./node_modules/jw-bootstrap-switch-ng2/dist/directive.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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

/***/ "./node_modules/ng2-nouislider/src/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__("./node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
        }));
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUlxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm91aUZvcm1hdHRlciB7XG4gIHRvKHZhbHVlOiBudW1iZXIpOiBzdHJpbmc7XG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRGb3JtYXR0ZXIgaW1wbGVtZW50cyBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gZm9ybWF0dGluZyB3aXRoIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NDYzMzY0LzQ3ODU4NFxuICAgIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdChwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkpLnRvRml4ZWQoMikpKTtcbiAgfTtcblxuICBmcm9tKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgc2xpZGVyOiBhbnk7XG4gIHB1YmxpYyBoYW5kbGVzOiBhbnlbXTtcbiAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgcHVibGljIGJlaGF2aW91cjogc3RyaW5nO1xuICAgcHVibGljIGNvbm5lY3Q6IGJvb2xlYW5bXTtcbiAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuICAgcHVibGljIG1pbjogbnVtYmVyO1xuICAgcHVibGljIG1heDogbnVtYmVyO1xuICAgcHVibGljIHN0ZXA6IG51bWJlcjtcbiAgIHB1YmxpYyBmb3JtYXQ6IE5vdWlGb3JtYXR0ZXI7XG4gICBwdWJsaWMgcGFnZVN0ZXBzOiBudW1iZXI7XG4gICBwdWJsaWMgY29uZmlnOiBhbnkgPSB7fTtcbiAgIHB1YmxpYyBuZ01vZGVsOiBudW1iZXIgfCBudW1iZXJbXTtcbiAgIHB1YmxpYyBrZXlib2FyZDogYm9vbGVhbjtcbiAgIHB1YmxpYyBvbktleWRvd246IGFueTtcbiAgIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICBwdWJsaWMgdG9vbHRpcHM6IEFycmF5PGFueT47XG4gICBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgc2xpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIGVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBwcml2YXRlIHZhbHVlOiBhbnk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyIDogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRzQ29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBiZWhhdmlvdXI6IHRoaXMuYmVoYXZpb3VyLFxuICAgICAgY29ubmVjdDogdGhpcy5jb25uZWN0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBzdGFydDogdGhpcy5mb3JtQ29udHJvbCAhPT0gdW5kZWZpbmVkID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6IHRoaXMubmdNb2RlbCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIHBhZ2VTdGVwczogdGhpcy5wYWdlU3RlcHMsXG4gICAgICBrZXlib2FyZDogdGhpcy5rZXlib2FyZCxcbiAgICAgIG9uS2V5ZG93bjogdGhpcy5vbktleWRvd24sXG4gICAgICByYW5nZTogdGhpcy5jb25maWcucmFuZ2UgfHwge21pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXh9LFxuICAgICAgdG9vbHRpcHM6IHRoaXMudG9vbHRpcHMsXG4gICAgfSkpO1xuXG4gICAgaW5wdXRzQ29uZmlnLmZvcm1hdCA9IHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uZmlnLmZvcm1hdCB8fCBuZXcgRGVmYXVsdEZvcm1hdHRlcigpO1xuXG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSxcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGlucHV0c0NvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5oYW5kbGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktaGFuZGxlJykpO1xuXG4gICAgaWYodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIGlmKHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9IDEwO1xuICAgICAgfVxuICAgICAgZm9yKGxldCBoYW5kbGUgb2YgdGhpcy5oYW5kbGVzKSB7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBoYW5kbGUuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm9uS2V5ZG93biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmRlZmF1bHRLZXlIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29uZmlnLm9uS2V5ZG93bik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2V0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcih0aGlzLnNldCwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2xpZGUsIHZhbHVlcywgaGFuZGxlLCB1bmVuY29kZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3N0YXJ0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0LmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdlbmQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZW5kLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnNsaWRlciAmJiAoY2hhbmdlcy5taW4gfHwgY2hhbmdlcy5tYXggfHwgY2hhbmdlcy5zdGVwKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2xpZGVyLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9WYWx1ZXModmFsdWVzOiBzdHJpbmdbXSk6IGFueSB8IGFueVtdIHtcbiAgICBsZXQgdiA9IHZhbHVlcy5tYXAodGhpcy5jb25maWcuZm9ybWF0LmZyb20pO1xuICAgIHJldHVybiAodi5sZW5ndGggPT0gMSA/IHZbMF0gOiB2KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgdGhpcy5zbGlkZXIuc2V0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpc0Rpc2FibGVkXG4gICAgICA/IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnLCAndHJ1ZScpXG4gICAgICA6IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlcjIsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidkaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidiZWhhdmlvdXInOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29ubmVjdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidsaW1pdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtaW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbWF4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3N0ZXAnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZm9ybWF0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3BhZ2VTdGVwcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjb25maWcnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbmdNb2RlbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidrZXlib2FyZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvbktleWRvd24nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZm9ybUNvbnRyb2wnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndG9vbHRpcHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3NsaWRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzZXQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3N0YXJ0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidlbmQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyTW9kdWxlIHsgc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTm91aXNsaWRlckNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW05vdWlzbGlkZXJDb21wb25lbnRdLFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 10.0.0 - 2017-05-28 14:52:48 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';

	var VERSION = '10.0.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandle = false;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Listeners = null;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		target.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( handleNumber ){

				var handle = scope_Handles[handleNumber];

				var min = checkHandlePosition(scope_Locations, handleNumber, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, handleNumber, 100, true, true, true);

				var now = positions[handleNumber];
				var text = options.ariaFormat.to(unencoded[handleNumber]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( scope_ActiveHandle ) {
			removeClass(scope_ActiveHandle, options.cssClasses.active);
			scope_ActiveHandle = false;
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			scope_Body.style.cursor = '';
			scope_Body.removeEventListener('selectstart', preventDefault);
		}

		// Unbind the move and end events, which are added on 'start'.
		scope_Listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			// Mark the handle as 'active' so it can be styled.
			scope_ActiveHandle = handle.children[0];
			addClass(scope_ActiveHandle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		scope_Listeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangingColorsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartjsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxRadioSwitchComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_routing__ = __webpack_require__("./src/app/documentation/documentation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__ = __webpack_require__("./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial_component__ = __webpack_require__("./src/app/documentation/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__buttons_buttons_component__ = __webpack_require__("./src/app/documentation/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_radio_switch_checkbox_radio_switch_component__ = __webpack_require__("./src/app/documentation/checkbox-radio-switch/checkbox-radio-switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inputs_inputs_component__ = __webpack_require__("./src/app/documentation/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__textarea_textarea_component__ = __webpack_require__("./src/app/documentation/textarea/textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dropdowns_dropdowns_component__ = __webpack_require__("./src/app/documentation/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__ = __webpack_require__("./src/app/documentation/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("./src/app/documentation/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__changing_colors_changing_colors_component__ = __webpack_require__("./src/app/documentation/changing-colors/changing-colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tables_tables_component__ = __webpack_require__("./src/app/documentation/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__breadcrumb_breadcrumb_component__ = __webpack_require__("./src/app/documentation/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ps_ps_component__ = __webpack_require__("./src/app/documentation/ps/ps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cards_cards_component__ = __webpack_require__("./src/app/documentation/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__chartjs_chartjs_component__ = __webpack_require__("./src/app/documentation/chartjs/chartjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var DocumentationModule = (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_23_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__documentation_routing__["a" /* DocumentationRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial_component__["a" /* TutorialComponent */],
                __WEBPACK_IMPORTED_MODULE_9__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__checkbox_radio_switch_checkbox_radio_switch_component__["a" /* CheckboxRadioSwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__inputs_inputs_component__["a" /* InputsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__textarea_textarea_component__["a" /* TextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dropdowns_dropdowns_component__["a" /* DropdownsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__ps_ps_component__["a" /* PsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__tables_tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__changing_colors_changing_colors_component__["a" /* ChangingColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__chartjs_chartjs_component__["a" /* ChartjsComponent */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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


var DropdownsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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


var NotificationsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PsComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextareaComponent = (function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = (function () {
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