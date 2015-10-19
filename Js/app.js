/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryApp=angular.module('eateryApp',['ngRoute','ngMessages','eateryControllers','eateryDirectives']);

    eateryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

        $routeProvider
            .when('/',{
                templateUrl:'partials/landing.html',
                controller:'MainController'
            })
            .when('/reservation',{
                templateUrl:'partials/reservation.html',
                controller:'ReservationController'
            })
            .when('/login',{
                templateUrl:'partials/login.html',
                controller:'LoginController'
            })
            .when('/owner',{
                templateUrl:'partials/owner.html',
                controller:'OwnerController'
            })
            .otherwise({
                redirectTo:'/'
            });

        $locationProvider.html5Mode(true);

    }]);


})();

