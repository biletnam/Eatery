/**
 * Created by lokesh.cherukuri on 10/16/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryApp');

    eateryControllers.controller('OwnerController',['$scope','$timeout',function($scope,$timeout){
        var ownCtrl=this;
        ownCtrl.saveSettings=function(){
        	$scope.$parent.mainCtrl.isAppLoading=true;
        	$timeout(function() {
        		$scope.$parent.mainCtrl.isAppLoading=false;
        		$scope.$parent.mainCtrl.addAlert("success","Success! your app preferences saved");
            }, 1000);
        }
    }]);

})();