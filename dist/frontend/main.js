(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\hw8-1\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "7R79":
/*!*************************************************************************!*\
  !*** ./src/app/components/first-tab-child/first-tab-child.component.ts ***!
  \*************************************************************************/
/*! exports provided: FirstTabChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTabChildComponent", function() { return FirstTabChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




class FirstTabChildComponent {
    constructor(route, homePageService) {
        this.route = route;
        this.homePageService = homePageService;
        this.category = 0;
        this.title = '';
        this.tagline = '';
        this.runtime = '';
        this.genres = '';
        this.spoken = '';
        this.desc = '';
        this.tweet = '';
        this.face = '';
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        let category = '';
        let id = 0;
        this.route.params.subscribe(params => {
            category = params['category'];
            id = params['id'];
        });
        this.homePageService.getDetails(id, category).subscribe(res => {
            this.data = res;
            this.data = this.data[0];
            this.videoId = this.data['key'];
            this.title = this.data['title'];
            this.tagline = this.data['tagline'];
            this.release_date = this.data['release_date'].substr(0, 4);
            this.vote_average = this.data['vote_average'];
            this.runtime = Math.trunc(this.data['runtime'] / 60) + "hrs " + this.data['runtime'] % 60 + "mins";
            for (var i = 0; i < this.data['genres'].length; i++) {
                this.genres += this.data['genres'][i]['name'];
                if (i < this.data['genres'].length - 1) {
                    this.genres += ", ";
                }
            }
            for (var i = 0; i < this.data['spoken_languages'].length; i++) {
                this.spoken += this.data['spoken_languages'][i]['english_name'];
                if (i < this.data['spoken_languages'].length - 1) {
                    this.spoken += ", ";
                }
            }
            this.desc = this.data['overview'];
            this.tweet = "Watch " + this.title + "%0A" + "https://www.youtube.com/watch?v=" + this.videoId + "%0A%23USC%20%23CSCI571%20%23FightOn";
            this.face = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.videoId;
            //console.log(this.tweet);
            //console.log("----------------------------------------------------------here");
            //console.log(this.data);
        });
    }
}
FirstTabChildComponent.ɵfac = function FirstTabChildComponent_Factory(t) { return new (t || FirstTabChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
FirstTabChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstTabChildComponent, selectors: [["app-first-tab-child"]], decls: 36, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-s-2"], [3, "videoId", "width", "height"], [1, "col-s-2", 2, "margin-left", "3%", "color", "rgba(255, 255, 255, 0.719)", "line-height", "1.2"], [2, "width", "70%"], ["type", "button", 1, "btn", "btn-primary"], [2, "margin-top", "1%"], [2, "color", "rgba(255, 255, 255, 0.651)", "width", "90%"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "twee"], ["target", "_blank", 3, "href"], [1, "fa", "fa-facebook-square", "face"]], template: function FirstTabChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "youtube-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Genres :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Spoken Languages : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add to Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add details here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.videoId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 650)("height", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.release_date, " \u00A0|\u00A0 \u2605 ", ctx.vote_average, " \u00A0|\u00A0 ", ctx.runtime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.genres, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.spoken, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/intent/tweet?text=", ctx.tweet, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.face, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayer"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    margin-left: 13%;\n}\n\nh1[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.89);\n    width: 60%;\n}\n\nh5[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.87);\n}\n\n.twee[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n\n.face[_ngcontent-%COMP%] {\n    margin-left: 1%;\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXRhYi1jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoiZmlyc3QtdGFiLWNoaWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xufVxuXG5oMSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuaDUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xufVxuXG4udHdlZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZmFjZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "APvU":
/*!***************************************************************!*\
  !*** ./src/app/components/second-tab/second-tab.component.ts ***!
  \***************************************************************/
/*! exports provided: SecondTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondTabComponent", function() { return SecondTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function () { return { "margin-top": "4%" }; };
const _c1 = function () { return { "display": "none" }; };
function SecondTabComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondTabComponent_div_0_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.routePage(ctx_r6.watchListData[i_r5]["media"], ctx_r6.watchListData[i_r5]["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.watchListData[i_r5]["picture"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.watchListData[i_r5]["titles"]);
} }
const _c2 = function () { return { "font-size": "40px" }; };
function SecondTabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SecondTabComponent_div_0_div_5_Template, 7, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.watchListData);
} }
const _c3 = function () { return { "font-size": "40px", "text-align": "center" }; };
function SecondTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.mainText);
} }
class SecondTabComponent {
    constructor(router) {
        this.router = router;
        this.watchListData = [];
        this.mainText = "";
    }
    ngOnInit() {
        this.fetchData();
    }
    routePage(Mtype, Mid) {
        this.router.navigate(['/watch/' + String(Mtype) + '/' + String(Mid)]);
    }
    fetchData() {
        var cacheData = localStorage.getItem('watchList');
        var myListData = (JSON.parse(cacheData || '[]')).reverse();
        ;
        if (myListData && myListData.length > 0) {
            this.watchListData = myListData;
            console.log(this.watchListData);
        }
        else {
            this.mainText = "No items found in Watchlist.";
        }
    }
}
SecondTabComponent.ɵfac = function SecondTabComponent_Factory(t) { return new (t || SecondTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SecondTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondTabComponent, selectors: [["app-second-tab"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["other_content", ""], ["id", "watchText"], [3, "ngStyle"], [1, "row", "row-cols-1", "row-cols-md-6", "g-4", "recommendedMedia"], ["class", "col", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "col", 3, "ngStyle"], ["routerLink", "", "rel", "nofollow noopener noreferrer", 3, "click"], [1, "card", "h-100"], [1, "card-img-top", 3, "src"], [1, "carousel-caption", "cText", 3, "ngStyle"], [1, "ttCap"], ["id", "noRes"]], template: function SecondTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SecondTabComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SecondTabComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watchListData.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQtdGFiLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BahR":
/*!***********************************************************************!*\
  !*** ./src/app/components/similar-movies/similar-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimilarMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarMoviesComponent", function() { return SimilarMoviesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["carousel"];
function SimilarMoviesComponent_ngb_carousel_4_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function SimilarMoviesComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimilarMoviesComponent_ngb_carousel_4_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function SimilarMoviesComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimilarMoviesComponent_ngb_carousel_4_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function SimilarMoviesComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimilarMoviesComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class SimilarMoviesComponent {
    constructor(route, homePageService) {
        this.route = route;
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        let category = '';
        let id = 0;
        this.route.params.subscribe(params => {
            category = params['category'];
            id = params['id'];
        });
        this.homePageService.getSimilars(id, category).subscribe(res => {
            this.data = res;
            let img = [];
            for (var i = 0; i < this.data.length; i++) {
                if (i != 0 && i % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[i]);
            }
            this.images.push(img);
        });
    }
}
SimilarMoviesComponent.ɵfac = function SimilarMoviesComponent_Factory(t) { return new (t || SimilarMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_3__["HomePageService"])); };
SimilarMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimilarMoviesComponent, selectors: [["app-similar-movies"]], viewQuery: function SimilarMoviesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "container1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "Random first slide", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function SimilarMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Similar Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SimilarMoviesComponent_ngb_carousel_4_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.container1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXItbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic2ltaWxhci1tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xufVxuXG4uY29udGFpbmVyMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgaGVpZ2h0OiAzMCU7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzAlO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "IAgu":
/*!***************************************************************!*\
  !*** ./src/app/components/commonpage/commonpage.component.ts ***!
  \***************************************************************/
/*! exports provided: CommonpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonpageComponent", function() { return CommonpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommonpageComponent {
    constructor() {
        this.dataReceived = "DefaultValue!";
    }
    ngOnInit() {
    }
}
CommonpageComponent.ɵfac = function CommonpageComponent_Factory(t) { return new (t || CommonpageComponent)(); };
CommonpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonpageComponent, selectors: [["app-commonpage"]], inputs: { dataReceived: "dataReceived" }, decls: 3, vars: 1, template: function CommonpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "commonpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.dataReceived, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb25wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "M9ov":
/*!***********************************************************************!*\
  !*** ./src/app/components/full-cast-crew/full-cast-crew.component.ts ***!
  \***********************************************************************/
/*! exports provided: FullCastCrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullCastCrewComponent", function() { return FullCastCrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FullCastCrewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullCastCrewComponent_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const x_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r5.fetchDetails(x_r3["id"], _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", x_r3["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3["character"]);
} }
function FullCastCrewComponent_ng_template_5_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r8.cast["dob"], "");
} }
function FullCastCrewComponent_ng_template_5_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r9.cast["pob"], "");
} }
function FullCastCrewComponent_ng_template_5_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r10.cast["gender"], "");
} }
function FullCastCrewComponent_ng_template_5_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r11.cast["website"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.cast["website"]);
} }
function FullCastCrewComponent_ng_template_5_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known For: ", ctx_r12.cast["known_for"], "");
} }
function FullCastCrewComponent_ng_template_5_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known As: ", ctx_r13.cast["knownas"], "");
} }
function FullCastCrewComponent_ng_template_5_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r14.cast["external_ids"]["imdb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FullCastCrewComponent_ng_template_5_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r15.cast["external_ids"]["insta"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FullCastCrewComponent_ng_template_5_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r16.cast["external_ids"]["fb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FullCastCrewComponent_ng_template_5_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r17.cast["external_ids"]["twitter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FullCastCrewComponent_ng_template_5_h2_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullCastCrewComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullCastCrewComponent_ng_template_5_Template_button_click_3_listener() { const modal_r7 = ctx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FullCastCrewComponent_ng_template_5_p_11_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FullCastCrewComponent_ng_template_5_p_12_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FullCastCrewComponent_ng_template_5_p_13_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FullCastCrewComponent_ng_template_5_p_14_Template, 4, 2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FullCastCrewComponent_ng_template_5_p_15_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FullCastCrewComponent_ng_template_5_p_16_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FullCastCrewComponent_ng_template_5_a_18_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FullCastCrewComponent_ng_template_5_a_19_Template, 2, 1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FullCastCrewComponent_ng_template_5_a_20_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FullCastCrewComponent_ng_template_5_a_21_Template, 2, 1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FullCastCrewComponent_ng_template_5_h2_23_Template, 2, 0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cast["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.cast["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["dob"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["pob"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["website"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["known_for"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["knownas"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["external_ids"]["imdb"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["external_ids"]["insta"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["external_ids"]["fb"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["external_ids"]["twitter"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cast["biography"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cast["biography"]);
} }
class FullCastCrewComponent {
    constructor(route, modalService, homePageService, config) {
        this.route = route;
        this.modalService = modalService;
        this.homePageService = homePageService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
    }
    openModal(data) {
        this.modalService.open(data, { scrollable: true, size: 'lg' });
    }
    fetchDetails(id, data) {
        console.log(id);
        this.homePageService.getCastDetails(id).subscribe(res => {
            this.cast = res;
            this.cast = this.cast[0];
            this.openModal(data);
        });
    }
    fetchData() {
        let category = '';
        let id = 0;
        this.route.params.subscribe(params => {
            category = params['category'];
            id = params['id'];
        });
        this.homePageService.getCast(id, category).subscribe(res => {
            this.data = res;
            console.log(this.data);
        });
    }
}
FullCastCrewComponent.ɵfac = function FullCastCrewComponent_Factory(t) { return new (t || FullCastCrewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_3__["HomePageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopoverConfig"])); };
FullCastCrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullCastCrewComponent, selectors: [["app-full-cast-crew"]], decls: 7, vars: 1, consts: [[2, "color", "white"], [1, "crew"], [1, "row", "flex-row", "flex-nowrap", "row-cols-md-6", "cast"], ["class", "col-xs-3", 4, "ngFor", "ngForOf"], ["castData", ""], [1, "col-xs-3"], [3, "routerLink", "click"], [1, "card", "h-100", "adjust"], [1, "card-img-top", "newImg", 3, "src"], [1, "card-body"], [1, "charText1"], [1, "midText"], [1, "charText2"], [1, "modal-header"], [1, "modal-title", "castName"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-4", "castPicture"], [3, "src"], [1, "col-8", "castInfo"], [4, "ngIf"], ["id", "aka", 4, "ngIf"], [1, "social-media"], ["class", "imdb", "target", "blank", "placement", "top", "ngbPopover", "Visit IMDB", "popoverClass", "my-custom-class-imdb", 3, "href", 4, "ngIf"], ["class", "insta", "target", "blank", "placement", "top", "ngbPopover", "Visit Instagram", "popoverClass", "my-custom-class-insta", 3, "href", 4, "ngIf"], ["target", "blank", 3, "href", 4, "ngIf"], ["class", "twitter-share-button", "target", "blank", "placement", "top", "ngbPopover", "Visit Twitter", "popoverClass", "my-custom-class-twit", 3, "href", 4, "ngIf"], [1, "bio"], ["id", "bText", 4, "ngIf"], ["target", "blank", 3, "href"], ["id", "aka"], ["target", "blank", "placement", "top", "ngbPopover", "Visit IMDB", "popoverClass", "my-custom-class-imdb", 1, "imdb", 3, "href"], [1, "fa", "fa-imdb"], ["target", "blank", "placement", "top", "ngbPopover", "Visit Instagram", "popoverClass", "my-custom-class-insta", 1, "insta", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["placement", "top", "ngbPopover", "Visit Facebook", "popoverClass", "my-custom-class-fb", 1, "fa", "fa-facebook-square", "fbook"], ["target", "blank", "placement", "top", "ngbPopover", "Visit Twitter", "popoverClass", "my-custom-class-twit", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "twt"], ["id", "bText"]], template: function FullCastCrewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FullCastCrewComponent_div_4_Template, 11, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FullCastCrewComponent_ng_template_5_Template, 27, 14, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"]], styles: ["h1[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 10%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none !important;\n    position: relative;\n}\n\n.cast[_ngcontent-%COMP%] {\n    width: 76% !important;\n    overflow-x: auto;\n    overflow-y: hidden;\n    position: relative;\n    height: auto;\n    padding-bottom: 1%;\n}\n\n.cast[_ngcontent-%COMP%]::-webkit-scrollbar {\n    scrollbar-width: thin;\n    height: 1vh;\n}\n\n.cast[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background-color: rgba(82, 79, 79, 0.432) !important;\n    border: 0.5px solid rgba(82, 79, 79, 0.671) !important;\n}\n\n.cast[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color: rgb(78, 77, 77);\n}\n\n.crew[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    margin-left: 20% !important;\n}\n\n#castHeading[_ngcontent-%COMP%] {\n    color: white;\n    font: 500 36px 'Lato', sans-serif !important;\n    margin-left: 8% !important;\n    margin-bottom: -2% !important;\n}\n\n.newImg[_ngcontent-%COMP%] {\n    border-top-left-radius: .8rem !important;\n    border-top-right-radius: .8rem !important;\n}\n\n.row[_ngcontent-%COMP%] > .col-xs-3[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 25%;\n}\n\n.flex-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap!important;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row!important;\n}\n\n.adjust[_ngcontent-%COMP%] {\n    width: 93% !important;\n    border-radius: 1rem !important;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding-left: 1% !important;\n    padding-right: 1% !important;\n    padding-top: 2% !important;\n}\n\n.castName[_ngcontent-%COMP%] {\n    font: 500 22px/10px 'Lato', sans-serif !important;\n    vertical-align: middle !important;\n    margin-top: 1% !important;\n    margin-bottom: 0% !important;\n}\n\n.castPicture[_ngcontent-%COMP%] {\n    flex: 0 0 30% !important;\n    max-width: 30% !important;\n    margin-left: -11%;\n}\n\n.castName[_ngcontent-%COMP%] {\n    font: 500 22px/10px 'Lato', sans-serif !important;\n    vertical-align: middle !important;\n    margin-top: 1% !important;\n    margin-bottom: 0% !important;\n}\n\n.castInfo[_ngcontent-%COMP%] {\n    font: 500 15px/10px 'Roboto Condensed', sans-serif !important;\n    flex: 0 0 81% !important;\n    max-width: 81% !important;\n    margin-top: 2%;\n}\n\n.imdb[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    color: #f3ce13;\n}\n\n.insta[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    margin-left: 1% !important;\n    color: rgb(134, 38, 122)\n}\n\n.fbook[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    margin-left: 1% !important;\n    color: blue;\n    border-radius: none !important;\n}\n\n.twt[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    margin-left: 1% !important;\n}\n\n#aka[_ngcontent-%COMP%] {\n    font: 500 15px/22px 'Roboto Condensed', sans-serif !important;\n    flex: 0 0 81% !important;\n    margin-top: -1%;\n}\n\n#bText[_ngcontent-%COMP%] {\n    font: 600 25px/10px 'Poppins', sans-serif !important;\n    margin-top: 5% !important;\n}\n\n.bio[_ngcontent-%COMP%] {\n    text-align: justify;\n    font: 300 13px/20px 'Noto Sans JP', sans-serif !important;\n}\n\n  .my-custom-class-imdb {\n    text-align: center;\n    width: 20%;\n}\n\n  .my-custom-class-insta {\n    text-align: center;\n    width: 22%;\n}\n\n  .my-custom-class-fb {\n    text-align: center;\n    width: 22%;\n}\n\n  .my-custom-class-twit {\n    text-align: center;\n    width: 20%;\n    margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtY2FzdC1jcmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFHSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBS2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0Qsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoiZnVsbC1jYXN0LWNyZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGgze1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0gKi9cblxuaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FzdCB7XG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDElO1xufVxuXG4uY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICBoZWlnaHQ6IDF2aDtcbn1cblxuLmNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDc5LCA3OSwgMC40MzIpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDgyLCA3OSwgNzksIDAuNjcxKSAhaW1wb3J0YW50O1xufVxuXG4uY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3NywgNzcpO1xufVxuXG4uY3JldyB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4jY2FzdEhlYWRpbmcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250OiA1MDAgMzZweCAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogOCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMiUgIWltcG9ydGFudDtcbn1cblxuLm5ld0ltZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjhyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjhyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdz4uY29sLXhzLTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMCAwIDI1JTtcbn1cblxuLmZsZXgtbm93cmFwIHtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcbn1cblxuLmZsZXgtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbCFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWwhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdyFpbXBvcnRhbnQ7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3chaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3chaW1wb3J0YW50O1xufVxuXG4uYWRqdXN0IHtcbiAgICB3aWR0aDogOTMlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDElICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMiUgIWltcG9ydGFudDtcbn1cblxuLmNhc3ROYW1lIHtcbiAgICBmb250OiA1MDAgMjJweC8xMHB4ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXN0UGljdHVyZSB7XG4gICAgZmxleDogMCAwIDMwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMSU7XG59XG5cbi5jYXN0TmFtZSB7XG4gICAgZm9udDogNTAwIDIycHgvMTBweCAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY2FzdEluZm8ge1xuICAgIGZvbnQ6IDUwMCAxNXB4LzEwcHggJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDgxJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODElICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5pbWRiIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2YzY2UxMztcbn1cblxuLmluc3RhIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMSUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDEzNCwgMzgsIDEyMilcbn1cblxuLmZib29rIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMSUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50d3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xufVxuXG4jYWthIHtcbiAgICBmb250OiA1MDAgMTVweC8yMnB4ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA4MSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMSU7XG59XG5cbiNiVGV4dCB7XG4gICAgZm9udDogNjAwIDI1cHgvMTBweCAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xufVxuXG4uYmlvIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQ6IDMwMCAxM3B4LzIwcHggJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5teS1jdXN0b20tY2xhc3MtaW1kYiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbjo6bmctZGVlcCAubXktY3VzdG9tLWNsYXNzLWluc3RhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIyJTtcbn1cblxuOjpuZy1kZWVwIC5teS1jdXN0b20tY2xhc3MtZmIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjIlO1xufVxuXG46Om5nLWRlZXAgLm15LWN1c3RvbS1jbGFzcy10d2l0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */"] });


/***/ }),

