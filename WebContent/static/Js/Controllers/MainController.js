/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryApp');
    eateryControllers.controller('MainController',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){

        var mainCtrl=this;
        mainCtrl.isAppLoading=false;

        $rootScope.$on('$routeChangeStart',function(){
            mainCtrl.isAppLoading=true;
        });
        $rootScope.$on('$routeChangeSuccess',function(){
            mainCtrl.isAppLoading=false;
        });
        
        mainCtrl.alerts = [];

        mainCtrl.addAlert = function(t,m) {
        	mainCtrl.alerts.push({type:t,msg:m});
        	$timeout(function() {
        		mainCtrl.alerts.splice(0, 1);
            }, 3000);
        };

        mainCtrl.closeAlert = function(index) {
        	mainCtrl.alerts.splice(index, 1);
        };
        
    }]);

})();


