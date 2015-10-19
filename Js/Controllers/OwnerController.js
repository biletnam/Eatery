/**
 * Created by lokesh.cherukuri on 10/16/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryControllers');

    eateryControllers.controller('OwnerController',function(){
        var ownCtrl=this;
        ownCtrl.reservations=[
            {"name":"Lokesh cherukuri", "phone":"4324134679", "time": "10/16/2015 1:38 PM", "seats":"2", "status":"allotted"},
            {"name":"Akshay arolkar", "phone":"4324134679", "time": "10/17/2015 5:00 PM", "seats":"1", "status":"waiting"}
        ];

        ownCtrl.seatings=[
            {"number":1,"status":"allotted","allottedTo":12341},
            {"number":2,"status":"empty"},
            {"number":3,"status":"allotted","allottedTo":12342},
            {"number":4,"status":"allotted","allottedTo":12343},
            {"number":5,"status":"empty"},
            {"number":6,"status":"allotted","allottedTo":12344},
            {"number":7,"status":"allotted","allottedTo":12345},
            {"number":8,"status":"empty"},
            {"number":9,"status":"allotted","allottedTo":12346},
            {"number":10,"status":"allotted","allottedTo":12347}
        ];
    });

})();