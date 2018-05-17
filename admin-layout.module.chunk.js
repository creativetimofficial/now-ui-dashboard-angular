webpackJsonp(["admin-layout.module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-lg\">\n    <canvas baseChart id=\"bigDashboardChart\"\n                [datasets]=\"lineBigDashboardChartData\"\n                [labels]=\"lineBigDashboardChartLabels\"\n                 [colors]=\"lineBigDashboardChartColors\"\n                [options]=\"lineBigDashboardChartOptions\"\n                [chartType]=\"lineBigDashboardChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">Global Sales</h5>\n          <h4 class=\"card-title\">Shipped Products</h4>\n          <div ngbDropdown>\n            <button type=\"button\" class=\"btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret\" ngbDropdownToggle>\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"lineChartExample\"\n                        [datasets]=\"lineChartData\"\n                        [labels]=\"lineChartLabels\"\n                        [colors]=\"lineChartColors\"\n                        [options]=\"lineChartOptions\"\n                        [chartType]=\"lineChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons arrows-1_refresh-69\"></i> Just Updated\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">2018 Sales</h5>\n          <h4 class=\"card-title\">All products</h4>\n          <div ngbDropdown>\n            <button type=\"button\" class=\"btn btn-round btn-default dropdown-toggle btn-simple btn-icon no-caret\" ngbDropdownToggle>\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu-right\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <!-- <canvas id=\"lineChartExampleWithNumbersAndGrid\"></canvas> -->\n            <canvas baseChart id=\"lineChartExampleWithNumbersAndGrid\"\n                        [datasets]=\"lineChartWithNumbersAndGridData\"\n                        [labels]=\"lineChartWithNumbersAndGridLabels\"\n                        [colors]=\"lineChartWithNumbersAndGridColors\"\n                        [options]=\"lineChartWithNumbersAndGridOptions\"\n                        [chartType]=\"lineChartWithNumbersAndGridType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons arrows-1_refresh-69\"></i> Just Updated\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">Email Statistics</h5>\n          <h4 class=\"card-title\">24 Hours Performance</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas baseChart id=\"barChartSimpleGradientsNumbers\"\n                        [datasets]=\"lineChartGradientsNumbersData\"\n                        [labels]=\"lineChartGradientsNumbersLabels\"\n                        [colors]=\"lineChartGradientsNumbersColors\"\n                        [options]=\"lineChartGradientsNumbersOptions\"\n                        [chartType]=\"lineChartGradientsNumbersType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_time-alarm\"></i> Last 7 days\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h5 class=\"card-category\">Backend development</h5>\n          <h4 class=\"card-title\">Tasks</h4>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"table-full-width table-responsive\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" checked>\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Sign contract for \"What are conference organizers afraid of?\"</td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\">\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" checked>\n                        <span class=\"form-check-sign\"></span>\n                      </label>\n                    </div>\n                  </td>\n                  <td class=\"text-left\">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                  </td>\n                  <td class=\"td-actions text-right\">\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Edit Task\">\n                      <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                    </button>\n                    <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Remove\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"now-ui-icons loader_refresh spin\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">All Persons List</h5>\n          <h4 class=\"card-title\"> Employees Stats</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
        else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartColor = "#FFFFFF";
        this.canvas = document.getElementById("bigDashboardChart");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
        this.lineBigDashboardChartData = [
            {
                label: "Data",
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
            }
        ];
        this.lineBigDashboardChartColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: "#2c2c2c",
                pointHoverBackgroundColor: "#2c2c2c",
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        this.lineBigDashboardChartOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            legend: {
                position: "bottom",
                fillStyle: "#FFF",
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold"
                        }
                    }]
            }
        };
        this.lineBigDashboardChartType = 'line';
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
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
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
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
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
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
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
        this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#18ce0f');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
        this.lineChartWithNumbersAndGridData = [
            {
                label: "Email Stats",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
            }
        ];
        this.lineChartWithNumbersAndGridColors = [
            {
                borderColor: "#18ce0f",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#18ce0f",
                backgroundColor: this.gradientFill
            }
        ];
        this.lineChartWithNumbersAndGridLabels = ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"];
        this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;
        this.lineChartWithNumbersAndGridType = 'line';
        this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
        this.ctx = this.canvas.getContext("2d");
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));
        this.lineChartGradientsNumbersData = [
            {
                label: "Active Countries",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
            }
        ];
        this.lineChartGradientsNumbersColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: "#2CA8FF",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#2CA8FF",
            }
        ];
        this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.lineChartGradientsNumbersOptions = {
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
                        gridLines: {
                            zeroLineColor: "transparent",
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
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.lineChartGradientsNumbersType = 'bar';
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">100 Awesome Nucleo Icons</h5>\n          <p class=\"category\">Handcrafted by our friends from\n            <a href=\"https://nucleoapp.com/?ref=1712\">NucleoApp</a>\n          </p>\n        </div>\n        <div class=\"card-body all-icons\">\n          <div class=\"row\">\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                <p>arrows-1_cloud-download-93</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                <p>arrows-1_cloud-upload-94</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                <p>arrows-1_minimal-down</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                <p>arrows-1_minimal-left</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                <p>arrows-1_minimal-right</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                <p>arrows-1_minimal-up</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                <p>arrows-1_refresh-69</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_share-66 \"></i>\n                <p>arrows-1_share-66</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_badge\"></i>\n                <p>business_badge</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_bank\"></i>\n                <p>business_bank</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_briefcase-24\"></i>\n                <p>business_briefcase-24</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_bulb-63\"></i>\n                <p>business_bulb-63</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                <p>business_chart-bar-32</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                <p>business_chart-pie-36</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_globe\"></i>\n                <p>business_globe</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_money-coins\"></i>\n                <p>business_money-coins</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                <p>clothes_tie-bow</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_app\"></i>\n                <p>design_app</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                <p>design_bullet-list-67</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_image\"></i>\n                <p>design_image</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_palette\"></i>\n                <p>design_palette</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_scissors\"></i>\n                <p>design_scissors</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_vector\"></i>\n                <p>design_vector</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design-2_html5\"></i>\n                <p>design-2_html5</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                <p>design-2_ruler-pencil</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                <p>emoticons_satisfied</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_box\"></i>\n                <p>files_box</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_paper\"></i>\n                <p>files_paper</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_single-copy-04\"></i>\n                <p>files_single-copy-04</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons health_ambulance\"></i>\n                <p>health_ambulance</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons loader_gear\"></i>\n                <p>loader_gear</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons loader_refresh\"></i>\n                <p>loader_refresh</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_bookmark\"></i>\n                <p>location_bookmark</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_compass-05\"></i>\n                <p>location_compass-05</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_map-big\"></i>\n                <p>location_map-big</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_pin\"></i>\n                <p>location_pin</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_world\"></i>\n                <p>location_world</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_album\"></i>\n                <p>media-1_album</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-pause\"></i>\n                <p>media-1_button-pause</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-play\"></i>\n                <p>media-1_button-play</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-power\"></i>\n                <p>media-1_button-power</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                <p>media-1_camera-compact</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-2_note-03\"></i>\n                <p>media-2_note-03</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>media-2_sound-wave</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_diamond\"></i>\n                <p>objects_diamond</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_globe\"></i>\n                <p>objects_globe</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_key-25\"></i>\n                <p>objects_key-25</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_planet\"></i>\n                <p>objects_planet</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_spaceship\"></i>\n                <p>objects_spaceship</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_support-17\"></i>\n                <p>objects_support-17</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                <p>objects_umbrella-13</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                <p>education_agenda-bookmark</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_atom\"></i>\n                <p>education_atom</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_glasses\"></i>\n                <p>education_glasses</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_hat\"></i>\n                <p>education_hat</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_paper\"></i>\n                <p>education_paper</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_bag-16\"></i>\n                <p>shopping_bag-16</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_basket\"></i>\n                <p>shopping_basket</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_box\"></i>\n                <p>shopping_box</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                <p>shopping_cart-simple</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_credit-card\"></i>\n                <p>shopping_credit-card</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                <p>shopping_delivery-fast</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_shop\"></i>\n                <p>shopping_shop</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_tag-content\"></i>\n                <p>shopping_tag-content</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons sport_trophy\"></i>\n                <p>sport_trophy</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons sport_user-run\"></i>\n                <p>sport_user-run</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_controller-modern\"></i>\n                <p>tech_controller-modern</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_headphones\"></i>\n                <p>tech_headphones</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_laptop\"></i>\n                <p>tech_laptop</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_mobile\"></i>\n                <p>tech_mobile</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_tablet\"></i>\n                <p>tech_tablet</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_tv\"></i>\n                <p>tech_tv</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_watch-time\"></i>\n                <p>tech_watch-time</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_align-center\"></i>\n                <p>text_align-center</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_align-left\"></i>\n                <p>text_align-left</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_bold\"></i>\n                <p>text_bold</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_caps-small\"></i>\n                <p>text_caps-small</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons gestures_tap-01\"></i>\n                <p>gestures_tap-01</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                <p>transportation_air-baloon</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                <p>transportation_bus-front-12</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons travel_info\"></i>\n                <p>travel_info</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons travel_istanbul\"></i>\n                <p>travel_istanbul</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                <p>ui-1_bell-53</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_check\"></i>\n                <p>ui-1_check</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                <p>ui-1_calendar-60</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                <p>ui-1_lock-circle-open</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_send\"></i>\n                <p>ui-1_send</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                <p>ui-1_settings-gear-63</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                <p>ui-1_simple-add</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                <p>ui-1_simple-delete</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                <p>ui-1_simple-remove</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                <p>ui-1_zoom-bold</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                <p>ui-2_chat-round</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                <p>ui-2_favourite-28</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_like\"></i>\n                <p>ui-2_like</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                <p>ui-2_settings-90</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                <p>ui-2_time-alarm</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_email-85\"></i>\n                <p>ui-1_email-85</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons users_circle-08\"></i>\n                <p>users_circle-08</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>users_single-02</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
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

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_layout_routing__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__admin_layout_routing__["a" /* AdminLayoutRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__["a" /* NotificationsComponent */],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");







var AdminLayoutRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_1__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_2__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_3__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_4__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_5__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_component__["a" /* NotificationsComponent */] },
];


