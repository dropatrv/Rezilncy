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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var TwitterAPIService = (function () {
    function TwitterAPIService(http) {
        this.http = http;
        this.headers = null;
    }
    TwitterAPIService.prototype.searchTweets = function (query) {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Parameter',  params);
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: this.headers,
            search: new http_1.URLSearchParams('query=' + query)
        });
        return this.http.get("search", options)
            .map(function (res) { return res.json().statuses; })
            .catch(this.handleError);
    };
    TwitterAPIService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error);
    };
    TwitterAPIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TwitterAPIService);
    return TwitterAPIService;
}());
exports.TwitterAPIService = TwitterAPIService;
//# sourceMappingURL=twitter.service.js.map