/***/ "OK/2":
/*!***********************************************!*\
  !*** ./src/app/services/home-page.service.ts ***!
  \***********************************************/
/*! exports provided: HomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageService", function() { return HomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HomePageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/trending";
        return this.httpClient.get(URL);
    }
    getPopularMoviesData() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/popularmovies";
        return this.httpClient.get(URL);
    }
    getTopRatedMoviesData() {
        //console.log("Getting top rated movie data");
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/topRatedMovies";
        return this.httpClient.get(URL);
    }
    getTrendingMoviesData() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/trending_movies";
        return this.httpClient.get(URL);
    }
    getPopularTVData() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/popular_tv";
        return this.httpClient.get(URL);
    }
    getTopRatedTVShows() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/top_rated_tv";
        return this.httpClient.get(URL);
    }
    getTrendingTVShows() {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/trending_tv_shows";
        return this.httpClient.get(URL);
    }
    getDetails(id, category) {
        // id = 299534;
        // category = "movie";
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/watch/" + category + "/" + id;
        console.log("Getting details for youtube");
        console.log(URL);
        return this.httpClient.get(URL);
    }
    // getSearchData(query: any){
    //   let URL = "http://localhost:8080/searchData/"+query
    //   // return this.httpClient.get(URL)
    //   this.httpClient.get(URL)
    // }
    getReviews(id, category) {
        // id = 299534;
        // category = "movie";
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/review/" + category + "/" + id;
        return this.httpClient.get(URL);
    }
    getRecommendations(id, category) {
        // id = 299534;
        // category = "movie";
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/recommend/" + category + "/" + id;
        return this.httpClient.get(URL);
    }
    getSimilars(id, category) {
        // id = 299534;
        // category = "movie";
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/similar/" + category + "/" + id;
        return this.httpClient.get(URL);
    }
    getCast(id, category) {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/cast/" + category + "/" + id;
        return this.httpClient.get(URL);
    }
    getCastDetails(id) {
        let URL = "https://wt-311403.wl.r.appspot.com/apis571/castDetails/" + id;
        return this.httpClient.get(URL);
    }
}
HomePageService.ɵfac = function HomePageService_Factory(t) { return new (t || HomePageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomePageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomePageService, factory: HomePageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "T7Bx":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-option/search-option.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOptionComponent", function() { return SearchOptionComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







const _c0 = ["movieSearch"];
const _c1 = function () { return ["watch/r.media_type/r.id"]; };
function SearchOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngb-highlight", 5);
} if (rf & 2) {
    const r_r3 = ctx.result;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", r_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("result", r_r3.title)("term", ctx_r1.searchTermModel);
} }
const APIKEY = "e8067bXX";
const PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
class SearchOptionComponent {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this.searchGetCall(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }))));
    }
    searchGetCall(term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.httpClient.get("https://wt-311403.wl.r.appspot.com/apis571/search_multi/" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            //console.log(response);
            return response;
        }));
    }
    onSelect($event, input) {
        this.id = $event.item.id;
        this.media_type = $event.item.media_type;
        $event.preventDefault();
        input.value = '';
        console.log('/watch/' + String(this.media_type) + '/' + String(this.id));
        this.router.navigate(['/watch/' + String(this.media_type) + '/' + String(this.id)]);
    }
}
SearchOptionComponent.ɵfac = function SearchOptionComponent_Factory(t) { return new (t || SearchOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchOptionComponent, selectors: [["app-search-option"]], viewQuery: function SearchOptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.movieSearch = _t.first);
    } }, decls: 5, vars: 2, consts: [["rt", ""], [1, "form-group"], ["id", "typeahead-http", "type", "text", "placeholder", "search", 1, "form-control", 3, "ngbTypeahead", "resultTemplate", "selectItem"], ["input", ""], [1, "mr-1", 2, "width", "80px", 3, "src", "routerLink"], [3, "result", "term"]], template: function SearchOptionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SearchOptionComponent_ng_template_0_Template, 2, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectItem", function SearchOptionComponent_Template_input_selectItem_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.onSelect($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultTemplate", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: [".form-group[_ngcontent-%COMP%] {\n    width: 15%;\n    float: right;\n    margin-right: 2%;\n    background-color: black;\n}\n\ninput[_ngcontent-%COMP%] {\n    background-color: black;\n    border: 0;\n    border-radius: 0%;\n    border-bottom: 1px solid white;\n}\n\nng-template[_ngcontent-%COMP%] {\n    background-color: black;\n    width: 100%;\n    border: 2% black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1vcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNlYXJjaC1vcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxubmctdGVtcGxhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMiUgYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ "TERU":
/*!*************************************************************************!*\
  !*** ./src/app/components/trending-movies/trending-movies.component.ts ***!
  \*************************************************************************/
