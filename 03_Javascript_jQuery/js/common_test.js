(function(win, $){
    var $html = $("html");
    var deviceSize = {
        pc:1009,
        tablet:801,
        mobile:800
    };
    var w1 = $html.css({"overflow-y":"hidden"}).width();
    var w2 = $html.css({"overflow-y":"scroll"}).width();
    if(w1 - w2 > 0) {
        deviceSize.pc -= 17;
        deviceSize.tablet -= 17;
        deviceSize.mobile -= 17;
    }
    $(win).on("resize", function() {
        var w_size = $(win).width();
        if(w_size >= deviceSize.pc) {
            $html.removeClass("mobile tablet").addClass("pc");
        } else if(w_size < deviceSize.pc && w_size >= deviceSize.tablet) {
            $html.removeClass("mobile pc").addClass("tablet");
        } else if(w_size <= deviceSize.mobile) {
            $html.removeClass("pc tablet").addClass("mobile");
        }
    });
    $(document).on("mouseover focus", ".pc #gnb>ul>li>a,  .tablet #gnb>ul>li>a", gnbPlay);
    $(document).on("click", ".mobile #gnb>ul>li>a", gnbPlay);
    function gnbPlay() {
        var $ts = $(this);

        if($("html").hasClass("mobile")) {
            $(".mobile #gnb>ul>li>a").removeClass("on")
            $("#gnb ul ul:visible").slideUp(300);
            if($ts.next().is(":hidden")) {
                $ts.addClass("on");
                $ts.next().stop(true, true).slideDown(300);
            }
        } else {
            $("#gnb ul ul:visible").slideUp(300);
            $ts.next().stop(true, true).slideDown(300);
        }   
    }
}(window, jQuery));
