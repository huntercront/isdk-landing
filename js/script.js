WebFontConfig = {
    google: { families: ['Manrope:400,600,800'] }
};

(function(d) {
    var wf = d.createElement('script'),
        s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);


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