/*! exports provided: TrendingMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingMoviesComponent", function() { return TrendingMoviesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function TrendingMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function TrendingMoviesComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function TrendingMoviesComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingMoviesComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function TrendingMoviesComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingMoviesComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TrendingMoviesComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getTrendingMoviesData().subscribe(res => {
            this.data = res;
            let img = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                k++;
            }
            this.images.push(img);
        });
    }
}
TrendingMoviesComponent.ɵfac = function TrendingMoviesComponent_Factory(t) { return new (t || TrendingMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
TrendingMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendingMoviesComponent, selectors: [["app-trending-movies"]], viewQuery: function TrendingMoviesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "trending-movies-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function TrendingMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrendingMoviesComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.trending-movies-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n    visibility: hidden;\n    text-align: left;\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    visibility: visible;\n\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLW1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoidHJlbmRpbmctbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLnRyZW5kaW5nLW1vdmllcy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDMzO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ "X94C":
/*!*************************************************************!*\
  !*** ./src/app/components/tr-movies/tr-movies.component.ts ***!
  \*************************************************************/
/*! exports provided: TrMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrMoviesComponent", function() { return TrMoviesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function TrMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function TrMoviesComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function TrMoviesComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrMoviesComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function TrMoviesComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrMoviesComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TrMoviesComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getTopRatedMoviesData().subscribe(res => {
            this.data = res;
            let img = [];
            let n = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                n.push(this.data[k]['title']);
                k++;
            }
            this.images.push(img);
        });
    }
}
TrMoviesComponent.ɵfac = function TrMoviesComponent_Factory(t) { return new (t || TrMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
TrMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrMoviesComponent, selectors: [["app-tr-movies"]], viewQuery: function TrMoviesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "top-rated-movies-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function TrMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrMoviesComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.top-rated-movies-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n    visibility: hidden;\n    text-align: left;\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    visibility: visible;\n\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyLW1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoidHItbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLnRvcC1yYXRlZC1tb3ZpZXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIzAwMDAzMztcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IC0zMCU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/firstpage/firstpage.component */ "xf2n");
/* harmony import */ var _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/secondpage/secondpage.component */ "bFZo");
/* harmony import */ var _components_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/commonpage/commonpage.component */ "IAgu");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_search_option_search_option_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search-option/search-option.component */ "T7Bx");
/* harmony import */ var _components_first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/first-tab/first-tab.component */ "n5i4");
/* harmony import */ var _components_first_tab_child_first_tab_child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/first-tab-child/first-tab-child.component */ "7R79");
/* harmony import */ var _components_second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/second-tab/second-tab.component */ "APvU");
/* harmony import */ var _components_first_tv_first_tv_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/first-tv/first-tv.component */ "fxez");
/* harmony import */ var _components_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/popular-movies/popular-movies.component */ "v0zl");
/* harmony import */ var _components_temp_caro_temp_caro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/temp-caro/temp-caro.component */ "fjyx");
/* harmony import */ var _components_tr_movies_tr_movies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tr-movies/tr-movies.component */ "X94C");
/* harmony import */ var _components_trending_movies_trending_movies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/trending-movies/trending-movies.component */ "TERU");
/* harmony import */ var _components_popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/popular-tv/popular-tv.component */ "rhcf");
/* harmony import */ var _components_top_rated_tv_shows_top_rated_tv_shows_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/top-rated-tv-shows/top-rated-tv-shows.component */ "wCNT");
/* harmony import */ var _components_trending_tv_shows_trending_tv_shows_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/trending-tv-shows/trending-tv-shows.component */ "rXUS");
/* harmony import */ var _components_movie_tv_details_movie_tv_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/movie-tv-details/movie-tv-details.component */ "ev6d");
/* harmony import */ var _components_full_cast_crew_full_cast_crew_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/full-cast-crew/full-cast-crew.component */ "M9ov");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "srbx");
/* harmony import */ var _components_recommended_movies_recommended_movies_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/recommended-movies/recommended-movies.component */ "rAYN");
/* harmony import */ var _components_similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/similar-movies/similar-movies.component */ "BahR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
        _components_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_9__["FirstpageComponent"],
        _components_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_10__["SecondpageComponent"],
        _components_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_11__["CommonpageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _components_search_option_search_option_component__WEBPACK_IMPORTED_MODULE_13__["SearchOptionComponent"],
        _components_first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_14__["FirstTabComponent"],
        _components_first_tab_child_first_tab_child_component__WEBPACK_IMPORTED_MODULE_15__["FirstTabChildComponent"],
        _components_second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_16__["SecondTabComponent"],
        _components_first_tv_first_tv_component__WEBPACK_IMPORTED_MODULE_17__["FirstTvComponent"],
        _components_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_18__["PopularMoviesComponent"],
        _components_temp_caro_temp_caro_component__WEBPACK_IMPORTED_MODULE_19__["TempCaroComponent"],
        _components_tr_movies_tr_movies_component__WEBPACK_IMPORTED_MODULE_20__["TrMoviesComponent"],
        _components_trending_movies_trending_movies_component__WEBPACK_IMPORTED_MODULE_21__["TrendingMoviesComponent"],
        _components_popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_22__["PopularTvComponent"],
        _components_top_rated_tv_shows_top_rated_tv_shows_component__WEBPACK_IMPORTED_MODULE_23__["TopRatedTvShowsComponent"],
        _components_trending_tv_shows_trending_tv_shows_component__WEBPACK_IMPORTED_MODULE_24__["TrendingTvShowsComponent"],
        _components_movie_tv_details_movie_tv_details_component__WEBPACK_IMPORTED_MODULE_25__["MovieTvDetailsComponent"],
        _components_full_cast_crew_full_cast_crew_component__WEBPACK_IMPORTED_MODULE_26__["FullCastCrewComponent"],
        _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_27__["ReviewsComponent"],
        _components_recommended_movies_recommended_movies_component__WEBPACK_IMPORTED_MODULE_28__["RecommendedMoviesComponent"],
        _components_similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_29__["SimilarMoviesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"]] }); })();


