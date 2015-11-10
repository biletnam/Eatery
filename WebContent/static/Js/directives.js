/**
 * Created by lokesh.cherukuri on 10/14/2015.
 */

(function(){

    var eateryDirectives=angular.module('eateryApp');

    eateryDirectives
        .directive('myMap',function(){
            var directive={
                link:function(scope,ele){
                    var mapProp = {
                        center: new google.maps.LatLng(43.100187,-77.6329959), zoom:12, panControl:true, zoomControl:true,
                        mapTypeControl:true, scaleControl:true, streetViewControl:true, overviewMapControl:true,
                        rotateControl:true, mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(ele[0],mapProp);
                    var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(43.100187,-77.6329959)
                    });
                    marker.setMap(map);
                }
            };
            return directive;
        })
        .directive('scrollToMap',function(){

            var directive={
                link:function(scope,ele,attrs){
                    ele.bind('click',function(){
                        if(attrs.direction=="down"){
                            attrs.direction="up";
                            $('html, body').animate({scrollTop:ele.offset().top}, 'slow');
                            $(ele).removeClass('fa-angle-down').addClass('fa-angle-up');
                        }
                        else{
                            attrs.direction="down";
                            $('html, body').animate({scrollTop:0}, 'slow');
                            $(ele).removeClass('fa-angle-up').addClass('fa-angle-down');
                        }
                    });
                }
            };
            return directive;
        })
        .directive('moveTop',function(){

            var directive={
                link:function(scope,ele,attrs){
                    ele.bind('click',function(){
                    	$('html, body').animate({scrollTop:0}, 'slow');
                    });
                }
            };
            return directive;
        })
        .directive('datePicker',function(){
           var directive={
        	   require:'ngModel',
               scope:false,
               link:function(scope,ele,attrs,ngModel){
                   $('#datetimepicker').datetimepicker();
                   $(ele).bind('blur',function(){
                	   scope.$apply(update);
	               });
	                 
                   function update() {
                	   ngModel.$setViewValue($('#time').val());
                       ngModel.$render();
	               }
               }
           };
            return directive;
        })
        .directive('clockpicker',function(){
            var directive={
                link:function(scope,ele,attrs){
                    $(ele).clockpicker({
                        'twelvehour':true,
                        'autoclose': true
                    });
                }
            };
            return directive;
        });

})();