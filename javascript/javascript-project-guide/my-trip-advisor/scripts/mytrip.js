// 마커에 라벨 생성
var MARKER_LABELS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var map;
var markers = {};

$(function() {
    var myTrips = Cookies.getJSON('MYTRIPS');

    // 존재하지 않을 경우 빈 배열로 초기화
    if (!myTrips)
    myTrips = [];

    showMap();
    generateMyTripList(myTrips);
});


function generateMyTripList(list) {
    var bounds = new google.maps.LatLngBounds();
    var $list = $('#mytrip-list');
    for (var i = 0; i < list.length; i++) {
        var myTrip = list[i];


        var pos = {
            lat: myTrip.x,
            lng: myTrip.y
        };

        var markerLabel = MARKER_LABELS[i];

        var $item = $('#mytrip-item-template').clone().removeAttr('id');
        $item.find('.item-name').html( '[' + markerLabel + ']' + myTrip.name);
        $item.find('.item-city-name').html(myTrip.cityName);

        $item.find('.item-remove').click(function() {
            var $elem = $(this).closest('.mytrip-item');

            $elem.remove();

            markers[id].setMap(null);
            markers[id] = null;

            var newList = removeFromList(list, id);

            Cookies.set('MYTRIPS', newList);
        })


        $list.append($item);

        var marker = new google.maps.Marker({
            position: pos,
            label: markerLabel,
            map: map
        });

        markers[myTrip.id] = marker;

        bounds.extend(pos);
    }
    map.fitBounds(bounds);
}


function removeFromList(list, id) {
    var index = -1;

    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        list.splice(index, 1);
    }

    return list;
}

function showMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 33.3617,
            lng: 126.5292
        }
    });
}