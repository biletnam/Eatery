/**
 * 
 */

(function(){
	
	angular.module('eateryApp')
		.factory('reservationConfService',function() {
			
			var confirmation={};
			var factory={
				setConfirmation:setConfirmation,
				getConfirmation:getConfirmation			
			}
			
			return factory;
			
			function setConfirmation(conf){
				factory.confirmation=conf;
			}
			
			function getConfirmation(){
				return factory.confirmation;
			}
			
		});
	
})();
