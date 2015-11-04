/**
 * 
 */

(function(){

    angular.module('eateryApp')
    	.controller('ReservationConfController',ReservationConfController);
    
    ReservationConfController.$inject=['reservationConfService'];
    function ReservationConfController(reservationConfService) {
    	var reservationConfCtrl=this;
    	reservationConfCtrl.confirmation=reservationConfService.getConfirmation();
	}
    
})();
