$(function () {
    // 헤더 스크롤 이벤트
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top > 0)
            $('#header').addClass('inverted');
        else
            $('#header').removeClass('inverted');
    });
    $(window).trigger('scroll');

    // 시작 날짜 선택
    var dpFrom = $('#from').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });

    dpFrom.datepicker('setDate', new Date());

    // 종료 날짜 선택
    var dpTo = $('#to').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0,
        onSelect: function () {
            dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate')); // 종료날짜가 시작날짜 이전으로 설정되지 못하게 함
        }
    });


    // 검색버튼 클릭 이벤트
    $('#form-search').submit(function(e) {
        e.preventDefault();

        var from = $('#from').val();
        var to = $('#to').val();

        search(from, to);
    })

});


// 검색 기능 구현
function search(from, to) {
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url, {
        from :from,
        to : to
    }, function(r) {
        var $list = $('#list-panel');

        for (var i = 0; i < r.length; i++) {
            var data = r[i];
            var $item = createListItem(data);

            $list.append($item);
        }
        $('#list-bg').show();
    });
}

// 목록 생성 탬플릿
function createListItem(data) {
    var $tmpl = $('#list-item-template').clone().removeAttr('id');

    $tmpl.find('.list-item-image').attr('src', data.titleImageUrl);
    $tmpl.find('.list-item-name').html(data.name);
    $tmpl.find('.list-item-city-name').html(data.cityName);

    $tmpl.click(function(e) {
        var url = 'detail.html?id=' + data.id;
        window.location = url;
    });
    
    return $tmpl;
}


