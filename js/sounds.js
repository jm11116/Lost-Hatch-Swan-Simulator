class Sounds {
    constructor(){
        this.tick_sfx;
        this.createSoundObjects();
        this.tick = true;
        this.sound_check_interval;
        this.sound_interval;
        this.current_sound = "none";
        this.soundCheck();
    }
    createSoundObjects(){
        this.tick_sfx = new Audio("assets/tick.mp3");
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
    playTick(){
        if (this.tick === true){
            this.tick_sfx.play();
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