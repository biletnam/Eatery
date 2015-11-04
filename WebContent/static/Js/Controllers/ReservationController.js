/**
 * Created by lokesh.cherukuri on 10/15/2015.
 */

(function(){

    angular.module('eateryApp')
    	.controller('ReservationController',ReservationController);

    ReservationController.$inject=['$scope','$http','$uibModal','reservationConfService','$location'];
    function ReservationController($scope,$http,$uibModal,reservationConfService,$location) {
		
    	 var resvnCtrl=this;
         resvnCtrl.user={};
         resvnCtrl.confirmation={};
         
         /*send  resvnCtrl.user object to database with $http
          * route to confirmation page if success
          * show error if $hhtp call fails
          */  	
         resvnCtrl.submitForm=function(isValid){
             if(isValid==true){
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
         				$location.path("/reservation/confirmation");
         		  }, function errorCallback(response) {
         		    
         		 });
             }
             else{
             }

         }

         resvnCtrl.resetForm=function(){
             resvnCtrl.user={};
             resvnCtrl.form.$setPristine();
         }
    	
	}

})();
