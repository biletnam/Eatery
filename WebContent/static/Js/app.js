/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryApp=angular.module('eateryApp',['ngRoute','ngMessages','ui.bootstrap','ngAnimate']);

    eateryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

        $routeProvider
            .when('/',{
                templateUrl:'static/partials/landing.html'
            })
            .when('/reservation',{
                templateUrl:'static/partials/reservation.html',
                controller:'ReservationController',
                controllerAs:'resvnCtrl'
            })
            .when('/login',{
                templateUrl:'static/partials/login.html'
            })
            .when('/owner',{
                templateUrl:'static/partials/owner.html',
                controller:'OwnerController',
                controllerAs:'ownCtrl'
            })
            .when('/operations',{
                templateUrl:'static/partials/operations.html',
                controller:'OperationsController',
                controllerAs:'oprCtrl'
            })
            .when('/reservation/:id',{
            	templateUrl:'static/partials/confirmation.html',
                controller:'ReservationConfController',
                controllerAs:'resvnConfCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });

        $locationProvider.html5Mode(true);

    }]);


})();

