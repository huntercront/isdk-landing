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