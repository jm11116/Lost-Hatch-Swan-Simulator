$("document").ready(function(){

class IntroScreen {
    constructor(){
        this.caret_interval;
        this.caretBlink();
    }
    caretBlink(){
        setInterval(() => {
            $("#blinking_caret").animate({"opacity": "0"}, 800);
            setTimeout(function(){
                $("#blinking_caret").animate({"opacity": "1"}, 800);
            }, 1000);
        }, 2000);
    }
}

var intro = new IntroScreen();

});