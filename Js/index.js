/**
 * Created by lokesh.cherukuri on 12/24/2014.
 */

var firstnamevalidity,lastnamevalidity,emailvalidity,reemailvalidity,phonevalidity,datevalidity,timevalidity,tablesvalidity,seatsvalidity;

$(document).ready(function()
{
    if(sessionStorage.getItem("firsttime")=="1")
    {
        $('section').fadeIn('slow');
        $('footer').show();
    }
    else
    {
        var x='<span id="welcome" style="position:absolute;font-size:50px;font-family: serif;top: 45%;">Welcome</span>';
        $('body').append(x);
        $('#welcome').css({'left':(($('body').innerWidth()-$('#welcome').width())/2)+'px'});
        $('#welcome').hide().fadeIn(3000).slideUp(1000);
        setTimeout(function()
        {
            $('#welcome').remove();
            $('section').fadeIn('slow');
            $('footer').show();
            sessionStorage.setItem("firsttime","1");
        },4000);
    }

    if(localStorage.getItem("firstname"))
    {
        $('#firstname').val(localStorage.getItem("firstname"));
        firstnamevalidity=true;
    }
    if(localStorage.getItem("lastname"))
    {
        $('#lastname').val(localStorage.getItem("lastname"));
        lastnamevalidity=true;
    }
    if(localStorage.getItem("email"))
    {
        $('#email').val(localStorage.getItem("email"));
        $('#reemail').val(localStorage.getItem("email"));
        emailvalidity=reemailvalidity=true;
    }
    if(localStorage.getItem("phone"))
    {
        $('#phone').val(localStorage.getItem("phone"));
        phonevalidity=true;
    }
});

function loadSection()
{
    var file,target;
    $('footer').hide();
    if($('header a:nth-child(2)').html()=="Owner? login")
    {
        file='components/owner_login_comp.html';
        target='Customer?';
    }
    else
    {
        var file='components/cust_reserve_comp.html';
        target='Owner? login';
    }

    $.ajax(
        {
            type:'get',
            async:'true',
            url:file,
            success:function(data)
            {
                $('section').remove();
                $('header').after(data);
                $('section').fadeIn('slow');
                $('header a:nth-child(2)').html(target);
                $('footer').show();
            }
        });
}