/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          Google Maps\n        </div>\n        <div class=\"card-body \">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
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

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header\">\n  <div class=\"header text-center\">\n    <h2 class=\"title\">Notifications</h2>\n    <p class=\"category\">Please checkout the\n      <a href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\">full documentation.</a>\n    </p>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Notifications Style</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"alert alert-info\">\n            <span>This is a plain notification</span>\n          </div>\n          <div class=\"alert alert-info\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>This is a notification with close button.</span>\n          </div>\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n          </div>\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Notification states</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"alert alert-primary\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n          </div>\n          <div class=\"alert alert-info\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n          </div>\n          <div class=\"alert alert-success\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n          </div>\n          <div class=\"alert alert-warning\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n          </div>\n          <div class=\"alert alert-danger\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"places-buttons\">\n            <div class=\"row\">\n              <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                <h4 class=\"card-title\">\n                  Notifications Places\n                  <p class=\"category\">Click to view notifications</p>\n                </h4>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
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
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Simple Table</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Philip Chaney\n                  </td>\n                  <td>\n                    Korea, South\n                  </td>\n                  <td>\n                    Overland Park\n                  </td>\n                  <td class=\"text-right\">\n                    $38,735\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Jon Porter\n                  </td>\n                  <td>\n                    Portugal\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $98,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Table on Plain Background</h4>\n          <p class=\"category\"> Here is a subtitle for this table</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Philip Chaney\n                  </td>\n                  <td>\n                    Korea, South\n                  </td>\n                  <td>\n                    Overland Park\n                  </td>\n                  <td class=\"text-right\">\n                    $38,735\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Jon Porter\n                  </td>\n                  <td>\n                    Portugal\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $98,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
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

