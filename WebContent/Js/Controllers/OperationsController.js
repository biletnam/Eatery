/**
 * Created by lokesh.cherukuri on 10/19/2015.
 */


(function(){

    var eateryControllers=angular.module('eateryApp');

    eateryControllers.controller('OperationsController',['$scope',function($scope){

        /*
            make ajax call to get all reservations for today

         */

        var oprCtrl=this;
        oprCtrl.reservations=[
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh ", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay ", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh ", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh ", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
        ];
        oprCtrl.currentPage = 1;
        oprCtrl.numPerPage = 10;
        oprCtrl.maxSize = 5;

        oprCtrl.totalSeats = 5;
        oprCtrl.seats = [];
        for (var i = 0; i < oprCtrl.totalSeats; i++) {
            oprCtrl.seats.push(i)
        }

        oprCtrl.reservationsBySeat=[
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"},
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"}
        ];
    }]);

})();