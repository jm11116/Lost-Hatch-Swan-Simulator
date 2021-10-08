class Button {
    constructor(){
        this.keepInputInFocus();
        this.bindKeySound();
        this.bindEnterToSubmit();
    }
    keepInputInFocus(){
        setInterval(function(){
            $("#numbers_field").focus();
        }, 400);
    }
    bindKeySound(){
        $(window).keydown(() => {
            sounds.playKeySound();
        });
    }
    bindEnterToSubmit(){
        $(window).keyup((e) => {
            var key = e.which || e.keyCode;
            if (key == 13){ //Enter or return key
                this.validateInput();
            }
        });
    }
    validateInput(){
        if ($("#numbers_field").val() == "4 8 15 16 23 42" && timer.duration_milliseconds < 240000 && timer.duration_milliseconds >= 0){
            setTimeout(function(){
                sounds.playAccept();
            }, 200);
            setTimeout(function(){
                timer.resetTimer();
            }, 3000);
            $("#numbers_field").val("");
        } else {
            $("#numbers_field").val("");
        }
    }

}

var button = new Button();