class Sounds {
    constructor(){
        this.sound_check_interval;
        this.sound_interval;
        this.current_sound = "none";
        this.soundCheck();
    }
    stopAllSounds(){
        clearInterval(this.sound_interval);
        var sounds = document.getElementsByTagName("audio");
        for (var i = 0; i < sounds.length; i++){
            sounds[i].pause();
        }
    }
    soundCheck(){
        if (timer.duration_milliseconds < 240000 && this.current_sound != "beep"){
            this.playBeeps();
        }
    }
    playBeeps(){
        this.current_sound = "beep";
        var beep = new Audio("assets/beep.mp3");
        beep.play(); 
        this.sound_interval = setInterval(() => {
            beep.play(); 
        }, 3000);
    }
    playResetSound(){
        this.current_sound = "reset";
        var reset = new Audio("assets/reset.mp3");   
        reset.play();
    }
}

var sounds = new Sounds();