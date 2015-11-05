/**
 * 
 */

(function(){

    angular.module('eateryApp')
    	.controller('ReservationConfController',ReservationConfController);
    
    ReservationConfController.$inject=['reservationConfService'];
    function ReservationConfController(reservationConfService) {
    	var resvnConfCtrl=this;
    	resvnConfCtrl.confirmation=reservationConfService.getConfirmation();
	}
    
})();
