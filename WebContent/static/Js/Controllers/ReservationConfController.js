/**
 * 
 */

(function(){

    angular.module('eateryApp')
    	.controller('ReservationConfController',ReservationConfController);
    
    ReservationConfController.$inject=['$http','$routeParams'];
    function ReservationConfController($http,$routeParams) {

    	var resvnConfCtrl=this;
    	
    	$http({
	   		  method: 'GET',
	   		  url: '/Eatery/rest/reservations/'+$routeParams.id,
	   		  contentType:'application/json',
	   		  dataType:'json'
		}).then(function successCallback(response) {
			  resvnConfCtrl.confirmation=response.data;
		  }, function errorCallback(response) {
		    
		 });
	}
    
})();
