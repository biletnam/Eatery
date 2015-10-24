/**
 * Created by lokesh.cherukuri on 10/15/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryApp');

    eateryControllers.controller('ReservationController',['$http',function($http){
        var resvnCtrl=this;
        resvnCtrl.user={};

        resvnCtrl.submitForm=function(isValid){
            if(isValid==true){
                //send  resvnCtrl.user object to database with $http
                // route to different page. Ex: confirmation
            	$http({
            		  method: 'POST',
            		  url: '/Eatery/save',
            		  contentType:'application/json',
            		  dataType:'json',
            		  data:resvnCtrl.user
        		}).then(function successCallback(response) {
        		    // this callback will be called asynchronously
        		    // when the response is available
        			console.log(response);
        		  }, function errorCallback(response) {
        		    // called asynchronously if an error occurs
        		    // or server returns response with an error status.
        		  });
            }
            else{
                //show errors
            }

        }

        resvnCtrl.resetForm=function(){
            resvnCtrl.user={};
            resvnCtrl.form.$setPristine();
        }
    }]);

})();
