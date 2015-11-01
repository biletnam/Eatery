/**
 * Created by lokesh.cherukuri on 10/15/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryApp');

    eateryControllers.controller('ReservationController',['$scope','$http','$uibModal','reservationConfService','$location',function($scope,$http,$uibModal,reservationConfService,$location){
        var resvnCtrl=this;
        resvnCtrl.user={};
        resvnCtrl.confirmation={};
        
        resvnCtrl.openModal = function () {
        	var confirmationModal = $uibModal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                size: "md",
                controller:'ReservationConfController as reservationConfCtrl',
                resolve: {
                	confirmation: function () {
                      return resvnCtrl.confirmation;
                    }
                  }
            });
        }

        resvnCtrl.submitForm=function(isValid){
            if(isValid==true){
                //send  resvnCtrl.user object to database with $http
                // route to different page. Ex: confirmation
            	
            	$scope.mainCtrl.isAppLoading=true;
            	$http({
            		  method: 'POST',
            		  url: '/Eatery/rest/reservations/save',
            		  contentType:'application/json',
            		  dataType:'json',
            		  data:resvnCtrl.user
        		}).then(function successCallback(response) {
        				resvnCtrl.confirmation=response.data;
        				reservationConfService.setConfirmation(response.data);
        				//$scope.mainCtrl.isAppLoading=true;
        				//resvnCtrl.openModal();
        				$location.path("/reservation/confirmation");
        		  }, function errorCallback(response) {
        		    
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
