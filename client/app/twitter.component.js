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
var twitter_service_1 = require('./twitter.service');
var TwitterComponent = (function () {
    function TwitterComponent(_TwitterAPIService) {
        this._TwitterAPIService = _TwitterAPIService;
        this.query = "@ThanxInc OR #thanxinc";
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.startPoint = 0;
        this.noTweets = false;
        this.isLoading = false;
    }
    TwitterComponent.prototype.ngOnInit = function () {
    };
    TwitterComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this._TwitterAPIService.searchTweets(this.query)
            .subscribe(function (response) { return _this.assignResults(response); }, function (err) {
            alert(err);
            console.log(err);
        });
    };
    TwitterComponent.prototype.assignResults = function (response) {
        this.isLoading = false;
        this.tweets = response;
        if (!this.tweets.length)
            this.noTweets = true;
        else
            this.noTweets = false;
        this.totalItems = this.tweets.length;
        this.startPoint = 0;
        this.perPageTweets = this.tweets.slice(this.startPoint, 5);
        this.currentPage = 1;
    };
    TwitterComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.startPoint = (event.page - 1) * 5;
        this.perPageTweets = this.tweets.slice(this.startPoint, this.startPoint + 5);
    };
    TwitterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/html/tweet.html'
        }), 
        __metadata('design:paramtypes', [twitter_service_1.TwitterAPIService])
    ], TwitterComponent);
    return TwitterComponent;
}());
exports.TwitterComponent = TwitterComponent;
//# sourceMappingURL=twitter.component.js.map