/**
 * Created by lokesh.cherukuri on 10/19/2015.
 */


(function(){

    var eateryControllers=angular.module('eateryApp');

    eateryControllers.controller('OperationsController',['$scope','$timeout',function($scope,$timeout){

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
        
        oprCtrl.seats=[
            {"id":1,"status":"assigned","confirmation":12345},
            {"id":2,"status":"assigned","confirmation":12346},
            {"id":3,"status":"assigned","confirmation":12347},
            {"id":4,"status":"empty"},
            {"id":5,"status":"assigned","confirmation":12348},
            {"id":6,"status":"assigned","confirmation":12349},
            {"id":7,"status":"empty"},
            {"id":8,"status":"assigned","confirmation":12350},
            {"id":9,"status":"empty"},
            {"id":10,"status":"empty"},
            {"id":11,"status":"assigned","confirmation":12351},
            {"id":12,"status":"assigned","confirmation":12352},
            {"id":13,"status":"empty"},
            {"id":14,"status":"assigned","confirmation":12353},
            {"id":15,"status":"assigned","confirmation":12354},
        ];
        
        oprCtrl.selected_seat=oprCtrl.seats[0];
        
        oprCtrl.changeSelectedSeat=function(seat){
        	$scope.$parent.mainCtrl.isAppLoading=true;
        	$timeout(function() {
        		oprCtrl.selected_seat=seat;
        		$scope.$parent.mainCtrl.isAppLoading=false;
            }, 1000);
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