/***/ }),

/***/ "bFZo":
/*!***************************************************************!*\
  !*** ./src/app/components/secondpage/secondpage.component.ts ***!
  \***************************************************************/
/*! exports provided: SecondpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageComponent", function() { return SecondpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonpage/commonpage.component */ "IAgu");


class SecondpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondpageComponent.ɵfac = function SecondpageComponent_Factory(t) { return new (t || SecondpageComponent)(); };
SecondpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondpageComponent, selectors: [["app-secondpage"]], decls: 3, vars: 0, template: function SecondpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is second page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-commonpage");
    } }, directives: [_commonpage_commonpage_component__WEBPACK_IMPORTED_MODULE_1__["CommonpageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmRwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ev6d":
/*!***************************************************************************!*\
  !*** ./src/app/components/movie-tv-details/movie-tv-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: MovieTvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTvDetailsComponent", function() { return MovieTvDetailsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _full_cast_crew_full_cast_crew_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../full-cast-crew/full-cast-crew.component */ "M9ov");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reviews/reviews.component */ "srbx");
/* harmony import */ var _recommended_movies_recommended_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../recommended-movies/recommended-movies.component */ "rAYN");
/* harmony import */ var _similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../similar-movies/similar-movies.component */ "BahR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












const _c0 = ["selfClosingAlert"];
function MovieTvDetailsComponent_ngb_alert_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieTvDetailsComponent_ngb_alert_21_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.successMessage);
} }
class MovieTvDetailsComponent {
    constructor(route, homePageService) {
        this.route = route;
        this.homePageService = homePageService;
        this.title = '';
        this.tagline = '';
        this.runtime = '';
        this.genres = '';
        this.spoken = '';
        this.desc = '';
        this.pic = '';
        this.tweet = '';
        this.face = '';
        this.name = '';
        this.buttonState = "";
        this.alertType = "";
        this.category = '';
        this.id = 0;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.storageStructure = {};
        this.cache = [];
        this.contStructure = {};
        this.contCache = [];
        this.flag = false;
        this.successMessage = '';
    }
    ngOnInit() {
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(1000000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this.fetchData();
    }
    watchList(mediaType, mediaId) {
        var ls = localStorage.getItem('watchList');
        var obj = JSON.parse(ls || '[]');
        var index = 0;
        var ind = -1;
        if (this.buttonState == "Add to Watchlist") {
            this.buttonState = "Remove from Watchlist";
            this.alertType = "success";
            this._success.next("Added to watchlist.");
            // Add movie to watch list
            if (obj && obj.length > 0) {
                obj.forEach((item) => {
                    if (item["id"] === mediaId) {
                        ind = obj.indexOf(item);
                    }
                });
                if (ind == -1) {
                    this.storageStructure = { "media": mediaType, "id": mediaId, "name": this.name, "picture": this.pic };
                    obj.push(this.storageStructure);
                    localStorage.setItem("watchList", JSON.stringify(obj));
                }
            }
            else {
                this.storageStructure = { "media": mediaType, "id": mediaId, "name": this.name, "picture": this.pic };
                this.cache.push(this.storageStructure);
                localStorage.setItem("watchList", JSON.stringify(this.cache));
            }
        }
        else if (this.buttonState == "Remove from Watchlist") {
            this.buttonState = "Add to Watchlist";
            this.alertType = "danger";
            this._success.next("Removed from watchlist.");
            // Remove movie from Watchlist
            obj.forEach((item) => {
                if (item["id"] === mediaId) {
                    index = obj.indexOf(item);
                    obj.splice(index, 1);
                }
            });
            localStorage.setItem("watchList", JSON.stringify(obj));
        }
    }
    fetchData() {
        this.route.params.subscribe(params => {
            this.category = params['category'];
            this.id = params['id'];
        });
        this.homePageService.getDetails(this.id, this.category).subscribe(res => {
            var localList = localStorage.getItem('watchList');
            var localObj = JSON.parse(localList || '[]');
            var contList = localStorage.getItem('continueList');
            var contObj = JSON.parse(contList || '[]');
            var index = -1;
            var i = -1;
            var check = false;
            console.log(localStorage);
            this.data = res;
            this.data = this.data[0];
            this.videoId = this.data['key'];
            this.pic = 'https://image.tmdb.org/t/p/w500' + this.data['poster_path'];
            console.log("picture for localstorage", this.pic);
            //console.log(this.category);
            if (this.category == "movie") {
                this.title = this.data['title'];
            }
            else {
                this.title = this.data['title'];
                //console.log(this.data);
            }
            this.tagline = this.data['tagline'];
            this.release_date = this.data['release_date'].slice(0, 4);
            this.vote_average = this.data['vote_average'];
            if (this.data['runtime'] > 60)
                this.runtime = Math.trunc(this.data['runtime'] / 60) + "hrs " + this.data['runtime'] % 60 + "mins";
            else if (this.data['runtime'] = 60)
                this.runtime = Math.trunc(this.data['runtime'] / 60) + "hr";
            else
                this.runtime = this.data['runtime'] % 60 + "mins";
            //console.log(this.data['genres']);
            for (var i = 0; i < this.data['genres'].length; i++) {
                this.genres += this.data['genres'][i]['name'];
                if (i < this.data['genres'].length - 1) {
                    this.genres += ", ";
                }
            }
            for (var i = 0; i < this.data['spoken_languages'].length; i++) {
                this.spoken += this.data['spoken_languages'][i]['english_name'];
                if (i < this.data['spoken_languages'].length - 1) {
                    this.spoken += ", ";
                }
            }
            this.desc = this.data['overview'];
            this.tweet = "Watch " + this.title + "%0A" + "https://www.youtube.com/watch?v=" + this.videoId + "%0A%23USC%20%23CSCI571%20%23FightOn";
            this.face = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.videoId;
            console.log(this.tweet);
            console.log(this.data);
            if (localObj && localObj.length > 0) {
                for (let i = 0; i < localObj.length; i++) {
                    if (this.id == localObj[i]["id"]) {
                        index = localObj.indexOf(localObj[i]);
                        check = true;
                        break;
                    }
                }
                if (check) {
                    this.buttonState = "Remove from Watchlist";
                    localObj.push(localObj[index]);
                    localObj.splice(index, 1);
                    localStorage.setItem("watchList", JSON.stringify(localObj));
                }
                else {
                    this.buttonState = "Add to Watchlist";
                }
            }
            else {
                this.buttonState = "Add to Watchlist";
            }
            if (contObj && contObj.length > 0) {
                contObj.forEach((item) => {
                    if (item["id"] === this.id) {
                        i = contObj.indexOf(item);
                    }
                });
                if (i == -1) {
                    if (contObj.length > 25) {
                        contObj.splice(0, 1);
                        localStorage.setItem("continueList", JSON.stringify(contObj));
                    }
                    this.contStructure = { "media": this.category, "id": this.id, "name": this.title, "picture": 'https://image.tmdb.org/t/p/w500' + this.data['poster_path'] };
                    contObj.push(this.contStructure);
                    localStorage.setItem("continueList", JSON.stringify(contObj));
                }
                else if (i > -1) {
                    contObj.push(contObj[i]);
                    contObj.splice(i, 1);
                    localStorage.setItem("continueList", JSON.stringify(contObj));
                }
            }
            else {
                this.contStructure = { "media": this.category, "id": this.id, "name": this.name, "picture": 'https://image.tmdb.org/t/p/w500' + this.data['poster_path'] };
                this.contCache.push(this.contStructure);
                localStorage.setItem("continueList", JSON.stringify(this.contCache));
            }
            console.log(contObj);
        });
    }
}
MovieTvDetailsComponent.ɵfac = function MovieTvDetailsComponent_Factory(t) { return new (t || MovieTvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__["HomePageService"])); };
MovieTvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieTvDetailsComponent, selectors: [["app-movie-tv-details"]], viewQuery: function MovieTvDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 43, vars: 15, consts: [[1, "container"], [1, "row"], [1, "col-s-2"], [3, "videoId", "width", "height"], [1, "col-s-2", 2, "margin-left", "3%", "color", "rgba(255, 255, 255, 0.719)", "line-height", "1.2"], [2, "width", "70%"], ["type", "button", 1, "btn", "btn-primary", "watchButton", 3, "click"], [3, "type", "closed", 4, "ngIf"], [2, "margin-top", "1%"], [2, "color", "rgba(255, 255, 255, 0.651)", "width", "90%"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "twee"], ["target", "_blank", 3, "href"], [1, "fa", "fa-facebook-square", "face"], [3, "type", "closed"], ["selfClosingAlert", ""]], template: function MovieTvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "youtube-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Genres :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Spoken Languages : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieTvDetailsComponent_Template_button_click_19_listener() { return ctx.watchList(ctx.category, ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MovieTvDetailsComponent_ngb_alert_21_Template, 3, 2, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "app-full-cast-crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "app-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-recommended-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "app-similar-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx.videoId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 600)("height", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.release_date, " \u00A0|\u00A0 \u2605 ", ctx.vote_average, " \u00A0|\u00A0 ", ctx.runtime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.genres, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.spoken, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonState);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/intent/tweet?text=", ctx.tweet, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.face, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _full_cast_crew_full_cast_crew_component__WEBPACK_IMPORTED_MODULE_7__["FullCastCrewComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"], _recommended_movies_recommended_movies_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedMoviesComponent"], _similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_10__["SimilarMoviesComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlert"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    margin-left: 13%;\n}\n\nh1[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.89);\n    width: 60%;\n}\n\nh5[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.87);\n}\n\n.twee[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n\n.face[_ngcontent-%COMP%] {\n    margin-left: 1%;\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLXR2LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6Im1vdmllLXR2LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5KTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG5oNSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG59XG5cbi50d2VlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5mYWNlIHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "fjyx":
/*!*************************************************************!*\
  !*** ./src/app/components/temp-caro/temp-caro.component.ts ***!
  \*************************************************************/
/*! exports provided: TempCaroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempCaroComponent", function() { return TempCaroComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function TempCaroComponent_ngb_carousel_4_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function TempCaroComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TempCaroComponent_ngb_carousel_4_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function TempCaroComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TempCaroComponent_ngb_carousel_4_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function TempCaroComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TempCaroComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TempCaroComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
        this.resumeWatching = [];
        this.totalRW = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getPopularMoviesData().subscribe(res => {
            this.data = res;
            let img = [];
            var tempContList = [];
            var contData = localStorage.getItem('continueList');
            var contListData = (JSON.parse(contData || '[]')).reverse();
            for (var i = 0; i < this.data.length; i++) {
                if (i != 0 && i % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[i]);
            }
            this.images.push(img);
            if (contListData && contListData.length > 0) {
                this.resumeWatching = contListData;
            }
            for (let i = 0; i < this.resumeWatching.length; i++) {
                // Push 6 items at once
                if (tempContList.length == 6) {
                    this.totalRW.push(tempContList);
                    tempContList = [];
                }
                tempContList.push(this.resumeWatching[i]);
            }
            if (tempContList.length != 0) {
                this.totalRW.push(tempContList);
            }
        });
    }
}
TempCaroComponent.ɵfac = function TempCaroComponent_Factory(t) { return new (t || TempCaroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
TempCaroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TempCaroComponent, selectors: [["app-temp-caro"]], viewQuery: function TempCaroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "container1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "card"], ["alt", "Random first slide", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function TempCaroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TempCaroComponent_ngb_carousel_4_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.container1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n\n#popMov[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 40px;\n    margin-top: 2%;\n    margin-left: 7.5%;\n}\n\n.popularMovies[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXAtY2Fyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEIiLCJmaWxlIjoidGVtcC1jYXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLmNvbnRhaW5lcjEge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMwJTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNwb3BNb3Yge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDcuNSU7XG59XG5cbi5wb3B1bGFyTW92aWVzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"] });


/***/ }),

