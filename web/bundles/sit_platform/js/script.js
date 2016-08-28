/**
 * Created by Kais NEFFATI on 8/19/2016.
 */
$(document).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        auto: true,
        speed: 5000,
        autoHover:true,
        slideWidth: 700,
        slideMargin: 10,
        adaptiveHeight: true
    });

    size_li = $("#myList li").size();
    x=3;
    $('#myList li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
        $('#showLess').show();
        if(x == size_li){
            $('#loadMore').hide();
        }
    });
    $('#showLess').click(function () {
        x=(x-5<0) ? 3 : x-5;
        $('#myList li').not(':lt('+x+')').hide();
        $('#loadMore').show();
        $('#showLess').show();
        if(x == 3){
            $('#showLess').hide();
        }
    });
});