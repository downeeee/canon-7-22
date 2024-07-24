$(function(){
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown()
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

    //MAIN1 photo slick

    $(".photo").slick({
        autoplay:true, autoplaySpeed:4000 , arrows:false, dots:true
    })

    //banner 영역
    $(".banner").slick({
    dots:true , arrows:false 
    })

    $(".store").slick({
        slidesToShow:2,arrows:false , dots:true, autoplay:true ,slidesToScroll:2
    })

    $(".notice").slick({
        autoplay:true, vertical:true,
    })


    $(".main4 .n_stop").click(function(){
        if($(".main4 .n_stop").hasClass("on") == true){
                $(this).removeClass("on")
                $(".notice").slick("slickPlay")

        }else{
            $(this).addClass("on")
            $(".notice").slick("slickPause");
        }
    })
})//jq end