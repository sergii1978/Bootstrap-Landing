
$(document).ready(function() {

    $('.works-btn[filter]').click(function(){
        if($(this).attr('filter') =='all') {
            if($(this).attr('val') =='off') {
                $('.works-btn[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.works-btn[filter]').removeClass('.focused');
                $(this).addClass('.focused');
                $('.filter > div').show(300);
            }
        } else
        if($(this).attr('val')=='off') {
            $('.works-btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.works-btn[filter]').removeClass('.focused');
            $(this).addClass('.focused');
            $('.filter > div').hide(300);
            var filter = $(this).attr('filter');
            $('.filter > div[filter='+filter+']').show(300);
        }
    });
});