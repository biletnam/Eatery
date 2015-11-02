/**
 * 
 */

(function(){

    var eateryControllers=angular.module('eateryApp');
    
    eateryControllers.controller('ReservationConfController',['reservationConfService',function(reservationConfService){
        
    	var reservationConfCtrl=this;
    	reservationConfCtrl.confirmation=reservationConfService.getConfirmation();
		console.log(reservationConfCtrl.confirmation);
    	
    }]);

})();