var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__("./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("./src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Now Ui Table Heading</h5>\n          <p class=\"category\">Created using Montserrat Font Family</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"typography-line\">\n            <h1>\n              <span>Header 1</span>The Life of Now Ui Dashboard </h1>\n          </div>\n          <div class=\"typography-line\">\n            <h2>\n              <span>Header 2</span>The Life of Now Ui Dashboard </h2>\n          </div>\n          <div class=\"typography-line\">\n            <h3>\n              <span>Header 3</span>The Life of Now Ui Dashboard </h3>\n          </div>\n          <div class=\"typography-line\">\n            <h4>\n              <span>Header 4</span>The Life of Now Ui Dashboard </h4>\n          </div>\n          <div class=\"typography-line\">\n            <h5>\n              <span>Header 5</span>The Life of Now Ui Dashboard </h5>\n          </div>\n          <div class=\"typography-line\">\n            <h6>\n              <span>Header 6</span>The Life of Now Ui Dashboard </h6>\n          </div>\n          <div class=\"typography-line\">\n            <p>\n              <span>Paragraph</span>\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Quote</span>\n            <blockquote>\n              <p class=\"blockquote blockquote-primary\">\n                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                <br>\n                <br>\n                <small>\n                  - Noaa\n                </small>\n              </p>\n            </blockquote>\n          </div>\n          <div class=\"typography-line\">\n            <span>Muted Text</span>\n            <p class=\"text-muted\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Primary Text</span>\n            <p class=\"text-primary\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Info Text</span>\n            <p class=\"text-info\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Success Text</span>\n            <p class=\"text-success\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Warning Text</span>\n            <p class=\"text-warning\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Danger Text</span>\n            <p class=\"text-danger\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <h2>\n              <span>Small Tag</span>\n              Header with small subtitle\n              <br>\n              <small>Use \"small\" tag for the headers</small>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"./assets/img/bg5.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"#\">\n              <img class=\"avatar border-gray\" src=\"./assets/img/mike.jpg\" alt=\"...\">\n              <h5 class=\"title\">Mike Andrew</h5>\n            </a>\n            <p class=\"description\">\n              michael24\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            \"Lamborghini Mercy\n            <br> Your chick she so thirsty\n            <br> I'm in that two seat Lambo\"\n          </p>\n        </div>\n        <hr>\n        <div class=\"button-container\">\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-google-plus-g\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ })

});
//# sourceMappingURL=admin-layout.module.chunk.js.map