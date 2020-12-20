WebFontConfig = {
    google: { families: ['Manrope:400,600,800&display=swap'] }
};

(function(d) {
    var wf = d.createElement('script'),
        s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);


var Loader = function() {}
Loader.prototype = {
    require: function(scripts, callback) {
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function(evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function(src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.defer = true;
        s.src = src;
        s.addEventListener('load', function(e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}

var l = new Loader();
l.require([
        "../js/typed.min.js"

    ],
    function() {

        var typed = new Typed('.print-text', {
            strings: ["digital marketing campaigns", "mobile shopping", "Facebook shopping", "Instagram shopping", "ads campaigns", "e-mail campaigns", "Office365 sync", "CRM integration", "ERP integration"],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            backDelay: 1500
        });

    });

var k = new Loader();
k.require([
        "https://api-maps.yandex.ru/2.1/?apikey=9305a291-6747-4854-bcf9-fbaceb877edb&lang=en_US"

    ],
    function() {

        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                    center: [43.97287351983399, -28.529526247234656],
                    zoom: 3,
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
                    iconImageHref: '/img/map/map-pin/benelux-map.svg',
                    iconImageSize: [50, 50],
                    iconImageOffset: [-10, -30]
                }),
                myPlacemark2 = new ymaps.Placemark([52.508328315696836, 13.396575499999914], {
                    hintContent: '<div class="hint-map">Berlin</div>',

                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/img/map/map-pin/germany-map.svg',
                    iconImageSize: [50, 50],
                    iconImageOffset: [-10, -30]
                }),
                myPlacemark3 = new ymaps.Placemark([29.849306595502547, -96.313035], {
                    hintContent: '<div class="hint-map">Austin, TX</div>',

                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/img/map/map-pin/usa-map.svg',
                    iconImageSize: [50, 50],
                    iconImageOffset: [-30, -50]
                }),
                myPlacemark4 = new ymaps.Placemark([56.97193289304613, 24.128627500000007], {
                    hintContent: '<div class="hint-map">Riga, Latvia</div>',

                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/img/map/map-pin/latvia-map.svg',
                    iconImageSize: [50, 50],
                    iconImageOffset: [-10, -30]
                }),
                myPlacemark5 = new ymaps.Placemark([55.584222181163646, 37.38552449999999], {
                    hintContent: '<div class="hint-map">Moscow</div>',

                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/img/map/map-pin/russia-map.svg',
                    iconImageSize: [50, 50],
                    iconImageOffset: [-10, -30]
                });
            myMap.geoObjects
                .add(myPlacemark).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5)
                // .add(myPlacemarkWithContent);
        })



    });




let priceSwap = document.querySelector('.price-swap');
let priceContainer = document.querySelector('.prices-wrapper')

priceSwap.addEventListener('input', function(e) {
    if (this.checked) {
        priceContainer.style.height = document.querySelector('.price-tables.active').offsetHeight + 'px';
        setTimeout(function() {
            document.querySelector('.price-tables.active').classList.remove('active');
            document.querySelector('[data-plan=subscription]').classList.add('active');
            priceContainer.style.height = document.querySelector('.price-tables.active').offsetHeight + 'px';

        }, 10)
    } else {

        setTimeout(function() {
            document.querySelector('.price-tables.active').classList.remove('active');
            document.querySelector('[data-plan=one-off]').classList.add('active');
            priceContainer.style.height = document.querySelector('[data-plan=one-off]').offsetHeight + 'px'
        }, 10)
    }
})
let contButtons = document.querySelectorAll('.country-btn')
contButtons.forEach(function(contButton) {
    contButton.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            var nextCountry = document.querySelector('[data-from=' + this.getAttribute('data-to') + ']');
            var curentCountry = document.querySelector('.country_info.active');
            document.querySelector('.country-btn.active').classList.remove('active');
            this.classList.add('active');
            nextCountry.classList.add('active');
            curentCountry.classList.remove('active');
        }
    })
})

