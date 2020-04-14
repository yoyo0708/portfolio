$(document).ready(function(){

 var $gallery1 = $(".images_inside1"),
    tot1 = $("> *", $gallery1).length,
    counter1 = 0;

$(".prev1, .next1").on("click", function() {

    // Increment/decrement the counter depending on the clicked button:
    counter1 = $(this).hasClass("next1") ? ++counter1 : --counter1;
    // Let's fix the counter loop
    counter1 = counter1<0 ? tot1-1 : counter1%tot1;

    // Finally ainmate your gallery using CSS!
       $gallery1.css({
        transition: "0.5s",
        transform: "translateX(-"+  (100*counter1)  +"%)"
    });

}) 



 var $gallery4 = $(".images_inside4"),
    tot4 = $("> *", $gallery4).length,
    counter4 = 0;

$(".prev4, .next4").on("click", function() {

    // Increment/decrement the counter depending on the clicked button:
    counter4 = $(this).hasClass("next4") ? ++counter4 : --counter4;
    // Let's fix the counter loop
    counter4 = counter4<0 ? tot4-1 : counter4%tot4;

    // Finally ainmate your gallery using CSS!
       $gallery4.css({
        transition: "0.5s",
        transform: "translateX(-"+  (100*counter4)  +"%)"
    });

});


 var $gallery6 = $(".images_inside6"),
    tot6 = $("> *", $gallery6).length,
    counter6 = 0;

$(".prev6, .next6").on("click", function() {

    // Increment/decrement the counter depending on the clicked button:
    counter6 = $(this).hasClass("next6") ? ++counter6 : --counter6;
    // Let's fix the counter loop
    counter6 = counter6<0 ? tot6-1 : counter6%tot6;

    // Finally ainmate your gallery using CSS!
       $gallery6.css({
        transition: "0.5s",
        transform: "translateX(-"+  (100*counter6)  +"%)"
    });

})


});