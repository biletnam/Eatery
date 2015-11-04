/**
 * Created by lokesh.cherukuri on 10/16/2015.
 */

(function(){

    angular.module('eateryApp')
    	.controller('OwnerController',OwnerController);
    
    OwnerController.$inject=['$scope','$timeout'];
    function OwnerController($scope,$timeout) {
    	var ownCtrl=this;
        ownCtrl.saveSettings=function(){
        	$scope.$parent.mainCtrl.isAppLoading=true;
        	$timeout(function() {
        		$scope.$parent.mainCtrl.isAppLoading=false;
        		$scope.$parent.mainCtrl.addAlert("success","Success! your app preferences saved");
            }, 1000);
        }
	}

})();