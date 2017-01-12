function App () {

}

App.prototype.init = function () {
    this.addEvents();
};

App.prototype.addEvents = function() {
    var _this = this;
    document.addEventListener('keydown', function(event) {
        var keycode = event.keyCode;
        var div = document.querySelector(`div[data-key="${keycode}"]`);
        if(div) {
            div.classList.add('active');
            _this.playAudio(keycode);
        }
    });

    var audios = document.querySelectorAll('audio');
    var len = audios.length;
    
    for(var i = 0; i < len; ++ i) {
        audios[i].addEventListener('ended', function(event) {
            (function (i) {
                var prev = document.querySelector('.active');
                if(prev) {
                    prev.classList.remove('active');
                }
            })(i);
        });
    }
};

App.prototype.playAudio = function(code) {
    var audio = document.querySelector(`audio[data-key="${code}"]`);
    if(audio) {
        audio.play();
    }
}

var app = new App();
app.init();