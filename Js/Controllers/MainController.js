/**
 * Created by lokesh.cherukuri on 10/13/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryApp');
    eateryControllers.controller('MainController',['$scope','$rootScope',function($scope,$rootScope){

        var mainCtrl=this;
        mainCtrl.isAppLoading=false;

        $rootScope.$on('$routeChangeStart',function(){
            mainCtrl.isAppLoading=true;
        });
        $rootScope.$on('$routeChangeSuccess',function(){
            mainCtrl.isAppLoading=false;
        });

    }]);

})();


