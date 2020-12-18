document.addEventListener('DOMContentLoaded', function() {

    $(document).ready(function() {
        if ($('div').is('#map')) {
            var script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?apikey=9305a291-6747-4854-bcf9-fbaceb877edb&lang=en_US";
            script.type = "text/javascript";
            script.onload = function() {

                ymaps.ready(function() {
                    var myMap = new ymaps.Map('map', {
                            center: [45.81327062977716, -23.173925183183723],
                            zoom: 17,
                            controls: ['zoomControl'],
                            behaviors: ['drag']
                        }),

                        // Создаём макет содержимого.
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="color: red; font-weight: bold;">$[properties.iconContent]</div>'
                        ),

                        myPlacemark = new ymaps.Placemark([50.38044615073509, 6.275679999999932], {
                            hintContent: '<div class="hint-map">Honsfeld, Belgium</div>',

                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/contacts/benelux-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-10, -30]
                        }),
                        myPlacemark2 = new ymaps.Placemark([52.508328315696836, 13.396575499999914], {
                            hintContent: '<div class="hint-map">Berlin</div>',

                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/contacts/germany-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-10, -30]
                        }),
                        myPlacemark3 = new ymaps.Placemark([29.849306595502547, -96.313035], {
                            hintContent: '<div class="hint-map">Austin, TX</div>',

                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/contacts/usa-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-30, -50]
                        }),
                        myPlacemark4 = new ymaps.Placemark([56.97193289304613, 24.128627500000007], {
                            hintContent: '<div class="hint-map">Riga, Latvia</div>',

                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/contacts/latvia-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-10, -30]
                        }),
                        myPlacemark5 = new ymaps.Placemark([55.584222181163646, 37.38552449999999], {
                            hintContent: '<div class="hint-map">Moscow</div>',

                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/contacts/russia-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-10, -30]
                        });
                    myMap.geoObjects
                        .add(myPlacemark).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5)
                        // .add(myPlacemarkWithContent);
                })
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        }


    });


});