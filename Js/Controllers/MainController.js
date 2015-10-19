/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryControllers',[]);
    eateryControllers.controller('MainController',['$scope','$rootScope',function($scope,$rootScope){

        var mainCtrl=this;
        mainCtrl.isAppLoading=false;

        $rootScope.$on('$routeChangeStart',function(){
            console.log("app loading started");
            mainCtrl.isAppLoading=true;
        });
        $rootScope.$on('$routeChangeSuccess',function(){
            console.log("app loading sucess");
            mainCtrl.isAppLoading=false;
        });

    }]);

})();


