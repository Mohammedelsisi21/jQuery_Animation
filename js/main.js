





$(document).ready(function(){
    $("#mybody").animate({width: '80%'}, 2000, function(){
        $("#mybody").animate({'min-height': '100vh'}, 2000,function(){
            $("#myh1").slideDown(2000,function(){
                $(".parent").show(2000, function(){
                    $(".one").show(2000,function(){
                        $(".two").slideDown(2000,function(){
                            $(".three").slideDown(2000);
                        });
                    });
                });
            });
        });
    });
});