//ready function for validation starts
$(document).ready(function()
{
    var date=new Date();
    $('#date').attr("min",date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
    if(navigator.userAgent.indexOf('Firefox')!=-1)
    {
        $(function()
        {
            $("#date" ).datepicker(
                {
                    changeMonth: true,
                    changeYear: true,
                    minDate: '0',
                    dateFormat:'yy-mm-dd'
                });
        });
    }

    function loadValidationFalseImages(which)
    {
        $(which).next(".img").remove();
        $(which).addClass("validation-image");
    }

    function loadValidationTrueImages(which)
    {
        $(which).removeClass("validation-image");
        $(which).next(".img").remove();
        $(which).after('<img src="Images/ajax-loader.gif" class="img"  />');
        setTimeout(function()
        {
            $(which).next("img").remove();
            $(which).after('<img src="Images/valid-tick.png" class="img"/>');
        },1950);

    }

    function tooltipRemove()
    {
        if($("div .tooltip").length)
        {
            $(".tooltip").remove();
        }
    }

    function checkValidations()
    {
        var total=0;
        if(firstnamevalidity==true)
            total++;
        else
        {
            firstnamevalidity=false;
            $('#firstname').addClass('validation-image');
        }
        if(lastnamevalidity==true)
            total++;
        else
        {
            lastnamevalidity=false;
            $('#lastname').addClass('validation-image');
        }
        if(emailvalidity==true)
            total++;
        else
        {
            emailvalidity=false;
            $('#email').addClass('validation-image');
        }
        if(reemailvalidity==true)
            total++;
        else
        {
            reemailvalidity=false;
            $('#reemail').addClass('validation-image');
        }
        if(phonevalidity==true)
            total++;
        else
        {
            phonevalidity=false;
            $('#phone').addClass('validation-image');
        }
        if(datevalidity==true)
            total++;
        else
        {
            datevalidity=false;
            $('#date').addClass('validation-image');
        }
        if(timevalidity==true)
            total++;
        else
        {
            timevalidity=false;
            $('#time').addClass('validation-image');
        }
        if(tablesvalidity==true)
            total++;
        else
        {
            tablesvalidity=false;
            $('#tables').addClass('validation-image');
        }
        if(seatsvalidity==true)
            total++;
        else
        {
            seatsvalidity=false;
            $('#seats').addClass('validation-image');
        }
        if(total==9)
            return true;
        else
            return false;
    }

    //validation for firstName starts
    $(document).on('focus',"#firstname",function()	//first name text box focus
    {
        tooltipRemove();
        if(firstnamevalidity==false)	//first name validation status false
            $(this).before($('<div class="tooltip" description="Min 2 Characters. No spaces or special chars"></div>').fadeIn(2000));	//displaying tool tip
    });
    $(document).on('blur',"#firstname",function()
    {
        tooltipRemove();
        if($.trim($(this).val()).length<2||$.trim($(this).val()).match(" "))
        {
            firstnamevalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            firstnamevalidity=true;
            loadValidationTrueImages(this);
            if($('#switch').prop('checked'))
                localStorage.setItem("firstname",$.trim($(this).val()));
        }
    });
    //validation for firstName ends


    //validation for lastName starts
    $(document).on('focus',"#lastname",function()	//last name text box focus
    {
        tooltipRemove();
        if(lastnamevalidity==false)	//last name validation status false
            $(this).before($('<div class="tooltip" description="Min 2 Characters. No spaces or special chars"></div>').fadeIn(2000));	//displaying tool tip

    });
    $(document).on('blur',"#lastname",function()
    {
        tooltipRemove();
        if($.trim($(this).val()).length<2||$.trim($(this).val()).match(" "))
        {
            lastnamevalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            lastnamevalidity=true;
            loadValidationTrueImages(this);
            if($('#switch').prop('checked'))
                localStorage.setItem("lastname",$.trim($(this).val()))
        }
    });
    //validation for lastName ends


    //validation for email starts
    $(document).on('focus',"#email",function()
    {
        tooltipRemove();
        if(emailvalidity==false)
            $("#email").before($('<div class="tooltip"  description="Working email address to send confirmation details."></div>').fadeIn(2000));//displaying tool tip
    });
    $(document).on('blur',"#email",function()
    {
        tooltipRemove();
        var atpos=$.trim($(this).val()).indexOf("@");
        var dotpos=$.trim($(this).val()).lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=$.trim($(this).val()).length||$.trim($(this).val()).match(" "))
        {
            emailvalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            emailvalidity=true;
            loadValidationTrueImages(this);
            if($('#switch').prop('checked'))
                localStorage.setItem("email",$.trim($(this).val()))
        }
    });
    //validation for email ends


    //validation for confirm email starts
    $(document).on('focus',"#reemail",function()
    {
        tooltipRemove();
        if(reemailvalidity==false)
            $(this).before($('<div class="tooltip"  description="Email & Confirm email should match."></div>').fadeIn(2000));	//displaying tool tip

    });
    $(document).on('blur',"#reemail",function()
    {
        tooltipRemove();
        if($.trim($(this).val())!==$('#email').val()||$(this).val().match(" ")||$(this).val().length===0)
        {
            reemailvalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            reemailvalidity=true;
            loadValidationTrueImages(this);
            if($('#switch').prop('checked'))
                localStorage.setItem("email",$.trim($(this).val()))
        }
    });
    //validation for reEmail ends


    //validation for phone starts
    $(document).on('focus','#phone',function()
    {
        tooltipRemove();
        if(phonevalidity==false)	//last name validation status false
            $(this).before($('<div class="tooltip" description="Not a valid phone Number. 10 digits needed"></div>').fadeIn(2000));	//displaying tool tip
    });

    $(document).on('blur','#phone',function()
    {
        tooltipRemove();
        if($.trim($(this).val()).match(/^\d+$/) && $(this).val().length==10)
        {
            phonevalidity=true;
            loadValidationTrueImages(this);
            if($('#switch').prop('checked'))
                localStorage.setItem("phone",$.trim($(this).val()));
        }
        else
        {
            phonevalidity=false;
            loadValidationFalseImages(this);
        }
    });
    //validation for phone ends


    //validation for tables count starts
    $(document).on('focus','#tables',function()
    {
        tooltipRemove();
        if(tablesvalidity==false)	//last name validation status false
            $(this).before($('<div class="tooltip" description="Reservation allowed for at least 1 table and 1 seat"></div>').fadeIn(2000));	//displaying tool tip
    });
    $(document).on('blur','#tables',function()
    {
        tooltipRemove();
        if($(this).val()<1)
        {
            tablesvalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            tablesvalidity=true;
            $(this).removeClass("validation-image");
        }
    });
    //validation for tables count ends


    //validation for seats count starts
    $(document).on('focus','#seats',function()
    {
        tooltipRemove();
        if(seatsvalidity==false)	//last name validation status false
            $('#tables').before($('<div class="tooltip" description="Reservation allowed for at least 1 table and 1 seat"></div>').fadeIn(2000));	//displaying tool tip
    });
    $(document).on('blur','#seats',function()
    {
        tooltipRemove();
        if($(this).val()<1)
        {
            seatsvalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            seatsvalidity=true;
            loadValidationTrueImages(this);
        }
    });
    //validation for seats count ends


    //validation for date starts
    $(document).on('focus',"#date",function()	//last name text box focus
    {
        tooltipRemove();
        $(this).attr("type","date");
        if(datevalidity==false)	//last name validation status false
            $(this).before($('<div class="tooltip"  description="Give Complete Date & time in YYYY-MM-DD"></div>').fadeIn(2000));	//displaying tool tip

    });
    $(document).on('blur',"#date",function()
    {
        tooltipRemove();
        $(this).attr("type","text");
        if($.trim($(this).val()).length==10 && $.trim($(this).val()).match(/^(201[0-9]|202[0-9]|)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/))
        {
            if(new Date().getFullYear()-$(this).val().slice(0,4)==0)
            {
                if((new Date().getMonth()+1)-$(this).val().slice(5,7)==0)
                {
                    if(new Date().getDate()-$(this).val().slice(8,10)<=0)
                    {
                        datevalidity=true;
                        $(this).removeClass("validation-image");
                    }
                    else
                    {
                        datevalidity=false;
                        loadValidationFalseImages(this);
                    }
                }
                else if(((new Date().getMonth()+1)-$(this).val().slice(5,7))>0)
                {
                    datevalidity=false;
                    loadValidationFalseImages(this);
                }
                else
                {
                    datevalidity=true;
                    $(this).removeClass("validation-image");
                }

            }
            else if(new Date().getFullYear()-$(this).val().slice(0,4)<0)
            {
                datevalidity=true;
                $(this).removeClass("validation-image");
            }
            else
            {
                datevalidity = false;
                loadValidationFalseImages(this);
            }
        }
        else
        {
            datevalidity=false;
            loadValidationFalseImages(this);
        }
    });
    //validation for date ends


    //validation for time starts
    $(document).on('focus','#time',function()
    {
        tooltipRemove();
        $(this).attr("type","time");
        if(timevalidity==false)
            $('#date').before($('<div class="tooltip" description="Enter event start time. 24 hr format Ex:17:30"></div>').fadeIn(2000));	//displaying tool tip
    });
    $(document).on('blur','#time',function()
    {
        tooltipRemove();
        $(this).attr("type","text");
        if($(this).val().length<5)
        {
            timevalidity=false;
            loadValidationFalseImages(this);
        }
        else
        {
            timevalidity=true;
            loadValidationTrueImages(this);
        }
    });
    //validation for time ends


    $(document).on('click','#edit_reservation',function()       //open dialog for confirmation num
    {
        $('#dialog').slideDown('500');
        $('#dialog').focus();
    });
    $(document).mouseup(function(e)         // closing dialog for confirmation num on body click
    {
        if (!$('#dialog').is(e.target) && $('#dialog').has(e.target).length === 0)
            $('#dialog').slideUp('500');
    });

    $(document).on('click',"#submit,#reset",function()      // remove focus from buttons on click
    {
        setTimeout(function()
        {
           // $("#submit,#reset").blur();
        },200);
    });

    $(function() {
        $( "#confirm-dialog" ).dialog({
            autoOpen: false, modal:true,height:460,width:310,
            show: {
                effect: "drop",
                direction:"up",
                duration: 300
            },
            hide: {
                effect: "drop",
                direction:"up",
                duration: 300
            },
            close:function()
            {
                $('#reset').trigger('click');
                $('body').next().remove();
            }
        });
    });
    $(document).on('click',"#customer_section #submit",function()      // remove focus from buttons on click
    {
        if(checkValidations()) {
            $('body').append('<div id="page-loading" style="width:100%;height: 100%;top: 0px;left: 0px;position: fixed;display: block;opacity: 0.8;background-color: #fff;z-index:999;text-align: center;">' +
            ' <img src="Images/loading.gif" alt="Loading..." style="position: absolute;top:40%;left:42%;z-index: 1000;max-width:30%;height:auto;"/> </div>');

            setTimeout(function ()
            {
                //make ajax call send details to database
                /* $.ajax(
                 {

                 }
                 );*/
                $('body').after('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">');
                $('#page-loading').remove();
                $.ui.dialog.prototype._focusTabbable = function(){};
                $( "#confirm-dialog" ).dialog( "open" );
                $(".ui-dialog-titlebar").removeClass('ui-widget-header');
                $( ".ui-button").css({'border-radius':'5px'});
                var x='<table class="table" style="margin-top: 5px"><tbody><tr><td>CNF#:</td><td>12345</td></tr> <tr><td>Name:</td><td>lokesh cherukuri</td></tr>' +
                    '<tr><td>phone:</td><td>4324134679</td></tr> <tr><td>Date:</td><td>2015-01-01</td></tr> <tr><td>Time:</td><td>09:00</td></tr>' +
                    ' <tr><td>Size:</td><td>1T X 2S</td></tr> <tr><td>Table#:</td><td>1</td></tr> </tbody>' +
                    '<tfoot><tr><td colspan="2" style="text-align: center;padding-top: 15px;"><input type="button" value="Send to email" id="sendEmail" class="btn btn-primary btn-sm"></td></tr></tfoot></table>';
                $('#confirm-dialog').html(x);
            },500);
        }
    });

    $(document).on('click','#sendEmail',function()
    {
        $('body').append('<div id="page-loading" style="width:100%;height: 100%;top: 0px;left: 0px;position: fixed;display: block;opacity: 0.8;background-color: #fff;z-index:999;text-align: center;">' +
        ' <img src="Images/loading.gif" alt="Loading..." style="position: absolute;top:40%;left:42%;z-index: 1000;max-width:30%;height:auto;"/> </div>');

        setTimeout(function()
        {
            $('#page-loading').remove();
            $('#sendEmail').after('<div style="font-size: 13px;color:#FCB0C8;padding-top: 5px;">Sorry, Email not available this time</div>');
        },500);
    });


    $(document).on('click',"#reset",function()      // remove focus from buttons on click
    {
        $('input').removeClass('validation-image');
        $('.img').remove();
        firstnamevalidity=lastnamevalidity=emailvalidity=reemailvalidity=phonevalidity=datevalidity=timevalidity=tablesvalidity=seatsvalidity=undefined;
    });
});
//ready function for validation ends

