/**
 * Created by jakeclose on 3/15/17.
 */
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
var upload_data = (function () {
    function upload_data() {
        this.title = 'Upload Data Page';
    }
    upload_data = __decorate([
        core_1.Component({
            template: "<h1>The {{title}}</h1>\n    <h2>Upload Data Here</h2>\n    \n\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], upload_data);
    return upload_data;
}());
exports.upload_data = upload_data;
//# sourceMappingURL=upload_data_page.component.js.map