/**
 * 
 */

(function(){
	
	var services=angular.module('eateryApp');
	
	services.factory('reservationConfService',function() {
		var factory={}
		factory.confirmation={};
		factory.setConfirmation=function(conf){
			factory.confirmation=conf;
		}
		
		factory.getConfirmation=function(){
			return factory.confirmation;
		}
		return factory;
	});
	
})();
