/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryApp=angular.module('eateryApp',['ngRoute','ngMessages','ui.bootstrap']);

    eateryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

        $routeProvider
            .when('/',{
                templateUrl:'partials/landing.html'
            })
            .when('/reservation',{
                templateUrl:'partials/reservation.html'
            })
            .when('/login',{
                templateUrl:'partials/login.html'
            })
            .when('/owner',{
                templateUrl:'partials/owner.html'
            })
            .when('/operations',{
                templateUrl:'partials/operations.html'
            })
            .otherwise({
                redirectTo:'/'
            });

        $locationProvider.html5Mode(true);

    }]);


})();

