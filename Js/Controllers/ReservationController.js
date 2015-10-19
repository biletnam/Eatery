/**
 * Created by lokesh.cherukuri on 10/15/2015.
 */

(function(){

    var eateryControllers=angular.module('eateryControllers');

    eateryControllers.controller('ReservationController',function(){
        var resvnCtrl=this;
        resvnCtrl.user={};

        resvnCtrl.submitForm=function(isValid){
            if(isValid==true){
                //send  resvnCtrl.user object to database with $http
                // route to different page. Ex: confirmation
                console.log(resvnCtrl.user)
            }
            else{
                //show errors
            }

        }

        resvnCtrl.resetForm=function(){
            resvnCtrl.user={};
            resvnCtrl.form.$setPristine();
        }
    });

})();
