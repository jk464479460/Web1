$(function () {
    $(".index_up").click(function () {
        $(".index_up").fadeOut("200", 
        function () { $(".index_news").slideDown("2000"); });
    });
    $(".index_down").click(function () {
        $(".index_news").slideUp("2000", 
        function () { $(".index_up").fadeIn("200"); });
       
    });
});