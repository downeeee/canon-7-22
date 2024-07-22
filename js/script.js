$(function(){
    $(".util_myca").hover(function(){
        $(".my").css({display: "flex"})
    } , function(){
        $(".my").stop().slideUp()
    })

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height : "400px" , padding : "20px"}, "fast");
    },function(){
        $(".d_wrap").stop().animate({height : "0px" , padding : "0px"},"fast");
    })


    // slick move 애 븉이기
    $(".move").slick({
        autoplay:true , dots:true , arrows:false , autoplaySpeed:3000 
    })

    $(".main_visual .stop").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on")
            $(".move").slick("slickPlay")
        }else{$(this).addClass("on")
                $(".move").slick("slickPause")

        }//if
    })//click
})//jq end