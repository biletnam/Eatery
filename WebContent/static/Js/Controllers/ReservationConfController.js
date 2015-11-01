/**
 * 
 */

(function(){

    var eateryControllers=angular.module('eateryApp');

    /*eateryControllers.controller('ReservationConfController',function(confirmation){
        
    	var reservationConfCtrl=this;
    	reservationConfCtrl.confirmation=confirmation;
		console.log(reservationConfCtrl.confirmation);
    	
    });*/
    
    eateryControllers.controller('ReservationConfController',['reservationConfService',function(reservationConfService){
        
    	var reservationConfCtrl=this;
    	reservationConfCtrl.confirmation=reservationConfService.getConfirmation();
		console.log(reservationConfCtrl.confirmation);
    	
    }]);

})();
