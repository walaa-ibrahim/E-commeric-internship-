/*filter page js start*/
if(window.location.pathname.includes('filter-page.html')){
    /*menu section  code start */

$(document).ready(function(){
    $('.icon').click(function(){

        $('.menu').toggleClass('show');
    });
});

/*menu section  code end */






/*dropdown code start*/

$(document).ready(function(){
    $('.products-type__info__sort-icon').click(function(){

        $('.products-type__dropdown').slideToggle('500');
        $(this).toggleClass('rotate');
    
    });
});



$(document).ready(function(){
    $('.collection__info__icon').click(function(){

        $('.collection__dropdown').slideToggle('300');
        $(this).toggleClass('rotate');

        
    
    });
});





$(document).ready(function(){
    $('.size__info__icon').click(function(){

        $('.size__dropdown').slideToggle('500');
        $(this).toggleClass('rotate');

    

        
    
    });
});


$(document).ready(function(){
    $('.color__info__icon').click(function(){

        $('.color__dropdown').slideToggle('500');
        $(this).toggleClass('rotate');

        

    

        
    
    });
});



$(document).ready(function(){
    $('.price__info__icon').click(function(){

        $('.price__rang-dropdown').slideToggle('500');
        $(this).toggleClass('rotate');
        

    

        
    
    });
});

/*dropdown code end*/








/*range slider start*/

    $( "#slider-range" ).slider({
    
    range: true,
    min: 0,
    max: 500,
    values: [ 0 , 500 ],
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );

/*range slider end*/






/*menu slider start*/



    $( "#slider-range-menu" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [  0 , 500 ],
    slide: function( event, ui ) {
        $( "#amount-menu" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount-menu" ).val( "$" + $( "#slider-range-menu" ).slider( "values", 0 ) +
" - $" + $( "#slider-range-menu" ).slider( "values", 1 ) );



/*menu slider end*/
}



/* filter page js end*/