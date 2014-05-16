window.onload = function () {
    FastClick.attach(document.body)
};
var app = angular.module("app", ["ngRoute", "ngAnimate", "ngSanitize"]);
app.controller("AppController", ["$scope", "$rootScope",
    function (e, t) {
        t.scrollableContent = document.getElementById("scrollable-content-area"), t.labelToolbar = document.getElementById("label-toolbar"), t.content = document.getElementById("content"), t.mainMenu = document.getElementById("list-menu-left"), t.setLanguage = function (e) {
            "en" === e ? (t.isPortuguese = !1, t.isEnglish = !0) : (t.isPortuguese = !0, t.isEnglish = !1)
        }, t.setLanguage("pt"), e.isRouting = !1, e.snapperTransitionSpeed = .2, e.snapper = new Snap({
            element: t.content,
            disable: "right",
            transitionSpeed: e.snapperTransitionSpeed
        }), e.openSnapper = function () {
            "closed" === e.snapper.state().state ? e.snapper.open("left") : e.snapper.close()
        }, e.$on("$routeChangeStart", function () {
            e.isRouting = !0
        }), e.$on("$routeChangeSuccess", function () {
            e.isRouting = !1, t.scrollableContent.scrollTop = 0
        }), e.resetYpositionMainMenu = function () {
            t.mainMenu.style.paddingTop = window.innerHeight / 6 + "px"
        }, e.setScrollableAreaForMobile = function () {
            t.scrollableContent.style.height = window.innerHeight - 50 + "px"
        }, e.setScrollableAreaForDesktop = function () {
            t.scrollableContent.style.height = "482px"
        }, e.resetScrollableAreaHeight = function () {
            var t = window.innerWidth;
            1024 > t ? e.setScrollableAreaForMobile() : e.setScrollableAreaForDesktop()
        }, window.onresize = function () {
            e.resetScrollableAreaHeight()
        }, e.resetScrollableAreaHeight(), e.resetYpositionMainMenu(), window.addEventListener("orientationchange", function () {
            e.resetYpositionMainMenu(), e.resetScrollableAreaHeight()
        }, !1)
    }]), app.factory("AppEventManager", ["$rootScope",
    function (e) {
        var t = {};
        return t.tellMenuNewSectionLoaded = function (t) {
            e.$broadcast("NewSectionLoaded", t)
        }, t
    }]), app.config(["$routeProvider",
    function (e) {
        e.when("/about", {
            templateUrl: "partials/about.html",
            controller: "AboutController"
        }).when("/quotes", {
            templateUrl: "partials/quotes.html",
            controller: "QuotesController"
        }).when("/instructors", {
            templateUrl: "partials/instructors.html",
            controller: "InstructorsController"
        }).when("/agenda", {
            templateUrl: "partials/agenda.html",
            controller: "AgendaController"
        }).when("/duration", {
            templateUrl: "partials/duration.html",
            controller: "DurationController"
        }).when("/registration", {
            templateUrl: "partials/registration.html",
            controller: "RegistrationController"
        }).when("/prerequisits", {
            templateUrl: "partials/prerequisits.html",
            controller: "PrerequisitsController"
        }).when("/target", {
            templateUrl: "partials/target.html",
            controller: "TargetController"
        }).when("/photosvideos", {
            templateUrl: "partials/photosvideos.html",
            controller: "PhotosVideosController"
        }).when("/talktous", {
            templateUrl: "partials/talktous.html",
            controller: "TalktousController"
        }).otherwise({
            redirectTo: "/about"
        })
    }]);