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

document.addEventListener("DOMContentLoaded", function(event) {
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
                strings: ["digitale Marketingkampagnen", "Mobile Shopping", "Facebook Shopping", "Instagram Shopping", "Werbekampagnen", "E-Mail-Kampagnen", "Office365-Synchronisation", "CRM-Integration", "ERP-Integration"],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true,
                backDelay: 1500
            });

        });


    setTimeout(function() {
        var k = new Loader();
        k.require([
                "https://api-maps.yandex.ru/2.1/?apikey=4ab46232-c8e6-46fd-b09d-87aedb36990e&lang=de_DE"
            ],
            function() {

                ymaps.ready(function() {
                    var myMap = new ymaps.Map('map', {
                            center: [51.720687, 8.748666],
                            zoom: 6,
                            controls: ['zoomControl'],
                            behaviors: ['drag']
                        }),

                        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                        //     '<div style="color: red; font-weight: bold;">$[properties.iconContent]</div>'
                        // ),


                        myPlacemark = new ymaps.Placemark([51.220122, 4.396373], {
                            hintContent: '<div class="hint-map">Antwerpen, Belgien</div>',
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/map/map-pin/benelux-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-25, -50]
                        }),


                        myPlacemark2 = new ymaps.Placemark([52.518621, 13.375142], {
                            hintContent: '<div class="hint-map">Berlin</div>',
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/img/map/map-pin/germany-map.svg',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-25, -50]
                        });


                    // myPlacemark3 = new ymaps.Placemark([50.080299, 14.428992], {
                    //     hintContent: '<div class="hint-map">Prag, Tschechische Republik</div>',
                    // }, {
                    //     iconLayout: 'default#image',
                    //     iconImageHref: '/img/map/map-pin/usa-map.svg',
                    //     iconImageSize: [50, 50],
                    //     iconImageOffset: [-30, -50]
                    // }),


                    // myPlacemark4 = new ymaps.Placemark([56.97193289304613, 24.128627500000007], {
                    //     hintContent: '<div class="hint-map">Riga, Lettland</div>',
                    // }, {
                    //     iconLayout: 'default#image',
                    //     iconImageHref: '/img/map/map-pin/latvia-map.svg',
                    //     iconImageSize: [50, 50],
                    //     iconImageOffset: [-10, -30]
                    // }),


                    // myPlacemark5 = new ymaps.Placemark([55.584222181163646, 37.38552449999999], {
                    //     hintContent: '<div class="hint-map">Moskau</div>',
                    // }, {
                    //     iconLayout: 'default#image',
                    //     iconImageHref: '/img/map/map-pin/russia-map.svg',
                    //     iconImageSize: [50, 50],
                    //     iconImageOffset: [-10, -30]
                    // });


                    myMap.geoObjects.add(myPlacemark).add(myPlacemark2)
                        // .add(myPlacemark3).add(myPlacemark4).add(myPlacemark5)
                        // .add(myPlacemarkWithContent);
                })
            });
    }, 7000)


    let priceSwap = document.querySelector('.price-swap');
    let priceContainer = document.querySelector('.prices-wrapper')

    if (priceSwap) {
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
    }


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

            let horScroll = document.querySelector('.tailored-selects')
            horScroll.scrollBy({
                left: document.querySelector('.tailored-tab-select-inner.active').parentElement.getBoundingClientRect().left - 8,
                top: 0,
                behavior: 'smooth'
            })
        })
    })

    document.querySelector('.tailored-selects').addEventListener('mouseover', function() {
        play.stopLoop();
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

            let horScroll = document.querySelector('.tailored-selects')
            horScroll.scrollBy({
                left: document.querySelector('.tailored-tab-select-inner.active').parentElement.getBoundingClientRect().left - 8,
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    function tabSwap(tabIndex) {
        let recentActiveTab = document.querySelector('.tailored-tab-select-inner.active')
        let nowActive = document.querySelector('[data-for-tab="' + tabIndex + '"]');
        recentActiveTab.classList.remove('active');
        document.querySelector('[data-tab="' + recentActiveTab.getAttribute('data-for-tab') + '"]').classList.remove('active');
        nowActive.classList.add('active');
        document.querySelector('[data-tab="' + nowActive.getAttribute('data-for-tab') + '"]').classList.add('active');

        let horScroll = document.querySelector('.tailored-selects')
        horScroll.scrollBy({
            left: document.querySelector('.tailored-tab-select-inner.active').parentElement.getBoundingClientRect().left - 8,
            top: 0,
            behavior: 'smooth'
        })
    }
    var play = new Timer();
    play.runTimer(1, 5)







    document.body.classList.remove('loading')


    var contactsUsButton = document.querySelectorAll('[data-get]');
    var contactsUs = document.querySelector('.modal');
    var closeModal = document.querySelector('.close-modal');
    var mobileButton = document.querySelector('.ham')
    var headerOverlay = document.querySelector('.heder-overlay');
    var mobileMenu = document.querySelector('.header .nav-block')

    // mobileButton.addEventListener('click', function(e) {
    //     if (this.classList.contains('active')) {
    //         document.body.style.overflow = 'auto';
    //         document.body.style.paddingRight = '0px';
    //         this.classList.remove('active');
    //         headerOverlay.classList.remove('overlay-active')
    //         mobileMenu.classList.remove('active');
    //     } else {
    //         this.classList.add('active');
    //         document.body.style.overflow = 'hidden';
    //         document.body.style.paddingRight = getScrollbarWidth() + 'px';
    //         headerOverlay.classList.add('overlay-active')
    //         mobileMenu.classList.add('active');
    //     }
    // })
    // headerOverlay.addEventListener('click', function(e) {
    //     if (mobileButton.classList.contains('active')) {
    //         document.body.style.overflow = 'auto';
    //         document.body.style.paddingRight = '0px';
    //         mobileButton.classList.remove('active');
    //         this.classList.remove('overlay-active')
    //         mobileMenu.classList.remove('active');
    //     }
    // })


    function getScrollbarWidth() {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);
        const inner = document.createElement('div');
        outer.appendChild(inner);
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
    }

    function hideModal() {
        if (contactsUs.classList.contains('visible')) {
            contactsUs.classList.remove('visible');

            if (document.body.clientHeight > window.innerHeight) {
                setTimeout(function() {
                    document.body.style.overflow = 'auto';
                    document.body.style.paddingRight = 0 + 'px';
                    document.querySelector('.header').style.paddingRight = 0 + 'px';
                }, 150)
            }

        }
    }



    if (contactsUsButton) {
        for (var i = 0; i < contactsUsButton.length; i++) {
            contactsUsButton[i].addEventListener('click', function(e) {
                document.querySelector('.header').style.paddingRight = getScrollbarWidth() + 'px';

                for (var i = 0; i < contactsUsButton.length; i++) {
                    if (!contactsUs.classList.contains('modal-will-active')) {
                        contactsUs.classList.add('modal-will-active')
                    }
                    contactsUs.classList.add('visible');

                    document.getElementById('message').value = ''

                    if (this.classList.contains('get-plane-btn')) {
                        document.getElementById('message').value = e.target.dataset.plan_name
                    }

                    if (document.body.clientHeight > window.innerHeight) {
                        document.body.style.overflow = 'hidden';
                        document.body.style.paddingRight = getScrollbarWidth() + 'px';
                    }
                    setTimeout(function() {
                        document.getElementById('name').focus();
                        document.getElementById('message').setAttribute('value', this.value);
                    }, 50);
                }
            })
        }
    }


    closeModal.addEventListener('click', function(e) {
        hideModal();
    })

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            hideModal();
        }
    };


    var formInputs = document.querySelectorAll('.form input,.form textarea')
    for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener('input', function() {
            this.setAttribute('value', this.value);
        })
    }



    document.querySelector(".form").addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();

        var params = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            company: document.getElementById("company").value,
            message: document.getElementById("message").value
        };
        var url = "../php/mail.php?data=" + encodeURIComponent(JSON.stringify(params));;

        xhttp = new XMLHttpRequest();
        xhttp.open("get", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.onload = function() {
            if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
                document.querySelector('.form').style.minHeight = document.querySelector('.form').offsetHeight + 'px';
                document.querySelector('.after-submit').classList.add('submited');

                setTimeout(function() {
                    document.querySelector('.form-inner').remove();
                }, 150);
            } else if (xhttp.status !== 200 || !xhttp.responseText) {

            }
        };
        xhttp.send();
    });



    (function() {
        scrollTo();
    })();

    function scrollTo() {
        const links = document.querySelectorAll('[data-anchor]');
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        // if (mobileButton.classList.contains('active')) {
        //     document.body.style.overflow = 'auto';
        //     document.body.style.paddingRight = '0px';
        //     mobileButton.classList.remove('active');
        //     headerOverlay.classList.remove('overlay-active')
        //     mobileMenu.classList.remove('active');
        // }
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = (distanceToTop(targetAnchor)) - document.querySelector('header').offsetHeight;
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }


    // Mob. menu
    document.querySelector('.header .mob_menu_btn').addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()

        e.target.classList.toggle('active')
        document.querySelector('.nav-list').classList.toggle('show')
    })


    // Cookie
    if (!localStorage.getItem('cookie-law')) {
        document.querySelector('#cookie-law-info-bar').style.display = "block";
    }

    document.querySelector("#cookie_action_close_header").addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        localStorage.setItem('cookie-law', 1)
        document.querySelector('#cookie-law-info-bar').style.display = "none";
    });
});