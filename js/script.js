function $(id){return document.getElementById(id)}

// Our Profile redirect (set data-redirect on #link-profile)
(function(){
    var link = document.getElementById('link-profile');
    if(!link) return;
    var url = link.getAttribute('data-redirect');
    if(url){
        link.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = url;
        });
    }
})();

// Live clock
(function tick(){
    var el = $('current-time');
    if(el) el.textContent = new Date().toString();
    setTimeout(tick, 1000);
})();

// Manual greeting
(function(){
    var GREETING_NAME = 'Harfi'; // change this value to set the greeting name, if empty show Friend as name
    var greet = $('greet-name');
    if(greet) 
        greet.textContent = (GREETING_NAME && GREETING_NAME.trim()) ? GREETING_NAME.trim() : 'Friend';
})();

// Form handling
(function(){
    var form = document.getElementById('contact-form');
    if(!form) return;
    form.addEventListener('submit', function(e){
        e.preventDefault();
        var name = (document.getElementById('name')||{}).value || '';
        var dob = (document.getElementById('dob')||{}).value || '';
        var genderEl = document.querySelector('input[name="gender"]:checked');
        var gender = genderEl ? genderEl.value : '';
        var message = (document.getElementById('messageText')||{}).value || '';

        var out = function(id){ return $(id) };
        out('out-name').textContent = name || '—';
        out('out-dob').textContent = dob || '—';
        out('out-gender').textContent = gender || '—';
        out('out-message').textContent = message || '—';
    });
})();