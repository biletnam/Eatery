/**
 * Created by lokesh.cherukuri on 12/30/2014.
 */


$(document).ready(function () {
    var tabName=$('#tabs ul li a span:nth-child(2)');
    $(function() {
        $( "#tabs" ).tabs();
    });

    if($(window).innerWidth()<=960)
    {
        tabName.hide();
        $('#tabs').css({'width':'95%'});
    }

    $(window).resize(function()
    {
        if($(window).innerWidth()<=960)
        {
            tabName.hide();
            $('#tabs').css({'width':'95%'});
        }
        else
        {
            tabName.show();
        }
    });

    /*tab clicks start*/

    $(document).on('click','#tabs ul li:nth-child(1)',function()
    {
        $('#reservations').html('<div style="text-align: center;"><img src="Images/loading.gif"></div>');
        $.ajax(
            {
                url:'TestData/own_reservation_data',         //replaced by webservice
                cache:'false',
                dataType:'json',
                success:function(data)
                {
                    var x='<table id="reservation_tab" class="display responsive nowrap" cellspacing="0" width="100%">' +
                        ' <thead> <tr> <th>CNF #</th> <th>Name</th> <th>Date & Time</th> <th>Table #</th> <th>Details</th> </tr> </thead> ' +
                        '<tbody>';
                    $.each(data,function(index,row)
                    {
                        x+='<tr><td>'+row.cnf+'</td><td>'+row.firstname+' '+row.lastname+'</td><td>'+row.date+' '+row.time+'</td><td>'+row.table+'</td><td><input type="button" value="Details" class="btn btn-primary btn-sm" id="'+row.cnf+'"></td></tr>';
                    });
                    x+='</tbody></<table>';
                    $('#reservations').html(x);
                    $('#reservation_tab').DataTable();
                }
            });
    });
    $('#tabs ul li:nth-child(1)').trigger('click');

    $(document).on('click','#tabs ul li:nth-child(2)',function()
    {
        $('#seating').html('<div style="text-align: center;"><img src="Images/loading.gif"></div>');
        $.ajax(
        {
            url:'TestData/own_seating_data',         //replaced by webservice
            cache:'false',
            dataType:'json',
            success:function(data)
            {
                var x='<table id="seating_tab" class="display responsive nowrap" cellspacing="0" width="100%">' +
                      ' <thead> <tr> <th>Table #</th> <th>Size</th> <th>Status</th> <th>Since</th> <th>CNF #</th> </tr> </thead> ' +
                      '<tbody>';
                $.each(data,function(index,row)
                {
                    x+='<tr><td>'+row.table+'</td><td>'+row.size+'</td><td>'+row.status+'</td><td>'+row.since+'</td><td><a href="#" class="cnf" id="'+row.cnf+'" style="color:blue;">'+row.cnf+'</a></td></tr>';
                });
                x+='</tbody></<table>';
                $('#seating').html(x);
                $('#seating_tab').DataTable();
            }
        });
    });

    $(document).on('click','.cnf',function()
    {
        //make ajax call to details corresponding to confirmation number
       /* $.ajax(
            {

            }
        );*/
        $.ui.dialog.prototype._focusTabbable = function(){};
        $( "#dialog" ).dialog( "open" );
        $(".ui-dialog-titlebar").removeClass('ui-widget-header');
        $( ".ui-button").css({'border-radius':'10px'});
        var x='<table class="table" style="margin-top: 20px"><tbody><tr><td>CNF#:</td><td>12345</td></tr> <tr><td>Name:</td><td>lokesh cherukuri</td></tr>' +
            '<tr><td>phone:</td><td>4324134679</td></tr> <tr><td>Date:</td><td>2015-01-01</td></tr> <tr><td>Time:</td><td>09:00</td></tr>' +
            ' <tr><td>Size:</td><td>1T X 2S</td></tr> <tr><td>Table#:</td><td>1</td></tr></tbody></table>';
        $('#dialog').html(x);
    });


    $(document).on('click','#tabs ul li:nth-child(3)',function()
    {
        $('#profile').html('<div style="text-align: center;"><img src="/Eatery/Images/loading.gif"></div>');
        $.ajax(
            {
                url:'TestData/own_profile_data',         //replaced by webservice
                cache:'false',
                dataType:'json',
                success:function(data)
                {
                    var x=' <form action="#" id="editDetailsForm"> <table class="table"> ' +
                        '<thead> <tr><td colspan="2"><a href="#" id="edit_profile">Edit</a> </td></tr> </thead> <tbody>';
                    $.each(data,function(index,row)
                    {
                        x+='<tr><td>Address:</td><td>'+row.address+'</td></tr> <tr><td>City:</td><td>'+row.city+'</td></tr> <tr><td>Sate:</td><td>'+row.state+'</td></tr> <tr><td>Zip:</td><td>'+row.zip+'</td></tr>';
                    });
                    x+='</tbody></<table></form>';
                    $('#profile').html(x);

                    var x=' <form action="#" id="editLoginForm"> <table class="table"> ' +
                        '<thead> <tr><td colspan="2"><a href="#" id="edit_login">Edit</a> </td></tr> </thead> <tbody>';
                    $.each(data,function(index,row)
                    {
                        x+='<tr><td>UserName:</td> <td>'+row.username+'</td></tr> ';
                    });
                    x+='</tbody></<table></form>';
                    $('#profile').append(x);
                }
            });
    });

    $(document).on('click','#tabs ul li:nth-child(4)',function()
    {
        $('#profile').html('<div style="text-align: center;"><img src="/Eatery/Images/loading.gif"></div>');
        $.ajax(
            {
                url:'TestData/own_setting_data',         //replaced by webservice
                cache:'false',
                dataType:'json',
                success:function(data)
                {
                    $.each(data,function(index,row)
                    {
                        var days=row.days;
                        $.each(days,function(index,value)
                        {
                            var target="#"+value;
                            $(target).attr('checked','true');
                        });

                        var times=row.times;
                        $('#openTime').val(times[0]);
                        $('#closeTime').val(times[1]);

                        if(row.autoAssign=="false")
                            $('#switch').removeAttr('checked');
                    });

                }
            });
    });

    $(document).on('click','#tabs ul li:nth-child(5)',function()
    {
        $('#seating').html('<div style="text-align: center;"><img src="/Eatery/Images/loading.gif"></div>');
        $.ajax(
            {
                url:'TestData/own_contacts_data',         //replaced by webservice
                cache:'false',
                dataType:'json',
                success:function(data)
                {
                    var x='<table id="contacts_tab" class="display responsive nowrap" cellspacing="0" width="100%">' +
                        ' <thead> <tr> <th>FirstName</th> <th>LastName</th> <th>Phone</th> <th>email</th> </tr> </thead> ' +
                        '<tbody>';
                    $.each(data,function(index,row)
                    {
                        x+='<tr><td>'+row.firstname+'</td><td>'+row.lastname+'</td><td>'+row.phone+'</td><td>'+row.email+'</td></tr>';
                    });
                    x+='</tbody></<table>';
                    $('#contacts').html(x);
                    $('#contacts_tab').DataTable();
                }
            });
    });

    /*tab clicks end*/

    $(function() {
        $( "#dialog" ).dialog({
            autoOpen: false, modal:true,height:400,width:310,
            show: {
                effect: "drop",
                direction:"up",
                duration: 300
            },
            hide: {
                effect: "drop",
                direction:"up",
                duration: 300
            }
        });
    });
    $(document).on('click','#reservations table input[type="button"]',function()
    {
        //make ajax call to details corresponding to confirmation number
        /* $.ajax(
         {

         }
         );*/
        $.ui.dialog.prototype._focusTabbable = function(){};
        $( "#dialog" ).dialog( "open" );
        $(".ui-dialog-titlebar").removeClass('ui-widget-header');
        $( ".ui-button").css({'border-radius':'10px'});
        var x='<table class="table" style="margin-top: 20px"><tbody><tr><td>CNF#:</td><td>12345</td></tr> <tr><td>Name:</td><td>lokesh cherukuri</td></tr>' +
            '<tr><td>phone:</td><td>4324134679</td></tr> <tr><td>Date:</td><td>2015-01-01</td></tr> <tr><td>Time:</td><td>09:00</td></tr>' +
            ' <tr><td>Size:</td><td>1T X 2S</td></tr> <tr><td>Table#:</td><td>1</td></tr></tbody></table>';
        $('#dialog').html(x);
    });


    /* for edit profile details starts*/
    var address=[];
    $(document).on('click','#edit_profile',function()
    {
        var i=0;
        $('#editDetailsForm tbody td:nth-child(2)').each(function()
        {
            address[i++]=$(this).html();
            $(this).html('<input type="text" value="'+$(this).html()+'" class="txtf">');
        });
        $('#editDetailsForm tbody').after('<tfoot><tr><td colspan="2"> <input type="submit" value="Save" class="buttonclass" > <input type="button" value="cancel" class="buttonclass"></td></tr></tfoot>');
        $('#edit_profile').hide();
    });
    $(document).on('click','#editDetailsForm input[type="submit"]',function()
    {
        $('#editDetailsForm tbody td:nth-child(2)').each(function()
        {
            $(this).html($('#editDetailsForm tbody td:nth-child(2) input').val());
        });
        $('#editDetailsForm tfoot').remove();
        $('#edit_profile').show();
    });
    $(document).on('click','#editDetailsForm input[type="button"]',function()
    {
        var i=0;
        $('#editDetailsForm tbody td:nth-child(2)').each(function()
        {
            $(this).html(address[i++]);
        });
        $('#editDetailsForm tfoot').remove();
        $('#edit_profile').show();
    });
    /* for edit profile details ends*/

    /* for edit login details starts*/
    var login=[];
    $(document).on('click','#profile #edit_login',function()
    {
        var i = 0;
        $('#edit_login').hide();
        var target = $('#editLoginForm tbody td:nth-child(2)');
        login[i]=target.html();
        target.html('<input type="text" id="username" value="' + target.html() + '" class="txtf">');
        var x= '<tr><td>New password:</td><td><input type="password" id="newPassword" class="txtf"></td></tr>';
        x += '<tr><td>Confirm password:</td><td><input type="password" id="confirmPassword" class="txtf"></td></tr>';
        $('#editLoginForm tbody').append(x);
        $('#editLoginForm tbody').after('<tfoot><tr><td colspan="2"> <input type="button" value="Save" class="buttonclass" > <input type="button" value="cancel" class="buttonclass"></td></tr></tfoot>');
    });

     $(document).on('click','#editLoginForm input[type="button"]:nth-child(1)',function()
     {
         var username=$('#username');
         var newPassword=$('#newPassword');
         var confirmPassword=$('#confirmPassword');
         username.removeClass('validation-image');       //get entered email and check its validity. if not display as error image
         var atpos=$.trim(username.val()).indexOf("@");
         var dotpos=$.trim(username.val()).lastIndexOf(".");
         if(atpos<1 || dotpos<atpos+2 || dotpos+2>=$.trim(username.val()).length||$.trim(username.val()).match(" "))
         {
             username.addClass("validation-image");
         }
         newPassword.removeClass('validation-image');        //get entered password and check its length. if not display as error image
         confirmPassword.removeClass('validation-image');
         if(newPassword.val().length==0)
         {
             newPassword.addClass('validation-image');
         }
         if(confirmPassword.val().length==0 || newPassword.val()!==confirmPassword.val())                //check if password and confirm pass are equal. if not display as error image
         {
             $('#confirmPassword').addClass('validation-image');
         }
         if($('#editLoginForm').children().find('.validation-image').length==0)
         {
             $('#editLoginForm tbody td:nth-child(2)').html(username.val());
             $('#editLoginForm tbody tr:nth-child(1)').nextAll().remove();
             $('#editLoginForm tfoot').remove();
             $('#edit_login').show();
         }
     });

    $(document).on('click','#editLoginForm input[type="button"]:nth-child(2)',function()
     {
         var i=0;
         $('#editLoginForm tbody td:nth-child(2)').html(login[i++]);
         $('#editLoginForm tbody tr:nth-child(1)').nextAll().remove();
         $('#editLoginForm tfoot').remove();
         $('#edit_login').show();
     });
    /* for edit login details ends*/

});
