
$(document).ready(function () {
    // ẩn hiện khung tìm kiếm màn hình laptop, máy tính
    $('.description-search').click(function () {
        $('#search').toggle(500);
    });

    var checkClickRating=false;
    var xx;
    $('.star-rating i').hover(function () {
        if ($(this).hasClass('hover-active-rating') == false) {
            $(this).addClass('hover-active-rating');
            $(this).prevAll().addClass('hover-active-rating');
        } 
    }, function(){

            $('.star-rating i').removeClass('hover-active-rating');

    }
    );
    // click sao rating đánh giá sản phẩm 
    $('.star-rating i').click(function () {
        checkClickRating = true;
        var indexRating;
        xx=$(this);
        if ($(this).hasClass('active-rating') == false) {
            indexRating = $(this).index();
            $(this).addClass('active-rating');
            $(this).prevAll().addClass('active-rating');
            // số sao được rating nè.. lưu vào form ẩn
            $('.star-rating input[type=hidden]').val(indexRating + 1);
            // var xx= $('input[type=hidden]').val();
            // alert(xx);
        }
        else {
            $(this).nextAll().removeClass('active-rating');
            // số sao được rating nè.. lưu vào form ẩn
            indexRating = $(this).index();
            $('.star-rating input[type=hidden]').val(indexRating + 1);
            // var xx= $('input[type=hidden]').val();
            // alert(xx);
        }
    });



});

