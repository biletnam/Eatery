/**
 * Created by lokesh.cherukuri on 10/15/2015.
 */

(function(){

    angular.module('eateryApp')
    	.controller('ReservationController',ReservationController);

    ReservationController.$inject=['$scope','$http','$uibModal','$location'];
    function ReservationController($scope,$http,$uibModal,$location) {
		
    	 var resvnCtrl=this;
         resvnCtrl.reservation={};
         resvnCtrl.isOpen=false;
         
         resvnCtrl.openCalendar = function(e) {
        	 e.preventDefault();
             e.stopPropagation();

             resvnCtrl.isOpen = true;
         };
         
         /*send  resvnCtrl.reservation object to database with $http
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
             		  data:resvnCtrl.reservation
         		}).then(function successCallback(response) {
         				$location.path("/reservation/"+response.data.id);
         		  }, function errorCallback(response) {
         		    
         		 });
             }
             else{
             }
         }

         resvnCtrl.resetForm=function(){
             resvnCtrl.reservation={};
             resvnCtrl.form.$setPristine();
         }
    	
	}

})();