/***/ "fxez":
/*!***********************************************************!*\
  !*** ./src/app/components/first-tv/first-tv.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTvComponent", function() { return FirstTvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FirstTvComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstTvComponent.ɵfac = function FirstTvComponent_Factory(t) { return new (t || FirstTvComponent)(); };
FirstTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstTvComponent, selectors: [["app-first-tv"]], decls: 2, vars: 0, template: function FirstTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "first-tv works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdC10di5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_option_search_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-option/search-option.component */ "T7Bx");




class NavbarComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        //public title: string = "Nav Bar";
        this.screenSize = false;
    }
    ngOnInit() {
        this.screenSize = this.breakpointObserver.isMatched('(max-width: 599px)');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 9, vars: 0, consts: [["routerLink", "/"], ["routerLink", "/mylist"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-search-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _search_option_search_option_component__WEBPACK_IMPORTED_MODULE_3__["SearchOptionComponent"]], styles: ["header[_ngcontent-%COMP%] {\n    background-color: black;\n    padding: 1%;\n}\n\na[_ngcontent-%COMP%] {\n    color: white;\n    text-decoration: none;\n    padding: 1%;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG5hIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getAllPost() {
        let URL = "http://localhost:8080/posts";
        return this.httpclient.get(URL);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is home page!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "n5i4":
/*!*************************************************************!*\
  !*** ./src/app/components/first-tab/first-tab.component.ts ***!
  \*************************************************************/
/*! exports provided: FirstTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTabComponent", function() { return FirstTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popular-movies/popular-movies.component */ "v0zl");
/* harmony import */ var _tr_movies_tr_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tr-movies/tr-movies.component */ "X94C");
/* harmony import */ var _trending_movies_trending_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trending-movies/trending-movies.component */ "TERU");
/* harmony import */ var _popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popular-tv/popular-tv.component */ "rhcf");
/* harmony import */ var _top_rated_tv_shows_top_rated_tv_shows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../top-rated-tv-shows/top-rated-tv-shows.component */ "wCNT");
/* harmony import */ var _trending_tv_shows_trending_tv_shows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trending-tv-shows/trending-tv-shows.component */ "rXUS");









class FirstTabComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.data = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        this.homePageService.getData().subscribe(res => {
            this.data = res;
        });
    }
}
FirstTabComponent.ɵfac = function FirstTabComponent_Factory(t) { return new (t || FirstTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_1__["HomePageService"])); };
FirstTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstTabComponent, selectors: [["app-first-tab"]], decls: 16, vars: 0, template: function FirstTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-popular-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tr-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-trending-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-popular-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-top-rated-tv-shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-trending-tv-shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_3__["PopularMoviesComponent"], _tr_movies_tr_movies_component__WEBPACK_IMPORTED_MODULE_4__["TrMoviesComponent"], _trending_movies_trending_movies_component__WEBPACK_IMPORTED_MODULE_5__["TrendingMoviesComponent"], _popular_tv_popular_tv_component__WEBPACK_IMPORTED_MODULE_6__["PopularTvComponent"], _top_rated_tv_shows_top_rated_tv_shows_component__WEBPACK_IMPORTED_MODULE_7__["TopRatedTvShowsComponent"], _trending_tv_shows_trending_tv_shows_component__WEBPACK_IMPORTED_MODULE_8__["TrendingTvShowsComponent"]], styles: ["body[_ngcontent-%COMP%] {\n    top: 0%;\n    background-color: #000033;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXRhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJmaXJzdC10YWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIHRvcDogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbn0iXX0= */"] });


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["carousel"];
function CarouselComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r3 = ctx_r5.index;
    const img_r2 = ctx_r5.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.titles[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://www.google.fr/?q=Number+", i_r3 + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_4_ng_template_0_Template, 6, 3, "ng-template", 4);
} }
class CarouselComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
        this.titles = [];
        this.ids = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getData().subscribe(res => {
            this.data = res;
            for (let i of this.data) {
                this.images.push("https://image.tmdb.org/t/p/original" + i['poster_path']);
                this.titles.push(i['title']);
                this.ids.push(i['id']);
            }
        });
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 5, vars: 4, consts: [[1, "caro-container"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-caption"], ["target", "_blank", 3, "href"], [1, "picsum-img-wrapper"], [3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CarouselComponent_Template_ngb_carousel_slide_2_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_4_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: [".caro-container[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    margin-right: 15%;\n    height: 30%;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n    height: 45vh;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    transition: transform .2s;\n}\n\nngb-carousel[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA0NXZoO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cblxubmdiLWNhcm91c2VsOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */"] });


/***/ }),

/***/ "rAYN":
/*!*******************************************************************************!*\
  !*** ./src/app/components/recommended-movies/recommended-movies.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RecommendedMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedMoviesComponent", function() { return RecommendedMoviesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["carousel"];
function RecommendedMoviesComponent_ngb_carousel_4_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function RecommendedMoviesComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedMoviesComponent_ngb_carousel_4_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function RecommendedMoviesComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecommendedMoviesComponent_ngb_carousel_4_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function RecommendedMoviesComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedMoviesComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class RecommendedMoviesComponent {
    constructor(route, homePageService) {
        this.route = route;
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        let category = '';
        let id = 0;
        this.route.params.subscribe(params => {
            category = params['category'];
            id = params['id'];
        });
        this.homePageService.getRecommendations(id, category).subscribe(res => {
            this.data = res;
            let img = [];
            for (var i = 0; i < this.data.length; i++) {
                if (i != 0 && i % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[i]);
            }
            this.images.push(img);
        });
    }
}
RecommendedMoviesComponent.ɵfac = function RecommendedMoviesComponent_Factory(t) { return new (t || RecommendedMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_3__["HomePageService"])); };
RecommendedMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendedMoviesComponent, selectors: [["app-recommended-movies"]], viewQuery: function RecommendedMoviesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "container1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], ["rel", "nofollow noopener noreferrer", 3, "routerLink"], [1, "card"], ["alt", "Random first slide", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function RecommendedMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Recommended Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecommendedMoviesComponent_ngb_carousel_4_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.container1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGVkLW1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InJlY29tbWVuZGVkLW1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG59XG5cbi5jb250YWluZXIxIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IC0zMCU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "rXUS":
/*!*****************************************************************************!*\
  !*** ./src/app/components/trending-tv-shows/trending-tv-shows.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrendingTvShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingTvShowsComponent", function() { return TrendingTvShowsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function TrendingTvShowsComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function TrendingTvShowsComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingTvShowsComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function TrendingTvShowsComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendingTvShowsComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function TrendingTvShowsComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendingTvShowsComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TrendingTvShowsComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getTrendingTVShows().subscribe(res => {
            this.data = res;
            let img = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                k++;
            }
            this.images.push(img);
        });
    }
}
TrendingTvShowsComponent.ɵfac = function TrendingTvShowsComponent_Factory(t) { return new (t || TrendingTvShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
TrendingTvShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendingTvShowsComponent, selectors: [["app-trending-tv-shows"]], viewQuery: function TrendingTvShowsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "trending-tv-shows-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function TrendingTvShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrendingTvShowsComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.trending-tv-shows-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n    visibility: hidden;\n    text-align: left;\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    visibility: visible;\n\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLXR2LXNob3dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJ0cmVuZGluZy10di1zaG93cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG59XG5cbi50cmVuZGluZy10di1zaG93cy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDMzO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ "rhcf":
/*!***************************************************************!*\
  !*** ./src/app/components/popular-tv/popular-tv.component.ts ***!
  \***************************************************************/
/*! exports provided: PopularTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularTvComponent", function() { return PopularTvComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function PopularTvComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function PopularTvComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularTvComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function PopularTvComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularTvComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function PopularTvComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularTvComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class PopularTvComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getPopularTVData().subscribe(res => {
            this.data = res;
            let img = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                k++;
            }
            this.images.push(img);
        });
    }
}
PopularTvComponent.ɵfac = function PopularTvComponent_Factory(t) { return new (t || PopularTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
PopularTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularTvComponent, selectors: [["app-popular-tv"]], viewQuery: function PopularTvComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "popular-tv-shows-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function PopularTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopularTvComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.popular-tv-shows-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n    visibility: hidden;\n    text-align: left;\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    visibility: visible;\n\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXItdHYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InBvcHVsYXItdHYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xufVxuXG4ucG9wdWxhci10di1zaG93cy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDMzO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ "srbx":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ReviewsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r2["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", i_r2["author"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 \u00A0", i_r2["rating"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", i_r2["author"], " on ", i_r2["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", i_r2["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { "margin-top": "3%", "margin-left": "10%" }; };
function ReviewsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewsComponent_div_5_div_1_Template, 19, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
const _c1 = function () { return { "margin-left": "1%", "margin-top": "1%" }; };
class ReviewsComponent {
    constructor(route, homePageService) {
        this.route = route;
        this.homePageService = homePageService;
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        let category = '';
        let id = 0;
        this.route.params.subscribe(params => {
            category = params['category'];
            id = params['id'];
        });
        this.homePageService.getReviews(id, category).subscribe(res => {
            this.data = res;
            console.log(this.data);
            this.count = this.data.length;
        });
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], decls: 6, vars: 4, consts: [[3, "ngStyle"], ["id", "castHeading"], ["id", "count"], ["class", "container", 3, "ngStyle", 4, "ngIf"], [1, "container", 3, "ngStyle"], ["class", "card reviews", 4, "ngFor", "ngForOf"], [1, "card", "reviews"], [1, "card-body"], [1, "row"], [1, "col-4", "reviewPic"], [1, "profile-pic", 3, "src"], [1, "col-8", "reviewText"], [1, "topRev"], [1, "rText"], [1, "round-rating"], [1, "reviewRate"], [1, "info"], [1, "userInfo"], [1, "ellipsis"], ["target", "blank", 1, "readText", 3, "href"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewsComponent_div_5_Template, 2, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n    text-decoration: underline !important;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    display: block;\n    box-sizing: border-box;\n    padding: 5%;\n    height: 12.5vh;\n    width: 30%;\n    margin-left: 15%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none !important;\n    position: relative;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding-left: 1% !important;\n    padding-right: 1% !important;\n    padding-top: 2% !important;\n}\n\n#castHeading[_ngcontent-%COMP%] {\n    color: white;\n    font: 500 36px 'Lato', sans-serif !important;\n    margin-left: 8% !important;\n    margin-bottom: -2% !important;\n}\n\n#count[_ngcontent-%COMP%] {\n    color: rgba(175, 167, 167, 0.658);\n    ;\n    font: 700 36px 'Lato', sans-serif !important;\n    margin-left: 1% !important;\n}\n\n.reviews[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n    border-radius: 10px !important;\n}\n\n.reviewText[_ngcontent-%COMP%] {\n    margin-left: 2%;\n    margin-top: 2%;\n    max-width: 100% !important;\n    flex-wrap: wrap;\n    align-items: baseline;\n    flex: 0 0 83% !important;\n}\n\n.topRev[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    float: left;\n}\n\n.rText[_ngcontent-%COMP%] {\n    font: 400 22px/10px 'Lato', sans-serif !important;\n    color: black !important;\n    display: inline-block;\n}\n\n.round-rating[_ngcontent-%COMP%] {\n    width: 20%;\n    float: left;\n    margin-top: -1%;\n    margin-left: 1%;\n}\n\n.reviewRate[_ngcontent-%COMP%] {\n    background-color: black;\n    border-radius: 300px;\n    color: #fff;\n    padding: 7% 10% 7% 10%;\n    margin-left: 10%;\n}\n\n.info[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 5%;\n    float: left;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n    font: 400 15px/10px 'Lato', sans-serif !important;\n    color: rgba(78, 77, 77, 0.658);\n    margin-bottom: 4% !important;\n}\n\n.ellipsis[_ngcontent-%COMP%] {\n    font: 400 15px 'Lato', sans-serif !important;\n    text-align: justify;\n    overflow: hidden;\n    position: relative;\n    line-height: 1.2em;\n    max-height: 3.6em;\n    padding-right: 1em;\n    color: rgba(5, 5, 5, 0.795);\n    margin-bottom: 2% !important;\n}\n\n.ellipsis[_ngcontent-%COMP%]:before {\n    content: '...';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n}\n\n.ellipsis[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    width: 1em;\n    height: 1em;\n    margin-top: 0.2em;\n    background: #fdfdfc;\n}\n\n.readText[_ngcontent-%COMP%] {\n    font: 400 15px/10px 'Lato', sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQzs7SUFFakMsNENBQTRDO0lBQzVDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQiLCJmaWxlIjoicmV2aWV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBoZWlnaHQ6IDEyLjV2aDtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAyJSAhaW1wb3J0YW50O1xufVxuXG4jY2FzdEhlYWRpbmcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250OiA1MDAgMzZweCAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogOCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMiUgIWltcG9ydGFudDtcbn1cblxuI2NvdW50IHtcbiAgICBjb2xvcjogcmdiYSgxNzUsIDE2NywgMTY3LCAwLjY1OCk7XG4gICAgO1xuICAgIGZvbnQ6IDcwMCAzNnB4ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3VGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZmxleDogMCAwIDgzJSAhaW1wb3J0YW50O1xufVxuXG4udG9wUmV2IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yVGV4dCB7XG4gICAgZm9udDogNDAwIDIycHgvMTBweCAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yb3VuZC1yYXRpbmcge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTElO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLnJldmlld1JhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDclIDEwJSA3JSAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlckluZm8ge1xuICAgIGZvbnQ6IDQwMCAxNXB4LzEwcHggJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYmEoNzgsIDc3LCA3NywgMC42NTgpO1xuICAgIG1hcmdpbi1ib3R0b206IDQlICFpbXBvcnRhbnQ7XG59XG5cbi5lbGxpcHNpcyB7XG4gICAgZm9udDogNDAwIDE1cHggJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgbWF4LWhlaWdodDogMy42ZW07XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIGNvbG9yOiByZ2JhKDUsIDUsIDUsIDAuNzk1KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZWxsaXBzaXM6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnLi4uJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uZWxsaXBzaXM6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZGZkZmM7XG59XG5cbi5yZWFkVGV4dCB7XG4gICAgZm9udDogNDAwIDE1cHgvMTBweCAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "v0zl":
/*!***********************************************************************!*\
  !*** ./src/app/components/popular-movies/popular-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: PopularMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMoviesComponent", function() { return PopularMoviesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function PopularMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PopularMoviesComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularMoviesComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function PopularMoviesComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PopularMoviesComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function PopularMoviesComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopularMoviesComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class PopularMoviesComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getPopularMoviesData().subscribe(res => {
            this.data = res;
            let img = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                k++;
            }
            // for (let i = 0; i < this.data.length; i++) {
            //   if (i != 0 && i % 6 == 0) {
            //     this.images.push(img)
            //     img = []
            //   }
            //   img.push(this.data[i]);
            // }
            this.images.push(img);
        });
    }
}
PopularMoviesComponent.ɵfac = function PopularMoviesComponent_Factory(t) { return new (t || PopularMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
PopularMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopularMoviesComponent, selectors: [["app-popular-movies"]], viewQuery: function PopularMoviesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "popular-movies-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"]], template: function PopularMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopularMoviesComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.popular-movies-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXItbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJwb3B1bGFyLW1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG59XG5cbi5wb3B1bGFyLW1vdmllcy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDMzO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/first-tab/first-tab.component */ "n5i4");
/* harmony import */ var _components_movie_tv_details_movie_tv_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-tv-details/movie-tv-details.component */ "ev6d");
/* harmony import */ var _components_second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/second-tab/second-tab.component */ "APvU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    // {path: '', component: LandingPageComponent},  
    { path: '', component: _components_first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_1__["FirstTabComponent"] },
    { path: 'mylist', component: _components_second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_3__["SecondTabComponent"] },
    { path: 'watch/:category/:id', component: _components_movie_tv_details_movie_tv_details_component__WEBPACK_IMPORTED_MODULE_2__["MovieTvDetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wCNT":
/*!*******************************************************************************!*\
  !*** ./src/app/components/top-rated-tv-shows/top-rated-tv-shows.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TopRatedTvShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedTvShowsComponent", function() { return TopRatedTvShowsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-page.service */ "OK/2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function TopRatedTvShowsComponent_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", y_r5["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", y_r5["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](y_r5["title"]);
} }
function TopRatedTvShowsComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopRatedTvShowsComponent_ngb_carousel_3_1_ng_template_0_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", x_r2);
} }
function TopRatedTvShowsComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopRatedTvShowsComponent_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 3);
} }
function TopRatedTvShowsComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopRatedTvShowsComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TopRatedTvShowsComponent {
    constructor(homePageService) {
        this.homePageService = homePageService;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.images = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    fetchData() {
        this.homePageService.getTopRatedTVShows().subscribe(res => {
            this.data = res;
            let img = [];
            let k = 0;
            while (k < this.data.length) {
                if (k != 0 && k % 6 == 0) {
                    this.images.push(img);
                    img = [];
                }
                img.push(this.data[k]);
                k++;
            }
            this.images.push(img);
        });
    }
}
TopRatedTvShowsComponent.ɵfac = function TopRatedTvShowsComponent_Factory(t) { return new (t || TopRatedTvShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
TopRatedTvShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopRatedTvShowsComponent, selectors: [["app-top-rated-tv-shows"]], viewQuery: function TopRatedTvShowsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "top-rated-tv-shows-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "row-cols-1", "row-cols-md-6"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [3, "routerLink"], [1, "card"], ["alt", "R", 1, "picsum-img-wrapper", 3, "src"], [1, "carousel-caption"]], template: function TopRatedTvShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopRatedTvShowsComponent_ngb_carousel_3_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    color: white;\n    margin-left: 8%;\n}\n\n.top-rated-tv-shows-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1%;\n    height: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 0.5px solid #000033;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    margin-bottom: -30%;\n    visibility: hidden;\n    text-align: left;\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    visibility: visible;\n\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    outline: none;\n    padding-right: 5%;\n    padding-left: 5%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1yYXRlZC10di1zaG93cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoidG9wLXJhdGVkLXR2LXNob3dzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLnRvcC1yYXRlZC10di1zaG93cy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDMzO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ "xf2n":
/*!*************************************************************!*\
  !*** ./src/app/components/firstpage/firstpage.component.ts ***!
  \*************************************************************/
/*! exports provided: FirstpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstpageComponent", function() { return FirstpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FirstpageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" id: ", post_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" title: ", post_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" userid: ", post_r2.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" body: ", post_r2.body, "");
} }
function FirstpageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstpageComponent_div_4_div_1_Template, 10, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
class FirstpageComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.message = "Passing the data";
        this.posts = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        this.postsService.getAllPost().subscribe(res => {
            this.posts = res;
        });
    }
}
FirstpageComponent.ɵfac = function FirstpageComponent_Factory(t) { return new (t || FirstpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
FirstpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstpageComponent, selectors: [["app-firstpage"]], decls: 5, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function FirstpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is first page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirstpageComponent_div_4_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map