WebFontConfig = {
    google: { families: ['Mulish:400,600,800'] }
};

(function(d) {
    var wf = d.createElement('script'),
        s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);


let tabSelects = document.querySelectorAll('.tailored-tab-select-inner')
tabSelects.forEach(function(tabSelect) {
    tabSelect.addEventListener('click', function() {
        document.querySelector('.tailored-tab-select-inner.active').classList.remove('active')
        this.classList.add('active');
    })
})