/**
 * 
 */


(function(){

    angular.module('eateryApp')
    	.controller('RestaurantsController',RestaurantsController);

    RestaurantsController.$inject=['$scope','yelp','$routeParams'];
    
    function RestaurantsController($scope,yelp,$routeParams) {
    	$scope.$parent.mainCtrl.isAppLoading=true;
    	
    	var rstrntsCtrl=this;
		rstrntsCtrl.restaurants={};
		rstrntsCtrl.inputs={};
		rstrntsCtrl.inputs.term=$routeParams.term;
		
		yelp.retrive(rstrntsCtrl.inputs,function(response) {
			rstrntsCtrl.restaurants=response.data.businesses;
			$scope.$parent.mainCtrl.isAppLoading=false;
        });
	}

})();
