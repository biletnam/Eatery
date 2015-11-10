/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    angular.module('eateryApp')
	    .controller('MainController',MainController);
    
    	MainController.$inject=['$scope','$rootScope','$timeout','yelp'];
	    function MainController($scope,$rootScope,$timeout,yelp){
	
	        var mainCtrl=this;
	        mainCtrl.isAppLoading=false;
	        mainCtrl.alerts = [];
	        mainCtrl.categories=['American','Indian','Chineese','Italian'];
	
	        $rootScope.$on('$routeChangeStart',function(){
	            mainCtrl.isAppLoading=true;
	        });
	        
	        $rootScope.$on('$routeChangeSuccess',function(){
	            mainCtrl.isAppLoading=false;
	        });
	
	        mainCtrl.addAlert = function(t,m) {
	        	mainCtrl.alerts.push({type:t,msg:m});
	        	$timeout(function() {
	        		mainCtrl.alerts.splice(0, 1);
	            }, 3000);
	        };
	
	        mainCtrl.closeAlert = function(index) {
	        	mainCtrl.alerts.splice(index, 1);
	        };
	        
	    }

})();