let sprintSelectors = document.querySelectorAll('.sprint')
let sprintWrapper = document.querySelector('.tasks-wrapper')
sprintSelectors.forEach(function(sprintSelector) {
    sprintSelector.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            sprintWrapper.style.height = presentActive + 'px';
            var presentActive = document.querySelector('.sprint-tasks.active');
            var newActive = document.querySelector('[data-sprint=sprint-' + this.getAttribute('sprint') + ']');
            document.querySelector('.sprint.active').classList.remove('active')
            this.classList.add('active')
            setTimeout(function() {
                presentActive.classList.remove('active');
                newActive.classList.add('active');
                sprintWrapper.style.height = newActive.offsetHeight + 'px';
            }, 10)
        }
    })
})

let priceTables = document.querySelectorAll('.price-table')
priceTables.forEach(function(priceTable) {
    priceTable.addEventListener('mouseenter', function() {
        document.querySelector('.active .pcs-3.price-selected').classList.remove('price-selected')
        this.closest('.pcs-3').classList.add('price-selected')
    })
})


let tabChats = document.querySelectorAll('[data-target]')
tabChats.forEach(function(tabChat) {
    tabChat.addEventListener('click', function() {
        document.querySelector('.chat-select.active').classList.remove('active')
        document.querySelector('.select-tab.selected').classList.remove('selected')
        this.classList.add('selected')
        document.querySelector('[data-chat=' + this.getAttribute('data-target') + ']').classList.add('active')
        document.querySelector('[data-indicator]').setAttribute('data-indicator', this.getAttribute('data-target'))
    })
})





// var play = new autoPlayTabs();
let tabSelects = document.querySelectorAll('.tailored-tab-select-inner')
tabSelects.forEach(function(tabSelect) {
    tabSelect.addEventListener('click', function() {
        this.querySelector('.tab-progress-indicator').style.width = '0%';
        tabSwap(this.getAttribute('data-for-tab'));
        play.stopLoop();
    })
})

document.querySelector('.tailored-selects').addEventListener('mouseover', function() {
    play.stopLoop();
    console.log(play.stopLoop())
});
document.querySelector('.tailored-selects').addEventListener('mouseleave', function() {
    play.runTimer(document.querySelector('.tailored-tab-select-inner.active').getAttribute('data-for-tab'), 5);
});

function Timer() {

    var timeinterval;
    this.runTimer = function autoPlayTabs(startIndex, time) {
        var start = 0;
        var time = Math.round(time * 10);
        var activeTab = document.querySelector('[data-for-tab="' + startIndex + '"]');
        var activeTabIndicator = activeTab.querySelector('.tab-progress-indicator');
        timeinterval = setInterval(function() {
            if (start > 100) {
                clearInterval(timeinterval);
                if (startIndex >= 4) {
                    startIndex = 1;
                    autoPlayTabs(startIndex, 5)
                    tabSwap(1)
                } else {
                    startIndex++;
                    tabSwap(startIndex)
                    autoPlayTabs(startIndex, 5)
                }
            } else {
                activeTabIndicator.style.width = start + '%';
            }
            start++;
        }, time);

        this.stopLoop = function stopLoopTabs() {
            clearInterval(timeinterval);
        }
    }
}

function tabSwap(tabIndex) {
    let recentActiveTab = document.querySelector('.tailored-tab-select-inner.active')
    let nowActive = document.querySelector('[data-for-tab="' + tabIndex + '"]');
    recentActiveTab.classList.remove('active');
    document.querySelector('[data-tab="' + recentActiveTab.getAttribute('data-for-tab') + '"]').classList.remove('active');
    nowActive.classList.add('active');
    document.querySelector('[data-tab="' + nowActive.getAttribute('data-for-tab') + '"]').classList.add('active');
}
var play = new Timer();
play.runTimer(1, 5)